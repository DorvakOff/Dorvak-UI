# AlertComponent

Le composant `AlertComponent` est utilisé pour afficher des alertes avec différents styles et options.

## Utilisation

```typescript
import { AlertComponent } from 'path-to-alert-component';
```

### Exemple

```html
<dui-alert variant="success" icon="check-circle" closable>
  <span slot="title">Succès</span>
  Votre opération a été réalisée avec succès.
</dui-alert>
```

## Propriétés

| Propriété | Type | Description | Valeur par défaut |
|-----------|------|-------------|-------------------|
| `variant` | `Variant` | Le style de l'alerte. | `'primary'` |
| `icon` | `string \| readonly LucideIconNode[] \| undefined` | L'icône à afficher dans l'alerte. | `undefined` |
| `closable` | `boolean` | Indique si l'alerte peut être fermée par l'utilisateur. | `false` |

### Variants

Les valeurs possibles pour la propriété `variant` sont :

- `primary`
- `secondary`
- `success`
- `destructive`
- `warning`
- `info`

## Méthodes

### `dismiss()`

Ferme l'alerte.

## Slots

- `title`: Contenu à afficher comme titre de l'alerte.
- `default`: Contenu principal de l'alerte.

## Exemple Complet

```html
<dui-alert variant="warning" icon="alert-triangle" closable>
  <span slot="title">Attention</span>
  Ceci est un message d'avertissement.
</dui-alert>
```
