$(function() {
        timeout = setTimeout(function() {
            alert("Inactive for 10 seconds");
        }, 10000);
    });

$(document).on('mousemove keydown', function() {
        if (timeout !== null) { 
            clearTimeout(timeout);
        }
        timeout = setTimeout(function() {
            alert("Inactive for 10 seconds");
        }, 10000);
    });
