// these instructions should be succesfull on MongoDB
// allow validation for models and application processes

db.keys.insert([
    { key: "testkey1234" },
    { key: "adrian2205" },
    { key: "onsiteactionskey4YHTE7" }
])

db.connaissances.insert([{
        name: "AngularJS",
        description: "Framework JavaScript libre et open-source développé par Google pour étendre le language HTML."
    },
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
    { name: "PHP" }
])

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
])

db.recruteurs.insert([{
        lastname: "ds",
        firstname: "ds",
        email: "ds@hireme.test",
        password: "ds",
        accountType: "recruteur",
        enterpriseName: "Dassault Systèmes"
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
        lastname: "google",
        firstname: "google",
        email: "google@hireme.test",
        password: "google",
        accountType: "recruteur",
        enterpriseName: "Google"
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
        lastname: "airbus",
        firstname: "airbus",
        email: "airbus@hireme.test",
        password: "airbus",
        accountType: "recruteur",
        enterpriseName: "Airbus"
    }
])

db.candidats.insert([{
        lastname: "javadev",
        firstname: "javadev",
        email: "javadev@hireme.test",
        password: "javadev",
        accountType: "candidat",
        experiences: [{
            "jobName": "Developer",
            "enterpriseName": "Oracle",
            "dateBegin": new Date("2012-09-01"),
            "dateEnd": new Date("2015-08-31")
        }],
        connaissances: [{
            "name": "Java",
            "level": "Bon"
        }]
    },
    {
        lastname: "c#dev",
        firstname: "c#dev",
        email: "c#dev@hireme.test",
        password: "c#dev",
        accountType: "candidat",
        experiences: [{
            "jobName": "Developer",
            "enterpriseName": "Microsoft",
            "dateBegin": new Date("2010-02-16"),
            "dateEnd": new Date("2016-01-30")
        }],
        connaissances: [
            db.connaissances.findOne({
                "name": "C#",
                "level": "Expert"
            }, {
                "name": "ASP.Net",
                "level": "Expert"
            })
        ]
    },
    {
        lastname: "meca",
        firstname: "meca",
        email: "meca@hireme.test",
        password: "meca",
        accountType: "candidat",
        experiences: [
            db.experiences.findOne({
                "jobName": "Engineer",
                "enterpriseName": "Citroen",
                "dateBegin": new Date()
            })
        ],
        connaissances: [
            db.connaissances.findOne({
                "name": "Mechanical",
                "level": "Novice"
            })
        ]
    },
    {
        lastname: "webdesign",
        firstname: "webdesign",
        email: "webdesign@hireme.test",
        password: "webdesign",
        accountType: "candidat",
        experiences: [
            db.experiences.findOne({
                "jobName": "Web Designer",
                "enterpriseName": "CSC",
                "dateBegin": new Date("2015-09-01")
            })
        ],
        connaissances: [
            db.connaissances.findOne({
                "name": "HTML",
                "level": "Avancé"
            }),
            db.connaissances.findOne({
                "name": "CSS",
                "level": "Avancé"
            })
        ]
    }
])

