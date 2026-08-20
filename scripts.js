function converte() {

    const moedas = {
        "USD": 5.19,
        "EUR": 6.06,
        "GBP": 7.07,
        "JPY": 0.03,
        "ARS": 0.003,
        "CNY": 0.72,
        "CAD": 3.76,
        "AUD": 3.42
    }

    let reais = document.getElementById("real").value;
    let moeda = document.getElementById("moedaEs").value;

    let moedaEstrangeira = 0.00;

    if (moeda in moedas) {
        moedaEstrangeira = (reais / moedas[moeda]).toFixed(2);
    }

    document.getElementById("moedaE").value = moedaEstrangeira;
}