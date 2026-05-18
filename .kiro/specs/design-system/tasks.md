# Implementation Plan: RoadDoggs Design System

## Overview

Build the RoadDoggs Design System — a living component library on React 19, SCSS, and Storybook 10. Tasks are ordered by dependency: infrastructure first (Storybook config, design tokens), then atomic components, then molecules and organisms that compose them, then documentation and the final accessibility/brand-voice audit.

## Task Dependency Graph

```json
{
  "waves": [
    { "wave": 1, "tasks": [1] },
    { "wave": 2, "tasks": [2] },
    { "wave": 3, "tasks": [3, 13] },
    { "wave": 4, "tasks": [4, 5, 6, 7, 8, 9, 10, 11, 12] },
    { "wave": 5, "tasks": [14] },
    { "wave": 6, "tasks": [15, 16, 17, 18, 19, 20] },
    { "wave": 7, "tasks": [21, 22] },
    { "wave": 8, "tasks": [23] },
    { "wave": 9, "tasks": [24] }
  ]
}
```

---

## Tasks

- [x] 1. Update Storybook configuration
  - Remove `@storybook/addon-onboarding` from `.storybook/main.js` addons array
  - Add `docs: { defaultName: 'Docs' }` to the config object in `main.js`
  - Update `.storybook/preview.js` to add `backgrounds` parameter with faded-sand default and four brand color options
  - Update `.storybook/preview.js` to add `viewport` parameter with mobile (375px), tablet (768px), and desktop (1280px) presets
  - Add Google Fonts `<link>` tags to `.storybook/preview-head.html` for Playfair Display, Inter, and Caveat (all required weights)
  - Verify Storybook starts without errors by running `npm run storybook`
  - **Requirements**: 12.6

- [x] 2. Expand design token system
  - Replace the entire contents of `src/styles/scss/_theme.scss` with the expanded token set from the design doc
  - Add spacing scale tokens `$space-1` through `$space-16` (4px base unit)
  - Add typography tokens: `$font-display`, `$font-body`, `$font-caveat`, full font-size scale `$text-xs` through `$text-6xl`, weight tokens, line-height tokens, letter-spacing tokens
  - Add shadow tokens `$shadow-sm` through `$shadow-xl`
  - Add border-radius tokens `$radius-sm` through `$radius-pill`
  - Add transition tokens `$transition-fast`, `$transition-base`, `$transition-slow`
  - Add `:root` block emitting all tokens as `--rd-*` CSS custom properties
  - Remove duplicate color variable declarations from `src/styles/scss/styles.scss` (lines 4–12)
  - Update `src/styles/scss/styles.scss` to add all new component `@use` imports in the correct order (Atoms, Molecules, Organisms)
  - Refactor `src/styles/scss/components/_alert.scss` to use `@use '../theme' as t` instead of hardcoded values
  - Refactor `src/styles/scss/components/_accordion.scss` to use `@use '../theme' as t` (currently uses `@use '../theme'` without alias — update all token references to use `t.$variable-name` for consistency)
  - Compile SCSS to verify no errors by running `npm run build` (Vite compiles SCSS as part of the bundle — do not use the `sass` CLI directly)
  - **Requirements**: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 14.3, 14.4

- [x] 3. Build Icon component
  - Create `src/components/Icon/Icon.jsx` with `name`, `size`, `label`, and `className` props
  - Render `<svg><use href="/icons.svg#${name}" /></svg>` pattern
  - Apply size classes: `rd-icon--sm` (16px), `rd-icon--md` (24px, default), `rd-icon--lg` (32px)
  - Set `aria-hidden="true"` when no `label` prop is provided; set `aria-label={label}` when provided
  - Set `focusable="false"` on the SVG element
  - Create `src/styles/scss/components/_icon.scss` using `@use '../theme' as t`
  - Create `src/components/Icon/Icon.stories.js` with `title: 'Atoms/Icon'`, `tags: ['autodocs']`
  - Add an `AllIcons` story rendering a grid of all available symbols from `public/icons.svg`
  - Verify the icon sprite has the required symbols (search, close, navigate, check, bell, menu, star, gem, drive); add any missing symbols to `public/icons.svg`
  - **Requirements**: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6

