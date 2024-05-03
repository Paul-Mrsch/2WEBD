import { test, expect } from "@playwright/test";

test("homepage displays charmander , charmeleon and charizard pokemons", async ({
  page,
}) => {
  await page.goto("http://localhost:5173/prof");

  await expect(page.getByRole("heading", { name: "Charmander" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Charmeleon" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Charizard" })).toBeVisible();

  // Voir la 3ème page
  await page.click("button:has-text('Suivant')");

  // Aller à la page
  await page.goto("http://localhost:5173/pokemons/new");

  // Remplir le formulaire
  await page.fill("input[name=name]", "char");
});
