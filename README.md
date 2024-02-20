# clonyx

A clone of [onyx, a design system](https://github.com/schwarzit/onyx).

> [!NOTE]
> This project is in a very early stage of development.

---

**About:**

There is the reference implementation of the design system developed by Schwarz IT:

- vue version, https://github.com/schwarzit/onyx

And these implementations based on the design system:

- low-end htmx version, https://github.com/hastebrot/clonyx/tree/main/onyx-htmx
- high-end react version, https://github.com/hastebrot/clonyx/tree/main/onyx-react

**License:**

Onyx is licensed under the "Apache License 2.0", https://github.com/schwarzit/onyx/blob/main/LICENSE.txt.

**Motivation:**


documentation, infrastructure, dev (requires technical expertise), ux (requires ux/ui design), po (requires project management)

component tests, screenshot tests, storybook

token layers:
- global tokens, e.g. `onyx-color-universal-white`
- semantic tokens, e.g. `onyx-color-surface-bg-blank`
- component tokens, e.g. `onyx-component-button-primary-bg-hover`

component states, densities, unit system, grid system with breakpoints, colors, elevation, figma designs, applicable ARIA patterns from accessiblity

- `onyx/apps/docs/`: documentation using vitepress. also includes a `vitepress-theme`
- `onyx/packages/figma-utils/`: CLI utility to import data from the figma API, e.g. variables as CSS and SCSS.
- `onyx/packages/headless/`, library for headless UI components in vue.
- `onyx/packages/icons/`, SVG icon assets.
- `onyx/packages/sit-onyx/playwright/snapshots/`: UI screenshots for regression testing.
- `onyx/packages/sit-onyx/src/components/`
- `onyx/packages/sit-onyx/src/styles/`

**Status:**

| packages/sit-onyx/src/components | onyx-htmx | onyx-react |
| -------------------------------- | --------- | ---------- |
| OnyxButton                       | TODO      | TODO       |
| OnyxCheckbox                     | TODO      | TODO       |
| OnyxCheckboxGroup                | TODO      | TODO       |
| OnyxHeadline                     | TODO      | TODO       |
| OnyxIcon                         | TODO      | TODO       |
| OnyxRadioButton                  | TODO      | TODO       |
| OnyxRadioButtonGroup             | TODO      | TODO       |

| packages/sit-onyx/src/styles | onyx-htmx | onyx-react |
| ---------------------------- | --------- | ---------- |
| variables-dark.css           | TODO      | TODO       |
| variables-light.css          | TODO      | TODO       |
| variables-onyx.css           | TODO      | TODO       |
