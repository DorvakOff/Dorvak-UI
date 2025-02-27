# Alert Modal

Le composant `dui-alert-modal` affiche une boîte de dialogue modale avec un message d'alerte et des boutons d'action.

## Utilisation

```html
<dui-alert-modal 
  title="Suppression" 
  message="Voulez-vous vraiment supprimer cet élément ?"
  confirmText="Oui, supprimer" 
  cancelText="Annuler"
  (confirm)="onConfirm()" 
  (cancel)="onCancel()">
</dui-alert-modal>
```

## Propriétés

| Nom          | Type      | Description                                      | Valeur par défaut |
|--------------|----------|--------------------------------------------------|-------------------|
| `title`      | `string` | Titre affiché en haut de la boîte de dialogue.  | `'Are you sure?'` |
| `message`    | `string` | Message principal affiché dans la boîte.        | `'You are about to delete this item, are you sure?'` |
| `confirmText` | `string` | Texte du bouton de confirmation.                | `'Continue'` |
| `cancelText` | `string` | Texte du bouton d'annulation.                   | `'Cancel'` |

## Événements

| Nom       | Description |
|-----------|-------------|
| `confirm` | Émis lorsque l'utilisateur clique sur le bouton de confirmation. |
| `cancel`  | Émis lorsque l'utilisateur clique sur le bouton d'annulation. |

## Comportement

- La boîte de dialogue est non fermable via un bouton `X`.
- Le bouton "Annuler" annule l'action et ferme la boîte de dialogue.
- Le bouton "Confirmer" valide l'action et déclenche l'événement `confirm`.

---

### Exemple avec suppression d'un élément

```html
<dui-alert-modal 
  title="Supprimer cet élément ?" 
  message="Cette action est irréversible."
  confirmText="Supprimer" 
  cancelText="Annuler"
  (confirm)="handleDelete()" 
  (cancel)="handleCancel()"/>
```

