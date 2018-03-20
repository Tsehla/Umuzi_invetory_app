document.getElementById("enter").innerHTML='<div id="main_container"><style>#pop_container{display:none;background-color:transparent;}{border: 1px solid black;}#container{width:2em;height:2em;background-image:url(https://tsehla.github.io/Umuzi_invetory_app/butter.gif);background-size:contain;position:absolute;left:15%;top:15%}#pop_container{position:absolute;width:15em;height:15em;top:35%;left:35%;}#pop_contents{display:grid;width:15em;height:15em;grid-template-columns:5em 5em 5em;grid-template-rows: 5em 5em 5em;grid-template-areas: "one two three""four five six""seven eight nine";}#1{ grid-area: "one"; }#image_1{ width:5em; height:5em;background-image:url(https://tsehla.github.io/Umuzi_invetory_app/tsehla.jpg);background-size:cover;background-position:center;}#2{grid-area: "two";}#image_2{width: 5em; height:5em;}#3{grid-area:"three";}#image_3{ width:5em;height:5em; background-image:url(https://tsehla.github.io/Umuzi_invetory_app/tsehla.jpg);background-size:cover;background-position:center;}#4{ grid-area: "four";}#image_4{ width: 5em; height:5em;}#5{ grid-area: "five";}#image_5{ width: 5em; height:5em; background-image:url(https://tsehla.github.io/Umuzi_invetory_app/tsehla.jpg);background-size:cover;background-position:center;border-top-left-radius:20px;border-bottom-right-radius:20px;}#6{grid-area: "six";}#image_6{width:5em;height:5em;}#7{ grid-area: "seven";}#image_7{width:5em;height:5em;background-image:url(https://tsehla.github.io/Umuzi_invetory_app/tsehla.jpg);background-size:cover;background-position:center;}#8{grid-area:"eight";}#image_8{width:5em;height:5em;}#9{grid-area:"nine";}#image_9{width:5em;height:5em;background-image:url(https://tsehla.github.io/Umuzi_invetory_app/tsehla.jpg);background-size:cover;background-position:center;}</style><!-- main container --><div id="container"></div><!-- pop up stuff --><div id="pop_container"><button id="hide_button">X</button><div id="pop_contents"><!-- implementors container --><div id="1" onclick="window.open(&apos;https://www.facebook.com/pt.nkhi&apos;)"><div id="image_1"></div></div><div id="2"><div id="image_2"></div></div><div id="3" onclick="window.open(&apos;https://www.facebook.com/pt.nkhi&apos;)"><div id="image_3"></div></div><div id="4"><div id="image_4"></div></div><div id="5" onclick="window.open(&apos;https://www.facebook.com/pt.nkhi&apos;)"><div id="image_5"></div></div><div id="6"><div id="image_6"></div></div><div id="7" onclick="window.open(&apos;https://www.facebook.com/pt.nkhi&apos;)"><div id="image_7"></div></div><div id="8"><div id="image_8"></div></div><div id="9" onclick="window.open(&apos;https://www.facebook.com/pt.nkhi&apos;)"><div id="image_9"></div></div></div></div></div>';


document.getElementById("hide_button").onclick=function(){
    document.getElementById("pop_container").style.display="none";
}
document.getElementById("container").onclick=function(){
    document.getElementById("pop_container").style.display="block";
    
//container move
  
function move(){
var x=Math.floor(Math.random() * 100); 
var y=Math.floor(Math.random() * 100);       
document.getElementById("container").style.left = x+"%";  
document.getElementById("container").style.top = y+"%";   
 }

setInterval(move,3000);
    


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}