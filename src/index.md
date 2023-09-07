--- 
layout: "sections.njk"
draft: false
navLabel: "Home"
bodyClasses: "home-page"
seo:
  title: "Metalsmith First starter"
  description: "Metalsmith First starter to build a static site with structured content"
  socialImage: "path to social image"
  canonicalOverwrite: ""
pageNavLabel: "home"
sections:
  - container: "section"
    name: "text"
    containerFields:
      isDisabled: false
      isAnimated: false
      containerId: ""
      containerClass: ""
      inContainer: true
      isNarrow: true
      background:
        color: ""
        image: ""
        isDark: false
    text:
      prefix: ""
      title: "Metalsmith First"
      header: "h1"
      subtitle: "The only starter you'll need"
      prose: |-
        Hey there! So, you stumbled upon the Metalsmith First Starter. It is pretty opinionated as I've thrown in all the choices made over the time I've worked with Metalsmith. Wondering what you get?

        - A clean folder setup. `src` holds the pages, and `lib` has assets, styles, scripts, layouts, and metadata.
        - A `package.json` with the usual stuff I like for a site. Delete what you don't want.
        - A ready-to-go `metalsmith.js` with my favorite plugins.
        - Some basic layouts and snippets to kick things off.

        ### Getting Started
        Just do an `npm install` here. Then, hit `npm start` to fire up a dev server. It'll open a browser at `http://localhost:3000`. If you're reading this, you've probably got that covered.

        Now, there's just this page right now. Check it out in the `src` folder at `src/index.md`. It's basically a frontmatter only structure, no contents. If you're scratching your head, go see [Metalsmith Components](https://metalsmith-components.netlify.app/). Told ya, this starter's got attitude.

        ### The Techy Bits
        Here's what’s inside this box:

        - Nunjucks for templates.
        - Basic layouts and snippets.
        - A template framework to build pages with sections.
        - Some starter styles (FYI, no SCSS just modern CSS and PostCSS.)
        - Basic scripts and metadata.
        - Swup for cool page transitions and faster loads.

        ### Oh, and One More Thing
        There's this tool I made called [Metalsmith Start](https://github.com/wernerglinka/ms-start/). It's a CLI utility that helps set up your frontmatter. Gives you a head start.

        But if you're not into that, no worries. Just make a new page in `src` and slap on the frontmatter you need. For all the nitty-gritty, check the [Metalsmith Components](https://metalsmith-components.netlify.app/) docs.



---