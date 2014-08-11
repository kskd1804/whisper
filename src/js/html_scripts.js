/**
 *  html_script.js: injects script tags depending on 'getUserMedia' browser support.
 */

 $(document).ready(function() {
 // Local variables
   var header = $('head');

 // Load Scipts: WebRTC 'getUserMedia'
   if (navigator.getUserMedia) {
     loadJS('../../src/js/initializer.js');
   }
 // Load Scripts: Flash 
   else {
     loadJS('');
   }

 }); // Closes $(document).ready(function() {


/**
 *  loadJS: Loads the specified javascript 'file'.
 */

 function loadJS (file) {
   var element = document.createElement("script");
   element.src = file;
   document.body.appendChild(element);
 }
