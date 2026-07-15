"use client";

import {
  useRef,
  useState,
  useEffect,
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
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

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

function split(text: string, mode: DelayMode): string[] {
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
  const hasMove = direction !== "no";

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

  const makeStyle = (i: number, totalDelay: number): CSSProperties => {
    const s: CSSProperties = {
      display: "inline-block",
      transition: [
        `opacity ${duration}ms ${EASE}`,
        `filter ${duration}ms ${EASE}`,
        hasMove ? `transform ${duration}ms ${EASE}` : "",
      ]
        .filter(Boolean)
        .join(", "),
      transitionDelay: `${totalDelay}ms`,
      opacity: revealed ? 1 : 0,
    };
    if (variant === "blur-in")
      s.filter = revealed ? "blur(0px)" : "blur(8px)";
    if (hasMove) {
      s.transform = revealed
        ? "translate3d(0,0,0)"
        : getTransform(direction, length);
      s.willChange = "opacity, transform";
    }
    return s;
  };

  const content =
    typeof children === "string"
      ? (() => {
          const units = split(children, delayMode);
          if (delayMode === "line") {
            return units.map((unit, i) => (
              <span key={i} style={makeStyle(i, delay + i * gap)}>
                {i > 0 && <br />}
                {unit}
              </span>
            ));
          }
          return units.map((unit, i) => (
            <span key={i} style={makeStyle(i, delay + i * gap)}>
              {unit}
              {i < units.length - 1 && delayMode === "word" ? " " : ""}
            </span>
          ));
        })()
      : (
          <span style={makeStyle(0, delay)}>{children}</span>
        );

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
