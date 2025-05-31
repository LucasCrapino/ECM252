const Redux = require('redux');
const { createStore, combineReducers} = Redux;
// escrever uma função criadora da ação
// ela produz uma ação que representa a criação de um novo contrato
const criarContrato = (nome, taxa) => {
    return {
        type: 'CRIAR_CONTRATO',
        payload: {
            nome: nome,
            taxa: taxa
        }
    }
}

//escrever uma nova criadora de ação
//ela serve para cancelar contratos, dado um nome
const cancelarContrato = (nome) => {
    return {
        type: 'CANCELAR_CONTRATO',
        payload: {
            nome: nome
        }
    }
}

// escrever a função para solicitação de cashback
// ela também é criadora de ação

const solicitaCashback = (nome, valor) => {
    return {
        type: 'SOLICITA_CASHBACK',
        payload: {
            nome: nome,
            valor: valor
        }
    }
}

const historicoDePedidosDeCashback = (historicoDePedidosDeCashbackAtual = [], acao) => {
    return acao.type === 'SOLICITA_CASHBACK' ?
        [...historicoDePedidosDeCashbackAtual, acao.payload] :
        historicoDePedidosDeCashbackAtual
}

// resolver a manipulação do caixa, usando o histórico de pedidos de cashback

const caixa = (dinheiroEmCaixa = 0, acao) => {
    return acao.type === 'SOLICITA_CASHBACK' ?
        dinheiroEmCaixa - acao.payload.valor :
        acao.type === 'CRIAR_CONTRATO' ?
            dinheiroEmCaixa + acao.payload.taxa :
        acao.type === 'CANCELAR_CONTRATO' ?
            dinheiroEmCaixa + acao.payload.taxa :
            dinheiroEmCaixa;
}

const departamentoCaixa = ( slice = 0, solicitacao) => {
    return (solicitacao.type === "SOLICITAR_CASHBACK") 
            ? slice - solicitacao.payload.valor
            :
            (solicitacao.type === "CRIAR_CONTRATO")
                ? slice + solicitacao.payload.taxa
                : 
                (solicitacao.type === "CANCELAR_CONTRATO")
                ? slice + 500
                :slice
}

const todosOsReducers = combineReducers({
    historicoDePedidosDeCashback,
    caixa,
    departamentoCaixa
})

const store = createStore(todosOsReducers);

store.subscribe(()=> {
    console.log('Estado:', store.getState());
})
/* 
- Cria um contrato para José,
- Cria um contrato para Maria,
- Solicita cashback de 10 para Maria
- Solicita cashback de 20 para José,
- Cancela o contrato de Maria
*/
// Detalhe: Após cada atividade, exibir o estado atual

store.dispatch(criarContrato('José', 50));
store.dispatch(criarContrato('Maria', 100));
store.dispatch(solicitaCashback('Maria', 10));
store.dispatch(solicitaCashback('José', 20));
store.dispatch(cancelarContrato('Maria'));
