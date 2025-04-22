# 🚀 **Fonctionnalités principales à intégrer dans le système de gestion des unités et des tours :**

---

## 🧑‍💼 **Gestion des unités par le MJ**
- **Responsabilité du MJ** :  
  Le Maître de Jeu (MJ) est responsable du déplacement des unités sur la carte 3D. Les utilisateurs ne peuvent effectuer que 7 actions par semaine, et ces actions seront grisées tant qu'elles n'ont pas été confirmées par le MJ.
  
- **Annulation d'actions** :  
  Si une action est annulée, elle sera supprimée de Firestore et remplacée par la nouvelle action effectuée.
  
- **Tour suivant** :  
  Un bouton dédié permettra au MJ/Admin de passer au tour suivant. Cela sauvegarde le tour actuel dans un dossier dédié (ex. `Tour/Tour1`) et remplace les anciennes données du tour dans Firestore.

---

## 🖼️ **Base d'images pour les unités (modèles 2D)**
- **Stockage des unités en images 2D** :  
  Toutes les unités seront stockées sous forme d'images 2D dans une base d'images sur le serveur. Chaque image est associée à un script qui définit ses attributs (rayon d'action, portée des armes, etc.).
  
- **Gestion des attributs** :  
  Chaque unité aura un rayon d'action, affiché dynamiquement selon les données de l'unité et de ses armes.

---

## 📏 **Portée et action des unités**
- **Portée dynamique** :  
  Chaque unité aura un rayon d'action (ex : DCA, avion), et ce rayon sera affiché dynamiquement. L'interface devra permettre de masquer ou d'afficher cette portée à la demande.

- **Limitation de la portée de déplacement** :  
  Les déplacements des unités seront limités à leur rayon d'action par tour. Un déplacement qui dépasse cette portée ne sera pas autorisé.

---

## 🔑 **Interface utilisateur et permissions**
- **Admin** :  
  L'administrateur disposera d'une interface complète où il pourra voir toutes les unités et dossiers des joueurs, cacher certaines unités et trier les unités par dossiers.
  
- **Utilisateur** :  
  Les utilisateurs ne pourront voir que leurs unités et celles de leur faction (uniquement les unités associées à leur dossier).
  
- **Dossiers utilisateurs et factions** :  
  Chaque utilisateur a un dossier personnel et peut être assigné à des dossiers de factions (ex. `DossierU1`, `DossierFaction1`, etc.).

- **Partage de la vision des unités** :  
  Le créateur de la faction (ou un rôle spécifique) peut décider de partager la vision des unités avec d'autres utilisateurs. Cela doit être approuvé par le MJ/Admin.

---

## 💾 **Stockage des tours et des données**
- **Sauvegarde des tours** :  
  Chaque tour sera sauvegardé dans un dossier dédié sur le serveur (ex. `Tour/Tour1`). Ce dossier contiendra toutes les informations relatives au tour : positions des unités, actions effectuées, etc.

- **Gestion des tours** :  
  Le MJ pourra passer au tour suivant via un bouton d'administration. Cela sauvegarde les données du tour dans Firestore et remplace les anciennes données.

---

## ✅ **Interface de suivi des actions et confirmation**
- **Confirmation des actions** :  
  Les actions des utilisateurs seront enregistrées, mais devront être confirmées par le MJ. Tant que l'action n'est pas confirmée, elle restera grisée dans l'interface.
  
- **Annulation et gestion des actions** :  
  Le MJ pourra confirmer ou annuler les actions. Les actions annulées seront supprimées de Firestore.

---

## 🌍 **Affichage dynamique et suivi du regard (3D)**
- **Affichage 2D avec suivi en 3D** :  
  Les unités seront affichées en 2D mais suivront la vue de la caméra en 3D. Cela permettra de les placer avec précision sur la carte et de maintenir leur orientation relative à la vue de l'utilisateur.

---

## 📝 **Résumé des tâches à effectuer :**

1. **Base de données Firestore** : Gestion des actions, des unités, et des interactions entre utilisateurs et MJ.
2. **Manipulation des unités** : Permettre au MJ de déplacer les unités et de gérer leurs actions et leurs rayons d'action.
3. **Partage et permissions** : Configurer un système de partage de la vision des unités entre utilisateurs et factions, avec contrôle par l'admin.
4. **Interface dynamique** : Créer une interface utilisateur et administrateur pour gérer les actions, les unités, et les tours, avec un suivi des actions et de l'historique.
5. **Affichage 2D/3D et interaction dynamique** : Utilisation d'une technologie comme Cesium pour afficher les unités en 2D tout en tenant compte de leur position dans un environnement 3D.

---

🎯 **Objectif** : Fournir une interface claire et efficace pour la gestion des unités et des tours, tout en permettant une interaction fluide entre le MJ, les utilisateurs et le système de jeu.
