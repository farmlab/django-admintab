
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var current = getCookie("admintab_current");
    if (current != "") {
        id = "admintab" + current;
        console.log("cookie: " + current);
        document.getElementById(id).checked = true;
    }
}

function setCookie(){
   var elements = document.querySelectorAll('input[id^="admintab"]');
    for (var i = 0 ; i < elements.length ; ++i)
    {
        (function(index) {
            elements[index].addEventListener("input", function(e){
                console.log(this);
                var current = this.id;
                var idNum = parseInt(current[current.length -1]);
                console.log("set: " + idNum);
                document.cookie = "admintab_current=" + idNum
            });
        })(i);
    }
}

document.addEventListener("DOMContentLoaded", function(event) { 
    checkCookie();
    setCookie();
 });

