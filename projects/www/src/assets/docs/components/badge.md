# Badge

Le composant `dui-badge` affiche une étiquette colorée pour indiquer un statut ou une information importante.

## Utilisation

```html
<dui-badge variant="success">Actif</dui-badge>
```

## Propriétés

| Nom       | Type                                                                  | Description                                       | Valeur par défaut |
|-----------|-----------------------------------------------------------------------|---------------------------------------------------|-------------------|
| `variant` | `"primary" \| "secondary" \| "success" \| "warning" \| "destructive"` | Style du badge. | `'primary'` |

## Variantes disponibles

- `primary` : Couleur principale.
- `secondary` : Couleur secondaire.
- `success` : Vert (succès).
- `warning` : Jaune (avertissement).
- `destructive` : Rouge (erreur).

---

### Exemple avec un badge d'erreur

```html
<dui-badge variant="destructive">Échec</dui-badge>
```

