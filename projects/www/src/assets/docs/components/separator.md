# Separator

## Description
Le composant `dui-separator` permet d'afficher une ligne de séparation horizontale ou verticale pour structurer visuellement les éléments d'une interface utilisateur.

## Utilisation

```html
<dui-separator />
<dui-separator [vertical]="true" />
```

## Propriétés

| Nom       | Type      | Description |
|----------|----------|-------------|
| `vertical` | `boolean` (`false` par défaut) | Définit si le séparateur est vertical (`true`) ou horizontal (`false`). |

## Accessibilité
- Le composant utilise un élément `<div>` sans contenu textuel pour une séparation purement visuelle.
- Peut être stylisé via les classes CSS pour mieux s'intégrer au design général.
