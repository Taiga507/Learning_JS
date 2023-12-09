function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';

    // console.log(modalTimerId);
    if (modalTimerId) {
        clearInterval(modalTimerId);    // если пользователь открыл модальное окно, оно больше не откроетя.
    }
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function modal(triggerSelector, modalSelector, modalTimerId) {
    // Modal window
    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });

    function showModalByScroll() {
        if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {  // если не работает, то необходимо добавить в конце, после scrollHeight "-1"
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    };

    window.addEventListener('scroll', showModalByScroll);

    // Modal window, variant with "toggle"
    // const modalTrigger = document.querySelector('[data-modal]'),
    // modal = document.querySelector('.modal'),
    // modalCloseBtn = document.querySelector('[data-close]');

    // modalTrigger.addEventListener('click', () => {
    //     modal.classList.toggle('show');
    //     document.body.style.overflow = 'hidden';
    // });

    // modalCloseBtn.addEventListener('click', () => {
    //     modal.classList.toggle('show');
    //     document.body.style.overflow = '';
    // });
}

export default modal;
export {openModal};
export {closeModal};