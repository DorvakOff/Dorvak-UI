# Switch

## Description
Le composant `dui-switch` permet d'afficher un interrupteur (toggle) interactif pour activer ou désactiver une option.

## Utilisation

```html
<dui-switch
  [checked]="isActive"
  [disabled]="false"
  label="Activer l'option"
  (checkedChange)="onToggle($event)"
/>
```

## Propriétés

| Nom             | Type                  | Description |
|----------------|----------------------|-------------|
| `checked`      | `boolean` (`false` par défaut) | Indique si l'interrupteur est activé ou non. |
| `label`        | `string`              | Texte affiché à côté de l'interrupteur. |
| `labelPosition` | `'left' | 'right'` (`'right'` par défaut) | Position du label par rapport au switch. |
| `name`         | `string`              | Nom de l'input (utile pour les formulaires). |
| `disabled`     | `boolean` (`false` par défaut) | Désactive l'interrupteur s'il est activé. |

## Événements

| Nom         | Type                   | Description |
|------------|------------------------|-------------|
| `checkedChange` | `EventEmitter<boolean>` | Événement déclenché lorsqu'un changement d'état a lieu. |

## Méthodes publiques

| Nom                | Description |
|-------------------|-------------|
| `toggle()` | Inverse l'état de l'interrupteur. |

## Accessibilité
- Le switch est accessible via la touche `Espace` et `Entrée`.
- Il est désactivé lorsqu'il est en mode `disabled`.
- L'état du switch est reflété visuellement par son arrière-plan et sa position.
