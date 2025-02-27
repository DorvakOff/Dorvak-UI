# Avatar

Le composant `dui-avatar` affiche une image de profil avec une alternative textuelle en cas d'erreur de chargement.

## Utilisation

```html
<dui-avatar src="https://exemple.com/avatar.jpg" alt="Utilisateur" fallback="U" />
```

## Propriétés

| Nom       | Type      | Description                                       | Valeur par défaut |
|-----------|----------|---------------------------------------------------|-------------------|
| `src`     | `string` | URL de l'image à afficher.                      | **Obligatoire**  |
| `alt`     | `string` | Texte alternatif pour l'image.                   | `'avatar'`       |
| `fallback` | `string` | Texte affiché si l'image ne charge pas.          | `''`             |

## Comportement

- Si l'image définie par `src` est invalide ou ne charge pas, le texte de `fallback` est affiché dans un cercle coloré.
- L'avatar a une taille fixe de `40px` (10 `rem`).
- L'image est affichée en mode `fill` pour s'adapter au conteneur.

---

### Exemple avec une image invalide

```html
<dui-avatar src="https://exemple.com/missing.jpg" fallback="JD" />
```

Dans cet exemple, si l'image ne charge pas, les initiales "JD" seront affichées dans un cercle.

