const answers = document.getElementsByClassName('a');
const arrows = document.getElementsByClassName('material-symbols-outlined');

for (let i = 0; i < answers.length; i++) {
    answers[i].style.display = 'none';
}

for (let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener('click', function () {
    
        for (let j = 0; j < answers.length; j++) {
            answers[j].style.display = 'none';
        }
        
        
        if (answers[i].style.display === 'none') {

            answers[i].style.display = 'block';

        }
         else {
            answers[i].style.display = 'none';
        }
        
    });
}
