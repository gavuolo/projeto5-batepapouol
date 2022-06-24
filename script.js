//linkar o axios
//fazer a mensagem ser enviada para o axios
// capturar os textos enviados do axios e transferir para as divs do chat
// input.inerHTML.value para pegasr o que foi digitado no input

//mensagem: https://mock-api.driven.com.br/api/v6/uol/messages

//participante: https://mock-api.driven.com.br/api/v6/uol/participants 

let menssagemEnviada = []

//user.push(mensaggem)

let usuario = [{
    name: "",
}]

buscarMensagem()
function buscarMensagem(){

    let promessa =  axios.get("https://mock-api.driven.com.br/api/v6/uol/messages");
        

   promessa.then(alerta => {
    console.log(alerta)
    console.log(alerta.data)
    menssagem = alerta.data
    renderizarMensagem()
    })

    promessa.catch(error => {
        console.log(error)
    })


}

function renderizarMensagem(){

    let chat = document.querySelector('.chat')
      
        for(let i = 0; i < menssagem.length; i++){
            
            chat.innerHTML += `<div class="user"> (${menssagem[i].time}) ${menssagem[i].from} para ${menssagem[i].to}: ${menssagem[i].text} </div>`

        }


}

//{from: 'aa', to: 'Todos', text: 'entra na sala...', type: 'status', time: '05:35:02'}