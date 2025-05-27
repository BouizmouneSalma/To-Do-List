# Plateforme de Gestion de Tâches - To Do List

## Description

Cette application web est une plateforme intuitive de gestion de tâches qui permet aux utilisateurs d'ajouter, rechercher, éditer, supprimer et organiser leurs tâches selon leur avancement (To Do, Doing, Done). Elle est construite avec HTML, Tailwind CSS et JavaScript pur, sans backend ni base de données.

## Fonctionnalités principales

### 1. Ajout d'une tâche

* En cliquant sur le bouton **"Add Task +"**, un formulaire s'affiche dans une fenêtre modale.
* Le formulaire permet de renseigner :

  * **Titre** de la tâche
  * **Description**
  * **Date limite**
  * **Priorité** (P1, P2, P3)
  * **Statut** (To Do, Doing, Done)

### 2. Ajout multiple (fonctionnalité à implémenter)

* Le bouton **"Add Multiple +"** est présent mais n'a pas encore de fonctionnalité liée.

### 3. Organisation des tâches

* Les tâches sont affichées dans trois colonnes :

  * **To Do** (tâches à faire)
  * **Doing** (tâches en cours)
  * **Done** (tâches terminées)
* Chaque tâche affiche son titre, sa date, sa description, et deux boutons :

  * **Delete** : supprime la tâche
  * **Edit** : permet de modifier la tâche

### 4. Recherche de tâches

* Un champ de recherche permet de filtrer dynamiquement les tâches par mot-clé (dans le titre ou la description).

### 5. Couleur selon la priorité

* **P1** : bordure rouge
* **P2** : bordure jaune
* **P3** : bordure verte

### 6. Compteur dynamique

* Chaque section affiche en temps réel le nombre de tâches qu'elle contient.

## Technologies utilisées

* **HTML5** : structure de la page
* **Tailwind CSS** : mise en forme réactive et moderne
* **JavaScript (vanilla)** : logique d'interaction

## Comment utiliser

1. Ouvrez le fichier HTML dans un navigateur web.
2. Cliquez sur **"Add Task +"** pour créer une nouvelle tâche.
3. Remplissez les champs requis et cliquez sur **"Add"**.
4. Utilisez le champ de recherche pour filtrer les tâches.
5. Gérez les tâches avec les boutons **Edit** et **Delete**.

## Idées d'évolution

* Ajout de stockage local via `localStorage` pour sauvegarder les tâches.
* Implémentation de la fonctionnalité "Add Multiple".
* Glisser-déposer entre les colonnes.
* Filtrage par priorité ou date.


*Pour toute contribution ou retour, n'hésitez pas à me contacter !*
