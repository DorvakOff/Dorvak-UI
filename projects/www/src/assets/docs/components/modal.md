# Modal

## Description
Le composant `dui-modal` permet d'afficher une boîte de dialogue modale avec un fond semi-transparent. Il supporte la fermeture par clic extérieur, par touche `Échap`, et inclut une gestion avancée des animations d'ouverture et de fermeture.

## Utilisation

```html
<dui-modal #modal closeable="true" allowClickOutside="true" (onClose)="onModalClose()">
  <div slot="title">Titre du Modal</div>
  <div slot="subtitle">Sous-titre</div>
  <div slot="content">Contenu du modal...</div>
  <div slot="footer">
    <dui-button (click)="modal.close()">Fermer</dui-button>
  </div>
</dui-modal>
```

## Propriétés

| Nom                 | Type                        | Description |
|---------------------|---------------------------|-------------|
| `closeable`        | `boolean` (`true` par défaut) | Indique si le modal peut être fermé par un bouton. |
| `allowClickOutside` | `boolean` (`true` par défaut) | Autorise la fermeture du modal par un clic en dehors. |
| `allowClose`       | `Function \| null` (`() => true` par défaut) | Fonction de validation avant fermeture. |

## Événements

| Nom       | Type                | Description |
|----------|---------------------|-------------|
| `onClose` | `EventEmitter<void>` | Événement déclenché lors de la fermeture du modal. |

## Méthodes publiques

| Nom       | Description |
|----------|-------------|
| `open()`  | Ouvre le modal. |
| `close()` | Ferme le modal. |

## Accessibilité
- Supporte la fermeture via la touche `Échap`.
- Gestion du focus pour améliorer l'expérience utilisateur.
- Empêche le défilement de la page lors de l'affichage du modal.
