# dorvak-ui

**dorvak-ui** est une librairie de composants Angular conçue pour être facilement personnalisable et optimisée avec TailwindCSS.

## Installation

Installez la librairie ainsi que ses dépendances nécessaires :

```sh
npm install dorvak-ui
```

## Configuration de TailwindCSS

Assurez-vous d'utiliser **TailwindCSS v3**. Si ce n'est pas déjà fait, initialisez TailwindCSS avec un fichier TypeScript :

```sh
npx tailwindcss init -p --ts
```

Ensuite, remplacez le contenu de `tailwind.config.ts` par :

```ts
import type { Config } from 'tailwindcss';

import tailwindcss_animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{html,ts}",
    "node_modules/dorvak-ui/**/*",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))'
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          foreground: 'hsl(var(--warning-forground))'
        },
        info: {
          DEFAULT: 'hsl(var(--info))',
          foreground: 'hsl(var(--info-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        input: 'hsl(var(--input))',
        border: 'hsl(var(--border))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
    }
  },
  plugins: [tailwindcss_animate],
};
export default config;

```

## Modification du fichier `styles.css`

Ajoutez ces lignes dans votre fichier `src/styles.css` :

```css
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap');

@import "dorvak-ui/src/lib/themes/default.css";

@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: Roboto, sans-serif;
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

## Utilisation

Importez les modules nécessaires dans votre module Angular :

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DorvakUiModule} from 'dorvak-ui';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DorvakUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

Vous pouvez maintenant utiliser les composants de **dorvak-ui** dans vos templates Angular.

---

Besoin d'aide ou d'améliorations ? N'hésitez pas à ouvrir une issue ou une PR sur le repository GitHub ! 🎉

