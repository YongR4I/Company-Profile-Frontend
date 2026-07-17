"use client";

import {
  useRef,
  useState,
  useEffect,
  Children,
  isValidElement,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
  type CSSProperties,
} from "react";

type TextRevealVariant = "fade-in" | "blur-in";
type DelayMode = "word" | "char" | "line";
type Direction = "top" | "bottom" | "left" | "right" | "no";
type SemanticTag =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "div";

interface TextRevealProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: SemanticTag;
  variant?: TextRevealVariant;
  direction?: Direction;
  length?: number;
  duration?: number;
  delay?: number;
  delayMode?: DelayMode;
  staggerDelay?: number;
}

const STAGGER: Record<DelayMode, number> = { word: 80, char: 30, line: 120 };

/**
 * Strong ease-out curve — starts fast, feels immediately responsive.
 * Matches Emil Kowalski's recommended custom curve over stock CSS easings.
 */
const EASE = "cubic-bezier(0.23, 1, 0.32, 1)";

function getTransform(dir: Direction, len: number): string {
  switch (dir) {
    case "top":
      return `translateY(-${len}px)`;
    case "bottom":
      return `translateY(${len}px)`;
    case "left":
      return `translateX(-${len}px)`;
    case "right":
      return `translateX(${len}px)`;
    default:
      return "none";
  }
}

function splitString(text: string, mode: DelayMode): string[] {
  switch (mode) {
    case "word":
      return text.split(" ");
    case "char":
      return Array.from(text);
    case "line":
      return text.split("\n");
    default:
      return [text];
  }
}

/**
 * Build inline styles for each animated unit.
 *
 * willChange is only set while the element is NOT yet revealed so the GPU
 * layer is promoted only during the animation window — not forever.
 * This follows the "use will-change sparingly" principle from make-interfaces-feel-better.
 */
function makeUnitStyle(opts: {
  revealed: boolean;
  variant: TextRevealVariant;
  direction: Direction;
  length: number;
  duration: number;
  totalDelay: number;
}): CSSProperties {
  const { revealed, variant, direction, length, duration, totalDelay } = opts;
  const hasMove = direction !== "no";

  const transitions: string[] = [
    `opacity ${duration}ms ${EASE}`,
    variant === "blur-in" ? `filter ${duration}ms ${EASE}` : "",
    hasMove ? `transform ${duration}ms ${EASE}` : "",
  ].filter(Boolean) as string[];

  const s: CSSProperties = {
    display: "inline-block",
    transition: transitions.join(", "),
    transitionDelay: `${totalDelay}ms`,
    opacity: revealed ? 1 : 0,
    // Promote GPU layer only while animating (not revealed yet).
    // Once revealed, remove willChange so the compositor layer is freed.
    willChange: revealed ? "auto" : hasMove ? "opacity, transform" : "opacity",
  };

  if (variant === "blur-in") {
    s.filter = revealed ? "blur(0px)" : "blur(8px)";
  }

  if (hasMove) {
    s.transform = revealed
      ? "translate3d(0,0,0)"
      : getTransform(direction, length);
  }

  return s;
}

/**
 * Render a plain string split into animated spans.
 *
 * KEY FIX — spaces between words:
 *   Previously: `{unit}{i < len - 1 && mode === "word" ? " " : ""}` inside the span.
 *   This put the space *inside* the `display: inline-block` span, so it was
 *   swallowed by the box model and lost, causing words to run together.
 *
 *   Now: each word span is followed by a plain text " " node rendered as a
 *   React sibling — completely outside the animated span — so the browser
 *   treats it as normal inter-word whitespace.
 *
 * KEY FIX — char mode spaces:
 *   When splitting by char, space characters (" ") still exist in the array.
 *   Wrapping them in `display: inline-block` causes them to collapse.
 *   Instead, render actual space characters as plain text nodes, identical
 *   to word-mode separators.
 */
function renderStringUnits(
  text: string,
  mode: DelayMode,
  opts: Omit<Parameters<typeof makeUnitStyle>[0], "totalDelay">,
  baseDelay: number,
  gap: number,
): ReactNode[] {
  const units = splitString(text, mode);
  const result: ReactNode[] = [];

  if (mode === "line") {
    units.forEach((unit, i) => {
      if (i > 0) result.push(<br key={`br-${i}`} />);
      result.push(
        <span key={i} style={makeUnitStyle({ ...opts, totalDelay: baseDelay + i * gap })}>
          {unit}
        </span>,
      );
    });
    return result;
  }

  units.forEach((unit, i) => {
    if (mode === "char" && unit === " ") {
      // Plain whitespace node — not animated, not wrapped in inline-block.
      result.push(" ");
      return;
    }

    result.push(
      <span key={i} style={makeUnitStyle({ ...opts, totalDelay: baseDelay + i * gap })}>
        {unit}
      </span>,
    );

    // Word-mode: render separator OUTSIDE the span so it is never clipped.
    if (mode === "word" && i < units.length - 1) {
      result.push(" ");
    }
  });

  return result;
}

export default function TextReveal({
  children,
  as = "p",
  variant = "fade-in",
  direction = "no",
  length = 30,
  duration = 700,
  delay = 0,
  delayMode = "word",
  staggerDelay,
  className = "",
  style,
  ...rest
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);
  const Tag = as as ElementType;

  // Respect prefers-reduced-motion — skip translate/blur, keep opacity fade.
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const gap = staggerDelay ?? STAGGER[delayMode];

  // Effective variant/direction — honour reduced-motion preference.
  const effectiveVariant: TextRevealVariant =
    reducedMotion ? "fade-in" : variant;
  const effectiveDirection: Direction = reducedMotion ? "no" : direction;

  const sharedOpts = {
    revealed,
    variant: effectiveVariant,
    direction: effectiveDirection,
    length,
    duration: reducedMotion ? Math.min(duration, 300) : duration,
  };

  /**
   * Content rendering strategy:
   *
   * 1. String child → split & animate each unit.
   * 2. Array of children → animate each child as its own unit with stagger.
   *    This lets callers mix strings and elements:
   *      <TextReveal>Hello <strong>World</strong></TextReveal>
   * 3. Single non-string ReactNode → wrapped in one animated span.
   */
  let content: ReactNode;

  if (typeof children === "string") {
    content = renderStringUnits(children, delayMode, sharedOpts, delay, gap);
  } else {
    const childArray = Children.toArray(children);

    if (childArray.length > 1) {
      // Multiple children — stagger each one.
      let unitIndex = 0;
      content = childArray.map((child, i) => {
        if (typeof child === "string") {
          // Inline string nodes inside a mixed array: split by word/char/line.
          const nodes = renderStringUnits(
            child,
            delayMode,
            sharedOpts,
            delay + unitIndex * gap,
            gap,
          );
          const wordCount = child.trim() === "" ? 0 : splitString(child, delayMode).filter((u) => u !== " ").length;
          unitIndex += wordCount;
          return nodes;
        }

        if (isValidElement(child) && (child as React.ReactElement).type === "br") {
          return <br key={child.key ?? i} />;
        }

        const totalDelay = delay + unitIndex * gap;
        unitIndex++;
        return (
          <span
            key={isValidElement(child) ? child.key ?? i : i}
            style={makeUnitStyle({ ...sharedOpts, totalDelay })}
          >
            {child}
          </span>
        );
      });
    } else {
      // Single non-string child.
      content = (
        <span style={makeUnitStyle({ ...sharedOpts, totalDelay: delay })}>
          {children}
        </span>
      );
    }
  }

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      className={className}
      style={style}
      {...rest}
    >
      {content}
    </Tag>
  );
}
