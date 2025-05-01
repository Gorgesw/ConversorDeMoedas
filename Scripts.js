//cotação das moedas:
const USD = 5.68
const EUR = 6.40
const GBP = 7.53


//obtendo elementos do formulário.
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipulando o input amount para receber somente números.
amount.addEventListener("input", () => {
    const HasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(HasCharactersRegex, "")

})

//Capturando o evento de SUBMIT (enviar) do formulário.
form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value) {
        case "USD":
            ConvertCurrency(amount.value, USD, "$")
            break
        case "EUR":
            ConvertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            ConvertCurrency(amount.value, GBP, "£")
            break

    }


}

//Função para converter a moeda
function ConvertCurrency(amount, price, symbol) {
    try {
        //Exibindo a cotação da moeda selecionada
        description.textContent = `${symbol}1 = ${FormatCurrencyBRL(price)} `

        //resultado Total
        let total = amount * price
        result.textContent = `${FormatCurrencyBRL(total).replace("R$","")} Reais`

        //Aplica a classe para exibir o footer.
        footer.classList.add("show-result")
    } catch (error) {
        //Remove a classe, parando de exibir o footer.
        footer.classList.remove("show-result")

        console.log(error)
        alert("Não foi possível converter. Tente novamente Mais tarde")
    }
}

//Formata a moeda em Real Brasileiro (RS:)
function FormatCurrencyBRL(value) {
    //Converte para número para utilizar o to LocateString para transformar no padrao BRL
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}