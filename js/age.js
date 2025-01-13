// Datas de nascimento
const birthDateLeandro = new Date("2005-01-13");
const birthDateBianca = new Date("2003-01-23");

// Função para calcular a idade com base na data de nascimento
function calculateAge(birthDate) {
    const now = new Date(); // Data atual
    let years = now.getFullYear() - birthDate.getFullYear();

    // Verifica se o aniversário já passou no ano atual
    const currentMonth = now.getMonth(); // Mês atual (0 a 11)
    const birthMonth = birthDate.getMonth(); // Mês de nascimento (0 a 11)

    if (
        currentMonth < birthMonth || // Mês atual é antes do mês de nascimento
        (currentMonth === birthMonth && now.getDate() < birthDate.getDate()) // Mesmo mês, mas o dia ainda não chegou
    ) {
        years--;
    }

    return years;
}

// Calcula as idades
const ageLeandro = calculateAge(birthDateLeandro);
const ageBianca = calculateAge(birthDateBianca);

// Atualiza o DOM com as idades
document.addEventListener("DOMContentLoaded", function () {
    const leandroElement = document.getElementById("idadeleandro");
    const biancaElement = document.getElementById("idadebianca");

    if (leandroElement) {
        leandroElement.textContent = ageLeandro;
    } else {
        console.error("Elemento com ID 'idadeleandro' não encontrado no DOM.");
    }

    if (biancaElement) {
        biancaElement.textContent = ageBianca;
    } else {
        console.error("Elemento com ID 'idadebianca' não encontrado no DOM.");
    }
});
