# Requirements Document

## Introduction

This feature builds out a comprehensive design system for the RoadDoggs app, using Storybook as the primary documentation and component showcase tool. The design system codifies the brand's visual language — colors, typography, spacing, and component patterns — into a living, browsable library that developers and designers can reference and extend. It covers the full component library (atoms, molecules, organisms), design tokens, documentation pages, and accessibility standards, all grounded in the existing SCSS theme and brand foundations already established in the project.

The guiding philosophy behind every component design decision is rooted in two core brand principles: **Emotion First, Utility Second** — designing for excitement, curiosity, and escape before pure efficiency — and **Curated Chaos** — asymmetry with intention, layered visuals, and controlled imperfection that give the system soul without sacrificing clarity. RoadDoggs exists to turn everyday people into explorers, and the design system must reflect that mission at every level: from the warmth of the color palette to the handwritten Caveat accent font to the dashed-border DraftCard that feels like a scribbled note. Components should never feel like a SaaS dashboard; they should feel like flipping through a travel journal.

The visual language is anchored by a warm Faded Sand page background (`#d9d1c7` / `#f4f1ec`), white or near-white card surfaces, Road Black (`#1a1a1a`) for primary dark CTAs, Burnt Orange (`#c4512d`) for primary action CTAs, and a three-font typographic system: Playfair Display for display headings, Inter for body and UI text, and Caveat (handwritten) for accent and decorative copy that embodies the "imperfect but intentional" brand voice.

## Glossary

- **Design_System**: The complete collection of design tokens, components, patterns, and documentation that defines the RoadDoggs visual and interaction language.
- **Storybook**: The Storybook.js application used to document, showcase, and test all Design_System components in isolation.
- **Component**: A reusable React UI element (e.g., Button, Alert, Accordion) built with SCSS and documented in Storybook.
- **Story**: A Storybook story file (`.stories.js`) that demonstrates one or more states or variants of a Component.
- **Design_Token**: A named, reusable value (color, spacing, typography size, etc.) defined in SCSS variables and/or CSS custom properties.
- **Atom**: The smallest, most primitive Component (e.g., Button, Badge, Input, Icon, Chip, Avatar, StatBlock, StepperInput, Checkbox).
- **Molecule**: A Component composed of two or more Atoms working together (e.g., Card, TripCard, Toast, TabBar, ProgressStepper, SelectionCard, ItineraryStopItem).
- **Organism**: A complex Component composed of Molecules and/or Atoms (e.g., Accordion, Navigation, Modal).
- **MDX_Page**: A Storybook documentation page written in MDX format, used for non-component docs (Colors, Typography, Foundations, etc.).
- **SCSS_Theme**: The `_theme.scss` file and associated component SCSS files that define all Design_Tokens as SCSS variables.
- **Variant**: A named visual or behavioral state of a Component (e.g., `primary`, `dark`, `ghost`, `error`).
- **Autodocs**: The Storybook feature that auto-generates a documentation page for a Component from its story metadata and PropTypes.
- **A11y**: Accessibility compliance, targeting WCAG 2.1 AA as the minimum standard.
- **BEM**: The Block Element Modifier CSS naming convention used for all component class names (e.g., `rd-button`, `rd-button__label`, `rd-button--primary`).
- **rd-prefix**: The `rd-` namespace prefix applied to all BEM class names to scope them to the RoadDoggs Design_System.
- **Road_Black**: The color token `#1a1a1a` (`$road-black`) used for dark/primary CTA buttons and high-contrast text.
- **Burnt_Orange**: The color token `#c4512d` (`$burnt-orange`) used for primary action CTA buttons, active states, and selection indicators.
- **Faded_Sand**: The color token `#d9d1c7` / `#f4f1ec` (`$faded-sand` / `$dust-white`) used as the app-wide page background.
- **Dust_White**: The color token `#f4f1ec` (`$dust-white`) used as the lighter warm-white background and button text on dark surfaces.
- **TripCard**: A Molecule-level Card variant for displaying trip summaries with image, metadata, collaborator avatars, and CTA.
- **DraftCard**: A TripCard variant with paper/notepad texture, Caveat font content, and dashed border indicating an unsaved draft trip.
- **ProgressStepper**: A horizontal step indicator Molecule showing numbered steps with active, completed, and inactive states.
- **SelectionCard**: A Molecule-level option card used for mutually exclusive selection, with icon, label, and selected/unselected border states.
- **StepperInput**: An Atom-level numeric counter input with decrement and increment controls.
- **Chip**: An Atom-level pill-shaped filter/tag toggle button.
- **AvatarGroup**: A Molecule-level stack of overlapping Avatar Atoms with an overflow count badge.
- **TabBar**: A Molecule-level horizontal tab navigation component.
- **StatBlock**: An Atom-level labeled metric display used in itinerary headers.
- **ItineraryStopItem**: A Molecule-level list item representing a single route stop in an itinerary.
- **SearchBar**: An Atom-level search input with icon prefix and clear button.

