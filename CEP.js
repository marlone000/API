
function Converter(cep) {
    fetch("https://cep.awesomeapi.com.br/json" + cep)
        .then((response) => response.json())
        .then((data) => alert(data.city + data.district+ data.address+data.state))
        // .then((error) => console.log(error))
}

document.getElementById("mostrar").addEventListener("click",()=>{
    let cep = document.getElementById("cep").value
    Converter(cep)
})