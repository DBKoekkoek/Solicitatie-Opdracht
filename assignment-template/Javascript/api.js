document.addEventListener('DOMContentLoaded', function () {
    const apiUrl = 'https://kendew-mock-api.vercel.app/api/assignment-data';

    function fetchAssignmentData() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data && data.length > 0) {
                    data.forEach((assignment, index) => {
                        const assignmentElement = document.querySelectorAll('.assignment')[index];
                        const cardArtElement = assignmentElement.querySelector('.cardArt');
                        const titleElement = assignmentElement.querySelector('.assignmentTitle');
                        const descriptionElement = assignmentElement.querySelector('.assignmentDescription');
                        const iconList = assignmentElement.querySelector('.iconList'); 

                        titleElement.textContent = assignment.title;
                        cardArtElement.src = assignment.cardArt.src;
                        
                        // Voeg een nieuw element toe voor de beschrijving
                        const newDescriptionElement = document.createElement('div');
                        newDescriptionElement.classList.add('assignmentDescription');
                        newDescriptionElement.textContent = assignment.description.body;
                        assignmentElement.appendChild(newDescriptionElement);

                        assignment.mainBenefits.forEach((benefit, i) => {
                            const iconElement = document.createElement('img');
                            iconElement.classList.add('icon');
                            iconElement.src = benefit.icon.src;
                            iconElement.alt = benefit.title;

                            const descriptionElement = document.createElement('p');
                            descriptionElement.classList.add('iconDescription');
                            descriptionElement.textContent = benefit.title;

                            const listItem = document.createElement('li');
                            listItem.appendChild(iconElement);
                            listItem.appendChild(descriptionElement);
                            iconList.appendChild(listItem);
                        });
                    });
                } else {
                    console.log('Geen opdrachten gevonden in de API.');
                }
            })
            .catch(error => console.error('Er is een fout opgetreden bij het laden van de gegevens:', error));
    }

    fetchAssignmentData();
});


document.addEventListener('DOMContentLoaded', function () {
    // Haal de apiUrl en het ID uit de query parameters van de URL
    const urlParams = new URLSearchParams(window.location.search);
    const apiUrl = urlParams.get('apiUrl');
    const id = urlParams.get('id');

    // Als apiUrl en id aanwezig zijn, roep dan fetchAssignmentData aan met de apiUrl en het id
    if (apiUrl && id) {
        fetchAssignmentData(apiUrl, id);
    }
});