---

## Requirements

### Requirement 1: Design Token Foundation

**User Story:** As a developer, I want all visual values (colors, typography, spacing, shadows) defined as Design_Tokens in the SCSS_Theme, so that I can build consistent Components without hardcoding values.

#### Acceptance Criteria

1. THE Design_System SHALL define all brand colors from the existing palette (Road Black `#1a1a1a`, Dust White `#f4f1ec`, Faded Sand `#d9d1c7`, Burnt Orange `#c4512d`, Muted Rust `#a65a3a`, Asphalt Gray `#2f2f2f`, and all semantic colors) as SCSS variables in `_theme.scss`.
2. THE Design_System SHALL define a spacing scale (e.g., 4px base unit increments) as SCSS variables in `_theme.scss`.
3. THE Design_System SHALL define all typography values (font families: Playfair Display, Inter, Caveat; font sizes: 12px–64px scale; font weights: 400, 700, 800, 900) as SCSS variables in `_theme.scss`.
4. THE Design_System SHALL expose Design_Tokens as CSS custom properties on `:root` so that they are accessible to JavaScript and runtime theming.
5. WHEN a Design_Token value is changed in `_theme.scss`, THE Design_System SHALL reflect that change across all Components that reference the token without requiring per-component edits.
6. THE Design_System SHALL define shadow, border-radius, and transition-duration tokens as SCSS variables in `_theme.scss`.
7. THE Design_System SHALL designate Faded Sand (`$faded-sand`, `#d9d1c7`) as the app-wide page background token and Dust White (`$dust-white`, `#f4f1ec`) as the card and surface background token, and SHALL document this usage in the Colors MDX page.
8. THE Design_System SHALL define a `$font-caveat` token for the Caveat handwritten font family in `_theme.scss`, and this font SHALL be used for accent and decorative copy that reflects the "imperfect but intentional" brand principle (e.g., placeholder text like "Take your time...", "Plan wild.", "Just an idea...").

---

### Requirement 2: Button Component

**User Story:** As a developer, I want a Button component with clearly defined variants and states, so that I can implement consistent call-to-action elements throughout the app.

#### Acceptance Criteria

1. THE Button SHALL support the following variants: `primary`, `dark`, `secondary`, `ghost`, and `danger`.
2. THE Button SHALL support the following sizes: `sm`, `md` (default), and `lg`.
3. WHEN the Button `variant` is `primary`, THE Button SHALL render with a Burnt Orange (`$burnt-orange`) background and Dust White label text — this is the standard action CTA style (e.g., "NEXT STEP →", "+ CREATE NEW TRIP", "+ ADD TO TRIP", "▶ NAVIGATE").
4. WHEN the Button `variant` is `dark`, THE Button SHALL render with a Road Black (`$road-black`) background and Dust White label text — this is the primary login/submit CTA style (e.g., "LOG IN").
5. WHEN the Button `variant` is `ghost`, THE Button SHALL render with a white background, a visible border, and Road Black label text — this is the social login button style (e.g., "Continue with Google", "Continue with Apple").
6. WHEN the Button `disabled` prop is `true`, THE Button SHALL render with Asphalt Gray styling and SHALL NOT trigger the `onClick` handler.
7. WHEN the Button receives keyboard focus, THE Button SHALL display a visible focus ring that meets WCAG 2.1 AA contrast requirements.
8. THE Button SHALL accept an optional `icon` prop that renders an SVG icon adjacent to the label text.
9. THE Button SHALL accept an optional `iconPosition` prop with values `left` (default) and `right`, controlling whether the icon renders before or after the label text.
10. THE Button SHALL accept an optional `loading` prop that, WHEN `true`, replaces the label with a loading indicator and sets `aria-busy="true"`.
11. THE Button SHALL have a Story for each variant and size combination documented in Storybook with Autodocs enabled.

---

### Requirement 3: Badge Component

**User Story:** As a developer, I want a Badge component for status labels and tags, so that I can surface short contextual information inline with other content.

#### Acceptance Criteria

