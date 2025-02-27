# Breadcrumb

Le composant `dui-breadcrumb` permet d'afficher un fil d'Ariane facilitant la navigation.

## Utilisation

```html
<dui-breadcrumb [items]="[
  { label: 'Accueil', url: '/' },
  { label: 'Produits', url: '/produits' },
  { label: 'Produit A' }
]"/>
```

## Propriétés

| Nom    | Type               | Description                                      | Valeur par défaut |
|--------|--------------------|--------------------------------------------------|-------------------|
| `items` | `BreadcrumbItem[]` | Liste des éléments du fil d'Ariane.             | `[]` |

### `BreadcrumbItem`

Chaque élément du tableau `items` est un objet ayant les propriétés suivantes :

| Nom       | Type      | Description                                      | Valeur par défaut |
|-----------|----------|--------------------------------------------------|-------------------|
| `label`   | `string` | Texte affiché dans le fil d'Ariane.             | **Obligatoire** |
| `url`     | `string` | Lien vers la page correspondante (optionnel).    | `undefined` |
| `external` | `boolean` | Ouvre le lien dans un nouvel onglet si `true`.  | `false` |

## Fonctionnalités

- Chaque élément est un lien sauf le dernier, qui représente la page active.
- Affiche une icône de séparation entre les éléments.
- Prise en charge des liens externes via `target="_blank"` si `external: true`.

---

### Exemple avec un lien externe

```html
<dui-breadcrumb [items]="[
  { label: 'Accueil', url: '/' },
  { label: 'Documentation', url: 'https://externe.com', external: true },
  { label: 'Guide' }
]"/>
```

