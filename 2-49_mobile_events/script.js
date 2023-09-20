'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('Start');
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log('Move');
        console.log(e.changedTouches[0].pageX);
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('End');
    });
});

function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
};
loadScript('js/dune.js');
loadScript('js/some.js');