1. THE Badge SHALL support the following variants: `default`, `primary`, `success`, `warning`, `error`, and `info`.
2. THE Badge SHALL render as an inline element with a pill-shaped border radius.
3. WHEN the Badge `variant` is a semantic color (`success`, `warning`, `error`, `info`), THE Badge SHALL use the corresponding semantic color token from `_theme.scss`.
4. THE Badge SHALL accept a `label` prop of type string and render it as the badge text.
5. THE Badge SHALL have a Story for each variant documented in Storybook with Autodocs enabled.

---

### Requirement 4: Input Component

**User Story:** As a developer, I want a text Input component with label, helper text, and error states, so that I can build accessible forms consistently.

#### Acceptance Criteria

1. THE Input SHALL render a visible `<label>` element associated with the input via `htmlFor` and `id`.
2. THE Input SHALL accept a `helperText` prop that renders below the input field.
3. WHEN the Input `error` prop is provided, THE Input SHALL render the error message below the field and apply error styling using the `$error` Design_Token.
4. WHEN the Input `error` prop is provided, THE Input SHALL set `aria-invalid="true"` and `aria-describedby` pointing to the error message element.
5. WHEN the Input `disabled` prop is `true`, THE Input SHALL render with reduced opacity and SHALL NOT accept user input.
6. THE Input SHALL support `type` values of `text`, `email`, `password`, and `search`.
7. THE Input SHALL have Stories for default, error, disabled, and with-helper-text states in Storybook with Autodocs enabled.

---

### Requirement 5: Icon Component

**User Story:** As a developer, I want an Icon component that renders SVG icons from the existing `icons.svg` sprite, so that I can use consistent iconography across all Components.

#### Acceptance Criteria

1. THE Icon SHALL render SVG icons by referencing symbol IDs from `public/icons.svg` using an `<svg><use>` pattern.
2. THE Icon SHALL accept a `name` prop that maps to a symbol ID in `public/icons.svg`.
3. THE Icon SHALL accept a `size` prop with values `sm` (16px), `md` (24px, default), and `lg` (32px).
4. WHEN the Icon is decorative (no meaningful label), THE Icon SHALL set `aria-hidden="true"`.
5. WHEN the Icon conveys meaning without adjacent text, THE Icon SHALL accept a `label` prop and render it as `aria-label`.
6. THE Icon SHALL have a Story showcasing all available icons in a grid layout in Storybook.

---

### Requirement 6: Card Component

**User Story:** As a developer, I want a Card component for displaying grouped content (route stops, trip summaries, etc.), so that I can present structured information in a visually consistent container.

#### Acceptance Criteria

1. THE Card SHALL render a container with a Dust White or Faded Sand background, subtle border, and rounded corners using the border-radius Design_Token.
2. THE Card SHALL accept `header`, `body`, and `footer` slot props to compose content regions.
3. THE Card SHALL support an optional `image` prop that renders a full-width image at the top of the card.
4. WHEN the Card `interactive` prop is `true`, THE Card SHALL apply hover and focus styles (lift shadow, border-color shift to Burnt Orange) and render as a focusable element.
5. WHEN the Card `interactive` prop is `true` and the Card receives keyboard focus, THE Card SHALL display a visible focus ring meeting WCAG 2.1 AA requirements.
6. THE Card SHALL support a `variant` prop with values `default`, `trip`, and `draft`.
7. WHEN the Card `variant` is `trip`, THE Card SHALL render as a TripCard displaying: a full-width trip image, trip title, date range, route summary line, stop count badge, pace badge, a row of collaborator AvatarGroup, and a CTA link.
8. WHEN the Card `variant` is `draft`, THE Card SHALL render as a DraftCard with a paper/notepad texture background, Caveat font (`$font-caveat`) for all content text, and a dashed border — indicating an unsaved or in-progress trip. Placeholder and example content in DraftCard stories SHALL use brand-voice copy such as "Just an idea..." and "No dates selected" rather than generic lorem ipsum.
9. THE Card SHALL have Stories for default, with-image, interactive, trip, and draft variants in Storybook with Autodocs enabled.

---

### Requirement 7: Modal Component

**User Story:** As a developer, I want a Modal component for confirmations and focused interactions, so that I can interrupt the user flow intentionally without navigating away.

#### Acceptance Criteria

