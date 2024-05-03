import { test, expect } from "@playwright/test";

test("Fill formulaire d'ajout de pokemon", async ({ page }) => {
  // Aller à la page
  await page.goto("http://localhost:5173/pokemons/new");

  // Remplir le formulaire
  await page.fill("input[name=name]", "char");
  await page.selectOption("select[name=type]", { value: "fire" });
  await page.fill("input[name=weight]", "100");
  await page.fill("input[name=height]", "100");
});
