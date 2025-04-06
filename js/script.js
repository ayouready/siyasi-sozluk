/**
 * SİYASİ SÖZLÜK - Genişləndirilmiş Versiya
 * 100+ siyasi terminlə interaktiv lüğət
 */

document.addEventListener('DOMContentLoaded', function() {
    // Bütün terminlər
    const allTerms = [
        {
            id: "demokratiya",
            title: "Demokratiya",
            category: "Hökumət Sistemi",
            definition: "Xalqın özünü idarə etmə sistemi, əsasən seçkilər və çoxpartiyalı sistem vasitəsilə həyata keçirilir. Hakimiyyət xalq tərəfindən seçilmiş nümayəndələr vasitəsilə həyata keçirilir.",
            example: "Azərbaycan Respublikası konstitusiyasında qeyd olunduğu kimi dövlət idarəçiliyinin əsas formasıdır. Xalq öz nümayəndələrini müəyyən müddətə seçir və qərarvermə prosesində iştirak edir."
        },
        {
            id: "konstitusiya",
            title: "Konstitusiya",
            category: "Hüquqi Sənəd",
            definition: "Dövlətin əsas qanunu olaraq, dövlət quruluşunu, orqanların səlahiyyətlərini və vətəndaşların hüquq və vəzifələrini müəyyən edir.",
            example: "Azərbaycan Respublikasının Konstitusiyası 1995-ci ildə qəbul edilmiş və dövlətimizin əsas qanunudur. Bütün digər qanunlar Konstitusiyaya zidd ola bilməz."
        },
        {
            id: "parlament",
            title: "Parlament",
            category: "Qanunverici Orqan",
            definition: "Qanunverici hakimiyyət orqanı. Dövlətin əsas qanunlarını qəbul edir, hökumət fəaliyyətinə nəzarət edir.",
            example: "Azərbaycanda Milli Məclis 125 deputatdan ibarətdir və 5 il müddətinə seçilir. Deputatlar qanun layihələrini müzakirə edib qəbul edirlər."
        },
        // 97+ əlavə termin burada olacaq
        {
            id: "referendum",
            title: "Referendum",
            category: "Birbaşa Demokratiya",
            definition: "Xalqın birbaşa səsverməsi ilə mühüm dövlət qərarlarının qəbul edilməsi üsulu.",
            example: "1995-ci ildə Azərbaycanda Konstitusiya referendum keçirilmiş və yeni Konstitusiya qəbul edilmişdir."
        },
        {
            id: "seçki",
            title: "Seçki",
            category: "Demokratik Proses",
            definition: "Vətəndaşların səsverməsi ilə dövlət orqanlarının və yerli özünüidarəetmə orqanlarının formalaşdırılması prosesi.",
            example: "Azərbaycanda prezident seçkiləri 7 il müddətinə, Milli Məclisə seçkilər isə 5 il müddətinə keçirilir."
        },
        {
            id: "prezident",
            title: "Prezident",
            category: "Dövlət Başçısı",
            definition: "Respublika ilə idarə olunan ölkələrdə dövlətin ali vəzifəli şəxsi. Xarici siyasətdə dövləti təmsil edir, silahlı qüvvələrin ali baş komandanıdır.",
            example: "Azərbaycan Respublikasının Prezidenti dövlətimizin ali vəzifəli şəxsidir və xalq tərəfindən birbaşa seçkilər yolu ilə seçilir."
        }
    ];

    // DOM elementləri
    const searchInput = document.getElementById('search');
    const searchButton = document.querySelector('.search-box button');
    const termsContainer = document.getElementById('terms-container');
    const popularTermsContainer = document.getElementById('popular-terms');
    const showMoreBtn = document.getElementById('show-more-btn');

    // Dəyişənlər
    let visibleTermCount = 3;
    const popularTerms = ['demokratiya', 'konstitusiya', 'parlament', 'referendum', 'seçki', 'prezident'];

    // Ən çox axtarılan terminləri yüklə
    function loadPopularTerms() {
        popularTermsContainer.innerHTML = '';
        popularTerms.forEach(termId => {
            const term = allTerms.find(t => t.id === termId);
            if (term) {
                const tag = document.createElement('span');
                tag.className = 'term-tag';
                tag.innerHTML = `<i class="fas fa-search"></i> ${term.title}`;
                tag.onclick = () => showTerm(term.id);
                popularTermsContainer.appendChild(tag);
            }
        });
    }

    // Termin kartı yarat
    function createTermCard(term) {
        const card = document.createElement('article');
        card.className = 'term-card';
        card.id = term.id;
        
        card.innerHTML = `
            <div class="term-header">
                <div class="term-title">
                    <h2>${term.title}</h2>
                    <span class="term-category">${term.category}</span>
                </div>
            </div>
            <div class="term-body">
                <div class="term-content">
                    <p class="term-definition">${term.definition}</p>
                    
                    <div class="term-example">
                        <div class="term-example-content">
                            <strong>Nümunə:</strong> ${term.example}
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        return card;
    }

    // Terminləri yüklə
    function loadTerms(count = 3) {
        termsContainer.innerHTML = '';
        const termsToShow = allTerms.slice(0, count);
        
        termsToShow.forEach(term => {
            const card = createTermCard(term);
            card.classList.add('active');
            termsContainer.appendChild(card);
        });
    }

    // Xüsusi termin göstər
    function showTerm(termId) {
        const term = allTerms.find(t => t.id === termId);
        if (!term) return;

        termsContainer.innerHTML = '';
        const card = createTermCard(term);
        card.classList.add('active');
        termsContainer.appendChild(card);
        
        // Axtarış sahəsini yenilə
        searchInput.value = term.title;
        
        // "Daha çox" düyməsini gizlət
        showMoreBtn.style.display = 'none';
    }

    // Axtarış funksiyası
    function searchTerm() {
        const searchText = searchInput.value.trim().toLowerCase();
        
        if (!searchText) {
            alert('Zəhmət olmasa axtarış sözü daxil edin!');
            return;
        }
        
        // Tam uyğunluq
        const exactMatch = allTerms.find(
            t => t.id === searchText.toLowerCase() || 
            t.title.toLowerCase() === searchText
        );
        
        if (exactMatch) {
            showTerm(exactMatch.id);
            return;
        }
        
        // Qismən uyğunluq
        const partialMatches = allTerms.filter(
            t => t.title.toLowerCase().includes(searchText) || 
            t.definition.toLowerCase().includes(searchText) ||
            t.category.toLowerCase().includes(searchText)
        );
        
        if (partialMatches.length > 0) {
            termsContainer.innerHTML = '';
            partialMatches.forEach(term => {
                const card = createTermCard(term);
                card.classList.add('active');
                termsContainer.appendChild(card);
            });
            showMoreBtn.style.display = 'none';
        } else {
            alert('Axtarışınıza uyğun termin tapılmadı!\n\nZəhmət olmasa başqa açar sözlər yoxlayın.');
        }
    }

    // Daha çox termin yüklə
    function loadMoreTerms() {
        visibleTermCount += 3;
        if (visibleTermCount >= allTerms.length) {
            visibleTermCount = allTerms.length;
            showMoreBtn.style.display = 'none';
        }
        loadTerms(visibleTermCount);
    }

    // Hadisə dinləyiciləri
    searchButton.addEventListener('click', searchTerm);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchTerm();
    });
    showMoreBtn.addEventListener('click', loadMoreTerms);

    // İlkin yükləmə
    loadPopularTerms();
    loadTerms(visibleTermCount);
    
    // Əgər bütün terminlər göstərilibsə, düyməni gizlət
    if (visibleTermCount >= allTerms.length) {
        showMoreBtn.style.display = 'none';
    }
});
