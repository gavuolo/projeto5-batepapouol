let menssagem = []
let nome
let enviarTexto;

entradaChat()

//pergunta nome e entra no API
function entradaChat(){
    nome = prompt("Qual seu lindo nome?")

    let user = {
        name: nome
    }

    let promessa = axios.post("https://mock-api.driven.com.br/api/v6/uol/participants", user);
    promessa.then(online);
    promessa.catch(erro);

}
//---------------------------------------------------------
// then - catch
function erro(){
    alert("erro")
}

function deuCerto(resposta){
menssagem = resposta.data;
renderizarMensagem()
}

//--------
function online(participante){
    participante.data += nome
}

//------

function pegarMensagem(){

    let texto = document.querySelector(".box-input input").value
        
    enviarTexto = {
        from: nome,
        to: "Todos",
        text: texto,
        type: "message",
    }

    let promessa = axios.post("https://mock-api.driven.com.br/api/v6/uol/messages", enviarTexto)
    promessa.then(enviou =>{
        console.log("enviou");
        document.querySelector(".box-input input").value = ""
    })
    promessa.catch(console.log("não"))

}


buscarMensagem()
function buscarMensagem(){

    let promessa =  axios.get("https://mock-api.driven.com.br/api/v6/uol/messages");   

   promessa.then(deuCerto);
   promessa.catch(erro)

}

setInterval(buscarMensagem, 3000) //atualiza as mensagens a cada 3s

//Adiciona as mensagens que estao no API
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
        return  
}
