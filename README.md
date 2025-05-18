![LogoROS](./public/images/Random_logo_100x100.png)

# Random Online Shop

## Project Description

This is a simple and non-functional e-commerce site created as the final project for a module of my web development course. The project focuses on practicing JavaScript, working with APIs, and implementing core features like product filtering and a functional shopping cart.

Also, fun fact: the site features a cat logo as a tribute to its earliest design days, when the images from de API weren’t working — so I used placeholder cats from [placecats.com](https://www.placecats.com/). So, the cat stayed, of course.

## Live Site & Repository

- GitHub repo: [Random Online Shop on GitHub](https://github.com/Adalab/modulo-2-evaluacion-final-cusichia)
- API: [url](https://raw.githubusercontent.com/Adalab/resources/master/apis/products.json)

## Features

- Product list rendered from an external API.
- Product filtering.
- Functional shopping cart:
  - Add and remove individual items.
  - Clear the entire cart in one click.
  - Data is stored in `localStorage`, so your cart stays put.
- No backend, no real payments — just good vibes and JavaScript magic.
- Future improvements:
  - Responsive design.
  - Product counter in the cart.
  - Maybe more cats? 

## Technologies Used

- JavaScript (Vanilla)
- HTML
- SCSS
- [Node.js](https://nodejs.org/) (v14+)
- [Vite](https://vitejs.dev/) for build and dev server

## Project Structure

The folder structure is intentionally simple — the goal was to focus on events, functions, loops, conditionals and getting comfortable with JS.

```
public/images
 |- logos...

src
 ├─ js // los ficheros de esta carpeta se copian en public/api/
 |  └─ main.js
 ├─ scss
 |  └─ main.scss
 |
 └─ html
```

## How to Run the Project Locally

You can clone this repo and run it locally with the following steps:

1. **Open a terminal** in the root folder of the project.
2. **Install local dependencies** by running:

```
npm install
```

**To start the project**:

Once the dependencies are installed, you can start the dev server.
You’ll need to do this every time you want to work on the project:

```
npm run dev
or
npm start
```

This command will:

- Open a new tab in your browser with the website.

- Watch all files in the src/ folder and refresh the browser automatically on save.

> **Note**: You need to have Node.js (version 14 or higher) installed to run the project.

