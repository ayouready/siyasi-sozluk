/**
 * SİYASİ SÖZLÜK - İnteraktiv Funksiyalar
 * Versiya 2.0 | Təkmilləşdirilmiş
 */

document.addEventListener('DOMContentLoaded', function() {
    // DOM elementləri
    const searchInput = document.getElementById('search');
    const searchButton = document.querySelector('.search-box button');
    const termTags = document.querySelectorAll('.term-tag');
    const termCards = document.querySelectorAll('.term-card');
    
    // Terminlər obyekti
    const terms = {};
    termCards.forEach(card => {
        terms[card.id] = card;
    });

    // Bütün terminləri gizlətmək
    function hideAllTerms() {
        termCards.forEach(card => {
            card.classList.remove('active');
        });
    }

    // Termin göstərmək
    function showTerm(termId) {
        if (!terms[termId]) {
            console.error(`Termin tapılmadı: ${termId}`);
            return;
        }
        
        hideAllTerms();
        terms[termId].classList.add('active');
        searchInput.value = termId;
        
        // Animasiya ilə scroll etmək
        setTimeout(() => {
            terms[termId].scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }, 100);
    }

    // Axtarış funksiyası
    function searchTerm() {
        const searchText = searchInput.value.trim().toLowerCase();
        
        if (!searchText) {
            alert('Zəhmət olmasa axtarış sözü daxil edin!');
            return;
        }
        
        // Dəqiq uyğunluq
        if (terms[searchText]) {
            showTerm(searchText);
            return;
        }
        
        // Qismən uyğunluq
        for (const [termId, card] of Object.entries(terms)) {
            const title = card.querySelector('h2').textContent.toLowerCase();
            if (title.includes(searchText)) {
                showTerm(termId);
                return;
            }
        }
        
        // Uyğunluq tapılmadı
        alert('Axtarışa uyğun termin tapılmadı!\n\nMövcud terminlər:\n' + 
              Object.keys(terms).map(term => 
                term.charAt(0).toUpperCase() + term.slice(1)
              ).join(', '));
    }

    // Hadisə dinləyiciləri
    searchButton.addEventListener('click', searchTerm);
    searchInput.addEventListener('keypress', (e) => e.key === 'Enter' && searchTerm());
    
    termTags.forEach(tag => {
        tag.addEventListener('click', () => {
            const termId = tag.textContent.toLowerCase().replace(/\s+/g, '');
            showTerm(termId);
        });
    });

    // İlk terminin göstərilməsi
    showTerm('populizm');
    
    // Debug məlumatı
    console.log('Siyasi Sözlük uğurla yükləndi!');
    console.log('Mövcud terminlər:', Object.keys(terms));
});