- [x] 4. Build Button component
  - Create `src/components/Button/Button.jsx` with `variant`, `size`, `disabled`, `loading`, `icon`, `iconPosition`, `onClick`, and `children` props
  - Support variants: `primary` (Burnt Orange), `dark` (Road Black), `secondary` (Faded Sand), `ghost` (white + border), `danger` (error red)
  - Support sizes: `sm`, `md` (default), `lg`
  - Render loading spinner with `aria-busy="true"` when `loading` is true; hide label
  - Render icon left or right of label based on `iconPosition` prop (default `left`)
  - Prevent `onClick` from firing when `disabled` or `loading` is true
  - Apply `rd-button:focus-visible` outline using `$burnt-orange`
  - Create `src/styles/scss/components/_button.scss` using `@use '../theme' as t`
  - Create `src/components/Button/Button.stories.js` with `title: 'Atoms/Button'`, `tags: ['autodocs']`
  - Add stories: Primary, Dark, Ghost, Secondary, Danger, Disabled, Loading, WithIconLeft, WithIconRight, Small, Large
  - Add a `DisabledNoClick` interaction test using a `play` function: click the disabled button and assert `onClick` was not called (verifies Property 4)
  - Use brand-voice copy in story args (e.g., "Build Your Route", "Log In", "Next Step →")
  - **Requirements**: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 2.10, 2.11

- [x] 5. Build Badge component
  - Create `src/components/Badge/Badge.jsx` with `label` and `variant` props
  - Support variants: `default`, `primary`, `success`, `warning`, `error`, `info`
  - Render as `<span>` with pill border-radius using `$radius-pill`
  - Apply semantic color tokens from `_theme.scss` for each variant
  - Create `src/styles/scss/components/_badge.scss` using `@use '../theme' as t`
  - Create `src/components/Badge/Badge.stories.js` with `title: 'Atoms/Badge'`, `tags: ['autodocs']`
  - Add stories for all six variants with brand-voice labels (e.g., "4 Spots", "On Track", "Long Drive")
  - **Requirements**: 3.1, 3.2, 3.3, 3.4, 3.5

- [x] 6. Build Input component
  - Create `src/components/Input/Input.jsx` with `id`, `label`, `type`, `value`, `onChange`, `placeholder`, `helperText`, `error`, and `disabled` props
  - Render visible `<label>` associated via `htmlFor`/`id`
  - Apply `aria-invalid="true"` and `aria-describedby` pointing to error element when `error` prop is provided
  - Render error message with `role="alert"` when `error` is set
  - Render helper text below field when `helperText` is set and no error
  - Apply reduced opacity and `cursor: not-allowed` when `disabled` is true
  - Support `type` values: `text`, `email`, `password`, `search`
  - Apply focus ring using `$burnt-orange` on `:focus`
  - Create `src/styles/scss/components/_input.scss` using `@use '../theme' as t`
  - Create `src/components/Input/Input.stories.js` with `title: 'Atoms/Input'`, `tags: ['autodocs']`
  - Add stories: Default, WithHelperText, WithError, Disabled, Password type
  - Use brand-voice placeholder text (e.g., "Search spots...", "you@roaddoggs.com")
  - **Requirements**: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7

- [x] 7. Build Checkbox component
  - Create `src/components/Checkbox/Checkbox.jsx` with `id`, `label`, `checked`, `onChange`, and `disabled` props
  - Visually hide the native `<input type="checkbox">` but keep it in the DOM for accessibility
  - Render a custom `rd-checkbox__box` element that shows a checkmark when `checked` is true
  - Apply Burnt Orange background and checkmark color when checked
  - Apply `aria-checked` attribute reflecting checked state
  - Apply focus ring on `rd-checkbox__input:focus-visible + rd-checkbox__box`
  - Apply reduced opacity and `cursor: not-allowed` when `disabled` is true
  - Create `src/styles/scss/components/_checkbox.scss` using `@use '../theme' as t`
  - Create `src/components/Checkbox/Checkbox.stories.js` with `title: 'Atoms/Checkbox'`, `tags: ['autodocs']`
  - Add stories: Unchecked, Checked, Disabled — use "Remember me" as the label
  - **Requirements**: 15.1, 15.2, 15.3, 15.4, 15.5, 15.6, 15.7

