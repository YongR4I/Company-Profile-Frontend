import { PortfolioItem } from "@/types/portfolio";

/**
 * Get related projects by matching category, excluding the current project.
 * Falls back to random projects if insufficient same-category matches.
 */
export function getRelatedProjects(
  currentSlug: string,
  category: string,
  allProjects: PortfolioItem[],
  limit: number = 2
): PortfolioItem[] {
  // Same category, exclude current
  const sameCategory = allProjects.filter(
    (p) => p.category === category && p.slug !== currentSlug
  );

  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }

  // Fill remaining slots with other projects (not same category, not current)
  const others = allProjects.filter(
    (p) =>
      p.slug !== currentSlug &&
      !sameCategory.some((sc) => sc.slug === p.slug)
  );

  return [...sameCategory, ...others].slice(0, limit);
}
