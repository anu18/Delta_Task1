function view_text()
{
var t=document.getElementById('mytext').value;

t=t.replace(/\>/g,"&gt");   // prevent user from typing html tags
t=t.replace(/\</g,"&lt");
t=t.replace(/\n/g,"<br />");   // finds newlines

t=t.replace(/\[b\]/g,"<b>");   
t=t.replace(/\[\/b\]/g,"</b>");

t=t.replace(/\[i\]/g,"<i>");   
t=t.replace(/\[\/i\]/g,"</i>");

t=t.replace(/\[u\]/g,"<u>");   
t=t.replace(/\[\/u\]/g,"</u>");

t=t.replace(/\[p\]/g,"<p>");   
t=t.replace(/\[\/p\]/g,"</p>");

t=t.replace(/\[color=/g,"<span style=\"color:");
t=t.replace(/\[\/color\]/g,"</span>"); 
t=t.replace(/\]/g,"\" >");



document.getElementById('viewtext').innerHTML=t;
}


function change(x,y)
{
t=document.getElementById('mytext');

if(typeof(t.selectionstart!="undefined"))
var begin=t.value.substring(0,t.selectionStart);     
var select=t.value.substring(t.selectionStart,t.selectionEnd);
var end=t.value.substring(t.selectionEnd);

t.value=begin+x+select+y+end;

}



function dold()
{
var t=document.getElementById('mytext');
var d=t.value.substring(t.selectionStart,t.selectionEnd);
var r="";
for(var i=0;i<d.length;i=i+2)
{
r+=d.charAt(i).toUpperCase()+d.charAt(i+1).toLowerCase();
}
t.value=t.value.substring(0,t.selectionStart)+"[b]"+r+"[/b]"+t.value.substring(t.selectionEnd);
}

function ditalics()
{
var t=document.getElementById('mytext');
var d=t.value.substring(t.selectionStart,t.selectionEnd);
var r="";
for(var i=0;i<d.length;i=i+2)
{
r+=d.charAt(i).toUpperCase()+d.charAt(i+1).toLowerCase();
}
t.value=t.value.substring(0,t.selectionStart)+"[i]"+r+"[/i]"+t.value.substring(t.selectionEnd);
}
