db.connaissances.insert([
    { name: "AngularJS" },
    { name: "C" },
    { name: "C++" },
    { name: "C#" },
    { name: "Django" },
    { name: "Git" },
    { name: "Java" },
    { name: "JavaScript" },
    { name: "JEE" },
    { name: "MongoDB" },
    { name: "NoSQL" },
    { name: "Python" },
    { name: "Ruby" },
    { name: "Ruby on rails" },
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "EJS" },
    { name: "Mechanical" },
    { name: "Matlab" },
    { name: "Scilab" },
    { name: "Mathematics" },
    { name: "Conception" },
]);

db.experiences.insert([
    { jobName: "Engineer" },
    { jobName: "Developer" },
    { jobName: "Designer" },
    { jobName: "Software Architect" },
    { jobName: "Data Scientist" },
    { jobName: "Web Architect" },
    { jobName: "Senior Engineer" },
    { jobName: "Java Developer" },
    { jobName: "Web Designer" },
    { jobName: "Web Developer" },
    { jobName: "QA Engineer" }
]);

db.recruteurs.insert([{
        lastname: "ds",
        firstname: "ds",
        email: "ds@hireme.test",
        password: "ds",
        accountType: "recruteur",
        enterpriseName: "Dassault Systèmes"
    },
    {
        lastname: "thales",
        firstname: "thales",
        email: "thales@hireme.test",
        password: "thales",
        accountType: "recruteur",
        enterpriseName: "Thalès"
    },
    {
        lastname: "psa",
        firstname: "psa",
        email: "psa@hireme.test",
        password: "psa",
        accountType: "recruteur",
        enterpriseName: "PSA Peugeot Citroen"
    },
    {
        lastname: "csc",
        firstname: "csc",
        email: "csc@hireme.test",
        password: "csc",
        accountType: "recruteur",
        enterpriseName: "CSC"
    },
    {
        lastname: "google",
        firstname: "google",
        email: "google@hireme.test",
        password: "google",
        accountType: "recruteur",
        enterpriseName: "Google"
    },
    {
        lastname: "microsoft",
        firstname: "microsoft",
        email: "microsoft@hireme.test",
        password: "microsoft",
        accountType: "recruteur",
        enterpriseName: "Microsoft"
    },
    {
        lastname: "total",
        firstname: "total",
        email: "total@hireme.test",
        password: "total",
        accountType: "recruteur",
        enterpriseName: "Total"
    },
    {
        lastname: "clubmed",
        firstname: "clubmed",
        email: "clubmed@hireme.test",
        password: "clubmed",
        accountType: "recruteur",
        enterpriseName: "Club Med"
    },
    {
        lastname: "piaggio",
        firstname: "piaggio",
        email: "piaggio@hireme.test",
        password: "piaggio",
        accountType: "recruteur",
        enterpriseName: "Piaggio"
    },
    {
        lastname: "airbus",
        firstname: "airbus",
        email: "airbus@hireme.test",
        password: "airbus",
        accountType: "recruteur",
        enterpriseName: "Airbus"
    }
]);

db.candidats.insert([{
        lastname: "javadev",
        firstname: "javadev",
        email: "javadev@hireme.test",
        password: "javadev",
        experiences: [
            db.experiences.findOne({
                "jobName": "Developer"
            })
        ],
        connaissances: [
            db.connaissances.findOne({
                "name": "Java"
            })
        ]
    },
    {
        lastname: "c#dev",
        firstname: "c#dev",
        email: "c#dev@hireme.test",
        password: "c#dev",
        experiences: [
            db.experiences.findOne({
                "jobName": "Developer"
            })
        ],
        connaissances: [
            db.connaissances.findOne({
                "name": "C#"
            })
        ]
    },
    {
        lastname: "meca",
        firstname: "meca",
        email: "meca@hireme.test",
        password: "meca",
        experiences: [
            db.experiences.findOne({
                "jobName": "Engineer"
            })
        ],
        connaissances: [
            db.connaissances.findOne({
                "name": "Mechanical"
            })
        ]
    },
    {
        lastname: "webdev",
        firstname: "webdev",
        email: "webdev@hireme.test",
        password: "webdev",
        experiences: [
            db.experiences.findOne({
                "jobName": "Web Developer"
            })
        ],
        connaissances: [
            db.connaissances.findOne({
                "name": "HTML"
            }),
            db.connaissances.findOne({
                "name": "CSS"
            }),
            db.connaissances.findOne({
                "name": "JavaScript"
            }),
            db.connaissances.findOne({
                "name": "NodeJS"
            })
        ]
    },
    {
        lastname: "webdesign",
        firstname: "webdesign",
        email: "webdesign@hireme.test",
        password: "webdesign",
        experiences: [
            db.experiences.findOne({
                "jobName": "Web Designer"
            })
        ],
        connaissances: [
            db.connaissances.findOne({
                "name": "HTML"
            }),
            db.connaissances.findOne({
                "name": "CSS"
            })
        ]
    }
]);

db.events.insert([{
        name: "Concept Car Engineer - PSA",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et metus ut odio suscipit commodo facilisis eget lectus. Nullam a felis ut lectus ornare gravida. Proin viverra dolor a libero tempor, eu tincidunt elit auctor. Quisque eget tempor risus. Fusce pretium ut nibh nec tincidunt. ",
        dateBegin: new Date("2017-01-01"),
        dateEnd: new Date("2017-09-01"),
        enterpriseName: "PSA Peugeot Citroen",
        recruteurs: [
            db.recruteurs.findOne({
                "email": "psa@hireme.test"
            })
        ]
    },
    {
        name: "Web Developer - Google",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et metus ut odio suscipit commodo facilisis eget lectus. Nullam a felis ut lectus ornare gravida. Proin viverra dolor a libero tempor, eu tincidunt elit auctor. Quisque eget tempor risus. Fusce pretium ut nibh nec tincidunt. ",
        dateBegin: new Date("2017-01-01"),
        dateEnd: new Date("2017-09-01"),
        enterpriseName: "Google",
        recruteurs: [
            db.recruteurs.findOne({
                "email": "google@hireme.test"
            })
        ]
    },
    {
        name: "Web Designer - Club Med",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et metus ut odio suscipit commodo facilisis eget lectus. Nullam a felis ut lectus ornare gravida. Proin viverra dolor a libero tempor, eu tincidunt elit auctor. Quisque eget tempor risus. Fusce pretium ut nibh nec tincidunt. ",
        dateBegin: new Date("2017-01-01"),
        dateEnd: new Date("2017-09-01"),
        enterpriseName: "Club Med",
        recruteurs: [
            db.recruteurs.findOne({
                "email": "clubmed@hireme.test"
            })
        ]
    }
]);