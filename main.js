// Il programma dovrà mostrare una form da compilare usando i corretti campi HTML di input con cui chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

// Il recap dei dati e l’output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo).

console.log(document);

const submitButton = document.querySelector(`#submitButton`);
submitButton.addEventListener(`click`, function(event) {
    event.preventDefault()
    // submitButton.disabled = true;

    const spinnerEL = submitButton.querySelector(`#spinner`)
    const statusSpan = submitButton.querySelector(`.status`)
    const resultCard = document.querySelector(`#result-card`)
    const resultAmount = document.querySelector(`#result`)
    const originalStatusText = statusSpan.innerHTML
    // spinnerEL.classList.toggle(`d-none`)
    // statusSpan.innerHTML= `Loading`

    const distanceKm = document.querySelector(`#input-km`)
    const agePassenger = document.querySelector(`#input-age`)

    console.log(distanceKm.value)
    console.log(agePassenger.value)
    
    let valid = true;
    if (isNaN(distanceKm.value) || distanceKm.value <= 0) {
        distanceKm.classList.add(`is-invalid`); // Aggiungi classe invalid
        resultCard.classList.add(`d-none`)
        valid = false;
    } else {
        distanceKm.classList.remove(`is-invalid`); // Rimuovi classe invalid
    }
    if (isNaN(agePassenger.value) || agePassenger.value <= 0) {
        agePassenger.classList.add(`is-invalid`); // Aggiungi classe invalid
        resultCard.classList.add(`d-none`)
        valid = false;
    } else {
        agePassenger.classList.remove(`is-invalid`); // Rimuovi classe invalid
    }
    if (valid) {
        function getTicketPrice(age, distance) {
            const basicPrice = 0.21 * distance;
            if (age < 18) {
                return basicPrice * 0.8; // Sconto 20%
            } else if (age > 65) {
                return basicPrice * 0.6; // Sconto 40%
            } else {
                return basicPrice; // Prezzo pieno
            }
        }
        const finalPrice = getTicketPrice(Number(agePassenger.value), Number(distanceKm.value));
        resultCard.classList.remove(`d-none`);
        resultAmount.innerHTML = `The result is €${finalPrice.toFixed(2)}`;
    }




    
   
    // if ((isNaN(agePassenger.value) || agePassenger.value <= 0) || (isNaN(distanceKm.value) || distanceKm.value <= 0)) {
    //     if (isNaN(distanceKm.value) || distanceKm.value <= 0) {
    //         distanceKm.classList.add(`is-invalid`) 
    //         resultCard.classList.add(`d-none`)
    //     } else if (isNaN(agePassenger.value) || agePassenger.value <= 0) {
    //         agePassenger.classList.add(`is-invalid`) 
    //         resultCard.classList.add(`d-none`)
    //     }
    // } else {
    //     function getTicketPrice (agePassenger, distanceKm) {
    //         const basicPrice = 0.21 * distanceKm.value;
    //         if (agePassenger.value < 18) {
    //             return basicPrice * 0.8;
    //         } else if (agePassenger.value > 65) {
    //             return basicPrice * 0.6;
    //         } else {
    //             return basicPrice;
    //         }
    //     }
    //     agePassenger.classList.remove(`is-invalid`) 
    //     distanceKm.classList.remove(`is-invalid`) 
    //     resultCard.classList.remove(`d-none`)
    //     const finalPrice = getTicketPrice (agePassenger, distanceKm);
    //     resultAmount.innerHTML = `The result is ${finalPrice.toFixed(2)}`
    // }
})