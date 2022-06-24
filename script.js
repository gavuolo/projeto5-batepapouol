//mensagem: https://mock-api.driven.com.br/api/v6/uol/messages

//participante: https://mock-api.driven.com.br/api/v6/uol/participants 

//status: https://mock-api.driven.com.br/api/v6/uol/status

let menssagem = []

buscarMensagem()

function buscarMensagem(){

    let promessa =  axios.get("https://mock-api.driven.com.br/api/v6/uol/messages");   

   promessa.then(deuCerto);

    promessa.catch(error => {
        alert(error)
    })

}

function atualizarChat(){
    let promessa =  axios.get("https://mock-api.driven.com.br/api/v6/uol/messages");   

    promessa.then(deuCerto);
    
    

}

function deuCerto(resposta){
    menssagem = resposta.data;
    renderizarMensagem()
}
setInterval(buscarMensagem, 3000) //mudar para 3000

function renderizarMensagem(){

    let chat = document.querySelector('.chat')
    
    
        chat.innerHTML = ""
    

        for (let i = 0; i < menssagem.length; i++){

            if (menssagem[i].type === "status"){
                
                chat.innerHTML += `<div class="user logIn"> <p> <i>(${menssagem[i].time})</i> <strong>${menssagem[i].from}</strong> ${menssagem[i].text}</p> </div>`
                
            }
            else if (menssagem[i].to != "Todos") {
            
                chat.innerHTML += `<div class="user pvt"> <p><i>(${menssagem[i].time})</i> <strong>${menssagem[i].from}</strong> reservadamente para <strong>${menssagem[i].to}</strong>: ${menssagem[i].text}</p> </div>`
                
            } else {
                chat.innerHTML += `<div class="user public"> <p><i>(${menssagem[i].time})</i> <strong>${menssagem[i].from}</strong> para <strong>${menssagem[i].to}</strong>: ${menssagem[i].text}</p> </div>`
                
            }
            
        }
        return    //pra não acumular mensagem

}
scrollar()

function scrollar(){
    let ultMsg = document.querySelector(".chat > div:last-child");
    ultMsg.scrollIntoView();
}


