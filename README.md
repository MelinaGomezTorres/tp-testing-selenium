# Trabajo Práctico Nº 2 - Punto 2: Test E2E con Playwright

Proyecto de automatización de pruebas End-to-End (E2E) desarrollado para la cátedra de **Ingeniería de Software II** (Universidad de Mendoza).

---

## 1. Estructura y Arquitectura del Proyecto

El proyecto implementa el patrón de diseño **Page Object Model (POM)** recomendado por la cátedra para desacoplar la lógica de interacción con la interfaz de usuario de los casos de prueba y aserciones.

```text
tp-playwright/
├── pages/
│   └── BibliotecaPage.js     # Page Object: Encapsula localizadores y acciones (UI)
├── tests/
│   └── biblio.spec.js        # Suite de pruebas E2E y validaciones (expect)
├── node_modules/             # Dependencias locales de Node.js
├── test-results/             # Evidencias automáticas (capturas, videos y trazas)
├── playwright-report/        # Reportes HTML interactivos generados por Playwright
├── package.json              # Configuración y dependencias del proyecto
├── package-lock.json         # Versiones fijas del árbol de dependencias
├── playwright.config.js      # Configuración global del framework
└── README.md                 # Documentación técnica del proyecto

```

---

## 2. Descripción de la Prueba E2E

* **Objetivo:** Automatizar la búsqueda del libro **"UML y Patrones"** en el portal de la Biblioteca de la Universidad de Mendoza y comprobar que la interfaz procese la consulta correctamente.
* **URL Objetivo:** `https://www.um.edu.ar/biblio/`
* **Validación:** Se comprueba mediante aserciones (`expect`) que los componentes de la interfaz respondan satisfactoriamente a la ejecución de la prueba.

---

## 3. Requisitos Previos

* **Node.js** (versión 18 o superior) y **npm**.
* Sistema operativo compatible (configurado y probado en **Linux Mint**).

---

## 4. Instalación Paso a Paso

1. **Instalar las dependencias de Node.js:**
```bash
npm install

```


2. **Descargar los binarios de los navegadores de Playwright:**
```bash
npx playwright install

```


3. **Instalar dependencias del sistema operativo (requerido en Linux Mint/Ubuntu):**
```bash
sudo npx playwright install-deps

```



---

## 5. Ejecución de las Pruebas

* **Ejecutar el test en modo visual:**
```bash
npx playwright test --headed

```



---

## 6. Reportes y Evidencias

El framework genera automáticamente evidencias detalladas (capturas de pantalla, videos y trazas de ejecución). Para visualizar el reporte interactivo en el navegador, ejecutar:

```bash
npx playwright show-report

```

