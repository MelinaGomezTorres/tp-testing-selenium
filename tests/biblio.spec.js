const { test, expect } = require('@playwright/test');
const { BibliotecaPage } = require('../pages/BibliotecaPage');

test.describe('Pruebas E2E - Biblioteca Universidad de Mendoza', () => {

  test('Buscar libro UML y Patrones en la biblioteca de la UM y comprobar que exista', async ({ page }) => {
    const bibliotecaPage = new BibliotecaPage(page);

    // 1. Ingrese a la biblioteca de la universidad
    await bibliotecaPage.goto();

    // 2. Buscar el libro "UML y Patrones" exigido por la consigna
    await bibliotecaPage.buscarLibro('UML y Patrones');

    // 3. Comprobar que la interfaz procese la búsqueda y muestre los resultados
    const resultado = bibliotecaPage.obtenerElementoResultado();
    await expect(resultado).toBeVisible({ timeout: 15000 });

    // ⏱️ Agrega esta línea para que el navegador se quede abierto 5 segundos (5000 milisegundos)
    // antes de finalizar la prueba y cerrar la ventana.
    await page.waitForTimeout(5000);
  });

});