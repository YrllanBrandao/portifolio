
function animateH5()
{
  const h5 = document.querySelector('h5');
  h5.innerHTML = ""
  const frases = ['', 'I am a Front-end developer', 'I love Programming', 'I like to solve problems', "I've already developed a game:)","I like to program", 'Hello, World!','Eat(); sleep(); code(); repeat();'];
  
  const numberFrase = Math.floor((Math.random() * 7) + 1);
  
  const fraseSplit = frases[numberFrase]
 // h5.innerHTML = "";
  const newString = fraseSplit.split("");

  newString.forEach((letra, i) => {

 
  
    setTimeout(function() {
      h5.innerHTML += letra;
    
  
 
    }, 120 * i)
  
  })



}
animateH5()

setInterval(animateH5, 5000);

  const h5_ = document.querySelector('h5');
  const listMenu = document.querySelector("ul.listMenu");
  const line1 = document.querySelector("div.line1");
  const line2 = document.querySelector("div.line2");
    
    function showMenu()
    {
    
    listMenu.classList.toggle('active');
    line1.classList.toggle('active');
    line2.classList.toggle('active');
    h5_.classList.toggle('active');
    }
    
    
   /*scroll reveal*/
   
   window.sr = ScrollReveal({reset:true});
   
  
   sr.reveal('.paragrafo',{
     
     duration:2000,
     rotate:{x:200}
     
   })
   sr.reveal('.myProjects',{
     
     duration:2000,
     rotate:{
       x:100
     }
   })
   
  sr.reveal('.project-1', {
    duration:2000,
    rotate:{
      x:200
    }
    
  })
   sr.reveal('.rodape',{
     duration:2000,
    rotate:{x:0,y:200, z:0}
     
   })
   
   sr.reveal('.yrllan', {
     duration:2000,
     rotate:{
        y:100, z:100
     }
   })
   
   sr.reveal('.aboutMe',{
     
    
     duration:2000,
     
     
   })
  