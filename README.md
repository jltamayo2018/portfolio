# Portfolio · Jose Luis Tamayo

Portfolio personal desarrollado con HTML, CSS y JavaScript, donde muestro mi experiencia, proyectos, habilidades, certificaciones y currículum.

🌐 Sitio web: https://joseluistamayo.netlify.app

---

## Características

- Diseño responsive para móvil, tablet y escritorio.
- Animaciones y efectos visuales personalizados.
- Sección de proyectos con repositorios y demostraciones.
- Sección de habilidades técnicas.
- Currículum online con descarga en PDF.
- Certificaciones y formación complementaria.
- Formulario de contacto integrado con Netlify Forms.
- Página de agradecimiento personalizada tras el envío del formulario.

---

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Netlify
- Netlify Forms
- Git & GitHub

---

## Estructura del proyecto

```text
portfolio/
│
├── css/
│   └── styles.css
│
├── images/                      # imágenes .webp, favicon y portada-compartir.jpg (Open Graph)
│
├── js/
│   └── main.js
│
├── pdfs/
│   ├── Jose-Luis-Tamayo-CV.pdf
│   ├── Jose-Luis-Tamayo-CV-en.pdf
│   ├── IBMDesign.pdf
│   ├── domina_la_ia_con_gemini.pdf
│   ├── iniciacion-al-desarrollo-con-ia.pdf
│   └── masterclass-wordpress-con-ia.pdf
│
├── index.html / index-en.html
├── proyectos.html / proyectos-en.html
├── habilidades.html / habilidades-en.html
├── cv.html / cv-en.html
├── gracias.html / gracias-en.html
├── 404.html
├── sitemap.xml
├── robots.txt
├── netlify.toml
├── AGENTS.md
└── README.md
```

El sitio es bilingüe: el español es la versión principal y cada página tiene su equivalente `-en.html`. Cada página declara su `canonical` y sus alternativas `hreflang`, que también figuran en `sitemap.xml`.

---

## Ejecución en local

```bash
python -m http.server 8000
```

Y abre `http://localhost:8000/`.

---

## Despliegue en Netlify

1. Clona el repositorio:

```bash
git clone https://github.com/jltamayo2018/portfolio.git
```

2. Accede al directorio:

```bash
cd portfolio
```

3. Sube el proyecto a GitHub.

4. En Netlify:

- Add new site
- Import an existing project
- Conecta GitHub
- Selecciona el repositorio

Configuración:

```text
Build command: (vacío)
Publish directory: .
```

5. Haz clic en Deploy.

---

## Formulario de contacto

El formulario utiliza Netlify Forms.

Para que funcione correctamente:

```html
<form
  name="contacto"
  method="POST"
  data-netlify="true"
>
```

Los mensajes recibidos pueden consultarse desde:

```text
Netlify → Forms
```

También es posible configurar notificaciones por correo electrónico desde el panel de Netlify.

---

## Personalización

### Información personal

Modifica:

- Nombre
- Fotografía
- Enlaces de LinkedIn
- GitHub
- Correo electrónico
- Teléfono

en los archivos HTML correspondientes.

### Currículum

Sustituye:

```text
pdfs/Jose-Luis-Tamayo-CV.pdf
```

por tu versión actualizada.

### Certificados

Añade los certificados PDF en:

```text
pdfs/
```

y enlázalos desde la sección de certificaciones.

### Proyectos

Cada proyecto se encuentra definido mediante tarjetas HTML que pueden ampliarse fácilmente añadiendo:

- Imagen
- Descripción
- Tecnologías
- Repositorio
- Demo

---

## Autor

**Jose Luis Tamayo Díez**

- LinkedIn: https://www.linkedin.com/in/jose-luis-tamayo-diez/
- GitHub: https://github.com/jltamayo2018
- Email: joseluistamayodiez@gmail.com

---

© 2026 Jose Luis Tamayo Díez