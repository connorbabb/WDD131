import { participantTemplate, successTemplate } from "./templates.js";

document.addEventListener("DOMContentLoaded", () => {
    let participantCount = 1;

    const form = document.querySelector('.testbox form');
    const addButton = document.getElementById('addParticipant');
    const summaryElement = document.getElementById('summary');

    addButton.addEventListener('click', addParticipant);
    form.addEventListener('submit', submitForm);

    function addParticipant(event) {
        event.preventDefault();
        participantCount++;
        const newParticipantHtml = participantTemplate(participantCount);
        addButton.insertAdjacentHTML('beforebegin', newParticipantHtml);
    }

    function totalFees() {
        let feeElements = document.querySelectorAll("[id^=fee]");
        feeElements = [...feeElements];
        return feeElements.reduce((total, feeElement) => total + parseFloat(feeElement.value || 0), 0);
    }

    function submitForm(event) {
        event.preventDefault();

        const totalFee = totalFees();
        const adultName = document.getElementById('adult_name').value;

        form.classList.add('hide');
        summaryElement.classList.remove('hide');
        summaryElement.innerHTML = successTemplate({
            name: adultName,
            participantCount,
            totalFee
        });
    }
});
