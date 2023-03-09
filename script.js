const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
   
    //comando para "pegar a hora" do sistema e colocar no relógio
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    //if para deixar o tempo com o inicio "00" ao invés de apenas o digito do horário
    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;

    //comandos para o código ser implementado no texto base do html
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;
})

git remote add origin https://github.com/PedroCarvalho990/Relogio-Digital.git
ramo git -M principal
git push -u origin principal
//FEITO POR PEDRO CARVALHO