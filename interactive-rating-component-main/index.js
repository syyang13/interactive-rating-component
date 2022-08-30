let ratings = document.querySelectorAll('.circle');  //all divs with numbers
let subbtn = document.getElementById('subbtn'); //submit button
let hero = document.querySelector('.hero'); //select a rating section
let thankyou = document.querySelector('.thankyou'); //thank you card section 
let span = document.getElementById('rateSelection'); //where the user selected rating will be displayed

// Looping through all the number divs
for (let i = 0; i < ratings.length; i++) {
        ratings[i].addEventListener('click', () => {
            // getting the clicked number value property from 1-5
            let rateSelection = ratings[i].innerHTML;

                // loop to make sure only one rating is selected and remove previously selected rating
                for (let i = 0; i < ratings.length; i++) {
                    ratings[i].classList.contains('selected')
                    ratings[i].classList.remove('selected');
                }

                // add the selected class of the chosen rating
                ratings[i].classList.add('selected');

                // listening for the submit button click to hide the current section and display the Thank You section with the chosen rating
                subbtn.addEventListener('click', () => {
                    hero.style.display = 'none';
                    thankyou.style.display = 'block';
                    span.innerHTML = rateSelection;
                })
        })
}