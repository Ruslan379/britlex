(() => {
    const backdrop = document.querySelector("[data-backdrop]");
    const mobileMenu = document.querySelector('.js-menu-container');
    const openMenuBtn = document.querySelector('.js-open-menu');
    const closeMenuBtn = document.querySelector('.js-close-menu');
    const mobileMenuItemRef = document.querySelectorAll(".js-item");

    const toggleMenu = () => {
        const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
        backdrop.classList.toggle("is-hidden");
        openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
        mobileMenu.classList.toggle('is-open');

        const scrollLockMethod = !isMenuOpen
            ? 'disableBodyScroll'
            : 'enableBodyScroll';
        bodyScrollLock[scrollLockMethod](document.body);
    };

    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);


    //! Закриття burger-menu на екранах ширших ніж 991px, або якщо орієнтація пристрою змінюється
    window.matchMedia('(min-width: 992px)').addEventListener('change', e => {
        if (!e.matches) return;
        backdrop.classList.add("is-hidden");
        mobileMenu.classList.remove('is-open');
        openMenuBtn.setAttribute('aria-expanded', false);
        bodyScrollLock.enableBodyScroll(document.body);
    });

    // //! Закриття burger-menu по кліку на елементі списку header-list на екранах меньших ніж 992px
    window.matchMedia('(max-width: 991px)').addEventListener('change', e => {
        if (!e.matches) return;
        mobileMenuItemRef.forEach(function (item) {
            item.addEventListener('click', function () {
                expanded = mobileMenu.getAttribute("aria-expanded") === "true" || false;
                backdrop.classList.add("is-hidden");
                mobileMenu.classList.remove("is-open");
                mobileMenu.setAttribute("aria-expanded", !expanded);
                openMenuBtn.setAttribute('aria-expanded', false);
                bodyScrollLock.enableBodyScroll(document.body);
            });
        });
    });

    //! var.2 Закриття burger-menu по кліку на елементі списку header-list на екранах меньших ніж 992px
    // function handleClick() {
    //     backdrop.classList.add("is-hidden");
    //     mobileMenu.classList.remove("is-open");
    //     bodyScrollLock.enableBodyScroll(document.body);
    // }

    // //? Добавляем слушатели
    // mobileMenuItemRef.forEach(function (item) {
    //     item.addEventListener('click', handleClick);
    // });

    // //? Чтобы удалить слушатели, используем removeEventListener с той же функцией
    // mobileMenuItemRef.forEach(function (item) {
    //     item.removeEventListener('click', handleClick);
    // });

})();
