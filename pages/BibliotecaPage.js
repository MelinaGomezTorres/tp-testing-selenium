class BibliotecaPage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator("input[name='_sf_search[]'], input[type='search'], input[type='text']").first();
  }

  async goto() {
    await this.page.goto('https://www.um.edu.ar/biblio/');
  }

  async buscarLibro(titulo) {
    await this.searchInput.waitFor({ state: 'visible', timeout: 10000 });
    await this.searchInput.click();
    await this.searchInput.fill(titulo);
    await this.searchInput.press('Enter');
    await this.page.waitForLoadState('domcontentloaded');
  }

  obtenerElementoResultado() {
    return this.page.locator("main, #content, body").first();
  }
}

module.exports = { BibliotecaPage };