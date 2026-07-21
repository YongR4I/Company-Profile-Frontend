import { test, expect } from "@playwright/test";

test.describe("WhyUs Section", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
  });

  test("should display the WhyUs section", async ({ page }) => {
    const whyusSection = page.locator("#whyus-section");
    await expect(whyusSection).toBeVisible();
  });

  test("should display all 4 cards", async ({ page }) => {
    const cards = page.locator("#whyus-section .rounded-\\[20px\\]");
    await expect(cards).toHaveCount(4);
  });

  test("should display correct card titles", async ({ page }) => {
    await expect(page.getByText("Start with a Free Consultation")).toBeVisible();
    await expect(page.getByText("Let's Solve It Together")).toBeVisible();
    await expect(page.getByText("Your Project, Protected")).toBeVisible();
    await expect(page.getByText("Get a Fast Response")).toBeVisible();
  });

  test("should display correct card numbers", async ({ page }) => {
    const numbers = page.locator("#whyus-section .text-display-hero");
    await expect(numbers).toHaveCount(4);
    await expect(numbers.nth(0)).toHaveText("1");
    await expect(numbers.nth(1)).toHaveText("2");
    await expect(numbers.nth(2)).toHaveText("3");
    await expect(numbers.nth(3)).toHaveText("4");
  });

  test("should display correct card descriptions", async ({ page }) => {
    await expect(
      page.getByText(
        "Share your ideas with our team and discover the right digital solution for your business."
      )
    ).toBeVisible();
    await expect(
      page.getByText(
        "Tell us your challenges, and we'll help you find the best technology solution."
      )
    ).toBeVisible();
    await expect(
      page.getByText(
        "Build with confidence knowing your ideas and project remain strictly confidential."
      )
    ).toBeVisible();
    await expect(
      page.getByText(
        "Reach out anytime and receive quick replies, clear communication, and timely updates."
      )
    ).toBeVisible();
  });

  test("should have correct styling", async ({ page }) => {
    const card = page.locator("#whyus-section .rounded-\\[20px\\]").first();
    await expect(card).toHaveCSS("border-radius", "20px");
    await expect(card).toHaveCSS("border-color", "rgba(86, 195, 240, 0.3)");
  });

  test("should be responsive on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    const cards = page.locator("#whyus-section .rounded-\\[20px\\]");
    await expect(cards).toHaveCount(4);
  });
});
