// Il programma dovrà mostrare una form da compilare usando i corretti campi HTML di input con cui chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// Il recap dei dati e l’output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo).

console.log(document);
//select of the button in the dom
const submitButton = document.querySelector(`#submitButton`);
submitButton.addEventListener(`click`, function(event) {
    event.preventDefault()

    //importing values of elements to edit at the click of the button
    const spinnerEL = submitButton.querySelector(`#spinner`)
    const statusSpan = submitButton.querySelector(`.status`)
    const resultCard = document.querySelector(`#result-card`)
    const resultAmount = document.querySelector(`#result`)
    const originalStatusText = statusSpan.innerHTML
    //everytime i click the result in card is hidden and button animated 
    resultCard.classList.add(`d-none`)
    submitButton.disabled = true;
    spinnerEL.classList.toggle(`d-none`)
    statusSpan.innerHTML= `Loading`
    
    //importing value of inputs at the click of the button
    const distanceKm = document.querySelector(`#input-km`)
    const agePassenger = document.querySelector(`#input-age`)
    console.log(distanceKm.value)
    console.log(agePassenger.value)
    
    //validation of the inputs
    let valid = true;
    if (isNaN(distanceKm.value) || distanceKm.value <= 0) {
        distanceKm.classList.add(`is-invalid`); // add class invalid, if not validated km
        resultCard.classList.add(`d-none`) //results component is not shown, cause not validated
        submitButton.disabled = false;
        spinnerEL.classList.add(`d-none`)
        statusSpan.innerHTML= originalStatusText
        valid = false;
    } else {
        distanceKm.classList.remove(`is-invalid`); // if validated, the invalid class won't be used
    }
    if (isNaN(agePassenger.value) || agePassenger.value <= 0) {
        agePassenger.classList.add(`is-invalid`); // add class invalid, if not validated age
        resultCard.classList.add(`d-none`) //results component is not shown, cause not validated
        submitButton.disabled = false;
        spinnerEL.classList.add(`d-none`)
        statusSpan.innerHTML= originalStatusText
        valid = false;
    } else {
        agePassenger.classList.remove(`is-invalid`); // if validated, the invalid class won't be used
    }
    //function to trigger if inputs are valid, this calculat the amount
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
        const finalPrice = getTicketPrice(Number(agePassenger.value), Number(distanceKm.value)); //get amount
        setTimeout(() => {
            submitButton.disabled = false;
            spinnerEL.classList.toggle(`d-none`)
            statusSpan.innerHTML= originalStatusText
            resultCard.classList.remove(`d-none`);
            resultAmount.innerHTML = `The result is €${finalPrice.toFixed(2)}`;
        }, 2000);       
    }
})