var i=0;
var sources=["ss1.jpg","ss2.jpg","ss3.png","ss4.jpg"];
var my_src = setInterval(slide_show,3000);
function slide_show()
{	
	
	
	var display=document.getElementById("slide");
	display.src=sources[i];
	i++;
	if(i>4)
	{	i=0;
	}
}

