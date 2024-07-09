const apiKey = '629a1e9d37msh32d781d55dd2ce3p12c585jsndcda7ee7087c';
const apiHost = 'currency-conversion-and-exchange-rates.p.rapidapi.com';
const apiURL = `https://${apiHost}/latest`;

const amountElement = document.getElementById('amount');
const fromCurrencyElement = document.getElementById('fromCurrency');
const toCurrencyElement = document.getElementById('toCurrency');
const resultElement = document.getElementById('result');

function fetchCurrencies() {
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.open('GET', apiURL);
    xhr.setRequestHeader('x-rapidapi-key', apiKey);
    xhr.setRequestHeader('x-rapidapi-host', apiHost);
    
    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            const data = JSON.parse(this.responseText);
            const currencies = Object.keys(data.rates);
            populateSelectOptions(fromCurrencyElement, currencies);
            populateSelectOptions(toCurrencyElement, currencies);
        }
    });

    xhr.send(null);
}

function populateSelectOptions(selectElement, options) {
    selectElement.innerHTML = ''; // Clear existing options
    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        selectElement.appendChild(optionElement);
    });
}

function convertCurrency() {
    const amount = parseFloat(amountElement.value);
    const fromCurrency = fromCurrencyElement.value;
    const toCurrency = toCurrencyElement.value;

    if (isNaN(amount) || fromCurrency === '' || toCurrency === '') {
        resultElement.textContent = 'Please fill in all fields.';
        return;
    }

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.open('GET', `${apiURL}?from=${fromCurrency}&to=${toCurrency}`);
    xhr.setRequestHeader('x-rapidapi-key', apiKey);
    xhr.setRequestHeader('x-rapidapi-host', apiHost);

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            const data = JSON.parse(this.responseText);
            const fromRate = data.rates[fromCurrency];
            const toRate = data.rates[toCurrency];
            const convertedAmount = (amount / fromRate) * toRate;
            resultElement.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
        }
    });

    xhr.send(null);
}

fetchCurrencies();
