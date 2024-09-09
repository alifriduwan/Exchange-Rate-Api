const currency_one = document.getElementById('currency-one')
const currency_two = document.getElementById('currency-two')

const amount_one = document.getElementById('amount-one')
const amount_two = document.getElementById('amount-two')

const rateElement = document.getElementById('rate')

const btnSwap = document.getElementById('btn')

currency_one.addEventListener('change', calculateMoney);
currency_two.addEventListener('change', calculateMoney);

amount_one.addEventListener('input', calculateMoney)
amount_two.addEventListener('input', calculateMoney)

function calculateMoney(){
    const valueCurrencyOne = currency_one.value;
    const valueCurrencyTwo = currency_two.value;
   
    let rateAPI =  `https://api.exchangerate-api.com/v4/latest/${valueCurrencyOne}`
    fetch(rateAPI).then(res => res.json()).then(data => {
        const rate = data.rates[valueCurrencyTwo]
        rateElement.innerText = `1 ${valueCurrencyOne} = ${rate} ${valueCurrencyTwo}`
        amount_two.value = (amount_one.value * rate).toFixed(2)
    })
}

btnSwap.addEventListener('click', () => {
    const temp = currency_one.value;
    currency_one.value = currency_two.value;
    currency_two.value = temp;
    calculateMoney();
})

calculateMoney();