1. WHEN the Modal `isOpen` prop is `true`, THE Modal SHALL render an overlay and a dialog panel above all other content.
2. WHEN the Modal opens, THE Modal SHALL move focus to the first focusable element inside the dialog.
3. WHILE the Modal is open, THE Modal SHALL trap keyboard focus within the dialog panel.
4. WHEN the user presses the Escape key while the Modal is open, THE Modal SHALL call the `onClose` callback.
5. WHEN the user clicks the overlay backdrop while the Modal is open, THE Modal SHALL call the `onClose` callback.
6. THE Modal SHALL set `role="dialog"` and `aria-modal="true"` on the dialog panel element.
7. THE Modal SHALL accept an `aria-labelledby` prop that associates the dialog with its title element.
8. THE Modal SHALL have Stories for open and closed states in Storybook with Autodocs enabled.

---

### Requirement 8: Toast / Notification Component

**User Story:** As a developer, I want a Toast component for transient feedback messages, so that I can notify users of actions without blocking the UI.

#### Acceptance Criteria

1. THE Toast SHALL support the same four variants as the Alert component: `info`, `success`, `warning`, and `error`.
2. THE Toast SHALL render in a fixed position at the bottom-right of the viewport by default.
3. WHEN the Toast `duration` prop is set to a positive integer (milliseconds), THE Toast SHALL automatically dismiss after that duration.
4. WHEN the Toast is dismissed (automatically or manually), THE Toast SHALL animate out before being removed from the DOM.
5. THE Toast SHALL render with `role="status"` for non-error variants and `role="alert"` for the `error` variant.
6. THE Toast SHALL have Stories for each variant and for auto-dismiss behavior in Storybook with Autodocs enabled.

---

### Requirement 9: Navigation Component

**User Story:** As a developer, I want a Navigation component for the app's primary nav bar, so that I can provide consistent wayfinding across all app screens.

#### Acceptance Criteria

1. THE Navigation SHALL render a horizontal nav bar on viewports wider than 768px with three distinct regions: a logo on the left, primary nav links centered (TRIPS, EXPLORE, COMMUNITY), and a user profile area on the right (notification bell icon, user name with role badge, and circular user avatar).
2. WHEN the viewport width is 768px or narrower, THE Navigation SHALL render a hamburger menu button that toggles a mobile nav drawer.
3. WHEN the mobile nav drawer is open, THE Navigation SHALL trap focus within the drawer.
4. WHEN the mobile nav drawer is open and the user presses Escape, THE Navigation SHALL close the drawer and return focus to the hamburger button.
5. THE Navigation SHALL accept a `links` prop (array of `{ label, href, active }` objects) and render each as a nav link.
6. WHEN a nav link has `active: true`, THE Navigation SHALL apply active styling to that link.
7. THE Navigation SHALL accept a `user` prop (object with `name`, `role`, `avatarSrc`, and `notificationCount`) and render the user profile area accordingly.
8. WHEN the `user.notificationCount` value is greater than zero, THE Navigation SHALL render a numeric badge on the notification bell icon.
9. THE Navigation SHALL use a `<nav>` element with an `aria-label` prop for landmark identification.
10. THE Navigation SHALL have Stories for desktop and mobile (viewport-constrained) states in Storybook with Autodocs enabled.

---

### Requirement 10: Existing Component Story Completeness

**User Story:** As a developer, I want the existing Accordion and Alert components to have complete, production-quality Storybook stories, so that they serve as reference implementations for the Design_System.

#### Acceptance Criteria

1. THE Accordion Story SHALL include stories for: default open state, all-closed state, and a single-item variant.
2. THE Alert Story SHALL include stories for all four variants (`info`, `success`, `warning`, `error`) including a story with action buttons and a story with the close button.
3. WHEN Autodocs is enabled on a Component story, THE Storybook SHALL generate a documentation page showing all props, their types, defaults, and descriptions derived from PropTypes.
4. THE Alert component SHALL have its `icon` prop documented with the default icon characters for each variant.

---

### Requirement 11: Storybook Documentation Pages

**User Story:** As a designer or developer, I want comprehensive MDX documentation pages in Storybook for foundations, colors, typography, spacing, and iconography, so that I have a single source of truth for the design language.

#### Acceptance Criteria

