
document.getElementById("arrow").addEventListener("click", validateEmail);

function validateEmail() {
  var ele = document.getElementById("err");

    var textVal = document.getElementById("s1").value;
        if (textVal.match("@"))
        {        
            document.getElementById("t1").value ="email is valid";
            ele.style.visibility = "hidden";
        }
       else{
            document.getElementById("t1").value ="Please provide a valid email";
           ele.style.visibility = "visible";
        
           }
}