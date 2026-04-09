const rates = {
    USD: 90.5,
    EUR: 98.3,
    GBP: 114.2,
    BYN: 28.1,
    CNY: 12.5,
    JPY: 0.6,
};

const amountInput = document.getElementById("amount");
const currencySelect = document.getElementById("currency");
const convertBtn = document.getElementById("convertBtn");
const resultDiv = document.getElementById("result");

convertBtn.addEventListener("click", () => {
    const amount = parseFloat(amountInput.value);
    const currency = currencySelect.value;

    if (!amountInput.value || isNaN(amount) || amount <= 0) {
        resultDiv.textContent = "Введите корректную сумму";
        resultDiv.className = "error";
        return;
    }

    const converted = (amount / rates[currency]).toFixed(2);
    resultDiv.textContent = `${amount} руб = ${converted} ${currency}`;
    resultDiv.className = "";
});
