function myFunction(){
    console.log('asd');
  }
  

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

    function renew() {
        var fname=getCookie("PHPSESSID");
        if (fname==null) {fname="";}
        alert (fname);
        document.location.reload();
      /*
      

      */
      
    }

    document.getElementById("myButton").addEventListener("click", renew);