- [x] 8. Build Chip component
  - Create `src/components/Chip/Chip.jsx` with `label`, `active`, `icon`, and `onToggle` props
  - Render as `<button>` with `aria-pressed={active}`
  - Call `onToggle(!active)` on click
  - Apply Burnt Orange background and Dust White text when `active` is true
  - Apply neutral background and border when `active` is false
  - Apply focus ring on `:focus-visible`
  - Create `src/styles/scss/components/_chip.scss` using `@use '../theme' as t`
  - Create `src/components/Chip/Chip.stories.js` with `title: 'Atoms/Chip'`, `tags: ['autodocs']`
  - Add stories: Inactive, Active, WithIcon — use filter labels from the discovery screen (Food, Scenic, Camp, EV Charge)
  - **Requirements**: 19.1, 19.2, 19.3, 19.4, 19.5, 19.6, 19.7

- [x] 9. Build Avatar component
  - Create `src/components/Avatar/Avatar.jsx` with `src`, `name`, `size`, and `className` props
  - Render `<img>` when `src` is provided; attach `onError` handler to fall back to initials
  - Render initials fallback (first letter of each word, max 2 chars) when `src` is absent or fails to load
  - Support sizes: `sm` (24px), `md` (32px, default), `lg` (48px)
  - Always set `alt={name}` on the image element
  - Create `src/styles/scss/components/_avatar.scss` using `@use '../theme' as t`
  - Create `src/components/Avatar/Avatar.stories.js` with `title: 'Atoms/Avatar'`, `tags: ['autodocs']`
  - Add stories: WithImage, InitialsFallback, Small, Medium, Large
  - **Requirements**: 20.1, 20.2, 20.3

- [x] 10. Build StepperInput component
  - Create `src/components/StepperInput/StepperInput.jsx` with `label`, `sublabel`, `value`, `min`, `max`, and `onChange` props
  - Render label, optional sublabel, decrement button (`−`), value display, and increment button (`+`)
  - Disable decrement button and set `aria-disabled="true"` when `value === min`
  - Disable increment button and set `aria-disabled="true"` when `value === max`
  - Call `onChange(value - 1)` on decrement; call `onChange(value + 1)` on increment
  - Set `aria-label` on value display element; add `aria-live="polite"` for screen reader announcements
  - Create `src/styles/scss/components/_stepper-input.scss` using `@use '../theme' as t`
  - Create `src/components/StepperInput/StepperInput.stories.js` with `title: 'Atoms/StepperInput'`, `tags: ['autodocs']`
  - Add stories: Default (Adults, value=2), AtMinimum (Kids, value=0), AtMaximum (Pets, value=4)
  - **Requirements**: 18.1, 18.2, 18.3, 18.4, 18.5, 18.6, 18.7, 18.8

- [x] 11. Build SearchBar component
  - Create `src/components/SearchBar/SearchBar.jsx` with `value`, `placeholder`, `onChange`, and `className` props
  - Render search Icon prefix on the left side
  - Render clear (×) button using Icon when `value` is non-empty; call `onChange("")` on click
  - Set `role="searchbox"` and `aria-label="Search spots"` on the input element
  - Apply focus ring on `:focus-within` on the container
  - Create `src/styles/scss/components/_search-bar.scss` using `@use '../theme' as t`
  - Create `src/components/SearchBar/SearchBar.stories.js` with `title: 'Atoms/SearchBar'`, `tags: ['autodocs']`
  - Add stories: Empty, WithValue (showing clear button)
  - **Requirements**: 24.1, 24.2, 24.3, 24.4, 24.5, 24.6, 24.7

