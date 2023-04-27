function countdown() {
	const targetDate = new Date('May 25, 2023 12:05:02').getTime();
	const currentDate = new Date().getTime();
	const difference = targetDate - currentDate;

	const days = Math.floor(difference / (1000 * 60 * 60 * 24));
	const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((difference % (1000 * 60)) / 1000);

	document.getElementById('days').innerHTML = `
      <p class="title">${days}</p>
      <p class="subtitle">Días</p>
    `;
	document.getElementById('hour').innerHTML = `
      <p class="title text-center">${hours}</p>
      <span class="title two-points d-none d-lg-block">:</span>
	  <span class="subtitle d-block d-lg-none">Horas</span>
    `;
	document.getElementById('minutes').innerHTML = `
      <p class="text-center title">${minutes}</p>
      <span class="title two-points d-none d-lg-block">:</span>
	  <span class="subtitle d-block d-lg-none">Minutos</span>
    `;
	document.getElementById('second').innerHTML = `
      <p class="text-center title">${seconds}</p>
      <span class="two-points d-none d-lg-block"></span>
	  <span class="subtitle d-block d-lg-none">Segundos</span>
    `;
}

setInterval(countdown, 1000);
