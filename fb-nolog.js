// ==UserScript==
// @name        Facebook No Login
// @description Removes annoying popups and visual cruft when not logged-in
// @namespace   https://www.facebook.com
// @icon        https://www.facebook.com/favicon.ico
// @include     *.facebook.*/*
// @run-at      document-start
// @version     1.5.1
// @license     CC0; https://creativecommons.org/publicdomain/zero/1.0/
// @homepageURL https://github.com/lidel/userscripts
// @grant       GM_addStyle
// ==/UserScript==
 // Facebook no-login browser





// Select the div with the aria-label "Close"
var closeDiv = document.querySelector('div[aria-label="Close"]');

// Check if the div exists
if (closeDiv) {
    // Simulate a click on the div
    closeDiv.click();

    // Wait for 1 second (1000 milliseconds)
    setTimeout(function() {
       



	// Hide lower banner
	// Select the div with the attribute data-nosnippet
	var div = document.querySelector('div[data-nosnippet]');

	// Check if the div exists
	if (div) {
	    // Set the display property to none
	    div.style.display = 'none';
	}






    }, 1000);
} else {
    // If the div is not found, log a message or handle the case as needed
    console.log('Close button not found.');
}
