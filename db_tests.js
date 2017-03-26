db.candidats.updateOne({
    "email": "candidat@hireme.test"
}, {
    $set: {
        "connaissances": [
            db.connaissances.findOne({
                "name": "Java"
            }),
            db.connaissances.findOne({
                "name": "C++"
            })
        ]
    }
});

db.candidats.updateOne({
    "email": "candidat@hireme.test"
}, {
    $set: {
        "experiences": [
            db.experiences.findOne({
                "jobName": "Data Scientist"
            })
        ]
    }
});