- [x] 12. Build StatBlock component
  - Create `src/components/StatBlock/StatBlock.jsx` with `label`, `value`, and `icon` props
  - Render label in small uppercase Inter text above the value
  - Render optional icon to the left of the label/value pair
  - Create `src/styles/scss/components/_stat-block.scss` using `@use '../theme' as t`
  - Create `src/components/StatBlock/StatBlock.stories.js` with `title: 'Atoms/StatBlock'`, `tags: ['autodocs']`
  - Add a `Row` story showing three StatBlocks side by side: "DRIVING 4h 20m", "DISTANCE 210 mi", "STOPS 4"
  - **Requirements**: 22.1, 22.2, 22.3, 22.4

- [x] 13. Update Accordion and Alert stories
  - Update `src/components/Accordion/Accordion.stories.js`: add `AllClosed` story (openIndex starts null) and `SingleItem` story
  - Change Accordion story title from `'Atom/Accordion'` (existing typo — singular, wrong category) to `'Organisms/Accordion'`
  - Update `src/components/Alert/Alert.stories.js`: add `Error` story, `WithActions` story, and `WithClose` story
  - Move Alert story title from `'Atom/Alert'` to `'Atoms/Alert'`
  - Ensure all four variants (info, success, warning, error) have stories
  - Verify `tags: ['autodocs']` is set on both story default exports
  - Use brand-voice copy in all story args (no lorem ipsum, no banned words)
  - **Requirements**: 10.1, 10.2, 10.3, 10.4, 12.1, 12.3, 12.5

- [x] 14. Build AvatarGroup component
  - Create `src/components/AvatarGroup/AvatarGroup.jsx` with `avatars`, `max`, and `size` props
  - Render up to `max` Avatar components in a horizontally overlapping stack
  - Apply negative left margin (`margin-left: -8px`) and white border to each Avatar after the first
  - Render overflow count badge (`+N`) when `avatars.length > max`; style same size as Avatar
  - Set `aria-label` on the container (e.g., "4 collaborators")
  - Create `src/styles/scss/components/_avatar-group.scss` using `@use '../theme' as t`
  - Create `src/components/AvatarGroup/AvatarGroup.stories.js` with `title: 'Molecules/AvatarGroup'`, `tags: ['autodocs']`
  - Add stories: WithinMax (2 avatars, max=3), ExceedsMax (4 avatars, max=3)
  - **Requirements**: 20.4, 20.5, 20.6, 20.7, 20.8

- [ ] 15. Build Card component (all variants)
  - Create `src/components/Card/Card.jsx` with `variant`, `header`, `body`, `footer`, `image`, `interactive`, `tripData`, `draftData`, `onClick` props
  - Default variant: render header/body/footer slots with optional full-width image at top
  - Apply hover lift (`translateY(-2px)`, shadow upgrade, Burnt Orange border) and focus ring when `interactive` is true
  - Trip variant: render full-width image, title (Playfair Display), date range, route summary, stop count Badge, pace Badge, AvatarGroup, and CTA link
  - Draft variant: render with `$font-caveat` for all text, paper-texture background (`$dust-white`), and dashed border; use brand-voice placeholder copy ("Just an idea...", "No dates selected")
  - Create `src/styles/scss/components/_card.scss` using `@use '../theme' as t`
  - Create `src/components/Card/Card.stories.js` with `title: 'Molecules/Card'`, `tags: ['autodocs']`
  - Add stories: Default, WithImage, Interactive, Trip, Draft
  - **Requirements**: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 6.9

- [ ] 16. Build Toast component
  - Create `src/components/Toast/Toast.jsx` with `variant`, `message`, `duration`, and `onDismiss` props
  - Render fixed-position at bottom-right of viewport
  - Apply variant-specific background colors using semantic tokens
  - Set `role="alert"` for error variant; `role="status"` for others
  - Implement auto-dismiss: use `useEffect` to start timer when `duration` is set; set `dismissing` state before calling `onDismiss` to trigger exit animation
  - Implement enter animation (`rd-toast-in`) and exit animation (`rd-toast-out`) using CSS keyframes
  - Render dismiss button with Icon; call `onDismiss` on click
  - Create `src/styles/scss/components/_toast.scss` using `@use '../theme' as t`
  - Create `src/components/Toast/Toast.stories.js` with `title: 'Molecules/Toast'`, `tags: ['autodocs']`
  - Add stories: Info, Success, Warning, Error, AutoDismiss (duration=3000)
  - Use brand-voice copy (e.g., "Route saved. Let's get you on the road.")
  - **Requirements**: 8.1, 8.2, 8.3, 8.4, 8.5, 8.6

