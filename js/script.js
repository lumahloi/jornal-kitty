//788846354b4b65b27b014d74aef6f60f

function redirecionar(){
    window.location.href = './jogo.html';
}

async function obterPrevisaoDoTempo(latitude, longitude) {
    const apiKey = '788846354b4b65b27b014d74aef6f60f';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&lang=pt_br`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === 200) {
            const temperaturaKelvin = data.main.temp;
            const temperaturaCelsius = temperaturaKelvin - 273.15;

            document.querySelector('#cidade').innerText = `${data.name}, ${data.sys.country}`;
            document.querySelector('#temperatura').innerText = `${temperaturaCelsius.toFixed(2)} °C`;
            document.querySelector('#min_temp').innerText = `Min: ${(data.main.temp_min - 273.15).toFixed(2)} °C`;
            document.querySelector('#max_temp').innerText = `Máx: ${(data.main.temp_max - 273.15).toFixed(2)} °C`;
            document.querySelector('#icone').setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
            document.querySelector('#descricao').innerText = `${data.weather[0].description}`;
        } else {
            console.error('Erro na API de clima:', data.message || 'Código não esperado');
        }

    } catch (error) {
        console.error('Erro ao obter dados da API de clima:', error);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                console.log('Latitude:', latitude);
                console.log('Longitude:', longitude);

                obterPrevisaoDoTempo(latitude, longitude);
            },
            function (error) {
                console.error('Erro ao obter localização:', error.message);
            }
        );
    } else {
        console.error('Geolocalização não é suportada neste navegador.');
    }

    data();

});

const abrir = document.getElementById('abrir');
const fechar = document.getElementById('fechar');
const divFlutuante = document.getElementById('divFlutuante');
const overlay = document.getElementById('overlay');

abrir.addEventListener('click', function() {
    divFlutuante.style.display = 'block';
    overlay.style.display = 'block';
});


fechar.addEventListener('click', function() {
    divFlutuante.style.display = 'none';
    overlay.style.display = 'none';
});

function data() {
    var dias = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
    var meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

    var dataAtual = new Date();

    var diaDaSemana = dias[dataAtual.getDay()];
    var diaDoMes = dataAtual.getDate();
    var mes = meses[dataAtual.getMonth()];
    var ano = dataAtual.getFullYear();

    var dataFormatada = diaDaSemana + ', ' + diaDoMes + ' de ' + mes + ' de ' + ano;
    document.querySelector('#data').innerText = `${dataFormatada}`;
}