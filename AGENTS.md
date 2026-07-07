# Portfolio Jose Luis Tamayo

Portfolio personal bilingüe (español/inglés) desarrollado con HTML, CSS y JavaScript puro. El objetivo es presentar proyectos, habilidades, certificaciones, CV y datos de contacto con una estética moderna, profesional y orientada al sector tecnológico.

## Stack

- Lenguaje: HTML5, CSS3 y JavaScript (Vanilla JS)
- Framework / runtime: Ninguno
- Base de datos: Ninguna
- Hosting: Netlify
- Tests: Validación manual en navegador

## Comandos

- `python3 -m http.server 8000` — arranca un servidor local
- Abrir `http://localhost:8000/` — visualizar la web localmente
- No existe proceso de build
- No existe proceso de test automatizado

## Estructura del proyecto

- `index.html` — página principal (español)
- `index-en.html` — página principal (inglés)
- `proyectos.html` / `proyectos-en.html` — proyectos
- `habilidades.html` / `habilidades-en.html` — habilidades
- `cv.html` / `cv-en.html` — currículum
- `gracias.html` / `gracias-en.html` — página de agradecimiento tras enviar formularios
- `css/styles.css` — estilos globales compartidos
- `js/main.js` — comportamiento global de la web
- `images/` — imágenes, iconos y banners de certificaciones
- `pdfs/` — CV y certificados descargables
- `netlify.toml` — configuración de despliegue

## Convenciones

### Diseño

- Mantener la identidad visual actual:
  - Fondo oscuro
  - Color de acento rosa/fucsia
  - Efectos glassmorphism
  - Bordes redondeados
  - Gradientes sutiles
  - Animaciones ligeras

- Reutilizar componentes y clases existentes antes de crear nuevas.

- Mantener coherencia visual entre todas las páginas.

- Evitar introducir estilos que rompan la estética actual.

### Arquitectura visual

La web sigue una estructura basada en componentes reutilizables:

- Navbar
- Hero
- Cards
- Mini-cards
- Panels
- Tags
- Botones primarios y secundarios

Antes de crear un nuevo componente visual, comprobar si puede reutilizarse uno existente.

Mantener consistencia de:
- Espaciados
- Bordes
- Sombras
- Colores
- Animaciones

### HTML

- Utilizar HTML semántico siempre que sea posible.
- Mantener indentación consistente de 2 espacios.
- Mantener rutas relativas para todos los recursos.

### CSS

- Priorizar reutilización de clases existentes.
- Evitar duplicar reglas ya presentes en `styles.css`.
- No reformatear masivamente el archivo salvo petición explícita.
- Preferir añadir estilos junto a componentes relacionados.
- Evitar crear reglas redundantes.
- Mantener la filosofía actual basada en clases reutilizables.
- No introducir frameworks CSS.

### JavaScript

- Mantener compatibilidad con el código actual.
- Evitar dependencias externas innecesarias.
- No romper funcionalidades existentes.

### Certificaciones

Todas las certificaciones deben seguir la misma estructura:

- Imagen horizontal tipo banner.
- Título.
- Descripción breve.
- Etiquetas de tecnologías o competencias.
- Botón "Ver certificado".
- PDF asociado dentro de `pdfs/`.
- Imagen asociada dentro de `images/`.

Ejemplo de estructura:

```html
<article class="card reveal">
  <img src="images/certificado.png" alt="Nombre Certificado">
  <div class="card-body">
    <h3>Nombre Certificado</h3>

    <p>Descripción breve.</p>

    <div class="tags">
      <span>Tecnología</span>
    </div>

    <a class="btn small primary cert-btn"
       href="pdfs/certificado.pdf"
       target="_blank">
      Ver certificado
    </a>
  </div>
</article>
```

### Localización

- El español es la versión principal.
- Cualquier cambio funcional o de contenido realizado en español debe reflejarse también en la versión inglesa.
- Mantener sincronizados:
  - Navegación
  - Enlaces
  - Certificaciones
  - Proyectos
  - Secciones
  - Formularios
- Nunca modificar únicamente una versión de una página si el cambio afecta a contenido compartido.
- Toda nueva certificación, proyecto o sección añadida en español debe añadirse también en inglés.

## No hagas

- No instalar frameworks ni librerías sin autorización.
- No añadir procesos de build innecesarios.
- No migrar a React, Vue, Angular o similares.
- No introducir dependencias NPM.
- No modificar la estructura bilingüe existente.
- No eliminar páginas en español o inglés.
- No romper rutas relativas.
- No sustituir componentes existentes si pueden reutilizarse.
- No usar imágenes de stock genéricas salvo petición explícita.
- No añadir código muerto o sin uso.
- No modificar la configuración de Netlify sin indicación expresa.
- No cambiar nombres de archivos existentes sin actualizar todas las referencias.

