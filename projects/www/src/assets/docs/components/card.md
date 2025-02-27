# Card

Le composant `dui-card` est utilisé pour afficher un contenu structuré avec une mise en page claire.

## Utilisation

```html
<dui-card>
  <span slot="title">Titre de la carte</span>
  <span slot="subtitle">Sous-titre de la carte</span>
  <div slot="content">
    Contenu principal de la carte.
  </div>
  <div slot="footer">
    Pied de page de la carte.
  </div>
</dui-card>
```

## Slots disponibles

| Nom        | Description                                       |
|------------|---------------------------------------------------|
| `title`    | Contient le titre de la carte.                    |
| `subtitle` | Contient le sous-titre de la carte.               |
| `content`  | Contenu principal de la carte.                   |
| `footer`   | Pied de page de la carte, souvent utilisé pour actions. |

## Fonctionnalités

- Composant flexible permettant d'afficher divers types de contenu.
- Prend en charge des titres, sous-titres et du contenu additionnel.
- Mise en page responsive avec un design épuré.

---

### Exemple d'utilisation avec du contenu dynamique

```html
<dui-card>
  <span slot="title">Profil utilisateur</span>
  <span slot="subtitle">Informations personnelles</span>
  <div slot="content">
    <p>Nom: Jean Dupont</p>
    <p>Email: jean.dupont@example.com</p>
  </div>
  <div slot="footer">
    <dui-button>Modifier</dui-button>
  </div>
</dui-card>
```