db.events.insert(
    // (1 ongoing + 1 upcoming event + 1 passed event) /recruteur for tests
    [
        // ds@hireme.test =============================================================================================================
        {
            name: "3DEXPERIENCE Platform Web Developer - Dassault Systèmes",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et metus ut odio suscipit commodo facilisis eget lectus. Nullam a felis ut lectus ornare gravida. Proin viverra dolor a libero tempor, eu tincidunt elit auctor. Quisque eget tempor risus. Fusce pretium ut nibh nec tincidunt. ",
            dateBegin: new Date("2017-03-01"),
            dateEnd: new Date("2017-07-01"),
            enterpriseName: "Dassault Systèmes",
            recruteurs: [{
                "email": "ds@hireme.test"
            }],
            connaissancesRequises: [
                { name: 'HTML' },
                { name: 'CSS' },
                { name: 'JavaScript' },
                { name: 'NodeJS' }
            ],
            experiencesRequises: [{
                jobName: "Web Developer",
                duration: 3
            }]
        },
        {
            name: "3DEXPERIENCE Mechanical Simulation Engineer - Dassault Systèmes",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et metus ut odio suscipit commodo facilisis eget lectus. Nullam a felis ut lectus ornare gravida. Proin viverra dolor a libero tempor, eu tincidunt elit auctor. Quisque eget tempor risus. Fusce pretium ut nibh nec tincidunt. ",
            dateBegin: new Date("2017-06-01"),
            dateEnd: new Date("2017-07-01"),
            enterpriseName: "Dassault Systèmes",
            recruteurs: [{
                "email": "ds@hireme.test"
            }],
            connaissancesRequises: [
                { name: 'Mechanical' },
                { name: 'Mathematics' }
            ],
            experiencesRequises: [{
                jobName: "Engineer",
                duration: 3
            }]
        },
        {
            name: "3DEXPERIENCE QA Engineer - Dassault Systèmes",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et metus ut odio suscipit commodo facilisis eget lectus. Nullam a felis ut lectus ornare gravida. Proin viverra dolor a libero tempor, eu tincidunt elit auctor. Quisque eget tempor risus. Fusce pretium ut nibh nec tincidunt. ",
            dateBegin: new Date("2017-03-01"),
            dateEnd: new Date("2017-03-12"),
            enterpriseName: "Dassault Systèmes",
            recruteurs: [{
                "email": "ds@hireme.test"
            }],
            connaissancesRequises: [
                { name: 'Quality' },
                { name: 'Engineering' }
            ],
            experiencesRequises: [{
                jobName: "QA Engineer",
                duration: 3
            }]
        },

        // psa@hireme.test=============================================================================================================
        {
            name: "Crossbrand Web Application Designer - PSA",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et metus ut odio suscipit commodo facilisis eget lectus. Nullam a felis ut lectus ornare gravida. Proin viverra dolor a libero tempor, eu tincidunt elit auctor. Quisque eget tempor risus. Fusce pretium ut nibh nec tincidunt. ",
            dateBegin: new Date("2017-03-01"),
            dateEnd: new Date("2017-07-01"),
            enterpriseName: "PSA",
            recruteurs: [{
                "email": "psa@hireme.test"
            }],
            connaissancesRequises: [
                { name: 'HTML' },
                { name: 'CSS' },
                { name: 'JavaScript' },
                { name: 'NodeJS' }
            ],
            experiencesRequises: [{
                jobName: "Web Developer",
                duration: 3
            }]
        },
        {
            name: "Motor Engineer - PSA",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et metus ut odio suscipit commodo facilisis eget lectus. Nullam a felis ut lectus ornare gravida. Proin viverra dolor a libero tempor, eu tincidunt elit auctor. Quisque eget tempor risus. Fusce pretium ut nibh nec tincidunt. ",
            dateBegin: new Date("2017-06-01"),
            dateEnd: new Date("2017-07-01"),
            enterpriseName: "PSA",
            recruteurs: [{
                "email": "psa@hireme.test"
            }],
            connaissancesRequises: [
                { name: 'Mechanical' },
                { name: 'Mathematics' },
                { name: 'CAO' }
            ],
            experiencesRequises: [{
                jobName: "Engineer",
                duration: 3
            }]
        },
        {
            name: "Mechanical Simulation Engineer - PSA",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et metus ut odio suscipit commodo facilisis eget lectus. Nullam a felis ut lectus ornare gravida. Proin viverra dolor a libero tempor, eu tincidunt elit auctor. Quisque eget tempor risus. Fusce pretium ut nibh nec tincidunt. ",
            dateBegin: new Date("2017-03-01"),
            dateEnd: new Date("2017-03-12"),
            enterpriseName: "PSA",
            recruteurs: [{
                "email": "psa@hireme.test"
            }],
            connaissancesRequises: [
                { name: 'Mechanical' },
                { name: 'Mathematics' }
            ],
            experiencesRequises: [{
                jobName: "Engineer",
                duration: 3
            }]
        },

        // google@hireme.test
        {
            name: "JavaScript Evangelist - Google AngularJS",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et metus ut odio suscipit commodo facilisis eget lectus. Nullam a felis ut lectus ornare gravida. Proin viverra dolor a libero tempor, eu tincidunt elit auctor. Quisque eget tempor risus. Fusce pretium ut nibh nec tincidunt. ",
            dateBegin: new Date("2017-03-01"),
            dateEnd: new Date("2017-07-01"),
            enterpriseName: "Google",
            recruteurs: [{
                "email": "google@hireme.test"
            }],
            connaissancesRequises: [
                { name: 'JavaScript' },
                { name: 'CSS' },
                { name: 'HJTML' },
                { name: 'NodeJS' }
            ],
            experiencesRequises: [{
                jobName: "Web Developer",
                duration: 3
            }]
        },
        {
            name: "Data Scientist - Google",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et metus ut odio suscipit commodo facilisis eget lectus. Nullam a felis ut lectus ornare gravida. Proin viverra dolor a libero tempor, eu tincidunt elit auctor. Quisque eget tempor risus. Fusce pretium ut nibh nec tincidunt. ",
            dateBegin: new Date("2017-06-01"),
            dateEnd: new Date("2017-07-01"),
            enterpriseName: "Google",
            recruteurs: [{
                "email": "google@hireme.test"
            }],
            connaissancesRequises: [
                { name: 'Big Data' },
                { name: 'Algorithmic' },
                { name: 'Data Structures' }
            ],
            experiencesRequises: [{
                jobName: "Data Scientist",
                duration: 3
            }]
        },
        {
            name: "Android OS Designer - Google",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et metus ut odio suscipit commodo facilisis eget lectus. Nullam a felis ut lectus ornare gravida. Proin viverra dolor a libero tempor, eu tincidunt elit auctor. Quisque eget tempor risus. Fusce pretium ut nibh nec tincidunt. ",
            dateBegin: new Date("2017-03-01"),
            dateEnd: new Date("2017-03-12"),
            enterpriseName: "Google",
            recruteurs: [{
                "email": "google@hireme.test"
            }],
            connaissancesRequises: [
                { name: 'Design' },
                { name: 'Android' }
            ],
            experiencesRequises: [{
                jobName: "Designer",
                duration: 3
            }]
        }

        // total@hireme.test

        // clubmed@hieme.test

        // airbus@hireme.test

    ]
)