1. THE Design_System SHALL provide an MDX page titled "Foundations" that documents brand vision, design principles, and tone of voice. The existing file at `src/docs/Foundations.mdx` is the source of truth for this page and SHALL be updated and maintained rather than replaced. THE Foundations page SHALL document all 10 design principles, the tone of voice guidelines (including core traits, writing rules, and emotional goal), all 10 core brand terminology substitutions (Route, Game Plan, Spots, Finds, Co-Pilot, Tweak, Build/Map Out, Your Routes, Suggestions/Picks, Spend), the full list of words to avoid (Itinerary, Optimize, Algorithm, Generate, User, Platform, Solution, Leverage), and all experiential language phrases ("Let's get you on the road.", "Worth the detour", "You'll want to stop here", "Trust this one", "This fits your vibe", "Less driving. More living.").
2. THE Design_System SHALL provide an MDX page titled "Colors" that uses the Storybook `ColorPalette` and `ColorItem` blocks to display all brand, neutral, semantic, and gradient colors.
3. THE Design_System SHALL provide an MDX page titled "Typography" that uses the Storybook `Typeset` block to display all three font families (Playfair Display, Inter, Caveat) at all defined size and weight combinations.
4. THE Design_System SHALL provide an MDX page titled "Spacing" that documents the spacing scale with visual examples of each step.
5. THE Design_System SHALL provide an MDX page titled "Iconography" that documents icon usage guidelines and displays all available icons from `public/icons.svg`.
6. THE Design_System SHALL provide an MDX page titled "Accessibility" that documents WCAG 2.1 AA compliance targets, safe color pairings, and keyboard navigation patterns used across Components.
7. WHEN a new Component is added to the Design_System, THE Design_System SHALL include a corresponding Story file with Autodocs enabled so that the component appears in the Storybook sidebar.
8. THE Foundations MDX page SHALL include a "Curated Chaos" section that documents the visual principle with concrete examples of how asymmetry, layered visuals, and controlled imperfection manifest in the component library — including the polaroid-style photo decoration on TripCard, the Caveat handwritten accent text used in DraftCard and decorative copy, and the dashed-border DraftCard variant.

---

### Requirement 12: Storybook Organization and Navigation

**User Story:** As a developer, I want the Storybook sidebar to be logically organized by component category, so that I can quickly find any component or documentation page.

#### Acceptance Criteria

1. THE Storybook SHALL organize stories under the following top-level categories: `Docs`, `Atoms`, `Molecules`, and `Organisms`.
2. THE Storybook SHALL place all MDX documentation pages under the `Docs` category.
3. THE Storybook SHALL place Atom-level components (Button, Badge, Input, Icon, Chip, Avatar, StatBlock, StepperInput, Checkbox, SearchBar) under the `Atoms` category.
4. THE Storybook SHALL place Molecule-level components (Card, TripCard, Toast, Form Field, TabBar, ProgressStepper, SelectionCard, AvatarGroup, ItineraryStopItem) under the `Molecules` category.
5. THE Storybook SHALL place Organism-level components (Accordion, Navigation, Modal) under the `Organisms` category.
6. THE Storybook SHALL display a custom title and favicon matching the RoadDoggs brand in the browser tab.

---

### Requirement 13: Accessibility Compliance

**User Story:** As a developer, I want all Design_System components to meet WCAG 2.1 AA accessibility standards, so that the app is usable by people with disabilities.

#### Acceptance Criteria

1. THE Design_System SHALL configure the `@storybook/addon-a11y` addon so that A11y checks run on all Component stories.
2. WHEN an A11y violation is detected in a Component story, THE Storybook SHALL surface the violation in the Accessibility panel of that story.
3. THE Design_System SHALL ensure all interactive Components (Button, Input, Card interactive, Navigation, Modal, Toast) have visible focus indicators that meet a minimum 3:1 contrast ratio against their background.
4. THE Design_System SHALL ensure all text content in Components meets a minimum 4.5:1 contrast ratio against its background (WCAG AA for normal text).
5. THE Design_System SHALL ensure all Components that convey meaning through color alone also convey that meaning through text, icons, or ARIA attributes.
6. THE Design_System SHALL ensure all form Components (Input) have programmatically associated labels.

---

### Requirement 14: SCSS Architecture and BEM Naming

**User Story:** As a developer, I want all component styles to follow a consistent SCSS architecture and BEM naming convention, so that styles are predictable, scoped, and easy to maintain.

#### Acceptance Criteria

1. THE Design_System SHALL use the `rd-` prefix for all BEM block class names (e.g., `rd-button`, `rd-card`, `rd-modal`).
2. THE Design_System SHALL define each component's styles in a dedicated SCSS partial file under `src/styles/scss/components/` (e.g., `_button.scss`, `_card.scss`).
3. THE Design_System SHALL import all component SCSS partials in `src/styles/scss/styles.scss` using `@use`.
4. THE Design_System SHALL reference Design_Tokens from `_theme.scss` via `@use 'theme'` in each component partial rather than hardcoding color or spacing values.
5. IF a component partial references a Design_Token that does not exist in `_theme.scss`, THEN THE Design_System SHALL add that token to `_theme.scss` before using it.

