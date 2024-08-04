document.addEventListener('DOMContentLoaded', () => {
    const sendRequestButtons = document.querySelectorAll('.send-request-btn');
    const enterCompetitionButton = document.getElementById('enter-competition-btn');
    const participationCodeInput = document.getElementById('participation-code-input');
    const modal = document.getElementById('popup-modal');
    const competitionModal = document.getElementById('competition-modal');
    const loadingModal = document.getElementById('loading-modal');
    const closeModalButtons = document.querySelectorAll('.close');
    const modalOkButton = document.getElementById('modal-ok-btn');

    const correctCode = 'Osoble';

    sendRequestButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const form = event.target.closest('form');
            if (form.checkValidity()) {
                modal.style.display = 'block';
            } else {
                form.reportValidity();
            }
        });
    });

    enterCompetitionButton.addEventListener('click', () => {
        const enteredCode = participationCodeInput.value.trim();

        if (enteredCode === correctCode) {
            modal.style.display = 'none'; // Hide the initial popup
            loadingModal.style.display = 'block'; // Show loading popup

            setTimeout(() => {
                loadingModal.style.display = 'none'; // Hide loading popup
                window.location.href = 'competition.html'; // Redirect to competition page
            }, 3000); // 3 seconds delay
        } else {
            alert('Invalid code');
        }
    });

    closeModalButtons.forEach(button => {
        button.onclick = function() {
            this.closest('.modal').style.display = 'none';
        };
    });

    modalOkButton.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
        if (event.target === competitionModal) {
            competitionModal.style.display = 'none';
        }
        if (event.target === loadingModal) { // Add condition for loading modal
            loadingModal.style.display = 'none';
        }
    };
});