## Flujo de trabajo

- Antes de una tarea grande o que afecte a varias páginas, proponer un plan y esperar aprobación.
- Realizar una tarea cada vez.
- Al finalizar una tarea, resumir claramente:
  - Qué se ha cambiado.
  - Qué archivos se han modificado.
  - Qué debe revisar el usuario.

- Si existe ambigüedad o la confianza es inferior al 80%, preguntar antes de actuar.
- No inventar requisitos ni contenido.

## Validaciones obligatorias

Tras cualquier modificación verificar:

- La web carga correctamente.
- No existen errores en consola.
- La navegación funciona.
- El menú móvil sigue funcionando.
- Los botones siguen apuntando a recursos válidos.
- Las imágenes cargan correctamente.
- Los PDFs enlazados existen y son accesibles.
- Los formularios siguen manteniendo la configuración de Netlify.
- Las versiones español e inglés siguen siendo coherentes.
- No se han roto los estilos responsive.

## Funcionalidades críticas

El archivo `js/main.js` controla:

- Menú móvil
- Typewriter del hero
- Botón volver arriba
- Mouse glow
- Reveal animations
- Partículas del hero
- Carruseles de proyectos

No romper ni renombrar sin actualizar el código asociado:

- `.menu-toggle`
- `.nav-links`
- `#typewriter`
- `#back-to-top`
- `#mouse-glow`
- `.reveal`
- `#particles`
- `[data-carousel]`

## Formulario de contacto

El formulario depende de Netlify Forms.

Preservar siempre:

```html
name="contacto"
method="POST"
data-netlify="true"
```

Y también:

```html
<input type="hidden" name="form-name" value="contacto">
```

Mantener las páginas de destino correctas:

- Español → `gracias.html`
- Inglés → `gracias-en.html`

## SEO y Metadatos

Mantener y actualizar cuando corresponda:

- `<title>`
- `<meta name="description">`
- Open Graph (`og:title`, `og:description`, `og:image`, `og:url`)
- Favicons
- Atributos `alt` descriptivos en imágenes

Cuando se añadan nuevas páginas:

- Incluir título único.
- Incluir descripción única.
- Mantener coherencia SEO entre idiomas.

Cuando se modifique la imagen principal del portfolio:

- Actualizar también `og:image`.
- Verificar que la imagen existe físicamente.
- Utilizar formato horizontal optimizado para compartir en redes sociales.

## Rendimiento

- Optimizar imágenes antes de incorporarlas al proyecto.
- Evitar imágenes innecesariamente pesadas.
- Priorizar SVG cuando sea apropiado.
- Mantener una carga rápida en dispositivos móviles.
- Evitar scripts externos innecesarios.

## Accesibilidad

- Todas las imágenes deben incluir atributo `alt`.
- Los enlaces deben tener texto descriptivo.
- Mantener contraste adecuado con el fondo oscuro.
- No eliminar estados de foco (`focus`) de botones y enlaces.
- Mantener navegación funcional mediante teclado.

## Convención para nuevas imágenes

### Certificaciones

Ruta:

```text
images/
```

Formato recomendado:

```text
cert-nombre.png
```

Características:

- Banner horizontal.
- Estética tecnológica.
- Compatible con tema oscuro.
- Colores coherentes con la identidad visual del portfolio.
- Sin marcas de agua.
- Texto legible incluso en tamaños reducidos.

### Proyectos

Ruta:

```text
images/projects/
```

Características:

- Aspecto profesional.
- Representación fiel del proyecto.
- Evitar imágenes genéricas cuando existan recursos propios.

## Convención para PDFs

Todos los documentos descargables deben almacenarse en:

```text
pdfs/
```

Ejemplos:

```text
pdfs/CV-JoseLuisTamayo.pdf
pdfs/IBMDesign.pdf
pdfs/Gemini.pdf
```

Los enlaces siempre deben abrirse en una nueva pestaña:

```html
target="_blank"
```

## Despliegue

Netlify publica directamente la raíz del repositorio.

Configuración esperada:

```toml
[build]
publish = "."
```

Antes de desplegar verificar:

- No existen rutas rotas.
- No existen recursos huérfanos.
- Todas las imágenes referenciadas existen.
- Todos los PDFs referenciados existen.
- Todas las páginas enlazadas existen.

## Documentación

Este archivo AGENTS.md es la fuente principal de contexto para agentes IA que trabajen sobre el proyecto.

Cuando exista conflicto:

1. Solicitud explícita del usuario.
2. AGENTS.md.
3. Convenciones existentes del proyecto.

Si una modificación implica romper alguna regla de este documento, solicitar confirmación antes de realizarla.