---

### Requirement 15: Checkbox Component

**User Story:** As a developer, I want a styled Checkbox component with an associated label, so that I can build accessible boolean form inputs consistently across the app (e.g., "Remember me" on the login screen).

#### Acceptance Criteria

1. THE Checkbox SHALL render a visible `<label>` element associated with the checkbox input via `htmlFor` and `id`.
2. THE Checkbox SHALL accept a `label` prop of type string and render it as the visible label text.
3. WHEN the Checkbox `checked` prop is `true`, THE Checkbox SHALL render a visible checkmark indicator using the Burnt Orange (`$burnt-orange`) accent color.
4. WHEN the Checkbox `disabled` prop is `true`, THE Checkbox SHALL render with reduced opacity and SHALL NOT respond to user interaction.
5. WHEN the Checkbox receives keyboard focus, THE Checkbox SHALL display a visible focus ring that meets WCAG 2.1 AA contrast requirements.
6. THE Checkbox SHALL set `aria-checked` to reflect the current checked state.
7. THE Checkbox SHALL have Stories for unchecked, checked, and disabled states in Storybook with Autodocs enabled.

---

### Requirement 16: ProgressStepper Component

**User Story:** As a developer, I want a ProgressStepper component for multi-step flows, so that I can show users their position and progress through a sequence of steps (e.g., the onboarding flow: THE CREW → THE VIBE → THE RIG → THE BRAIN).

#### Acceptance Criteria

1. THE ProgressStepper SHALL accept a `steps` prop (array of `{ label: string }` objects) and render each step as a numbered node with its label below.
2. THE ProgressStepper SHALL accept an `activeStep` prop (zero-based index) indicating the currently active step.
3. WHEN a step index is less than `activeStep`, THE ProgressStepper SHALL render that step node as completed — using a filled circle with a checkmark or filled Road Black circle.
4. WHEN a step index equals `activeStep`, THE ProgressStepper SHALL render that step node as active — using a filled dark circle with white step number and full-opacity label text.
5. WHEN a step index is greater than `activeStep`, THE ProgressStepper SHALL render that step node as inactive — using an outlined circle with muted label text.
6. THE ProgressStepper SHALL render a connecting line between adjacent step nodes.
7. THE ProgressStepper SHALL convey step state (completed, active, inactive) through both visual styling and `aria-current="step"` on the active node, so that the state is not communicated by color alone.
8. THE ProgressStepper SHALL have Stories for a 4-step flow at step 1, step 2, and step 4 (complete) in Storybook with Autodocs enabled.

---

### Requirement 17: SelectionCard Component

**User Story:** As a developer, I want a SelectionCard component for mutually exclusive option selection, so that I can present icon-labeled choices in a visually distinct card grid (e.g., Solo, Couple, Family, The Pack in the onboarding crew-size step).

#### Acceptance Criteria

1. THE SelectionCard SHALL accept `icon`, `label`, and `selected` props and render an icon above a text label inside a card container.
2. WHEN the SelectionCard `selected` prop is `false`, THE SelectionCard SHALL render with a dashed border and neutral background.
3. WHEN the SelectionCard `selected` prop is `true`, THE SelectionCard SHALL render with a solid Burnt Orange border and a Burnt Orange checkmark badge in the top-right corner.
4. WHEN the SelectionCard is clicked or activated via keyboard, THE SelectionCard SHALL call the `onSelect` callback with its identifier value.
5. THE SelectionCard SHALL be keyboard-focusable and SHALL display a visible focus ring meeting WCAG 2.1 AA requirements.
6. THE SelectionCard SHALL use `role="radio"` and `aria-checked` to convey selection state to assistive technologies.
7. THE SelectionCard SHALL have Stories for unselected and selected states in Storybook with Autodocs enabled.

---

### Requirement 18: StepperInput Component

**User Story:** As a developer, I want a StepperInput component for numeric increment/decrement inputs, so that I can let users adjust integer values (e.g., Adults, Kids, Pets counts in the onboarding crew step) without a free-text keyboard entry.

#### Acceptance Criteria

1. THE StepperInput SHALL render a label, an optional sublabel, a decrement button (`−`), a current value display, and an increment button (`+`).
2. THE StepperInput SHALL accept `value`, `min`, `max`, `label`, and `sublabel` props.
3. WHEN the StepperInput `value` equals `min`, THE StepperInput SHALL disable the decrement button and set `aria-disabled="true"` on it.
4. WHEN the StepperInput `value` equals `max`, THE StepperInput SHALL disable the increment button and set `aria-disabled="true"` on it.
5. WHEN the decrement button is activated, THE StepperInput SHALL call the `onChange` callback with `value - 1`.
6. WHEN the increment button is activated, THE StepperInput SHALL call the `onChange` callback with `value + 1`.
7. THE StepperInput SHALL set `aria-label` on the value display element to convey the current count to assistive technologies.
8. THE StepperInput SHALL have Stories for default, at-minimum, and at-maximum states in Storybook with Autodocs enabled.