- [ ] 17. Build ItineraryStopItem component
  - Create `src/components/ItineraryStopItem/ItineraryStopItem.jsx` with `stopNumber`, `name`, `time`, `category`, `rating`, and `hiddenGem` props
  - Render as `<li>` element
  - Render `stopNumber` as filled Road Black circle on the left edge
  - Render `category` as a Badge component with appropriate variant
  - Render `rating` as star characters (★/☆) with `aria-label` for screen readers
  - Render `hiddenGem` callout with gem Icon when prop is provided; use brand-voice copy in stories
  - Create `src/styles/scss/components/_itinerary-stop-item.scss` using `@use '../theme' as t`
  - Create `src/components/ItineraryStopItem/ItineraryStopItem.stories.js` with `title: 'Molecules/ItineraryStopItem'`, `tags: ['autodocs']`
  - Add stories: Standard, WithHiddenGem ("Ask for the table on the cliff edge. Trust this one."), NoRating
  - **Requirements**: 23.1, 23.2, 23.3, 23.4, 23.5, 23.6, 23.7

- [ ] 18. Build ProgressStepper component
  - Create `src/components/ProgressStepper/ProgressStepper.jsx` with `steps` and `activeStep` props
  - Render each step as a numbered node with label below; connect adjacent nodes with a horizontal line
  - Completed state (index < activeStep): filled Road Black circle with checkmark Icon
  - Active state (index === activeStep): filled Road Black circle with white number; set `aria-current="step"`
  - Inactive state (index > activeStep): outlined circle with muted label text
  - Render connecting line between nodes; completed segments use Road Black, pending segments use Faded Sand
  - Use `role="list"` on container and `role="listitem"` on each step
  - Create `src/styles/scss/components/_progress-stepper.scss` using `@use '../theme' as t`
  - Create `src/components/ProgressStepper/ProgressStepper.stories.js` with `title: 'Molecules/ProgressStepper'`, `tags: ['autodocs']`
  - Add stories using onboarding steps (The Crew, The Vibe, The Rig, The Brain): StepOne, StepTwo, Complete
  - **Requirements**: 16.1, 16.2, 16.3, 16.4, 16.5, 16.6, 16.7, 16.8

- [ ] 19. Build SelectionCard component
  - Create `src/components/SelectionCard/SelectionCard.jsx` with `id`, `icon`, `label`, `selected`, and `onSelect` props
  - Render icon above label inside a card container
  - Unselected state: dashed border, neutral background
  - Selected state: solid Burnt Orange border, Burnt Orange checkmark badge in top-right corner using Icon
  - Call `onSelect(id)` on click and on Enter/Space keydown
  - Set `role="radio"` and `aria-checked={selected}`; make element keyboard-focusable with `tabIndex={0}`
  - Apply focus ring on `:focus-visible`
  - Create `src/styles/scss/components/_selection-card.scss` using `@use '../theme' as t`
  - Create `src/components/SelectionCard/SelectionCard.stories.js` with `title: 'Molecules/SelectionCard'`, `tags: ['autodocs']`
  - Add stories: Unselected, Selected — use onboarding options (Solo, Couple, Family, The Pack)
  - **Requirements**: 17.1, 17.2, 17.3, 17.4, 17.5, 17.6, 17.7

