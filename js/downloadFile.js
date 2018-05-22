//window.addEventListener('load', function () {
//
//    var divTest = document.getElementById('divTest');
//
//    divTest.addEventListener('touchstart', function (e) {
//        divTest.style.backgroundColor = 'rgba(17, 212, 150, 0.1)';
//        var oReq = new XMLHttpRequest();
//        // The Endpoint of your server 
//        var URLToPDF = "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf";
//
//        // Configure XMLHttpRequest
//        oReq.open("GET", URLToPDF, true);
//
//        // Important to use the blob response type
//        oReq.responseType = "blob";
//
//        // When the file request finishes
//        // Is up to you, the configuration for error events etc.
//        oReq.onload = function () {
//            // Once the file is downloaded, open a new window with the PDF
//            // Remember to allow the POP-UPS in your browser
//            var file = new Blob([oReq.response], {
//                type: 'application/pdf'
//            });
//
//            // Generate file download directly in the browser !
//            saveAs(file, "mypdffilename.pdf");
//        };
//
//        oReq.send();
//
//
//
//
//        e.preventDefault()
//    }, false)
//
//
//}, false)
