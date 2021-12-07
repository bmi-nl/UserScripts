// ==UserScript==
// @name         Move.nl
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://move.nl/verkoop-dossier/*/agenda
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var elem;

    // Set page with and count appointments
    function setPageWidth() {
        var centeredElems = document.getElementsByClassName('centered-content');
        centeredElems.forEach(function(node){
            node.style = "max-width: 1300px";
        });
    }

    function addAppointmentCount() {
        var calTab = document.getElementById('rc-tabs-0-tab-agenda');
        var suf = " (" + document.getElementsByClassName('agenda-future-items')[0].firstChild.childElementCount + ")"
        calTab.getElementsByClassName('tab-pane-desktop')[0].innerText = 'Agenda ' + suf;
    };

    function init() {
        setPageWidth();
        addAppointmentCount();
    }

    var checkExist = setInterval(function() {
        if (
            document.querySelectorAll('#rc-tabs-0-tab-agenda').length &&
            document.querySelectorAll('.agenda-future-items').length
        ) {
            elem = document.getElementById('rc-tabs-0-tab-agenda')
            clearInterval(checkExist);
            init();
        }
    }, 100);

    // Force page reload after x minutes
    var t = 5 * 60 * 1000;
    setTimeout(function(){
        window.location.reload(true);
    }, t);

})();