- [ ] 20. Build TabBar component
  - Create `src/components/TabBar/TabBar.jsx` with `tabs`, `activeTab`, and `onChange` props
  - Render container with `role="tablist"`; render each tab as `<button role="tab">`
  - Active tab: bottom underline using Road Black, bold label text, `aria-selected="true"`, `tabIndex={0}`
  - Inactive tabs: muted label, no underline, `aria-selected="false"`, `tabIndex={-1}`
  - Call `onChange(tab.value)` on click
  - Implement arrow key navigation: ArrowRight moves focus to next tab (wrapping), ArrowLeft moves to previous tab (wrapping); call `onChange` with new tab value
  - Create `src/styles/scss/components/_tab-bar.scss` using `@use '../theme' as t`
  - Create `src/components/TabBar/TabBar.stories.js` with `title: 'Molecules/TabBar'`, `tags: ['autodocs']`
  - Add stories: TwoTabs (Edit Trip / Discovery Mode), ThreeTabs (Itinerary / Discovery / Details)
  - Add an `ArrowNavigation` interaction test using a `play` function: focus the first tab, press ArrowRight, assert `onChange` was called with the second tab's value (verifies Property 11)
  - **Requirements**: 21.1, 21.2, 21.3, 21.4, 21.5, 21.6, 21.7, 21.8

- [ ] 21. Build Navigation component
  - Create `src/components/Navigation/Navigation.jsx` with `links`, `user`, and `aria-label` props
  - Desktop layout (>768px): logo left, nav links center, user profile area right
  - User profile area: notification bell Icon with Badge when `notificationCount > 0`, user name text, Avatar
  - Mobile layout (≤768px): hide nav links and user area; show hamburger button
  - Hamburger toggles mobile drawer; drawer renders full-width with all nav links
  - Implement focus trap in drawer: Tab/Shift+Tab cycle within drawer; Escape closes drawer and returns focus to hamburger button
  - Apply `aria-current="page"` on active nav link; use `aria-expanded` on hamburger button
  - Use `<nav>` element with `aria-label` prop
  - Create `src/styles/scss/components/_navigation.scss` using `@use '../theme' as t`
  - Create `src/components/Navigation/Navigation.stories.js` with `title: 'Organisms/Navigation'`, `tags: ['autodocs']`
  - Add stories: Desktop, Mobile (with `viewport: { defaultViewport: 'mobile' }` parameter)
  - **Requirements**: 9.1, 9.2, 9.3, 9.4, 9.5, 9.6, 9.7, 9.8, 9.9, 9.10

- [ ] 22. Build Modal component
  - Create `src/components/Modal/Modal.jsx` with `isOpen`, `onClose`, `title`, `aria-labelledby`, `children`, and `actions` props
  - Render via `createPortal` into `document.body` when `isOpen` is true
  - Set `role="dialog"`, `aria-modal="true"`, and `aria-labelledby` on the dialog panel
  - On open: move focus to first focusable element inside the dialog (or the panel itself as fallback)
  - Implement focus trap: Tab/Shift+Tab cycle only within the dialog panel
  - Call `onClose` on Escape keydown and on overlay backdrop click (not on dialog panel click)
  - Render close button with Icon in the header; call `onClose` on click
  - Create `src/styles/scss/components/_modal.scss` using `@use '../theme' as t`
  - Create `src/components/Modal/Modal.stories.js` with `title: 'Organisms/Modal'`, `tags: ['autodocs']`
  - Add stories: Open (with title, body, and action buttons), Closed
  - Add a `ClosesOnEscape` interaction test using a `play` function: with Modal open, press Escape, assert `onClose` was called once (verifies Property 7)
  - Use brand-voice copy (e.g., "Remove this spot?", "Tweak your game plan")
  - **Requirements**: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8

