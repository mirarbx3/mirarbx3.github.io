let Pleoader = document.querySelector('.preolader')
window.addEventListener('load', function (){  
    setInterval(() => {
        Pleoader. style.display = 'none'
    }, 10000);
   })
  
  
  
   let linkTop = document.querySelector('.link-top')
   window.addEventListener('scroll', function (){
    let height = window.innerHeight;
    if (window.scrollY > height) {
        btnTop.style.display = 'flex'
        }
     else {
        btnTop.style.display = 'none'
    }
 })
 let btnTop = document.querySelector('.btn-top')
 window.addEventListener('scroll', function (){
    let height = window.innerHeight;
               if (window.scrollY > height) {
                   btnTop.style.display = 'flex'
               }
               else {
                   btnTop.style.display = 'none'
               }
   })
              