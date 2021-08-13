const signUp = document.querySelector('.signUp');
const signUpForm = document.querySelector('.signUpForm');
const closeForm = document.querySelector('.signSign');
const mainMenu = document.querySelector('.mainMain');
const mainMeenuu = document.querySelector('.inBox2');

signUp.addEventListener('click', () => {
    signUpForm.classList.toggle('show');
})

closeForm.addEventListener('click', () => {
    signUpForm.classList.toggle('show');

})

mainMenu.addEventListener('click', () => {
    document.body.classList.toggle('showw');
})