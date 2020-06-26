 function lazyimg() {

     var a = document.querySelectorAll('[data-src]');

     for (var item of a) {

         var data = item.getAttribute('data-src');
         console.log(data)
         item.setAttribute('src', data)
     }










 }

 setTimeout(lazyimg(), 2000);




 function menu() {

     return document.getElementsByClassName('menu')[0];






 }

 function hamb() {

     return document.getElementsByClassName('nav__hamburger')[0]
 }



 function menuVisible() {
     menu().style.visibility = "visible"



 }

 function menuHidden() {



     menu().style.visibility = "hidden"

 }


 hamb().addEventListener('click', () => {
     if (menu().style.visibility == "hidden" || menu().style.visibility == "") {

         menuVisible()

     } else {

         menuHidden()
     }




 })