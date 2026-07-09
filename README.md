# VCARD - Portfolio Personnel

Ce projet est un site web personnel (VCARD) structuré pour présenter mon profil, mon parcours, mes compétences et mes articles de blog. Le site est entièrement statique et optimisé pour être hébergé facilement (via GitHub Pages).


## Déploiement en Ligne

Le site est accessible en ligne à l'adresse suivante :  

https://mustapha-stack.github.io/vCard

*(Hébergé via GitHub Pages à partir du dossier `/docs`)*

## 📁 Structure du Projet

Voici l'organisation des fichiers du projet :

```text
VCARD/
├── .venv/                  # Environnement virtuel (à ignorer pour le déploiement)
├── 📁 css/                 # Feuilles de style pour chaque page
│   ├── blog.css
│   ├── contact.css
│   ├── cv.css
│   ├── index.css
│   ├── portfolio.css
│   ├── structure.css       # Styles généraux de la structure (header, footer, nav)
│   └── sur-mois.css         
├── 📁 docs/                # Pages HTML principales du site (Hébergement)
│   ├── index.html          # Page d'accueil
│   ├── sur-moi.html        # Présentation personnelle
│   ├── cv.html             # Curriculum Vitae
│   ├── portfolio.html      # Projets réalisés
│   ├── blog.html           # Articles et actualités
│   └── contact.html        # Formulaire de contact
├── 📁 image/               # Médias et illustrations
│   └── autochtones_quebec.jpg
└── structure.js            # Pour éviter la duplication de code et l'affichage des éléments réutilisables sur toutes les pages HTML 
```

##  Aperçu des Pages

*   **Accueil (`index.html`)** : Point d'entrée du site avec une introduction rapide.
*   **Sur moi (`sur-moi.html`)** : Détails sur mes passions, mes valeurs et mon parcours.
*   **CV (`cv.html`)** : Expériences professionnelles et compétences techniques.
*   **Portfolio (`portfolio.html`)** : Galerie de mes réalisations.
*   **Blog (`blog.html`)** : Partage d'articles et de réflexions.
*   **Contact (`contact.html`)** : Moyen de me joindre directement.

## Technologies Utilisées

*   **HTML5** : Structure sémantique des pages.
*   **CSS3** : Design adaptatif (*responsive*) et mise en page personnalisée.
*   **JavaScript (Vanille)** : Gestion de la structure dynamique et de l'interactivité.

## Installation Locale

Pour consulter et modifier le projet sur votre machine :

1. Clonez ou téléchargez le dossier du projet.
2. Ouvrez le dossier dans votre éditeur de code (ex: VS Code).
3. Lancez le fichier `docs/index.html` dans votre navigateur (ou utilisez l'extension *Live Server*).


## Optimisation SEO sur la page 

<meta name="description" content="Bienvenue sur le  vCard de Mustapha. Futur diplômé en AEC Internet des objets (IoT) et Intelligence Artificielle, découvrez mon profil et mes compétences.">

La balise <meta name="description"> sert à fournir un résumé textuel du contenu de votre page web aux moteurs de recherche


