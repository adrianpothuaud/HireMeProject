# Hire Me Project (@ESILV)

[![MEAN Stacked Application](http://lerjen.me/wp-content/uploads/2015/05/maxresdefault.jpg)](http://mean.io/)

[![MongoLab](https://tctechcrunch2011.files.wordpress.com/2016/02/mlab-logo.png)](https://mlab.com/)

[![Heroku hosting](https://camo.githubusercontent.com/0114f89fa7abb867b1ce24bbcb83594bace70ac5/687474703a2f2f692e696d6775722e636f6d2f304962665275522e6a7067)](https://www.heroku.com/)

## About the Application

### Challenging, Inovating speed-recruitment application

Hire-ME is a web Application intended to allow searching for a job and go to the job interview @ the same place, from home, or in travel through web live video stream between candidates and human resources of great enterprises.

  - Search for a job
  - View enterprises hiring events
  - Apply for an event and have a live interview with human resources
  - Get hired from home !

# New Features!

  - Authentication system communicate with DB (not optimal, ongoing improvements)
  - DataBase Population for tests 
    - Candidat with uncomplete and complete profiles 
    - Recruteurs from various enterprises
    - Random Events (ongoing and upcoming)
    - Connaissances (Info skills, Mechanical, Mathematics)
    - Jobs examples
  - Dynamic contents added
    - Candidat Profile
    - About page
    - Recruteur profile
    - Dynamic loads of events in both Candidat/Recruteur pages
    - Ongoing selected events (events that match Candidat's profile)
  - FULL API with support of GET/POST/PUT/DELETE requests on DB Objects Candidat/Recruteur/Connaissances/Experiences/Events
  - Edition des profils Recruteur/Candidat OK
  - Ajout/Suppression/Edition de connaissances et compétences
  - Edition/Création d'évènement OK

### Tech

Hire Me uses a number of technologies and projects to work properly:

* [JavaScript - AngularJS] - HTML enhanced with dynamic content!
* [Twitter Bootstrap] - great UI boilerplate for modern web apps with responsive design
* [Node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework
* [jQuery] - HTML DOM element selector
* [MongoLab] - JSON & Object oriented database (hosted in mongoLab)
* [heroku] - Web application deployment service for Node.js / Ruby / ...

### App available OnLine

@Heroku => GO and visit us online (https://limitless-escarpment-80567.herokuapp.com/home)

### Installation

HireMe requires [Node.js](https://nodejs.org/) v4+ to run on your local environment.

Install the dependencies and start the server.

```sh
$ cd HireMeProject
$ npm install
$ node server.js / npm start
```

### Development

Want to contribute? Great! Contact us even on Twitter/Facebook/Google Plus or by email @ esilv.hireme@gmail.com

### Todos

 - [Write Tests]
 - moduler les routes du routes.js dans des sous parties comme les routes API
 - mettre les champs required dans les forms
 - Edit/Create Events : add connaissances/experiences requises
 - Encrypt and hide passwords
 - Refaire une passe de couverture du code par les commentaires
 - Cleaner la documentation
 - Implement forms 
    - Reset password
 - Use WebRTC to enable Candidat&Recruteur visio conference when joining an event
 - Selection des events par match avec candidat connaissance et/ou experience
 - Candidat Profil 
    - supprimer une connaissance
    - monter/descendre le niveau d'une connaissance
    - supprimer une expérience
    - modifier les dates d'une expérience
  - Combiner chat et video stream sur join event 
    - 1) le recruteur charge son flux caméra
    - 2) le recruteur envois les informations pour la communication tcu dans le chat
    - 3) le candidat utilise les infos reçus pour charger la vidéo
    - 4) les deux utilisateurs devraient se voir
  - Implémenter la logique "speed-recrutement"
    - le recruteur devrait pouvoir switcher entre plusieurs candidats connectés
    - gérer les timeouts et la queue entre les candidats connectés (bonjour la compléxitude :P)

### Authors

 - Adrian Pothuaud(https://github.com/adrianpothuaud/)
 - Geoffrey Roux(https://github.com/geo2fois)
