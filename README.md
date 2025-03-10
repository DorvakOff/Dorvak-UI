<p align="center">
  A simple and customizable UI library for Angular. Written in TypeScript and TailwindCSS.
</p>

---

[![Use this template](https://img.shields.io/badge/-Use%20this%20template-brightgreen?style=for-the-badge)](https://github.com/DorvakOff/Dorvak-UI-Template)
[![GitHub issues](https://img.shields.io/github/issues/DorvakOff/Dorvak-UI?style=for-the-badge)](https://github.com/DorvakOff/Dorvak-UI/issues)

## Installation

Install the library and its necessary dependencies:

```sh
npm install dorvak-ui
```

## TailwindCSS Configuration

Create or modify the `.postcssrc.json` file at the root of your project to add the TailwindCSS plugin:

```json
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```

## Modification of the `styles.css` file

Add these lines to your `src/styles.css` file:

```css
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap');

@import 'tailwindcss';
@plugin 'tailwindcss-animate';

@source "../node_modules/dorvak-ui";

@tailwind utilities;

/* CSS Variables */
:root {
  --background: hsl(0 0% 100%);
  --foreground: hsl(222.2 84% 4.9%);
  --primary: hsl(221.2 83.2% 53.3%);
  --primary-foreground: hsl(210 40% 98%);
  --secondary: hsl(200 83.2% 53.3%);
  --secondary-foreground: hsl(210 40% 98%);
  --muted: hsl(0 0% 89.76%);
  --muted-foreground: hsl(0 0% 45.1%);
  --accent: hsl(0 0% 96.1%);
  --accent-foreground: hsl(0 0% 9%);
  --destructive: hsl(0 84.2% 60.2%);
  --destructive-foreground: hsl(0 0% 98%);
  --info: hsl(221.2 83.2% 53.3%);
  --info-foreground: hsl(210 40% 98%);
  --warning: hsl(34.34 91.88% 55.42%);
  --warning-foreground: hsl(60 9.1% 97.8%);
  --success: hsl(142.1 76.2% 36.3%);
  --success-foreground: hsl(355.7 100% 97.3%);
  --border: hsl(0 0% 89.8%);
  --card: hsl(0 0% 100%);
  --card-foreground: hsl(0 0% 3.9%);
  --popover: hsl(0 0% 100%);
  --popover-foreground: hsl(222.2 84% 4.9%);
  --input: hsl(214.3 31.8% 91.4%);
  --radius: 0.5rem;
  --ring: hsl(221.2 83.2% 53.3%);
}

/* TailwindCSS custom theme */
@theme {
  --font-roboto: 'Roboto', sans-serif;
  --font-outfit: 'Outfit', sans-serif;
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-success: var(--success);
  --color-success-foreground: var(--success-foreground);
  --color-warning: var(--warning);
  --color-warning-foreground: var(--warning-foreground);
  --color-info: var(--info);
  --color-info-foreground: var(--info-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
  }
}
```

## Usage

Import the `DorvakUiModule` in your Angular module:

```typescript
import { DorvakUiModule } from 'dorvak-ui';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DorvakUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

You can now use the **dorvak-ui** components in your Angular applications.

---

Need help or improvements? Feel free to open an issue or a PR on the GitHub repository! 🎉