- [ ] 23. Create Storybook MDX documentation pages
  - Update `src/docs/Foundations.mdx`: add `<Meta title="Docs/Foundations" />`, add "Curated Chaos" section with component examples (polaroid decoration, Caveat accent text, DraftCard), verify all 10 design principles, tone of voice, terminology substitutions, banned words, and experiential phrases are present
  - Update `src/docs/Colors.mdx`: add `<Meta title="Docs/Colors" />`, use Storybook `ColorPalette` and `ColorItem` blocks to display all brand colors (Road Black, Dust White, Faded Sand, Burnt Orange, Muted Rust, Asphalt Gray) and semantic colors (info, success, warning, error); document Faded Sand as page background and Dust White as card surface
  - Update `src/docs/Typography.mdx`: add `<Meta title="Docs/Typography" />`, use Storybook `Typeset` block to display Playfair Display, Inter, and Caveat at all defined sizes and weights
  - Create `src/docs/Spacing.mdx`: add `<Meta title="Docs/Spacing" />`, document the 4px base unit spacing scale with visual examples of each step (`$space-1` through `$space-16`)
  - Create `src/docs/Iconography.mdx`: add `<Meta title="Docs/Iconography" />`, document icon usage guidelines (decorative vs. meaningful), display all available icons from `public/icons.svg` in a grid
  - Create `src/docs/Accessibility.mdx`: add `<Meta title="Docs/Accessibility" />`, document WCAG 2.1 AA targets, safe color pairings with contrast ratios, keyboard navigation patterns for all interactive components
  - Verify all MDX pages render without errors in Storybook
  - Verify all copy uses approved brand terminology and contains no banned words
  - **Requirements**: 11.1, 11.2, 11.3, 11.4, 11.5, 11.6, 11.7, 11.8, 12.1, 12.2, 25.1, 25.2, 25.3, 25.4, 25.5

- [ ] 24. Accessibility audit and brand voice review
  - Run Storybook with `@storybook/addon-a11y` and review the Accessibility panel for every component story; resolve all axe violations
  - Manually keyboard-test each interactive component: Button, Input, Checkbox, Chip, SelectionCard, TabBar, Card (interactive), Navigation, Modal — verify focus ring is visible at each step
  - Verify all text content meets 4.5:1 contrast ratio (normal text) and 3:1 (large text / UI components) against their backgrounds
  - Verify all components that convey meaning through color also convey it through text, icons, or ARIA attributes
  - Review all story labels, prop descriptions, and example copy for banned words (Itinerary, Optimize, Algorithm, Generate, User, Platform, Solution, Leverage)
  - Verify all story copy uses approved terminology (Route, Spots, Finds, Co-Pilot, Tweak, Game Plan, Picks/Suggestions, Spend)
  - Run property-based tests for StepperInput bounds enforcement and Chip toggle invariant
  - Run Storybook interaction tests (`play` functions) for Button disabled state, Modal Escape key, and TabBar arrow navigation
  - **Requirements**: 13.1, 13.2, 13.3, 13.4, 13.5, 13.6, 25.1, 25.2, 25.3, 25.4, 25.5, 25.6

## Notes

- **Build order matters**: Tasks 1 and 2 (Storybook config and design tokens) must be completed before any component work begins. The SCSS compilation step in Task 2 is the gate — if it fails, no component styles will work.
- **Icon sprite**: Task 3 requires verifying `public/icons.svg` has all needed symbols. Add any missing symbols before building components that depend on Icon (Tasks 4, 8, 11, 16, 17, 18, 19, 21, 22).
- **SCSS compilation**: After each new component partial is created, run `npm run build` to verify no compilation errors before moving on.
- **Brand voice**: Every story file must use approved RoadDoggs terminology. No lorem ipsum. No banned words. Review the Foundations.mdx and Requirements 25 for the full list.
- **Storybook sidebar titles**: All story `title` values must follow the `Category/ComponentName` pattern exactly — `Docs/`, `Atoms/`, `Molecules/`, `Organisms/` — to produce the correct sidebar hierarchy.
- **PropTypes**: Every component must define PropTypes for all props. Storybook Autodocs generates the props table from PropTypes — missing or incorrect PropTypes will produce incomplete documentation.
- **Focus traps**: Modal (Task 22) and Navigation mobile drawer (Task 21) both require focus trap logic. Implement a reusable `useFocusTrap` hook or inline the logic — do not use a third-party library unless already in `package.json`.
- **Testing**: Task 24 is the final gate. Do not consider the spec complete until all axe violations are resolved and all interaction tests pass.
