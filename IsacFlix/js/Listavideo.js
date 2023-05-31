import { conectaApi} from "./ConectaApi.js";

const lista = document.querySelector("[data-Anime]");


 

function constroiPagina(imageUrl, titulo, descrição){
    const poster = document.createElement("div");
    poster.className = "poster";
    poster.innerHTML = `<div class="anime"> 
        <h1 class="Titulo">${titulo} </h2>
        <img src="${imageUrl}" alt="${titulo}">
        <h2>${descrição}</h2>
     </div>`

     return poster;
}

async function ListaImagens(poster){
    const listaApi =  await conectaApi.ListaImagens();

    
    

    for (let id = Element.id; id !=null ; listaApi.lista.appendChild(constroiCard(imageUrl, Titulo, Descrição))) {
        console.log("certo")
    
   }
       
        
    
        
    }

    ListaImagens();
    


