import { test, expect } from "@playwright/test";

test("test", async ({ browser }) => {
  const juanContext = await browser.newContext();
  const pepeContext = await browser.newContext();

  const juanPage = await juanContext.newPage();
  const pepePage = await pepeContext.newPage();

  await juanPage.goto("http://localhost:3000/");
  await juanPage.getByPlaceholder("Introduce tu nick (max 6 letras)").click();
  await juanPage
    .getByPlaceholder("Introduce tu nick (max 6 letras)")
    .fill("Juan");
  await juanPage.getByRole("button", { name: "Iniciar sesión" }).click();
  await juanPage.getByRole("button", { name: "Crear Partida" }).click();

  await pepePage.goto("http://localhost:3000/");
  await pepePage.getByPlaceholder("Introduce tu nick (max 6 letras)").click();
  await pepePage
    .getByPlaceholder("Introduce tu nick (max 6 letras)")
    .fill("Pepe");
  await pepePage.getByRole("button", { name: "Iniciar sesión" }).click();

  await pepePage
    .getByRole("listitem")
    .getByRole("button", { name: "Unir a Partida" })
    .click();

  await juanPage
    .locator("#miModal")
    .getByRole("button", { name: "Cerrar" })
    .click();
  await pepePage
    .locator("#miModal")
    .getByRole("button", { name: "Cerrar" })
    .click();

  await juanPage.locator('[id="0"]').click();
  await juanPage.locator("div:nth-child(13)").first().click();
  await juanPage.locator('[id="1"]').click();
  await juanPage.locator("div:nth-child(27)").first().click();
  await juanPage.locator('[id="2"]').click();
  await juanPage.locator("div:nth-child(55)").first().click();
  await juanPage.getByRole("button", { name: "Listo" }).click();

  await pepePage.getByRole("button", { name: "Listo" }).click();
  await pepePage
    .locator("#miModal")
    .getByRole("button", { name: "Cerrar" })
    .click();

  await pepePage.locator('[id="0"]').click();
  await pepePage.locator("div:nth-child(13)").first().click();
  await pepePage.locator('[id="1"]').click();
  await pepePage.locator("div:nth-child(27)").first().click();
  await pepePage.locator('[id="2"]').click();
  await pepePage.locator("div:nth-child(55)").first().click();
  await pepePage.getByRole("button", { name: "Listo" }).click();
  await pepePage
    .locator("#miModal")
    .getByRole("button", { name: "Cerrar" })
    .click();

  await pepePage.getByRole("button", { name: "Listo" }).click();
  await pepePage
    .locator("#miModal")
    .getByRole("button", { name: "Cerrar" })
    .click();

  await juanPage
    .locator("#miModal")
    .getByRole("button", { name: "Cerrar" })
    .click();

  await pepePage
    .locator("div:nth-child(2) > .grid > div:nth-child(13)")
    .click();
  await juanPage
    .locator("div:nth-child(2) > .grid > div:nth-child(13)")
    .click();

  await pepePage
    .locator("div:nth-child(2) > .grid > div:nth-child(27)")
    .click();
  await juanPage
    .locator("div:nth-child(2) > .grid > div:nth-child(27)")
    .click();

  await pepePage
    .locator("div:nth-child(2) > .grid > div:nth-child(55)")
    .click();
  await juanPage
    .locator("div:nth-child(2) > .grid > div:nth-child(55)")
    .click();

  await pepePage
    .locator("div:nth-child(2) > .grid > div:nth-child(56)")
    .click();
});
