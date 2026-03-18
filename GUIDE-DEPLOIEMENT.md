# 📋 Guide de déploiement — Portfolio + Back-office Netlify CMS

## Ce que tu vas obtenir
- Ton portfolio en ligne à une adresse du type `ton-prenom.netlify.app`
- Un back-office accessible sur `ton-prenom.netlify.app/admin`
- Interface pour modifier textes, images, projets, expériences — **sans toucher au code**

---

## Étape 1 — Créer un compte GitHub (si pas déjà fait)

1. Va sur **github.com** → clique sur "Sign up"
2. Crée un compte avec ton email
3. Vérifie ton email et connecte-toi

---

## Étape 2 — Mettre ton portfolio sur GitHub

1. Une fois connecté sur GitHub, clique sur **"New repository"** (bouton vert)
2. Nomme le repo : `portfolio` (en minuscules)
3. Laisse sur **Public** → clique **"Create repository"**
4. Sur la page suivante, clique **"uploading an existing file"**
5. **Glisse-dépose tout le contenu du dossier `portfolio/`** dans la zone de dépôt
   - `index.html`
   - `favicon.svg`
   - `opengraph.jpg`
   - Le dossier `images/` avec toutes les photos
   - Le dossier `admin/` (avec `index.html` + `config.yml`)
   - Le dossier `_data/` (avec tous les fichiers JSON)
6. En bas, clique **"Commit changes"**

---

## Étape 3 — Créer un compte Netlify

1. Va sur **netlify.com** → clique "Sign up"
2. Choisis **"Sign up with GitHub"** — connecte ton compte GitHub
3. Autorise Netlify à accéder à tes repos

---

## Étape 4 — Déployer le site sur Netlify

1. Sur le dashboard Netlify, clique **"Add new site" → "Import an existing project"**
2. Choisis **GitHub**
3. Sélectionne ton repo `portfolio`
4. Dans les paramètres de déploiement :
   - **Branch to deploy** : `main`
   - **Build command** : laisser vide
   - **Publish directory** : laisser vide (ou mettre `/`)
5. Clique **"Deploy site"**
6. Attends 1-2 minutes → ton site est en ligne ! 🎉

**Personnalise l'adresse :**
- Va dans *Site settings → Domain management → Options → Edit site name*
- Change en `soudaysse` par exemple → ton site sera sur `soudaysse.netlify.app`

---

## Étape 5 — Activer le back-office (Netlify Identity)

1. Dans ton dashboard Netlify, clique sur l'onglet **"Identity"**
2. Clique **"Enable Identity"**
3. Dans la section **"Registration"** → sélectionne **"Invite only"**
   (pour que personne d'autre ne puisse créer un compte)
4. Dans **"Services → Git Gateway"** → clique **"Enable Git Gateway"**

---

## Étape 6 — T'inviter comme administrateur

1. Toujours dans l'onglet **Identity**, clique **"Invite users"**
2. Entre ton adresse email → clique **"Send"**
3. Vérifie ton email → clique sur le lien d'invitation
4. Crée ton mot de passe pour le back-office

---

## Étape 7 — Modifier le fichier config.yml

**Important :** dans le fichier `admin/config.yml`, remplace la ligne :
```
repo: TON-USERNAME/TON-REPO
```
par ton vrai nom d'utilisateur GitHub et ton repo, par exemple :
```
repo: soudaysse/portfolio
```

Fais cette modification directement sur GitHub :
1. Va sur ton repo GitHub → clique sur `admin/config.yml`
2. Clique sur l'icône ✏️ (Edit)
3. Modifie la ligne, puis clique **"Commit changes"**

---

## Étape 8 — Accéder au back-office

1. Va sur `ton-site.netlify.app/admin`
2. Clique **"Login with Netlify Identity"**
3. Connecte-toi avec ton email et mot de passe
4. Tu accèdes à l'interface de gestion ! ✅

---

## Ce que tu peux modifier dans le back-office

| Section | Ce que tu peux changer |
|---|---|
| 👤 Mon Profil | Nom, titre, descriptions, email, téléphone, stats |
| 🗂 Projets | Image, titre, client, catégorie — ajouter / retirer |
| ⚙️ Services | Titre, description, icône de chaque service |
| 💼 Expériences | Postes, dates, descriptions — ajouter de nouvelles |

---

## Comment ça fonctionne concrètement ?

1. Tu te connectes sur `/admin`
2. Tu modifies un texte ou tu changes une image
3. Tu cliques **"Publish"**
4. Netlify met automatiquement à jour le site en 30 secondes
5. Le visiteur voit la nouvelle version

**Aucun code, aucun FTP, aucune installation.** Tout se passe dans le navigateur.

---

## En cas de problème

- **Le back-office ne s'ouvre pas** → vérifier que "Identity" et "Git Gateway" sont activés (Étape 5)
- **"Not authorized"** → vérifier le `repo:` dans `admin/config.yml` (Étape 7)
- **Les changements n'apparaissent pas** → attendre 1-2 min, Netlify redéploie automatiquement
- **Image trop lourde** → compresser sur squoosh.app avant d'uploader

---

*Portfolio SSA — Netlify CMS Setup Guide*
