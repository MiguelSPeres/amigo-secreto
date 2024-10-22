let amigos = []; // Cria uma variável do tipo array vazia de nome amigos.

function adicionar(){
        let amigo = document.getElementById('nome-amigo'); //obtém o nome do amigo.
        let lista = document.getElementById('lista-amigos'); //obtém a lista.
        amigos.push(amigo.value); // Adiciona o nome de uma amigo ao array amigos.
        
        if (lista.textContent == '') { //Se o conteúdo de texto, do elemeto HTML, de ID de nome lista, for vazio...
                lista.textContent = amigo.value; //Coloque o nome do amigo na lista vazia.
        } else { //se não...
                lista.textContent = lista.textContent + ', ' + amigo.value; //Adicione mais um amigo a lista.
        }
        amigo.value = ''; //Limpa o campo amigo.
}

function sortear() {
        embaralha(amigos);
        let sorteio = document.getElementById('lista-sorteio');

        for (let i = 0; i < amigos.length; i++){ 
                if (i == amigos.length -1) { // Atenção aqui!!!!
                sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
                } else {
                sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i+1] + '<br>';
                }
        }
}

function embaralha(lista) {

        let indice = lista.length
        
        while(indice) {
            // atenção para o pós-incremento indice-- 
            const indiceAleatorio = Math.floor(Math.random() * indice--);
            [lista[indice], lista[indiceAleatorio]] = 
                [lista[indiceAleatorio], lista[indice]];
        }
}

function reiniciar () {
        amigos = [];
        document.getElementById('lista-amigos').innerHTML = '';
        document.getElementById('lista-sorteio').innerHTML = '';
}

            /*      EXPLICANDO O FOR... for significa a conjunção "para"...........................................................

                O loop for em JavaScript (e em várias outras linguagens) 
                é uma estrutura de controle usada para repetir um bloco de código várias vezes.
                Ele é especialmente útil quando você sabe, de antemão, quantas vezes quer executar um conjunto de instruções.

                A sintaxe básica do for é:.....................................................................................
                
                for (inicialização; condição; incremento) {
                        bloco de código a ser repetido
                }

                Explicação de cada parte:......................................................................................

                Inicialização:
                Acontece uma vez, no início do loop, e é usada para declarar e inicializar a variável de controle do loop.
                Exemplo: let i = 0;. Aqui, i geralmente representa um contador ou índice.

                Condição:
                É uma expressão booleana que é avaliada antes de cada iteração do loop.
                Se a condição for verdadeira (true), o bloco de código dentro do for será executado; se for falsa (false), o loop termina.
                Exemplo: i < amigos.length.

                Incremento/Decremento:
                Após a execução do bloco de código dentro do for, o incremento (ou decremento) é aplicado à variável de controle.
                Exemplo: i++, que é um atalho para i = i + 1, aumentando o valor de i a cada iteração.
                
                Funcionamento:.................................................................................................

                Passo 1: Executa a inicialização.
                Passo 2: Avalia a condição. Se for true, executa o bloco de código.
                Passo 3: Após o bloco de código ser executado, realiza o incremento/decremento.
                Passo 4: Volta para o passo 2, onde a condição é verificada novamente.
                Isso se repete até que a condição seja falsa, momento em que o loop para.

                Exemplo prático:...............................................................................................

                for (let i = 0; i < 5; i++) {
                        console.log(i);
                }

                Inicialização: let i = 0; — O loop começa com i igual a 0.
                Condição: i < 5; — O loop continuará enquanto i for menor que 5.
                Incremento: i++ — Após cada iteração, o valor de i será incrementado em 1.

                No nosso caso..................................................................................................
                
                let i = 0
                Aqui, a variável i é declarada com o valor inicial de 0. 
                Essa variável é o índice que vai ser utilizado para acessar cada elemento do array amigos.

                i < amigos.length:
                Essa é a condição que o loop verifica antes de cada iteração. 
                Enquanto i for menor que o tamanho do array amigos 
                (ou seja, enquanto ainda houver elementos no array para serem processados), o loop continua.

                amigos.length
                retorna o número total de elementos no array.

                i++
                Esse é o incremento do índice i que ocorre ao final de cada iteração do loop.
                Basicamente, ele aumenta o valor de i em 1 após cada ciclo do loop

                Ele começa com i igual a 0 e percorre o array amigos, acessando cada elemento através de seu índice 
                (ou seja, amigos[0], amigos[1], etc.).

                O loop termina quando i se torna igual ao tamanho do array 
                (ou seja, quando i não é mais menor que amigos.length).
        */