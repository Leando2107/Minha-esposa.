
const startDate = new Date("2023-09-02T00:00:00");

function updateCounter() {
    const now = new Date();
    const diff = now - startDate;
  
    let seconds = Math.floor(diff / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
  
    let years = Math.floor(days / 365);
    days %= 365;
  
    let months = Math.floor(days / 30.44);
    days = Math.floor(days % 30.44);
  
    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

// Atualizar a cada segundo
setInterval(updateCounter, 1000);

// Inicializar
updateCounter();