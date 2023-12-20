function checkInput() {
    var userInput = document.getElementById('userInput').value;
    var resultContainer = document.getElementById('result');
    var thalaVideo = document.getElementById('thalaVideo');

    // Check if the input is a word with 7 letters
    if (/^[a-zA-Z]{7}$/.test(userInput)) {
        resultContainer.textContent = 'Thala for a reason!';
        displayThalaVideo();
    }
    // Check if the input is a number, and the sum of its digits is 7
    else if (/^\d+$/.test(userInput) && userInput.split('').reduce((acc, digit) => acc + parseInt(digit), 0) === 7) {
        resultContainer.textContent = 'Thala for a reason!';
        displayThalaVideo();
    }
    
    else {
        resultContainer.textContent = 'Sorry, better luck next time.';
        thalaVideo.style.display = 'none'; 
    }
}

function displayThalaVideo() {
    var thalaVideo = document.getElementById('thalaVideo');
    thalaVideo.style.display = 'block'; // Show the video container
    thalaVideo.src = 'https://drive.google.com/uc?id=1Pd-cxkckiH5DFaUyzmrZiGDcBo0YyE-M'; // Replace with your actual direct download link
    thalaVideo.onloadeddata = function() {
        showModal();
    };
}

function showModal() {
    var modal = document.getElementById('myModal');
    var span = document.getElementById('closeModal');

    modal.style.display = 'block';

    span.onclick = function() {
        modal.style.display = 'none';
        document.getElementById('thalaVideo').pause(); // Pause the video when the modal is closed
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.getElementById('thalaVideo').pause(); // Pause the video when the modal is closed
        }
    };
}