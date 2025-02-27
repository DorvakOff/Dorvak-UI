[![Use this template](https://img.shields.io/badge/-Use%20this%20template-brightgreen?style=for-the-badge)](https://github.com/DorvakOff/Dorvak-UI-Template)
[![GitHub issues](https://img.shields.io/github/issues/DorvakOff/Dorvak-UI?style=for-the-badge)](https://github.com/DorvakOff/Dorvak-UI/issues)

**dorvak-ui** est une librairie de composants Angular conçue pour être facilement personnalisable et optimisée avec TailwindCSS.

## Installation


Installez la librairie ainsi que ses dépendances nécessaires :

```sh
npm install dorvak-ui lucide-angular
```

## Configuration de TailwindCSS


Créez ou modifiez le fichier `.postcssrc.json` à la racine de votre projet pour ajouter le plugin TailwindCSS :

```json
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```

## Modification du fichier `styles.css`

Ajoutez ces lignes dans votre fichier `src/styles.css` :

```css
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap');

@import 'tailwindcss';
@plugin 'tailwindcss-animate';
@plugin '@tailwindcss/typography';

@tailwind utilities;

/* Variables CSS */
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
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
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

## Utilisation

Importez le module `DorvakUiModule` dans votre module Angular :

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

Vous pouvez maintenant utiliser les composants de **dorvak-ui** dans vos applications Angular

---

Besoin d'aide ou d'améliorations ? N'hésitez pas à ouvrir une issue ou une PR sur le repository GitHub ! 🎉

