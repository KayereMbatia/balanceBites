
document.addEventListener('DOMContentLoaded', function() {
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');
    const button4 = document.getElementById('button4');
    const button5 = document.getElementById('button5');
    const button6 = document.getElementById('button6');
    const button7 = document.getElementById('button7');

    if (button1) {
        button1.addEventListener('click', function(event) {
            event.preventDefault();
            alert("worked");
            window.location.href = 'second.html'; 
        });
    }

    if (button2 || button3) {
        let userChoice = null;
        if (button2) {
            button2.addEventListener('click', function(event) {
                event.preventDefault();
                userChoice = button2.value;
                localStorage.setItem('userChoice', userChoice);
                window.location.href = 'vegan.html';
            });
        }
        if (button3) {
            button3.addEventListener('click', function(event) {
                event.preventDefault();
                userChoice = button3.value;
                localStorage.setItem('userChoice', userChoice);
                window.location.href = 'vegan.html';
            });
        }
    }


    if (button4 || button5) {
        let userChoice = null;
        if (button4) {
            button4.addEventListener('click', function(event) {
                event.preventDefault();
                userChoice = button4.value;
                localStorage.setItem('userChoice1', userChoice);
                window.location.href = 'gluton.html';
            });
        }
        if (button5) {
            button5.addEventListener('click', function(event) {
                event.preventDefault();
                userChoice = button5.value;
                localStorage.setItem('userChoice1', userChoice);
                window.location.href = 'gluton.html';
            });
        }
    }

    if (button6 || button7) {
        let userChoice = null;
        if (button6) {
            button6.addEventListener('click', function(event) {
                event.preventDefault();
                userChoice = button6.value;
                localStorage.setItem('userChoice2', userChoice);
                window.location.href = 'result.html';
            });
        }
        if (button7) {
            button7.addEventListener('click', function(event) {
                event.preventDefault();
                userChoice = button7.value;
                localStorage.setItem('userChoice2', userChoice);
                window.location.href = 'result.html';
            });
        }
    }

});