function galeria(){

    // Selecionar todas as imagens que estão dentro de galeria_miniaturas
    // miniaturas será um array de imagens
    var miniaturas = document.querySelectorAll(".galeria_miniaturas img")
    miniaturas.forEach(
        function(imagemIndividual){
            // adicionar um ouvinte em CADA UMA das imagens
            imagemIndividual.addEventListener("click",
                function() { 
                    console.log(this.src)       // Exibir o caminho da imagem 
                    document.getElementById("foto_grande").src = this.src
                }
            )
        }
    )
}

// Criar a função para fazer a troca das imagens
function testeDeEvento(){
    const testeJs = document.getElementById("teste")
    const teste2Js = document.getElementById("teste2")

    // Adicionar um ouvinte
    testeJs.addEventListener("click", 
        function(){                     // Função anônima
            teste2Js.innerHTML = "Texto alterado pelo Javascript"
        }
    )
    
}

galeria()