# Date Picker

Le composant `dui-date-picker` permet de sélectionner une date à l'aide d'un champ de saisie et d'un calendrier déroulant.

## Utilisation

```html
<dui-date-picker [(value)]="selectedDate" label="Date de naissance" required />
```

## Propriétés

| Nom          | Type      | Description                                          | Valeur par défaut    |
|-------------|----------|------------------------------------------------------|----------------------|
| `label`     | `string` | Libellé du champ de saisie.                         | `undefined`         |
| `placeholder` | `string` | Texte affiché en l'absence de valeur sélectionnée.  | `'Select a date'`   |
| `required`  | `boolean` | Indique si la sélection d'une date est obligatoire. | `false`             |
| `disabled`  | `boolean` | Désactive l'interaction avec le champ et le popup.  | `false`             |
| `value`     | `Date`    | Date sélectionnée.                                  | `undefined`         |

## Événements

| Nom          | Type                | Description                                        |
|-------------|--------------------|------------------------------------------------|
| `valueChange` | `EventEmitter<Date>` | Émis lorsqu'une date est sélectionnée.         |

## Comportement

- Lorsque l'utilisateur clique sur le champ, un calendrier apparaît.
- La date sélectionnée est affichée sous le format `Jour Mois Année`.
- Si `required` est activé, l'utilisateur doit sélectionner une date.
- Le composant peut être désactivé via la propriété `disabled`.

---

### Exemple avec une date pré-sélectionnée

```html
<dui-date-picker [(value)]="birthDate" label="Date de naissance" />
```
