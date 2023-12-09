function modal() {
    // Modal window
    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);    // если пользователь открыл модальное окно, оно больше не откроетя.
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    const modalTimerId = setTimeout(openModal, 50000);   // открытие модального окна через определенный промежуток времени

    function showModalByScroll() {
        if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {  // если не работает, то необходимо добавить в конце, после scrollHeight "-1"
            openModal();
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

module.exports = modal;