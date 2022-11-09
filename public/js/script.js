particlesJS.load('particles-js', '/assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

// Animacion icono de chat

let hiddenChat = document.getElementById("hidden-chat")
let chatIcon = document.getElementById("chat-icon")

hiddenChat.addEventListener('click',() => {
  if (chatIcon.className == "esconder-logo-chat")
  {
    chatIcon.removeAttribute("class");
    chatIcon.setAttribute("class","mostrar-logo-chat");
    console.log("Salgo");
    hiddenChat.setAttribute('data-content', '>')
  }
  else{
    chatIcon.setAttribute("class","esconder-logo-chat")
    console.log("Entro");
    hiddenChat.setAttribute('data-content', '<')
  }
  
})

hiddenChat.addEventListener("animationend", ()=>{}, false);

// Funcion para ver mas contenido de los posts
async function vermas(slug){
  ruta = "/posts/"+slug
  
  fetch(ruta, {method: 'POST'})
      .then((res) => res.json())
      .then((res) => {
                      console.log(res)
                      document.querySelector(`#${slug} .card-text`).textContent = res.body
                      })
}