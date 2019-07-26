var navBlock = document.querySelector('.navigation');
var sliderButton = document.querySelector('.slider-button');

sliderButton.addEventListener('click', handleInteraction);
sliderButton.addEventListener('touchstart', handleInteraction);

function handleInteraction(evt) {
    if (!navBlock.classList.contains('visible') && !sliderButton.classList.contains('reversed')) {
        evt.preventDefault();
        navBlock.classList.add('visible');
        sliderButton.classList.add('reversed');
    } else {
        evt.preventDefault();
        navBlock.classList.remove('visible');
        sliderButton.classList.remove('reversed');
    }
}
