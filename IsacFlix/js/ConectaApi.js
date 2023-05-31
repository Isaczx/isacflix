async function ListaImagens(){
    const conexao = await fetch("http://localhost:3000/./Animes");
    const conexaoConvertida = await conexao.json();
    

    return conexaoConvertida;
    
}



export const conectaApi = {
    ListaImagens,
    
    
}