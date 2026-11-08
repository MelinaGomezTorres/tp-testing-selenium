const { test, expect } = require('@playwright/test');
const { BibliotecaPage } = require('../pages/BibliotecaPage');

test.describe('Pruebas E2E - Biblioteca Universidad de Mendoza', () => {

  test('Buscar libro UML y Patrones en la biblioteca de la UM y comprobar que exista', async ({ page }) => {
    const bibliotecaPage = new BibliotecaPage(page);

    await bibliotecaPage.goto();

    await bibliotecaPage.buscarLibro('UML y Patrones');

    const resultado = bibliotecaPage.obtenerElementoResultado();
    await expect(resultado).toBeVisible({ timeout: 15000 });

    await page.waitForTimeout(5000);
  });

});