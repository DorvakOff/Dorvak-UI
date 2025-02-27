# Button

Le composant `dui-button` permet d'afficher un bouton interactif avec différentes variantes et tailles.

## Utilisation

```html
<dui-button variant="primary" size="default">Cliquez-moi</dui-button>
```

## Propriétés

| Nom            | Type                                        | Description                                      | Valeur par défaut |
|---------------|-------------------------------------------|------------------------------------------------|-------------------|
| `variant`     | `'primary' \| 'secondary' \| 'success' \| 'destructive' \| 'warning' \| 'info' \| 'link' \| 'ghost' \| 'outline'` | Style du bouton. | `'primary'` |
| `size`        | `'default' \| 'sm' \| 'lg' \| 'icon'`      | Taille du bouton. | `'default'` |
| `icon`        | `string`                                  | Icône affichée dans le bouton. | `undefined` |
| `iconPosition` | `'left' \| 'right'`                       | Position de l'icône par rapport au texte. | `'right'` |
| `disabled`    | `boolean`                                 | Désactive le bouton si `true`. | `false` |
| `loading`     | `boolean`                                 | Affiche un indicateur de chargement si `true`. | `false` |
| `submit`      | `boolean`                                 | Définit le bouton comme un bouton de soumission de formulaire. | `false` |
| `buttonClass` | `string`                                  | Classe CSS personnalisée. | `''` |

## Variantes disponibles

- `primary` : Bouton principal avec la couleur principale.
- `secondary` : Bouton secondaire.
- `success` : Bouton vert pour les actions réussies.
- `destructive` : Bouton rouge pour les actions dangereuses.
- `warning` : Bouton jaune pour les avertissements.
- `info` : Bouton bleu pour les informations.
- `link` : Bouton sous forme de lien.
- `ghost` : Bouton transparent sans bordure.
- `outline` : Bouton avec contour visible.

---

### Exemple avec une icône et un état de chargement

```html
<dui-button variant="success" icon="check" loading>Validation</dui-button>
```