---

### Requirement 19: Chip Component

**User Story:** As a developer, I want a Chip component for filter tags and toggleable labels, so that I can let users activate and deactivate categorical filters (e.g., Food, Scenic, Camp, EV Charge in the discovery screen).

#### Acceptance Criteria

1. THE Chip SHALL render as a pill-shaped element with a short text label and an optional icon prefix.
2. THE Chip SHALL accept an `active` prop that controls its active/inactive visual state.
3. WHEN the Chip `active` prop is `false`, THE Chip SHALL render with a neutral background and border.
4. WHEN the Chip `active` prop is `true`, THE Chip SHALL render with a Burnt Orange background and Dust White text.
5. WHEN the Chip is clicked or activated via keyboard, THE Chip SHALL call the `onToggle` callback with its current `active` state inverted.
6. THE Chip SHALL use `aria-pressed` to convey toggle state to assistive technologies.
7. THE Chip SHALL have Stories for inactive and active states, and for a chip with an icon prefix, in Storybook with Autodocs enabled.

---

### Requirement 20: Avatar and AvatarGroup Components

**User Story:** As a developer, I want Avatar and AvatarGroup components for displaying user profile images, so that I can show collaborators on trip cards and in the navigation user area.

#### Acceptance Criteria

1. THE Avatar SHALL render a circular image element using the `src` and `alt` props.
2. WHEN the Avatar `src` prop is absent or the image fails to load, THE Avatar SHALL render a fallback using the user's initials derived from the `name` prop.
3. THE Avatar SHALL accept a `size` prop with values `sm` (24px), `md` (32px, default), and `lg` (48px).
4. THE AvatarGroup SHALL accept an `avatars` prop (array of avatar data objects) and a `max` prop (integer) and render up to `max` Avatar components in a horizontally overlapping stack.
5. WHEN the number of avatars exceeds `max`, THE AvatarGroup SHALL render a count badge (e.g., "+2") after the last visible Avatar to indicate the overflow count.
6. THE AvatarGroup SHALL ensure each Avatar in the stack has a visible border to separate overlapping images.
7. THE Avatar SHALL have Stories for image, initials-fallback, and all sizes in Storybook with Autodocs enabled.
8. THE AvatarGroup SHALL have Stories for a group within the max limit and a group exceeding the max limit in Storybook with Autodocs enabled.

---

### Requirement 21: TabBar Component

**User Story:** As a developer, I want a TabBar component for horizontal tab navigation, so that I can switch between content views within a screen (e.g., EDIT TRIP / DISCOVERY MODE on the discovery screen; ITINERARY / DISCOVERY / DETAILS on the itinerary screen).

#### Acceptance Criteria

1. THE TabBar SHALL accept a `tabs` prop (array of `{ label: string, value: string }` objects) and render each as a tab button.
2. THE TabBar SHALL accept an `activeTab` prop indicating the currently selected tab value.
3. WHEN a tab is active, THE TabBar SHALL render it with a bottom underline indicator and bold or high-contrast label text.
4. WHEN a tab is inactive, THE TabBar SHALL render it with muted label text and no underline.
5. WHEN a tab button is clicked or activated via keyboard, THE TabBar SHALL call the `onChange` callback with the selected tab's `value`.
6. THE TabBar SHALL use `role="tablist"` on the container and `role="tab"` with `aria-selected` on each tab button.
7. THE TabBar SHALL support keyboard navigation: left/right arrow keys SHALL move focus between tabs.
8. THE TabBar SHALL have Stories for a 2-tab and a 3-tab configuration in Storybook with Autodocs enabled.

---

### Requirement 22: StatBlock Component

**User Story:** As a developer, I want a StatBlock component for displaying labeled metric values, so that I can surface key trip statistics in itinerary day headers (e.g., "DRIVING 4h 20m", "DISTANCE 210 mi", "STOPS 4").

#### Acceptance Criteria

