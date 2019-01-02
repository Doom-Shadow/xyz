var shiftCount=0;
//document.getElementById("test").placeholder="hey theres";

function shift()
{   
    if(shiftCount%2==0)
    {   document.getElementById("logIn").style.display="block";
        document.getElementById("signUp").style.display="none";
    }
    else  {
        document.getElementById("logIn").style.display="none";
        document.getElementById("signUp").style.display="block";   
    }
    shiftCount++;
}