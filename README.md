<p align="center">
  <img alt="Metalsmith First" src="https://github.com/wernerglinka/metalsmith-first/blob/main/msfirst.png?raw=true" width="100" />
</p>

<h1 align="center">Metalsmith First</h1>

[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square&label=license)](http://opensource.org/licenses/MIT)
  
Metalsmith First is a starter for Metalsmith, a well-established static site generator that has been a staple in my web development toolkit for years. This tool is particularly adept at crafting static websites, which have stood the test of time in the ever-evolving web development landscape.

This foundational starter embodies the culmination of my extensive experience with Metalsmith, incorporating a range of design decisions and preferences I've honed over the years. Key among these choices is the utilization of Nunjucks as the templating engine and Markdown as the primary content format. However, a central tenet of this starter diverges from common practices. Rather than relying on frontmatter solely for defining page configurations, I have harnessed frontmatter to construct entire content sections through reusable components. This distinctive approach, often called "section-based design," offers the flexibility to employ the same component across various pages. This design philosophy streamlines the process, enabling uniformity in structuring a blog post and a product listing landing page.

The underlying principle behind component-based design involves the creation of web pages by assembling pre-designed elements, known as components, which serve as modular building blocks adaptable for use on any page. This modular nature enhances reusability, facilitating the efficient replication of components across multiple pages.

Getting started with this Metalsmith First starter is a straightforward process. It includes a functional `metalsmith.js` configuration file and a comprehensive `package.json`. 

## Metalsmith First includes the following:
- Nunjucks templating
- Markdown content
- Sitemap generation
- Robots file
- Smooth page transition and pre-fetch with SWUP
- Code syntax highlighting


To initiate your project, simply follow these steps:

1. Install the required dependencies by running the following command in your terminal:

```bash
npm install
```

2. Once the dependencies are installed, commence your development server with the following command:

```bash
npm start
```

This command will initiate a development server and load the homepage, allowing you to easily embark on your web development journey. Feel free to explore and adapt the provided resources to suit your specific project needs. You are now free to roam about the cabin ;-)

## License
Code released under [the MIT license](https://github.com/wernerglinka/metalsmith-first/blob/master/LICENSE).

[license-badge]: https://img.shields.io/github/license/wernerglinka/metalsmith-first
[license-url]: LICENSE