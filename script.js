
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select-to-converted")
const selectCurrency = document.querySelector(".select-currency")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //Valor em real
    const currencyValueConverted = document.querySelector(".currency-value")// outras moedas

    console.log(selectCurrency.value)
    console.log(currencySelect.value)
    
    
    const dolarToday = 5
    const euroToday = 5
    const libraToday = 5 
    const bitcoinToday = 5
    const realToday = 5

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    if(currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
    
        }).format(inputCurrencyValue / dolarToday)

    }

    if(currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if(currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK",{
            style: "currency",
            currency: "GBP"

        }).format(inputCurrencyValue / libraToday)

    }

    if(currencySelect.value == "bitcoin"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "BTC"

        }).format(inputCurrencyValue / bitcoinToday)

    }

    if(currencySelect.value == "real"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR",{
            style: "currency",
            currency: "BRL"

        }).format(inputCurrencyValue / realToday)

    }

    
}

function changeCurrency(){

    const currencyName2 = document.querySelector(".currency-name-b")
    const currencyImage = document.querySelector(".currency-img")
    const currencyBack = document.querySelector("body") 

   
   if(currencySelect.value == "dolar"){
   currencyName2.innerHTML = "Dólar americano"
   currencyImage.src = "./assets/dolar.png"
   currencyBack.style.backgroundImage = "url(./assets/DolarFundo.png)"
   
   }

   if(currencySelect.value == "euro"){
    currencyName2.innerHTML = "Euro"
    currencyImage.src = "./assets/Euro.png"
    currencyBack.style.backgroundImage = "url(./assets/EuroFundo.webp)"
    

    }
     
   if(currencySelect.value == "real"){
    currencyName2.innerHTML = "Real"
    currencyImage.src = "./assets/brasil.png"
    currencyBack.style.backgroundImage = "url(./assets/realFundo.webp)"

    
     }
    
   if(currencySelect.value == "libra"){
    currencyName2.innerHTML = "Libra"
    currencyImage.src = "./assets/libra.png"
    currencyBack.style.backgroundImage = "url(./assets/libraFundo.jpg)"

  
    }
     
   if(currencySelect.value == "bitcoin"){
    currencyName2.innerHTML = "BitCoin"
    currencyImage.src = "./assets/bitcoin.png"
    currencyBack.style.backgroundImage = "url(./assets/BitcoinFundo.jpg)"

  

   }

   convertValues()

}

currencySelect.addEventListener("change", changeCurrency )
convertButton.addEventListener("click", convertValues)