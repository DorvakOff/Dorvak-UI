# Tabs

## Description
Le composant `dui-tabs` permet d'afficher un ensemble d'onglets pour structurer du contenu de manière interactive.

## Utilisation

```html
<dui-tabs>
  <dui-tab title="Onglet 1" selected>
    Contenu de l'onglet 1
  </dui-tab>
  <dui-tab title="Onglet 2">
    Contenu de l'onglet 2
  </dui-tab>
</dui-tabs>
```

## Propriétés

### `dui-tab`

| Nom         | Type      | Description |
|------------|----------|-------------|
| `title`    | `string` | Titre de l'onglet affiché dans la barre de navigation. |
| `selected` | `boolean` (`false` par défaut) | Définit si l'onglet est sélectionné par défaut. |
| `disabled` | `boolean` (`false` par défaut) | Désactive l'onglet et empêche son activation. |

### `dui-tabs`

Aucune propriété spécifique.

## Méthodes publiques

| Nom         | Description |
|------------|-------------|
| `selectTab(tab: TabComponent)` | Sélectionne un onglet donné et désactive les autres. |

## Accessibilité
- Les onglets désactivés ne peuvent pas être sélectionnés.
- Les onglets sélectionnés sont mis en évidence pour faciliter la navigation visuelle.
- La navigation au clavier est optimisée pour améliorer l'expérience utilisateur.
