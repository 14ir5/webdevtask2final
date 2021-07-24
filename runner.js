

var bestscore=0;

function change(){
  
    
    var ob=document.getElementById("tri");
    ob.classList.add("tri");
    
    var crc=document.getElementById("circle");
    crc.classList.add("circle");
    if(ob.getBoundingClientRect().top=='108')
   {
    ob.style.borderBottom = "50px solid rgb(165, 42, 52)";
   ob.style.borderTop = "0px";
    ob.style.top="150px";
   }
   else
   {
    ob.style.borderTop = "50px solid rgb(165, 42, 52)";
    ob.style.borderBottom = "0px";
    ob.style.top="0px";
   }
  
}

document.addEventListener("keydown",function(event){
    
    change();
    
});


setInterval(function(){
    var obj=document.getElementById("hole");
     obj.classList.add("hole");
     setTimeout(function(){
     obj.classList.remove("hole");
   },2000);
  
 },5000);



var score=0;
var hm=setInterval(touch,2);
function touch(){
    var obj=document.getElementById("hole");
    var ob=document.getElementById("tri");
    var crc=document.getElementById("circle");
    var style=getComputedStyle(obj);
    var stl=getComputedStyle(crc);
    var x="rgb(128, 128, 128)";
   


  if(x.localeCompare(style.backgroundColor)==0&&(obj.getBoundingClientRect().left-ob.getBoundingClientRect().left<40&&(obj.getBoundingClientRect().left-ob.getBoundingClientRect().left))>10&&ob.getBoundingClientRect().top=='258'||   (crc.getBoundingClientRect().top-tri.getBoundingClientRect().top)<40&&(crc.getBoundingClientRect().left-tri.getBoundingClientRect().left)<50&&(crc.getBoundingClientRect().top-tri.getBoundingClientRect().top)>-40&&(crc.getBoundingClientRect().left-tri.getBoundingClientRect().left)>0)
    { 
        crc.classList.remove("circle");
        ob.classList.remove("tri");
        obj.classList.remove("hole");
      
        ob.style.borderTop = "50px solid rgb(165, 42, 52)";
        ob.style.borderBottom = "0px";
        ob.style.top="0px";
       
        var info=document.createElement('div');
        info.innerHTML="GAME OVER! <br> Your score is:"+ score +"";
        info.style.width="150px"
        info.style.height="50px"
        info.style.backgroundColor="green"
        info.style.textColor="black"
        document.getElementById("bd").appendChild(info);
        document.addEventListener("keydown",function(event){
    
            info.parentNode.removeChild(info);});
        
        if(score>bestscore)
        {
        if(bestscore!='0')
        bs.remove();
        bestscore=score;
        bs=document.createElement('div');
        bs.innerHTML="best score:"+bestscore+"";
        bs.style.width="100px"
        bs.style.height="50px"
        bs.style.backgroundColor="yellow"
        bs.style.textColor="black"
        document.getElementById("bd").appendChild(bs);
        score=0;
        }
        else{
        score=0;
        }
    }
    else
    {
        if(ob.getBoundingClientRect().top=='258')
        score++;
          
          if(score>3500)
        ob.style.animationDuration="1.5s";
        else if(score>2500)
        ob.style.animationDuration="2s";
        else if(score>1500)
        ob.style.animationDuration="2.5s";
        else if(score>500)
        ob.style.animationDuration="3s";
        
        
        
    }
   
}



setInterval(function(){
   
    
        var pwup=document.createElement('div');
        pwup.id='pwup';
        pwup.style.width="20px"
        pwup.style.height="20px"
        pwup.style.backgroundColor="green"
        document.getElementById("cen").appendChild(pwup);
        pwup.style.position="relative";
        pwup.style.top='90px';
        pwup.style.left=Math.floor(Math.random() * 990)+"px";
        var ob=document.getElementById("tri");
        var obj=document.getElementById("hole");
       

       
 setInterval(function(){
    var ob = document.getElementById('tri'),
    elemOffset  = pwup.getBoundingClientRect(),
    elemDisplay = pwup.style.display;
      
     pwup.style.display = 'none';   
     var topElem = document.elementFromPoint(elemOffset.left, elemOffset.top);
     pwup.style.display = elemDisplay;
   var  count=500;
   if (topElem==ob) 
   {
    pwup.parentNode.removeChild(pwup);
    clearInterval(hm);
    console.log("adir");
    var scr=setInterval(function(){
    score=score+1;
    document.getElementById('cd').innerHTML="countdown:"+count+"";
    count=count-1;
    },2);    
   }
   setInterval(function(){
   if(count>0&&count<20)
  {
    console.log("rida00");
    clearInterval(scr);   
    hm=setInterval(touch,2);
    count=500;
  }
},1);

},1);
        
        setTimeout(function(){
        pwup.parentNode.removeChild(pwup);
       },10000);
        
 },20000);

