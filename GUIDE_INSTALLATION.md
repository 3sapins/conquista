# 📦 Guide d'installation sur GitHub

## Étape 1 : Créer le repository

1. Allez sur [github.com](https://github.com)
2. Cliquez sur le bouton **"New"** (ou **"+"** en haut à droite → **"New repository"**)
3. Remplissez les informations :
   - **Repository name :** `conquete-mexique`
   - **Description :** `Jeu pédagogique interactif sur la conquête espagnole du Mexique (1519-1521)`
   - **Public** (pour utiliser GitHub Pages gratuitement)
   - ✅ Cochez **"Add a README file"** (on l'écrasera ensuite)
   - **License :** Creative Commons Zero v1.0 Universal (ou autre selon votre choix)
4. Cliquez sur **"Create repository"**

## Étape 2 : Organiser les fichiers sur votre ordinateur

Créez cette structure de dossiers :

```
conquete-mexique/
├── index.html
├── README.md
├── .gitignore
├── GUIDE_INSTALLATION.md
├── js/
│   ├── game_data.js
│   └── game_logic.js
└── images/
    └── [Copiez ici vos 12 images]
```

### Créer les dossiers

**Sur Windows :**
1. Créez un dossier `conquete-mexique` sur votre bureau
2. À l'intérieur, créez deux sous-dossiers : `js` et `images`
3. Placez les fichiers :
   - `index.html` à la racine
   - `README.md` à la racine
   - `.gitignore` à la racine
   - `game_data.js` et `game_logic.js` dans le dossier `js/`
   - Les 12 images dans le dossier `images/`

**Sur Mac/Linux :**
```bash
mkdir conquete-mexique
cd conquete-mexique
mkdir js images
# Puis placez les fichiers comme indiqué ci-dessus
```

## Étape 3 : Uploader les fichiers sur GitHub

### Option A : Via l'interface web (plus simple)

1. Allez sur votre repository GitHub
2. Cliquez sur **"Add file"** → **"Upload files"**
3. Glissez-déposez tous vos fichiers et dossiers
4. Ajoutez un message de commit : `"Initial commit - Jeu pédagogique complet"`
5. Cliquez sur **"Commit changes"**

### Option B : Via Git en ligne de commande

```bash
cd conquete-mexique
git init
git add .
git commit -m "Initial commit - Jeu pédagogique complet"
git branch -M main
git remote add origin https://github.com/VOTRE-USERNAME/conquete-mexique.git
git push -u origin main
```

## Étape 4 : Activer GitHub Pages

1. Allez dans votre repository sur GitHub
2. Cliquez sur **"Settings"** (en haut à droite)
3. Dans le menu de gauche, cliquez sur **"Pages"**
4. Sous **"Source"**, sélectionnez :
   - **Branch :** `main`
   - **Folder :** `/ (root)`
5. Cliquez sur **"Save"**
6. Attendez 1-2 minutes

Votre jeu sera accessible à :
```
https://VOTRE-USERNAME.github.io/conquete-mexique/
```

## Étape 5 : Vérifier que tout fonctionne

1. Ouvrez l'URL de votre GitHub Pages
2. Vérifiez que :
   - ✅ Le jeu se charge correctement
   - ✅ Les images s'affichent
   - ✅ Les choix fonctionnent
   - ✅ Les jauges se mettent à jour
   - ✅ Le jeu va jusqu'au bout

## Étape 6 : Ajouter l'URL dans le README

1. Modifiez le fichier `README.md`
2. Remplacez `[URL à ajouter]` par votre vraie URL GitHub Pages
3. Commitez le changement

## 🔧 En cas de problème

### Les images ne s'affichent pas
- Vérifiez que les noms de fichiers correspondent exactement (majuscules/minuscules)
- Vérifiez que les images sont bien dans le dossier `images/`
- Vérifiez les extensions (.jpg, .png, .avif, .jpeg)

### Le jeu ne démarre pas
- Ouvrez la console du navigateur (F12)
- Regardez les erreurs JavaScript
- Vérifiez que les chemins dans `index.html` sont corrects :
  ```html
  <script src="js/game_data.js"></script>
  <script src="js/game_logic.js"></script>
  ```

### GitHub Pages ne fonctionne pas
- Attendez 5-10 minutes (le déploiement peut prendre du temps)
- Vérifiez que le repository est bien **Public**
- Vérifiez dans Settings → Pages que la source est bien configurée

## 📝 Commandes Git utiles

```bash
# Voir le statut de vos fichiers
git status

# Ajouter tous les fichiers modifiés
git add .

# Créer un commit
git commit -m "Description de vos modifications"

# Envoyer sur GitHub
git push

# Récupérer les derniers changements
git pull
```

## 🎉 C'est terminé !

Votre jeu est maintenant en ligne et accessible au monde entier !

Vous pouvez partager l'URL avec :
- Vos collègues enseignants
- Vos élèves
- Votre école
- La communauté éducative

N'oubliez pas de mentionner l'URL dans vos supports pédagogiques ! 🚀
