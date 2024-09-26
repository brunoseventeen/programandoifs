function teste()  {
    let idade = document.getElementById("idade").value
    if (idade >= 6 && idade <=11 ) {
        document.getElementById("tela").innerText = "Voçe está apto para a classe infantil"
    }
    if (idade >= 12 && idade <=17 ) {
        document.getElementById("tela").innerText = "Voçe está apto para a classe Juvenil"
    }
    if (idade >= 18 && idade <=34 ) {
        document.getElementById("tela").innerText = "Voçe está apto para a classe Adulto"
    }
    else if (idade >=35)  {
        document.getElementById("tela").innerText = "Voçe não  está apto para nenhuma classe"
    }
}
function indice() {
    let ind = document.getElementById("indice").value
    if (ind <=5) {
        document.getElementById("tela2").innerText = "Sistema Com Defeito No Momento"
    }
    if (ind >= 5 && ind <=30 ) {
        document.getElementById("tela2").innerText = "Aceitavel"
    }
    if (ind >= 31 && ind <=40 ) {
        document.getElementById("tela2").innerText = "Alerta (Grupo 1 Deverá Suspender Atividades)"
    }
    if (ind >= 41 && ind <=50 ) {
        document.getElementById("tela2").innerText = "Perigo (Grupo 1 e Grupo 2 Deverá Suspender Atividades)"
    }
    if (ind >= 51) {
        document.getElementById("tela2").innerText = "Urgencia (Todos Parem os Serviços)"
    }
}
function verIns() {
    let inid = Number(document.getElementById("inssidade").value)
    
    let ini = 2024 - inid
    if (ini >= 65) {
        document.getElementById("telo").innerText += "já pode se aposentar com a gente "
        document.getElementById("telo").innerHTML += "<button>Prencher Formulario</button>"
    }
    if (ini <= 65 && ini >= 60) {
        document.getElementById("telo").innerText += "qual anos Voce entrou na sua empresa ? "
        document.getElementById("telo").innerHTML += "<input type=\"number\" id=\"anoserviço\">"
        document.getElementById("telo").innerHTML += "<button onclick=\"enviar()\">Enviar</button>"
    }
    if (ini <= 60) {
        document.getElementById("telo").innerText += "qual anos Voce entrou na sua empresa ? "
        document.getElementById("telo").innerHTML += "<input type=\"number\" id=\"anoserviço\">"
        document.getElementById("telo").innerHTML += "<button onclick=\"enviar()\">Enviar</button>"
    }
    
}
function enviar() {
    let ant = Number(document.getElementById("inssidade").value)
    let anonaem = Number(document.getElementById("anoserviço").value)
    let res = 2024 - anonaem
    if (res >=30)  {
        document.getElementById("telo").innerText += "já pode se aposentar com a gente "
        document.getElementById("telo").innerHTML += "<button>Prencher Formulario</button>"
    }
    if (res >=25 && ant <=60)  {
        document.getElementById("telo").innerText += "já pode se aposentar com a gente "
        document.getElementById("telo").innerHTML += "<button>Prencher Formulario</button>"
    }
    if (res <=30 && ant <=65)  {
        document.getElementById("telo").innerText += "Infeliz mente não podemos prosseguir"
    }


}
function calcraiz() {
    let a = Number(document.getElementById ("raiza").value)
    let b = Number(document.getElementById ("raizb").value)
    let c = Number(document.getElementById ("raizc").value)
    let d = (b**2)- 4*a*c
    let e = (-b + (d**0.5))/2*a
    let f = (-b - (d**0.5))/2*a
    let g = -b/2*a

    if (d <0 ) {
    document.getElementById("tela8").innerText = "Esta equação não possui raizes reais"    
    }
    if (d > 0) {
        document.getElementById("tela8").innerText = "x1 e " + e  + " x2 e " + f  
        }
    if (d == 0) {
        document.getElementById("tela8").innerText = "x e " + g   
    }
}