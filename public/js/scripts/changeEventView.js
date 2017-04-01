function onLargeViewBtnClick() {
    // buttons
    var largeViewBtn = document.getElementById('largeViewBtn')
    var smallViewBtn = document.getElementById('smallViewBtn')
    var listViewBtn = document.getElementById('listViewBtn')
    largeViewBtn.className = 'simpleBtn activedBtn'
    smallViewBtn.className = 'simpleBtn unactivedBtn'
    listViewBtn.className = 'simpleBtn unactivedBtn'

    // event layout
    var events = document.getElementsByClassName('event')
        // iterate on HTMLCollection that stores all events
    var i
    var len = events.length
    for (i = 0; i < len; i++) {
        // perform actions on events[i]
        console.log(events[i])
        console.log(events[i].className)
        events[i].className = 'event col-md-6'
        console.log(events[i].getElementsByClassName('eventImg'))
        events[i].getElementsByClassName('eventImg')[0].className = "thumbnail eventImg"
        console.log(events[i].getElementsByClassName('eventTitle'))
        events[i].getElementsByClassName('eventTitle')[0].className = "eventTitle"
        console.log(events[i].getElementsByClassName('eventDescription'))
        events[i].getElementsByClassName('eventDescription')[0].className = "eventDescription"
    }
}

function onSmallViewBtnClick() {
    // buttons
    var largeViewBtn = document.getElementById('largeViewBtn')
    var smallViewBtn = document.getElementById('smallViewBtn')
    var listViewBtn = document.getElementById('listViewBtn')
    largeViewBtn.className = 'simpleBtn unactivedBtn'
    smallViewBtn.className = 'simpleBtn activedBtn'
    listViewBtn.className = 'simpleBtn unactivedBtn'

    // event layout
    var events = document.getElementsByClassName('event')
        // iterate on HTMLCollection that stores all events
    var i
    var len = events.length
    for (i = 0; i < len; i++) {
        // perform actions on events[i]
        console.log(events[i])
        console.log(events[i].className)
        events[i].className = 'event col-md-4'
        console.log(events[i].getElementsByClassName('eventImg'))
        events[i].getElementsByClassName('eventImg')[0].className = "thumbnail eventImg"
        console.log(events[i].getElementsByClassName('eventTitle'))
        events[i].getElementsByClassName('eventTitle')[0].className = "eventTitle"
        console.log(events[i].getElementsByClassName('eventDescription'))
        events[i].getElementsByClassName('eventDescription')[0].className = "eventDescription invisible"
    }
}

function onListViewBtnClick() {
    // buttons
    var largeViewBtn = document.getElementById('largeViewBtn')
    var smallViewBtn = document.getElementById('smallViewBtn')
    var listViewBtn = document.getElementById('listViewBtn')
    largeViewBtn.className = 'simpleBtn unactivedBtn'
    smallViewBtn.className = 'simpleBtn unactivedBtn'
    listViewBtn.className = 'simpleBtn activedBtn'

    // event layout
    var events = document.getElementsByClassName('event')
        // iterate on HTMLCollection that stores all events
    var i
    var len = events.length
    for (i = 0; i < len; i++) {
        // perform actions on events[i]
        console.log(events[i])
        console.log(events[i].className)
        events[i].className = 'event spaced'
        console.log(events[i].getElementsByClassName('eventImg'))
        events[i].getElementsByClassName('eventImg')[0].className = "thumbnail eventImg invisible"
        console.log(events[i].getElementsByClassName('eventTitle'))
        events[i].getElementsByClassName('eventTitle')[0].className = "eventTitle inline smallTitle"
        console.log(events[i].getElementsByClassName('eventDescription'))
        events[i].getElementsByClassName('eventDescription')[0].className = "eventDescription inline smallDesc"
    }
}
