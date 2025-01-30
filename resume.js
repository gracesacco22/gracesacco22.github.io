const tBtn = document.getElementById('toggle-details');
const profileDetails = document.querySelector('.card-details');
tBtn.addEventListener('click', () => {
    profileDetails.classList.toggle('show-details');
    tBtn.querySelector('i').classList.toggle('fa-chevron-down');
    tBtn.querySelector('i').classList.toggle('fa-chevron-up');
});
