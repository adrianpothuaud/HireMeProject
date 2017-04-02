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

function expandFirstChoice() {
    var FirstChoiceView = document.getElementById('FirstChoiceView')
    FirstChoiceView.className = 'panel-body'

    var firstChoiceHideShowBtn = document.getElementById('firstChoiceHideShowBtn')
    firstChoiceHideShowBtn.onclick = collapseFirstChoice

    var firstChoiceHideShow = document.getElementById('firstChoiceHideShow')
    firstChoiceHideShow.className = 'glyphicon glyphicon-minus'
}

function collapseFirstChoice() {
    var FirstChoiceView = document.getElementById('FirstChoiceView')
    FirstChoiceView.className = 'panel-body hidden'

    var firstChoiceHideShowBtn = document.getElementById('firstChoiceHideShowBtn')
    firstChoiceHideShowBtn.onclick = expandFirstChoice

    var firstChoiceHideShow = document.getElementById('firstChoiceHideShow')
    firstChoiceHideShow.className = 'glyphicon glyphicon-plus'
}

function expandOnGoing() {
    var OnGoingView = document.getElementById('OnGoingView')
    OnGoingView.className = 'panel-body'

    var onGoingHideShowBtn = document.getElementById('onGoingHideShowBtn')
    onGoingHideShowBtn.onclick = collapseOnGoing

    var onGoingHideShow = document.getElementById('onGoingHideShow')
    onGoingHideShow.className = 'glyphicon glyphicon-minus'
}

function collapseOnGoing() {
    var OnGoingView = document.getElementById('OnGoingView')
    OnGoingView.className = 'panel-body hidden'

    var onGoingHideShowBtn = document.getElementById('onGoingHideShowBtn')
    onGoingHideShowBtn.onclick = expandOnGoing

    var onGoingHideShow = document.getElementById('onGoingHideShow')
    onGoingHideShow.className = 'glyphicon glyphicon-plus'
}

function expandUpComing() {
    var UpComingView = document.getElementById('UpComingView')
    UpComingView.className = 'panel-body'

    var upComingHideShowBtn = document.getElementById('upComingHideShowBtn')
    upComingHideShowBtn.onclick = collapseUpComing

    var upComingHideShow = document.getElementById('upComingHideShow')
    upComingHideShow.className = 'glyphicon glyphicon-minus'
}

function collapseUpComing() {
    var UpComingView = document.getElementById('UpComingView')
    UpComingView.className = 'panel-body hidden'

    var upComingHideShowBtn = document.getElementById('upComingHideShowBtn')
    upComingHideShowBtn.onclick = expandUpComing

    var upComingHideShow = document.getElementById('upComingHideShow')
    upComingHideShow.className = 'glyphicon glyphicon-plus'
}

function expandPassed() {
    var PassedView = document.getElementById('PassedView')
    PassedView.className = 'panel-body'

    var passedHideShowBtn = document.getElementById('passedHideShowBtn')
    passedHideShowBtn.onclick = collapsePassed

    var passedHideShow = document.getElementById('passedHideShow')
    passedHideShow.className = 'glyphicon glyphicon-minus'
}

function collapsePassed() {
    var PassedView = document.getElementById('PassedView')
    PassedView.className = 'panel-body hidden'

    var passedHideShowBtn = document.getElementById('passedHideShowBtn')
    passedHideShowBtn.onclick = expandFirstChoice

    var passedHideShow = document.getElementById('passedHideShow')
    passedHideShow.className = 'glyphicon glyphicon-plus'
}