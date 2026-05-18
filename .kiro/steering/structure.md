# Project Structure

```
road-doggs-guide/
├── public/                    # Static assets (favicon, icons SVG sprite)
├── src/
│   ├── assets/                # Images and static files imported by components
│   ├── components/            # UI components (source of truth for the design system)
│   │   └── ComponentName/
│   │       ├── ComponentName.jsx
│   │       └── ComponentName.stories.js
│   ├── docs/                  # MDX documentation pages for Storybook
│   │   ├── Foundations.mdx    # Brand principles, tone of voice, terminology
│   │   ├── Colors.mdx
│   │   └── Typography.mdx
│   ├── stories/               # Storybook default/example stories (not design system components)
│   ├── styles/
│   │   ├── scss/
│   │   │   ├── _theme.scss            # Design tokens (colors as SCSS variables)
│   │   │   ├── reset.scss             # CSS reset
│   │   │   ├── styles.scss            # Entry point — imports reset, theme, all component partials
│   │   │   └── components/
│   │   │       └── _componentname.scss
│   │   └── css/
│   │       └── styles.css             # Compiled output — do not edit directly
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── .storybook/
│   ├── main.js                # Storybook config (stories glob, addons, framework)
│   └── preview.js             # Global decorators, parameters, CSS import
├── .kiro/
│   ├── specs/                 # Feature specs (requirements, design, tasks)
│   └── steering/              # AI assistant context files (this folder)
├── vite.config.js
├── eslint.config.js
└── package.json
```

## Conventions

### Components

- One component per folder under `src/components/`
- Folder and file names use PascalCase: `Accordion/Accordion.jsx`
- Co-locate the story file in the same folder as the component
- Use functional components with named exports for sub-components, default export for the main component
- Always define `PropTypes` at the bottom of the file

### Storybook Stories

- Story files use the `.stories.js` extension
- Set `title` using atomic design category: `'Atom/ComponentName'`, `'Molecule/ComponentName'`, etc.
- Include `tags: ['autodocs']` to auto-generate docs pages
- Export a `Basic` story as the default/canonical variant

### SCSS / Styling

- All component styles live in `src/styles/scss/components/_componentname.scss`
- Use BEM naming with the `rd-` prefix: `.rd-accordion`, `.rd-accordion__trigger`, `.rd-accordion__item--open`
- Import `@use "../theme"` at the top of each component partial to access design tokens
- Use SCSS variables from `_theme.scss` for all colors — do not hardcode hex values in component styles
- Transitions use `180ms ease` for interactive states, `240ms ease` for layout changes

### Design Tokens (from `_theme.scss`)

```scss
$road-black:   #1a1a1a
$dust-white:   #f4f1ec
$faded-sand:   #d9d1c7
$burnt-orange: #c4512d
$muted-rust:   #a65a3a
$asphalt-gray: #2f2f2f

$info:    #5c7a8d
$success: #5e8c61
$warning: #d98c3a
$error:   #a94438
```
