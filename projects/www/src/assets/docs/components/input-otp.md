# Input OTP

## Description
Le composant `dui-input-otp` permet de saisir un code OTP (One-Time Password) à 6 chiffres. Il gère la navigation automatique entre les champs, le collage d'un code complet et émet un événement lorsque le code est entièrement saisi.

## Utilisation

```html
<dui-input-otp (codeEntered)="handleOtpEntered($event)" />
```

## Propriétés

Ce composant ne possède pas de propriétés d'entrée spécifiques.

## Événements

| Nom           | Type                     | Description |
|--------------|--------------------------|-------------|
| `codeEntered` | `EventEmitter<string>`    | Événement émis lorsque les 6 chiffres du code OTP sont saisis. |

## Fonctionnalités

- **Navigation automatique** : Lorsqu'un chiffre est saisi, le focus passe automatiquement au champ suivant.
- **Suppression automatique** : Effacer un champ vide ramène le focus au champ précédent.
- **Collage d'un code** : Permet de coller un code OTP complet directement dans les champs.

## Accessibilité

- Les champs sont des `input` standards avec un `pattern` limitant l'entrée aux chiffres.
- L'attribut `maxlength` est défini à `1` pour éviter les entrées incorrectes.
- La navigation entre les champs est automatique pour une expérience fluide.

## Méthodes internes

| Nom          | Description |
|-------------|-------------|
| `onType(index: number)` | Gère la saisie de chaque chiffre et le déplacement du focus. |
| `onPaste(event: ClipboardEvent)` | Permet de coller un code OTP complet et répartir les chiffres automatiquement. |
