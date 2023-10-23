const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select-to-converted");
const selectCurrency = document.querySelector(".select-currency");


console.log(selectCurrency.value);
console.log(currencySelect.value);

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert" ); //Valor em real
  const currencyValueConverted = document.querySelector(".currency-value"); // outras moedas

  let equals = 1;
  const dolarToday = 5.03;
  const euroToday = 5.33;
  const libraToday = 6.12;
  const bitcoinToday = 153620.36;
  const realToday = 1;

  if (selectCurrency.value == "real-Br"){
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue);
  equals = inputCurrencyValue * realToday;
}

  if (selectCurrency.value == "dolar-US"){
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue);
  equals = inputCurrencyValue * dolarToday;
  }
  if (selectCurrency.value == "euro-DE"){
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue);
  equals = inputCurrencyValue * euroToday;
}

  if (selectCurrency.value == "libra-UK"){
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue);
  equals = inputCurrencyValue * libraToday;
}

  if (selectCurrency.value == "bit-Coin"){
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
    }).format(inputCurrencyValue);
  equals = inputCurrencyValue * bitcoinToday;
}

  if (currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(equals / dolarToday);
  }

  if (currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(equals / euroToday);
  }

  if (currencySelect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "GBP",
    }).format(equals / libraToday);
  }

  if (currencySelect.value == "bitcoin") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
    }).format(equals / bitcoinToday);
  }

  if (currencySelect.value == "real") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(equals / realToday);
  }
}

function changeCurrencySell() {
  const currencyNameA = document.getElementById("currency-name-a");
  const currencyImgA = document.querySelector(".currency-img-a");

  if (selectCurrency.value == "real-Br") {
    currencyNameA.innerHTML = "Real";
    currencyImgA.src = "./assets/brasil.png";
  }

  if (selectCurrency.value == "dolar-US") {
    currencyNameA.innerHTML = "Dólar americano";
    currencyImgA.src = "./assets/dolar.png";
  }

  if (selectCurrency.value == "euro-DE") {
    currencyNameA.innerHTML = "Euro";
    currencyImgA.src = "./assets/Euro.png";
  }

  if (selectCurrency.value == "libra-UK") {
    currencyNameA.innerHTML = "Libra";
    currencyImgA.src = "./assets/libra.png";
  }

  if (selectCurrency.value == "bit-Coin") {
    currencyNameA.innerHTML = "BitCoin";
    currencyImgA.src = "./assets/bitcoin.png";  
  }

  convertValues();
}

function changeCurrencyBuy() {
  const currencyName2 = document.getElementById("currency-name-b");
  const currencyImage = document.querySelector(".currency-img");
  const currencyBack = document.querySelector("body");

  if (currencySelect.value == "dolar") {
    currencyName2.innerHTML = "Dólar americano";
    currencyImage.src = "./assets/dolar.png";
    currencyBack.style.backgroundImage = "url(./assets/DolarFundo.png)";
  }

  if (currencySelect.value == "euro") {
    currencyName2.innerHTML = "Euro";
    currencyImage.src = "./assets/Euro.png";
    currencyBack.style.backgroundImage = "url(./assets/EuroFundo.webp)";
  }

  if (currencySelect.value == "real") {
    currencyName2.innerHTML = "Real";
    currencyImage.src = "./assets/brasil.png";
    currencyBack.style.backgroundImage = "url(./assets/realFundo.webp)";
  }

  if (currencySelect.value == "libra") {
    currencyName2.innerHTML = "Libra";
    currencyImage.src = "./assets/libra.png";
    currencyBack.style.backgroundImage = "url(./assets/libraFundo.jpg)";
  }

  if (currencySelect.value == "bitcoin") {
    currencyName2.innerHTML = "BitCoin";
    currencyImage.src = "./assets/bitcoin.png";
    currencyBack.style.backgroundImage = "url(./assets/BitcoinFundo.jpg)";
  }

  convertValues();
}

selectCurrency.addEventListener("change", changeCurrencySell);
currencySelect.addEventListener("change", changeCurrencyBuy);
convertButton.addEventListener("click", convertValues);
