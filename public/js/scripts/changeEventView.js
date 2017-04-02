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
        events[i].className = 'event card col-md-6'
        console.log(events[i].getElementsByClassName('eventImg'))
        events[i].getElementsByClassName('eventImg')[0].className = "card-img-top eventImg text-center"
        console.log(events[i].getElementsByClassName('eventTitle'))
        events[i].getElementsByClassName('eventTitle')[0].className = "card-title eventTitle largeTxt text-center"
        console.log(events[i].getElementsByClassName('eventDescription'))
        events[i].getElementsByClassName('eventDescription')[0].className = "card-text eventDescription"
    }

    var eventBtns = document.getElementsByClassName('eventBtns')
    var j
    var len2 = eventBtns.length
    for (j = 0; j < len2; j++) {
        eventBtns[j].className = "eventBtns text-center"
    }

    var aboutBtns = document.getElementsByClassName('aboutEventBtn')
    var k
    var len3 = aboutBtns.length
    for (k = 0; k < len3; k++) {
        aboutBtns[k].className = "btn btn-primary aboutEventBtn "
    }

    var joinBtns = document.getElementsByClassName('joinEventBtn')
    var l
    var len4 = joinBtns.length
    for (l = 0; l < len4; l++) {
        joinBtns[l].className = "btn btn-success joinEventBtn"
    }


    var editBtns = document.getElementsByClassName('editEventBtn')
    var m
    var len5 = editBtns.length
    for (m = 0; m < len5; m++) {
        editBtns[m].className = "btn btn-warning editEventBtn"
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
        events[i].getElementsByClassName('eventImg')[0].className = "card-img text-center eventImg"
        console.log(events[i].getElementsByClassName('eventTitle'))
        events[i].getElementsByClassName('eventTitle')[0].className = "card-title eventTitle smallTitle text-center"
        console.log(events[i].getElementsByClassName('eventDescription'))
        events[i].getElementsByClassName('eventDescription')[0].className = "card-text eventDescription invisible"
    }

    var eventBtns = document.getElementsByClassName('eventBtns')
    var j
    var len2 = eventBtns.length
    for (j = 0; j < len2; j++) {
        eventBtns[j].className = "eventBtns text-center"
    }

    var aboutBtns = document.getElementsByClassName('aboutEventBtn')
    var k
    var len3 = aboutBtns.length
    for (k = 0; k < len3; k++) {
        aboutBtns[k].className = "btn btn-primary aboutEventBtn "
    }

    var joinBtns = document.getElementsByClassName('joinEventBtn')
    var l
    var len4 = joinBtns.length
    for (l = 0; l < len4; l++) {
        joinBtns[l].className = "btn btn-success joinEventBtn"
    }

    var editBtns = document.getElementsByClassName('editEventBtn')
    var m
    var len5 = editBtns.length
    for (m = 0; m < len5; m++) {
        editBtns[m].className = "btn btn-warning editEventBtn"
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
        events[i].getElementsByClassName('eventImg')[0].className = "eventImg invisible"
        console.log(events[i].getElementsByClassName('eventTitle'))
        events[i].getElementsByClassName('eventTitle')[0].className = "card-title eventTitle smallTitle text-align-left left inline"
        console.log(events[i].getElementsByClassName('eventDescription'))
        events[i].getElementsByClassName('eventDescription')[0].className = "card-text eventDescription invisible"
    }

    var eventBtns = document.getElementsByClassName('eventBtns')
    var j
    var len2 = eventBtns.length
    for (j = 0; j < len2; j++) {
        eventBtns[j].className = "eventBtns pull-right inline"
    }

    var aboutBtns = document.getElementsByClassName('aboutEventBtn')
    var k
    var len3 = aboutBtns.length
    for (k = 0; k < len3; k++) {
        aboutBtns[k].className = "aboutEventBtn simpleBtn margin-10 inline"
    }

    var joinBtns = document.getElementsByClassName('joinEventBtn')
    var l
    var len4 = joinBtns.length
    for (l = 0; l < len4; l++) {
        joinBtns[l].className = "joinEventBtn simpleBtn margin-10 inline"
    }

    var editBtns = document.getElementsByClassName('editEventBtn')
    var m
    var len5 = editBtns.length
    for (m = 0; m < len5; m++) {
        editBtns[m].className = "editEventBtn simpleBtn margin-10 inline"
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