# 🛠 Guide d'installation — Tina CMS sur Vercel

## Ce que tu vas obtenir
Une interface back office accessible sur `ton-site.vercel.app/admin`
pour modifier tes projets, services, expériences et profil.

---

## ÉTAPE 1 — Ajouter les fichiers à ton repo GitHub

Copie ces fichiers/dossiers dans la **racine** de ton repo GitHub :

```
ton-repo/
├── tina/
│   └── config.ts        ← configuration du CMS
├── package.json          ← dépendances
├── vercel.json           ← configuration Vercel
└── .gitignore
```

---

## ÉTAPE 2 — Créer un compte Tina Cloud

1. Va sur https://app.tina.io
2. Clique **Sign up** → connecte-toi avec GitHub
3. Clique **New Project**
4. Sélectionne ton repo GitHub (ex: `portfolio-ssa`)
5. Tina génère automatiquement deux clés :
   - `Client ID`
   - `Token`

---

## ÉTAPE 3 — Ajouter les variables d'environnement sur Vercel

1. Va sur https://vercel.com → ton projet → **Settings → Environment Variables**
2. Ajoute ces 3 variables :

| Nom | Valeur |
|-----|--------|
| `NEXT_PUBLIC_TINA_CLIENT_ID` | (Client ID copié depuis app.tina.io) |
| `TINA_TOKEN` | (Token copié depuis app.tina.io) |
| `GITHUB_BRANCH` | `main` |

3. Clique **Save**

---

## ÉTAPE 4 — Redéployer

1. Va dans **Deployments** sur Vercel
2. Clique sur les **3 points** du dernier déploiement → **Redeploy**
3. Attends ~2 minutes

---

## ÉTAPE 5 — Accéder au back office

Ouvre : `https://ton-site.vercel.app/admin`

Tu verras l'interface Tina avec 4 sections :
- 👤 Profil
- 📁 Projets
- 🛎 Services
- 💼 Expériences

Chaque modification sauvegarde directement dans GitHub
et Vercel redéploie automatiquement en ~30 secondes.

---

## En cas de problème

- Le build échoue → vérifie que `package.json` et `vercel.json` sont bien à la racine
- Page `/admin` introuvable → attends que le build soit terminé sur Vercel
- Erreur d'authentification → vérifie les variables d'environnement (pas d'espace autour des valeurs)
