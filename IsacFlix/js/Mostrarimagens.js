import { conectaApi } from "./ConectaApi.js";

const lista = document.querySelector("[data-imagem]");
var idVideo;
var id;
var nomeVideo;
const teste = document.getElementsByClassName("videos");



console.log(lista);




function constroiCard(imageUrl, Titulo , Descrição , id){
    const imagem = document.createElement("div")  
    imagem.className = "swiper-slide";
    imagem.innerHTML = ` <div class="videos">
        <h1 class = "titulo">${Titulo}</h1>
        <img src="${imageUrl}" alt="${Descrição}">
       <div class="id" data-id="" hidden id="id"> ${id} </div>
    </div>`;

   
    return imagem;

}
//a href= "./pages/ListaVideo.html">
async function ListaImagens(imagem){
    const listaApi = await conectaApi.ListaImagens();
    listaApi.forEach(elemento => lista.appendChild(constroiCard(elemento.imageUrl, elemento.Titulo, elemento.Descrição, elemento.id)));

    const id = lista.getElementsByClassName("videos");

    pegaId(id);

    partida();
   
      
   
}

function pegaId(){
   
    const teste = document.getElementsByClassName("videos");
    const elementos = document.getElementsByClassName("id");

   Array.from(teste).forEach(function(elemento) {
     elemento.addEventListener("click", function() {
      
      idVideo = this.querySelector(".id").textContent;
      nomeVideo= this.querySelector(".titulo").textContent;
       console.log(nomeVideo);
       console.log(idVideo);
       return idVideo;
     });
     
   });
   
   
 
}


async function selecionaVideo(){
 
  const listaApi = await conectaApi.ListaImagens();
   
  listaApi.forEach(objeto => {

    var idV = parseInt(idVideo);
    var idOb= parseInt(objeto.id);
    
      if(idV === idOb){
        FazListaEpisodios(idOb);

        
        
      }
     
  })
}
      
function partida(){
  const teste = document.getElementsByClassName("videos");

  
  for (let i = 0; i < teste.length; i++) {
    const elemento = teste[i];
    elemento.addEventListener("click", selecionaVideo);
  }
}

async function constroiEpisodios (Titulo){
  const Listaepisodios = document.createElement("div");
        Listaepisodios.className = "ListaEpisodios"
        Listaepisodios.innerHTML = `<div> 
         
            <h2>${Titulo}</h2>
           
        
        </div>`
        
        return Listaepisodios

     


}


async function FazListaEpisodios(Listaepisodios){
  const listaApi = await conectaApi.ListaImagens();
 

  listaApi.forEach(elemento => lista.appendChild(
    constroiEpisodios(elemento.Titulo)));
}
  
ListaImagens();


