let itens = [];

function adicionar(item) {
    let item_valido = true

    if (
        !is_numerico(item.id) ||
        is_id_cadastrado(item.id) ||
        item.id <= 0 ||
        !is_numerico(item.qtd) ||
        item.qtd < 0 || 
        item
    ) {
        item_valido = false;
    }

    if (item_valido) {
        itens.push(item);
    }
    return item_valido;
}

function listar() {
    return itens;
}

function editar(id, qtd) {
    let item_valido = true

    if (
        !is_numerico(id) ||
        !is_id_cadastrado(id) ||
        !is_numerico(qtd)
    ) {
        item_valido = false;
    }

    if(item_valido){
        itens.forEach(item_cadastrado => {
            if (item_cadastrado.id == id) {
                item_cadastrado.qtd = qtd;
         }  
    });
}
    return true;
}

module.exports = (
    adicionar,
    listar
);

function is_id_cadastrado() {
    let id_cadastrado = false;
    itens.forEach(item_cadastrado => {
        if (item_cadastrado.id == id) {
            item_cadastrado = true;
        }
    });
    return id_cadastrado;
}

function is_numerico(n) {
    if (isNaN(n) || n == null) {
        return false;
    }
    return true
}