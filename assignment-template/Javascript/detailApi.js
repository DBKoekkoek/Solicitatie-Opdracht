document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    const apiUrl = 'https://kendew-mock-api.vercel.app/api/assignment-data';

    function fetchAssignmentData(id) {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const assignment = data[id];
                if (assignment) {
                    displayAssignmentData(assignment);
                } else {
                    console.log('Opdracht met ID ' + id + ' niet gevonden.');
                }
            })
            .catch(error => console.error('Er is een fout opgetreden bij het laden van de gegevens:', error));
    }

    function displayAssignmentData(assignment) {
        const cardImage = document.querySelector('.card .card-image');
        const cardListIcons = document.querySelectorAll('.card-list-item .card-list-icon');
        const cardListDescriptions = document.querySelectorAll('.card-list-item .card-list-description');
    
        if (assignment.mainBenefits && assignment.mainBenefits.length > 0) {
            cardImage.src = assignment.cardArt.src;
            
            cardListIcons.forEach((icon, index) => {
                if (assignment.mainBenefits[index]) {
                    icon.src = assignment.mainBenefits[index].icon.src;
                }
            });
    
            cardListDescriptions.forEach((description, index) => {
                if (assignment.mainBenefits[index]) {
                    description.textContent = assignment.mainBenefits[index].description;
                }
            });
        } else {
            console.log('Geen hoofdvoordelen gevonden voor deze opdracht.');
        }
    }
    
    
    fetchAssignmentData(id);
});
