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

    function init() {
        console.log('Init run !');
        elem.style = 'color: red;';
    }

    var checkExist = setInterval(function() {
        if (document.querySelectorAll('#rc-tabs-0-tab-agenda').length) {
            elem = document.getElementById('rc-tabs-0-tab-agenda')
            clearInterval(checkExist);
            init();
        }
    }, 100);

})();
