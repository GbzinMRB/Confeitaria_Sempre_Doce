// criar a lista de imagens 
let imagens = [
        'assets/img/bolo capa 1.jfif',
        'assets/img/bolo capa 2.jfif',
        'assets/img/bolo capa 3.avif'
]
let indiceAtualListaImagens = 0

function exibirImagem(){
    let imagemCarrosel = document
    .getElementById('img-carrosel')
    imagemCarrosel.src = imagens[indiceAtualListaImagens]
}



setInterval(function() {
    exibirImagem()
    indiceAtualListaImagens++ 

    if (indiceAtualListaImagens > 2) {
        indiceAtualListaImagens = 0 
    }

    
}, 5000);

exibirImagem()
indiceAtualListaImagens++