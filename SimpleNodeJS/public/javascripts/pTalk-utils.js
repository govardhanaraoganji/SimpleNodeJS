var mongodb = require('mongodb');

if (typeof pTalk == "undefined")
    pTalk = {};

pTalk.utils = {
    isAlphaNumericWithSpace: function(evt) {
        var specialKeys = new Array();
        specialKeys.push(8); //Backspace
        specialKeys.push(9); //Tab
        specialKeys.push(46); //Delete
        specialKeys.push(36); //Home
        specialKeys.push(35); //End
        specialKeys.push(37); //Left
        specialKeys.push(39); //Right

        var keyCode = evt.keyCode == 0 ? evt.charCode : evt.keyCode;
        return ((keyCode == 32) || (keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (specialKeys.indexOf(evt.keyCode) != -1 && evt.charCode != evt.keyCode));
    },
    isZipCode: function(evt) {
        var specialKeys = new Array();
        specialKeys.push(8); //Backspace
        specialKeys.push(9); //Tab
        specialKeys.push(46); //Delete
        specialKeys.push(36); //Home
        specialKeys.push(35); //End
        specialKeys.push(37); //Left
        specialKeys.push(39); //Right

        var keyCode = evt.keyCode == 0 ? evt.charCode : evt.keyCode;
        return ((keyCode == 45) || (keyCode == 32) || (keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (specialKeys.indexOf(evt.keyCode) != -1 && evt.charCode != evt.keyCode));
    },

    print: function(node, hideFn, showFn) {
        //return function() 
        {
            // Hide
            hideFn && hideFn();
            var w = window.open();
            w.document.write(node.innerHTML);
            // Show
            showFn && showFn();
            w.print();
            //w.close();
        }
    },

    isNumberKey: function(evt) {
        if (!evt)
            evt = window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
    },

    isDecimalKey: function(evt) {
        if (!evt)
            evt = window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        var srcElement = evt.srcElement || evt.target;
        if (charCode == 46 && srcElement.value.split('.').length > 1)
            return false;
        if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
    },

    // zip code TODO: Revisit
    isAlphaNumeric: function(evt) {
        var specialKeys = new Array();
        specialKeys.push(8); //Backspace
        specialKeys.push(9); //Tab
        specialKeys.push(46); //Delete
        specialKeys.push(36); //Home
        specialKeys.push(35); //End
        specialKeys.push(37); //Left
        specialKeys.push(39); //Right
        specialKeys.push(46); //DOT
        specialKeys.push(95); //UNDER SCORE

        var keyCode = evt.keyCode == 0 ? evt.charCode : evt.keyCode;
        return ((keyCode >= 48 && keyCode <= 57) || (keyCode == 46) || (keyCode == 95) || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (specialKeys.indexOf(evt.keyCode) != -1 && evt.charCode != evt.keyCode));
    },
    scrollDiv: function(divid) {
        //alert(divid);
        // when the DOM is ready...
        //  Move the window's scrollTop to the offset position of #now
        try {
            $(window).scrollTop($('#' + divid).offset().top);
        } catch (e) {
            // TODO: handle exception
            //alert(e);
        }
    }

};

pTalk.mongo = {

};


//Poly Fill for String.trim()
if (typeof String.prototype.trim !== 'function') {
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, '');
    };
}
