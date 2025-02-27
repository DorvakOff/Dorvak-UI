# Dropdown Menu

Le composant `dui-dropdown-menu` permet d'afficher une liste d'options dans un menu déroulant, accessible via un bouton.

## Utilisation

```html
<dui-dropdown-menu label="Options">
  <dui-dropdown-item>Élément 1</dui-dropdown-item>
  <dui-dropdown-item>Élément 2</dui-dropdown-item>
  <dui-dropdown-item disabled>Élément désactivé</dui-dropdown-item>
</dui-dropdown-menu>
```

## Propriétés

| Nom           | Type      | Description                                          | Valeur par défaut |
|--------------|----------|------------------------------------------------------|-------------------|
| `label`      | `string` | Texte du bouton déclencheur du menu.                | **Obligatoire**  |
| `disabled`   | `boolean` | Désactive l'interaction avec le menu.               | `false`          |
| `buttonClass` | `string` | Classes CSS supplémentaires pour le bouton.         | `''`             |

## Comportement

- Un clic sur le bouton ouvre ou ferme le menu déroulant.
- Le menu se ferme automatiquement lorsqu'on clique en dehors.
- Si l'espace en dessous est insuffisant, le menu s'affiche au-dessus du bouton.

---

# DropdownItem

Le composant `DropdownItem` représente un élément d'un `DropdownMenu`.

## Utilisation

```html
<dui-dropdown-item (click)="action()">Élément cliquable</dui-dropdown-item>
```

## Propriétés

| Nom       | Type      | Description                         | Valeur par défaut |
|-----------|----------|-------------------------------------|-------------------|
| `disabled` | `boolean` | Désactive l'interaction avec l'élément. | `false`          |

## Comportement

- Lorsqu'un élément est cliqué, le menu se ferme automatiquement.
- Les éléments désactivés ne peuvent pas être sélectionnés.

---

### Exemple complet

```html
<dui-dropdown-menu label="Menu">
  <dui-dropdown-item (click)="doSomething()">Action 1</dui-dropdown-item>
  <dui-dropdown-item disabled>Action désactivée</dui-dropdown-item>
</dui-dropdown-menu>
```
