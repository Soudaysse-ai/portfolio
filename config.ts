import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.GITHUB_BRANCH || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",

  build: {
    outputFolder: "admin",
    publicFolder: ".",
  },

  media: {
    tina: {
      mediaRoot: "images/uploads",
      publicFolder: ".",
    },
  },

  schema: {
    collections: [

      // ─── PROFIL ───────────────────────────────────────────
      {
        name: "profil",
        label: "Profil",
        path: "_data",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
          globalTemplate: "profil",
        },
        match: { include: "profil" },
        fields: [
          { type: "string", name: "email", label: "Email" },
          { type: "string", name: "telephone", label: "Téléphone" },
          { type: "number", name: "annees_exp", label: "Années d'expérience" },
          { type: "number", name: "nb_projets", label: "Nombre de projets" },
          { type: "string", name: "titre_fr", label: "Titre (FR)" },
          { type: "string", name: "titre_en", label: "Titre (EN)" },
          { type: "string", name: "tagline_fr", label: "Tagline (FR)", ui: { component: "textarea" } },
          { type: "string", name: "tagline_en", label: "Tagline (EN)", ui: { component: "textarea" } },
          { type: "string", name: "localisation_fr", label: "Localisation (FR)" },
          { type: "string", name: "localisation_en", label: "Localisation (EN)" },
          { type: "string", name: "linkedin", label: "URL LinkedIn" },
        ],
      },

      // ─── PROJETS ──────────────────────────────────────────
      {
        name: "projets",
        label: "Projets",
        path: "_data/projets",
        format: "json",
        fields: [
          { type: "string", name: "titre_fr", label: "Titre (FR)" },
          { type: "string", name: "titre_en", label: "Titre (EN)" },
          { type: "string", name: "client_fr", label: "Client (FR)" },
          { type: "string", name: "client_en", label: "Client (EN)" },
          {
            type: "string",
            name: "categorie",
            label: "Catégorie",
            options: [
              { label: "Réseaux Sociaux", value: "social" },
              { label: "Création de Contenu", value: "content" },
              { label: "Marketing", value: "marketing" },
              { label: "Vidéo", value: "video" },
              { label: "Design", value: "design" },
              { label: "Web", value: "web" },
            ],
          },
          { type: "image", name: "image", label: "Image du projet" },
          { type: "number", name: "ordre", label: "Ordre d'affichage" },
          { type: "boolean", name: "actif", label: "Actif" },
        ],
      },

      // ─── SERVICES ─────────────────────────────────────────
      {
        name: "services",
        label: "Services",
        path: "_data/services",
        format: "json",
        fields: [
          { type: "string", name: "icone", label: "Icône (emoji)" },
          { type: "string", name: "titre_fr", label: "Titre (FR)" },
          { type: "string", name: "titre_en", label: "Titre (EN)" },
          { type: "string", name: "desc_fr", label: "Description (FR)", ui: { component: "textarea" } },
          { type: "string", name: "desc_en", label: "Description (EN)", ui: { component: "textarea" } },
          { type: "number", name: "ordre", label: "Ordre d'affichage" },
        ],
      },

      // ─── EXPÉRIENCES ──────────────────────────────────────
      {
        name: "experiences",
        label: "Expériences",
        path: "_data/experiences",
        format: "json",
        fields: [
          {
            type: "string",
            name: "type",
            label: "Type",
            options: [
              { label: "Emploi", value: "emploi" },
              { label: "Freelance", value: "freelance" },
              { label: "Formation", value: "formation" },
            ],
          },
          { type: "string", name: "poste_fr", label: "Poste (FR)" },
          { type: "string", name: "poste_en", label: "Poste (EN)" },
          { type: "string", name: "entreprise", label: "Entreprise / Établissement" },
          { type: "string", name: "date_debut_fr", label: "Date début (FR)", ui: { description: "Ex : Nov 2024" } },
          { type: "string", name: "date_debut_en", label: "Date début (EN)" },
          { type: "string", name: "date_fin_fr", label: "Date fin (FR)", ui: { description: "Laisser vide si poste actuel" } },
          { type: "string", name: "date_fin_en", label: "Date fin (EN)" },
          { type: "boolean", name: "actuel", label: "Poste actuel ?" },
          { type: "string", name: "desc_fr", label: "Description (FR)", ui: { component: "textarea" } },
          { type: "string", name: "desc_en", label: "Description (EN)", ui: { component: "textarea" } },
          { type: "number", name: "ordre", label: "Ordre d'affichage" },
        ],
      },

    ],
  },
});
