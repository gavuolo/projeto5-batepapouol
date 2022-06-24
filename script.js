//mensagem: https://mock-api.driven.com.br/api/v6/uol/messages

//participante: https://mock-api.driven.com.br/api/v6/uol/participants 

//status: https://mock-api.driven.com.br/api/v6/uol/status

let menssagemEnviada = []

//user.push(mensaggem)

let usuario = [{
    name: "",
}]

buscarMensagem()
function buscarMensagem(){

    let promessa =  axios.get("https://mock-api.driven.com.br/api/v6/uol/messages");   

   promessa.then(alerta => {
    //console.log(alerta)
    //console.log(alerta.data)
    menssagem = alerta.data
    renderizarMensagem()
    })

    promessa.catch(error => {
        console.log(error)
    })


}

function renderizarMensagem(){

    let chat = document.querySelector('.chat')

        for (let i = 0; i < menssagem.length; i++){

            if (menssagem[i].type === "status"){
                
                chat.innerHTML += `<div class="user logIn"> <p> <i>(${menssagem[i].time})</i> <strong>${menssagem[i].from}</strong> ${menssagem[i].text}</p> </div>`

            }
            else if (menssagem[i].to != "Todos") {
            
                chat.innerHTML += `<div class="user pvt"> <p><i>(${menssagem[i].time})</i> <strong>${menssagem[i].from}</strong> reservadamente para <strong>${menssagem[i].to}</strong>: ${menssagem[i].text}</p> </div>`

            } else {
                chat.innerHTML += `<div class="user public"> <p>(${menssagem[i].time}) ${menssagem[i].from} para ${menssagem[i].to}: ${menssagem[i].text}</p> </div>`
            }
            
            

        }


}

//{from: 'aa', to: 'Todos', text: 'entra na sala...', type: 'status', time: '05:35:02'}