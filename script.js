const terms = {
    'populizm': {
        title: 'Populizm',
        desc: 'Xalqın hisslərinə oynayaraq dəstək toplamaq strategiyasıdır.',
        img: 'https://i.imgur.com/8fFNK9G.jpeg'
    },
    'koalisiya': {
        title: 'Koalisiya',
        desc: 'Çoxluq yaratmaq üçün partiyaların birlikdə hökumət qurmasıdır.',
        img: 'https://i.imgur.com/6Mw8z0e.jpeg'
    },
    'referendum': {
        title: 'Referendum',
        desc: 'Vacib məsələni xalqın səsverməsi ilə həll etmə formasıdır.',
        img: 'https://i.imgur.com/3oLNyUE.jpeg'
    },
    'oppozisiya': {
        title: 'Oppozisiya',
        desc: 'Hakimiyyətdə olmayan və tənqid edən siyasi tərəfdir.',
        img: 'https://i.imgur.com/Ww7hBff.jpeg'
    },
    'korrupsiya': {
        title: 'Korrupsiya',
        desc: 'Vəzifədən şəxsi maraq üçün istifadə olunmasıdır.',
        img: 'https://i.imgur.com/6X7U38I.jpeg'
    },
    'totalitarizm': {
        title: 'Totalitarizm',
        desc: 'Hər şeyi nəzarətdə saxlayan sərt rejimdir.',
        img: 'https://i.imgur.com/45G8IE1.jpeg'
    },
    'liberalizm': {
        title: 'Liberalizm',
        desc: 'Fərdi azadlıq və bazar iqtisadiyyatını önə çıxaran ideologiyadır.',
        img: 'https://i.imgur.com/7zmZXsU.jpeg'
    },
    'faşizm': {
        title: 'Faşizm',
        desc: 'Millətçi və avtoritar idarəetmə formasıdır.',
        img: 'https://i.imgur.com/DsmNYff.jpeg'
    },
    'anarsiya': {
        title: 'Anarxiya',
        desc: 'Hakimiyyətin və ya qaydaların olmadığı vəziyyətdir.',
        img: 'https://i.imgur.com/nzHPMdL.jpeg'
    },
    'demokratiya': {
        title: 'Demokratiya',
        desc: 'Xalqın seçdiyi nümayəndələrlə idarə olunmasıdır.',
        img: 'https://i.imgur.com/JNHDbZQ.jpeg'
    }
};

function displayTerm(term) {
    const termObj = terms[term];
    if (!termObj) return;

    document.getElementById('termDisplay').innerHTML = `
        <div class="term-card">
            <h2>${termObj.title}</h2>
            <p>${termObj.desc}</p>
            <img src="${termObj.img}" alt="${termObj.title}">
        </div>
    `;
}

function searchTerm() {
    const value = document.getElementById('searchInput').value.toLowerCase().trim();
    if (terms[value]) {
        displayTerm(value);
    } else {
        alert('Termin tapılmadı!');
    }
}

window.onload = () => {
    const popularContainer = document.getElementById('popularTags');
    Object.keys(terms).forEach(term => {
        const tag = document.createElement('span');
        tag.className = 'tag';
        tag.innerText = term;
        tag.onclick = () => displayTerm(term);
        popularContainer.appendChild(tag);
    });
};