1. THE StatBlock SHALL accept `label` and `value` props and render the label in small uppercase text above the value in larger text.
2. THE StatBlock SHALL accept an optional `icon` prop and render the icon to the left of the label/value pair.
3. THE StatBlock SHALL use Inter font for both label and value text, with the label styled using a smaller size and uppercase letter-spacing.
4. THE StatBlock SHALL have a Story showing a row of three StatBlocks (driving time, distance, stops) in Storybook with Autodocs enabled.

---

### Requirement 23: ItineraryStopItem Component

**User Story:** As a developer, I want an ItineraryStopItem component for rendering individual stops in a trip itinerary list, so that I can display stop details in a consistent, scannable format.

#### Acceptance Criteria

1. THE ItineraryStopItem SHALL accept `stopNumber`, `name`, `time`, `category`, and `rating` props and render them in a single list item layout.
2. THE ItineraryStopItem SHALL render `stopNumber` as a filled circle indicator on the left edge of the item.
3. THE ItineraryStopItem SHALL render `category` as a Badge component (e.g., VIEWPOINT, FOOD) using the appropriate semantic color.
4. THE ItineraryStopItem SHALL render `rating` as a star rating display (e.g., ★★★★☆).
5. THE ItineraryStopItem SHALL accept an optional `hiddenGem` prop (string) that, WHEN provided, renders a visually distinct sub-item callout below the main stop row.
6. THE ItineraryStopItem SHALL render as a `<li>` element and SHALL be usable inside a `<ul>` or `<ol>` list container.
7. THE ItineraryStopItem SHALL have Stories for a standard stop, a stop with a hidden gem callout, and a stop with no rating in Storybook with Autodocs enabled.

---

### Requirement 24: SearchBar Component

**User Story:** As a developer, I want a SearchBar component for location and point-of-interest search, so that I can provide a consistently styled search input in the discovery screen's top navigation area.

#### Acceptance Criteria

1. THE SearchBar SHALL render a text input with a search icon prefix on the left side.
2. THE SearchBar SHALL accept `placeholder`, `value`, and `onChange` props.
3. WHEN the SearchBar `value` prop is non-empty, THE SearchBar SHALL render a clear (×) button on the right side of the input.
4. WHEN the clear button is activated, THE SearchBar SHALL call the `onChange` callback with an empty string value.
5. WHEN the SearchBar receives keyboard focus, THE SearchBar SHALL display a visible focus ring meeting WCAG 2.1 AA requirements.
6. THE SearchBar SHALL set `role="searchbox"` and an `aria-label` on the input element.
7. THE SearchBar SHALL have Stories for empty, with-value (showing clear button), and focused states in Storybook with Autodocs enabled.

---

### Requirement 25: Brand Voice and Terminology Compliance

**User Story:** As a designer or developer, I want all Storybook stories, MDX documentation pages, and UI copy within the design system to use approved RoadDoggs brand terminology and voice, so that the component library consistently reflects the brand identity and never sounds like a generic SaaS product.

#### Acceptance Criteria

1. THE Design_System SHALL use the following approved brand terminology substitutions in all story labels, prop descriptions, example content, and MDX documentation: "Route" (not "Trip"), "Game Plan" (not "Itinerary"), "Spots" (not "Stops"), "Finds" (not "Points of Interest"), "Co-Pilot" (not "AI Assistant"), "Tweak" (not "Edit" or "Modify"), "Build" or "Map Out" (not "Generate"), "Your Routes" (not "Saved Trips"), "Suggestions" or "Picks" (not "Recommendations"), and "Spend" (not "Budget").
2. THE Design_System SHALL NOT use the following banned words in any story label, prop description, example copy, or MDX documentation page: Itinerary, Optimize, Algorithm, Generate, User, Platform, Solution, Leverage, or any phrasing that sounds like a SaaS dashboard.
3. THE Design_System SHALL write all story labels, prop descriptions, and example content in the RoadDoggs tone of voice: concise, emotionally charged, and slightly imperfect — favoring short punchy phrasing over formal or corporate language.
4. WHEN a story requires example copy or placeholder text, THE Design_System SHALL use brand-voice phrases such as "Let's get you on the road.", "Worth the detour", "You'll want to stop here", "Trust this one", "This fits your vibe", or "Less driving. More living." rather than generic lorem ipsum or neutral placeholder text.
5. THE Design_System SHALL use the Caveat font (`$font-caveat`) for any accent or decorative copy within components or story examples that is intended to feel handwritten, personal, or "imperfect but intentional" — consistent with the "Curated Chaos" design principle.
6. IF a new component story or MDX page is added to the Design_System, THEN THE Design_System SHALL review all copy in that story or page for compliance with the approved brand terminology list and banned words list before the story is considered complete.
