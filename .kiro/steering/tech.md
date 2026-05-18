# Tech Stack

## Core

- **React 19** (JSX, functional components only)
- **Vite 8** — build tool and dev server
- **SCSS** via `sass-embedded` — compiled to `src/styles/css/styles.css`
- **PropTypes** — runtime prop validation (no TypeScript)

## Storybook

- **Storybook 10** with `@storybook/react-vite` framework
- Addons: `addon-docs`, `addon-a11y`, `addon-vitest`, `@chromatic-com/storybook`
- Stories are co-located with components: `ComponentName.stories.js`
- Storybook imports the compiled CSS (`src/styles/css/styles.css`) in `preview.js`
- A11y checks are set to `"todo"` mode (shown in test UI, not CI failures)

## Testing

- **Vitest 4** + **Playwright** (Chromium, headless) for Storybook-based component tests
- Tests run through the Storybook Vitest plugin — stories double as test cases
- Run tests once (no watch): `vitest --run`

## Linting

- **ESLint 10** with `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, `eslint-plugin-storybook`

## Common Commands

```bash
npm run dev            # Start Vite dev server
npm run build          # Production build
npm run preview        # Preview production build
npm run lint           # Run ESLint
npm run storybook      # Start Storybook on port 6006
npm run build-storybook # Build static Storybook
```

> **Note:** `npm run dev` and `npm run storybook` are long-running processes. Run them manually in a terminal — do not execute them as blocking commands.

## SCSS Compilation

SCSS source lives in `src/styles/scss/`. The compiled output is `src/styles/css/styles.css`. When adding new component styles, create a partial in `src/styles/scss/components/` and `@use` it in `styles.scss`. Do not edit the compiled CSS directly.
