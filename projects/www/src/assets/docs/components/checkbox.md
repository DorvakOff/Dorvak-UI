# Checkbox

Le composant `dui-checkbox` permet d'afficher une case à cocher personnalisée.

## Utilisation

```html
<dui-checkbox [(ngModel)]="isChecked" label="Accepter les conditions"/>
```

## Propriétés

| Nom            | Type      | Description                                         | Valeur par défaut |
|---------------|----------|-----------------------------------------------------|-------------------|
| `label`       | `string` | Libellé affiché à côté de la case à cocher.       | `''`             |
| `labelPosition` | `'left' \| 'right'` | Position du label par rapport à la case. | `'right'`         |
| `name`        | `string` | Nom du champ utilisé dans un formulaire.           | `''`             |
| `disabled`    | `boolean` | Désactive la case à cocher.                       | `false`          |
| `checked`     | `boolean` | Valeur de la case à cocher (cochée ou non).        | `false`          |

## Événements

| Nom            | Type                 | Description                           |
|---------------|----------------------|---------------------------------------|
| `checkedChange` | `EventEmitter<boolean>` | Émis lorsque la valeur change. |

## Fonctionnalités

- Prise en charge de `ngModel` pour la liaison bidirectionnelle.
- Gestion de l'état `disabled`.
- Icône de validation lorsque la case est cochée.

---

### Exemple avec `ngModel`

```html
<dui-checkbox [(ngModel)]="termsAccepted" label="J'accepte les termes et conditions"/>
```
