/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    /*Active link*/
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    /*Remove menu mobile*/
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title', {});
sr.reveal('.nama', { delay: 200 });
sr.reveal('.jurusan', { delay: 200 });
sr.reveal('.desk-nama', { delay: 200 });
sr.reveal('.profile_pic', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });

/*SCROLL ABOUT*/
sr.reveal('.about', {});
sr.reveal('.hp', { delay: 200 });
sr.reveal('.des-about', { delay: 400 });

sr.reveal('.des-project', { delay: 400 });
sr.reveal('.des-project2', { delay: 400 });

sr.reveal('.des-project11', { delay: 400 });
sr.reveal('.des-project22', { delay: 400 });
sr.reveal('.button-migrate', { delay: 400 });
sr.reveal('.button-migrate2', { delay: 400 });


// SCROLL MY ECPRESSION
sr.reveal('.pro_skill_adv', {});
sr.reveal('.client-box', { interval: 200 });


sr.reveal('.client-box2', { interval: 200 });

/*SCROLL WORK*/
sr.reveal('.profile_pic', { interval: 200 });
sr.reveal('.project1', { interval: 200 });

/*SCROLL WORK*/
sr.reveal('.work__img', { interval: 200 });
sr.reveal('.work__img2', { interval: 200 });
sr.reveal('.profile_pic', { interval: 200 });