let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

function addTarefa() {
    //pegar o valor digitado no input
    let valorInput = input.value;
    // teste pra ver se ta vazio
    if ((valorInput !== "") && (valorInput !==null) && (valorInput !== undefined)) {

        ++contador;

        let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="deletar"><i class="mdi mdi-delete"></i> Deletar</button>
        </div>
    </div>`;
        //adicionar item ao main
        main.innerHTML += novoItem;
        // zerar o placeholder
        input.value = "";
    }
}

function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id) {
    var item = document.getElementById(id);
    var classe =  item.getAttribute('class');

    if (classe == "item") {
        item.classList.add('concluido');
        
        var  icone = document.getElementById('icone_'+ id);
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');
        item.parentNode.appendChild(item);
    } else {
        item.classList.remove('concluido');
        
        var  icone = document.getElementById('icone_'+ id);
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    }
}

input.addEventListener("keyup", function(event){
    // tecla 13 é enter
    if (event.keyCode ===13){
        event.preventDefault();
        btnAdd.click();
    }
})

