function converte() {
    reais = document.getElementById("real").value;

    moedaEstrangeira = (reais / 5.19).toFixed(2);

    document.getElementById("moedaE").value = moedaEstrangeira;
}