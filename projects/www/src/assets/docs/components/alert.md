# Alert

Le composant `dui-alert` affiche un message d'alerte avec des variantes, une icône optionnelle et un bouton de fermeture.

## Utilisation

```html
<dui-alert variant="success" icon="check" closable>
  <span slot="title">Succès !</span>
  Votre action a été réalisée avec succès.
</dui-alert>
```

## Propriétés

| Nom       | Type                                          | Description                                      | Valeur par défaut |
|-----------|-----------------------------------------------|--------------------------------------------------|-------------------|
| `variant` | `"primary" \| "secondary" \| "success" \| "destructive" \| "warning" \| "info"` | Définit le style de l'alerte. | `"primary"` |
| `icon`    | `string \| readonly LucideIconNode[] \| undefined` | Icône affichée à gauche du message. | `undefined` |
| `closable` | `boolean`                                   | Affiche un bouton pour fermer l'alerte. | `false` |

## Slots

| Nom      | Description |
|----------|-------------|
| `title`  | Titre affiché en gras dans l'alerte. |

## Comportement

- Si `closable` est activé, un bouton permettant de fermer l'alerte apparaît en haut à droite.
- Si `icon` est défini, une icône est affichée à gauche du contenu.
- Le style de l'alerte change en fonction de la variante sélectionnée.

## Variantes disponibles

Les variantes définissent les couleurs de l'alerte :

- `primary` : Couleur principale.
- `secondary` : Couleur secondaire.
- `success` : Vert (succès).
- `destructive` : Rouge (erreur).
- `warning` : Jaune (avertissement).
- `info` : Bleu (information).

---

### Exemple avec une alerte destructrice

```html
<dui-alert variant="destructive" icon="alert-triangle" closable>
  <span slot="title">Erreur</span>
  Une erreur s'est produite lors du traitement de votre demande.
</dui-alert>
```
