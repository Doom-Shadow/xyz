/*SLIDE SHOW*/

var img=["ss1.jpg","ss2.jpg","ss3.jpg","ss4.jpg"];
var count=0;
var timer=setInterval(change,6000);
function change()
{   count++;
    if(count==4)
    {count=0;
    }

    document.getElementById("chang").src=img[count];
    check();
    
}
function forward()
{   
    count++;
    if(count>3)
    {count=0;
    }
    var display=document.getElementById("chang");
    display.src=img[count];
    check();
}
function prev()
{   
    count--;
    if(count<0)
    {   count=3;

    }
    var display=document.getElementById("chang");
    display.src=img[count];
    check();
}
function dis(num)
{   var display=document.getElementById("chang");
    count=num;
    display.src=img[count];
    check();
}
function check()
{
    if(count==0)
    {   document.getElementById("img-1").style.backgroundColor = "cornflowerblue";
        document.getElementById("img-2").style.backgroundColor = "gray";
        document.getElementById("img-3").style.backgroundColor = "gray";
        document.getElementById("img-4").style.backgroundColor = "gray";
        document.getElementById("1-overhead").style.display="block";
        document.getElementById("2-overhead").style.display="none";
        document.getElementById("3-overhead").style.display="none";
        document.getElementById("4-overhead").style.display="none";
    }
    if(count==1)
    {   document.getElementById("img-2").style.backgroundColor = "cornflowerblue";
        document.getElementById("img-1").style.backgroundColor = "gray";
        document.getElementById("img-3").style.backgroundColor = "gray";
        document.getElementById("img-4").style.backgroundColor = "gray";
        document.getElementById("1-overhead").style.display="none";
        document.getElementById("2-overhead").style.display="block";
        document.getElementById("3-overhead").style.display="none";
        document.getElementById("4-overhead").style.display="none";
    }
    if(count==2)
    {   document.getElementById("img-3").style.backgroundColor = "cornflowerblue";
        document.getElementById("img-2").style.backgroundColor = "gray";
        document.getElementById("img-1").style.backgroundColor = "gray";
        document.getElementById("img-4").style.backgroundColor = "gray";
        document.getElementById("1-overhead").style.display="none";
        document.getElementById("2-overhead").style.display="none";
        document.getElementById("3-overhead").style.display="block";
        document.getElementById("4-overhead").style.display="none";
    }
    if(count==3)
    {   document.getElementById("img-4").style.backgroundColor = "cornflowerblue";
        document.getElementById("img-2").style.backgroundColor = "gray";
        document.getElementById("img-3").style.backgroundColor = "gray";
        document.getElementById("img-1").style.backgroundColor = "gray";
        document.getElementById("1-overhead").style.display="none";
        document.getElementById("2-overhead").style.display="none";
        document.getElementById("3-overhead").style.display="none";
        document.getElementById("4-overhead").style.display="block";
    }
}
