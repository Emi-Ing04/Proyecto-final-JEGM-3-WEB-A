/* Una variable es un punto en el que se guarda información*/
const boton = document.querySelector('.boton'); /*Seleccionamos el elemento con la clase "boton" de index.html y lo guardamos en la variable "boton"*/
const navLinks = document.querySelector('.nav-links'); /*Seleccionamos el elemento con la clase "nav-links" de index.html y lo guardamos en la variable "navLinks"*/

boton.addEventListener('click', () => { /*Agregamos un evento de click al elemento "boton", después de una variable al agregarle un punto indica que esa variable va a hacer una acción*/
    navLinks.classList.toggle('active'); /*Cuando se haga click en el boton, se va a agregar o quitar la clase "active" al elemento "navLinks"*/
});