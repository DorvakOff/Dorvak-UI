# Link

## Description
Le composant `dui-link` est un composant Angular permettant de créer des liens stylisés avec une apparence cohérente dans l'application.

## Utilisation

```html
<dui-link href="https://example.com">
  Cliquez ici
</dui-link>
```

## Propriétés

| Nom      | Type     | Par défaut | Description |
|----------|---------|------------|-------------|
| `href`   | `string` | `''`       | URL vers laquelle le lien pointe. |
| `target` | `string` | `'_blank'` | Cible du lien (`_self`, `_blank`, `_parent`, `_top`). |

## Accessibilité
- Le lien est affiché avec une couleur distincte et un effet au survol.
- Il est possible d'utiliser `target="_blank"` pour ouvrir le lien dans un nouvel onglet.
- L'utilisation de `ng-content` permet d'intégrer du texte ou d'autres éléments accessibles à l'intérieur du lien.
