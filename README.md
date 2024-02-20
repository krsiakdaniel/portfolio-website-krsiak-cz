# Hi! My name is Krsiak Daniel 👋

I am **React Developer** based in Brno, Czech Republic.

I work with JavaScript, TypeScript, React, and Redux. I focus on UI/UX, responsive design, and functional components that are easy to maintain.

## 🛠️ Skills

[![My Skills](https://skillicons.dev/icons?i=html)](https://skillicons.dev)
[![My Skills](https://skillicons.dev/icons?i=css)](https://skillicons.dev)
[![My Skills](https://skillicons.dev/icons?i=tailwind)](https://skillicons.dev)
[![My Skills](https://skillicons.dev/icons?i=scss)](https://skillicons.dev)
[![My Skills](https://skillicons.dev/icons?i=js)](https://skillicons.dev)
[![My Skills](https://skillicons.dev/icons?i=ts)](https://skillicons.dev)
[![My Skills](https://skillicons.dev/icons?i=react)](https://skillicons.dev)
[![My Skills](https://skillicons.dev/icons?i=next)](https://skillicons.dev)
[![My Skills](https://skillicons.dev/icons?i=figma)](https://skillicons.dev)

> _HTML, CSS, Tailwind CSS, Sass, JavaScript, TypeScript, React, Next.js, Figma_

## 🖥️ Web portfolio

My website: <https://www.krsiak.cz/>

## 📫 Contact me

You can call me, send email or chat with me on LinkedIn:

- 📱(+420) 734 496 308
- 📧 krsiak.daniel@gmail.com
- 💬 <https://www.linkedin.com/in/krsiakdaniel/>

## 📝 Resume

Download my resume in PDF.

[![resume](https://github.com/krsiakdaniel/krsiakdaniel/assets/564906/1c095868-ab0f-44a2-a54a-4916f8000732)](https://drive.google.com/file/d/1x0LWu8I_3aqW34TJbxkciqNGX642bdvF/view?usp=sharing)

## 👨‍💻 About me

I am **React Developer** with over 4 years of experience in creating user-friendly and responsive web applications. I have worked with JavaScript, TypeScript, React, and Redux, as well as other technologies such as Figma, and Tailwind CSS. I have a strong background in UI design, functional components, and code quality.

In my previous roles, I have developed new features, updated legacy codebases, and implemented responsive design for various web projects, such as a chat solution for customer care teams, chatbot settings, and also bank website with search and exchange rates functionalities. 

I have also led a QA automation team, setting up Playwright for E2E tests, writing test scripts in JavaScript and TypeScript, and coordinating unit and integration tests. 

## 💻 What I do

I am passionate about delivering high-quality products that meet the needs and expectations of the users and the client.

![what-is-it-i-do](https://github.com/krsiakdaniel/krsiakdaniel/assets/564906/d4c7dde2-2256-464a-9a43-2479815be5e1)

---

# Site runs on Netlify and Next.js v14

## Run development

Run Next.js on local machine.

### Dependencies

Install dependencies:

```bash
npm i
```

### Localhost

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Testing

### Included Default Testing

- [Renovate](https://www.mend.io/free-developer-tools/renovate/) - to regularly update our dependencies
- [Cypress](https://www.cypress.io/) - to run tests against how the template runs in the browser
- [Cypress Netlify Build Plugin](https://github.com/cypress-io/netlify-plugin-cypress) - to run our tests during our build process

### Removing Renovate

In order to keep our project up-to-date with dependencies we use a tool called [Renovate](https://github.com/marketplace/renovate). If you’re not interested in this tooling, delete the `renovate.json` file and commit that onto your main branch.

### Removing Cypress

For our testing, we use [Cypress](https://www.cypress.io/) for end-to-end testing. This makes sure that we can validate that our templates are rendering and displaying as we’d expect. By default, we have Cypress not generate deploy links if our tests don’t pass. If you’d like to keep Cypress and still generate the deploy links, go into your `netlify.toml` and delete the plugin configuration lines:

```diff
[[plugins]]
  package = "netlify-plugin-cypress"
-  [plugins.inputs.postBuild]
-    enable = true
-
-  [plugins.inputs]
-    enable = false
```

If you’d like to remove the `netlify-plugin-cypress` build plugin entirely, you’d need to delete the entire block above instead. And then make sure sure to remove the package from the dependencies using:

```bash
npm uninstall -D netlify-plugin-cypress
```

And lastly if you’d like to remove Cypress entirely, delete the entire `cypress` folder and the `cypress.config.ts` file. Then remove the dependency using:

```bash
npm uninstall -S cypress
```
