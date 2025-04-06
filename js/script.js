document.addEventListener('DOMContentLoaded', function() {
    // Terminlər obyekti
    const terms = {
        'populizm': document.getElementById('populizm'),
        'koalisiya': document.getElementById('koalisiya'),
        'referendum': document.getElementById('referendum'),
        'oppozisiya': document.getElementById('oppozisiya'),
        'korrupsiya': document.getElementById('korrupsiya')
    };

    // Bütün terminləri gizlətmək
    function hideAllTerms() {
        Object.values(terms).forEach(term => {
            term.classList.remove('active');
        });
    }

    // Müəyyən bir termini göstərmək
    function showTerm(termId) {
        hideAllTerms();
        
        if (terms[termId]) {
            terms[termId].classList.add('active');
            document.getElementById('search').value = termId;
            
            // Terminə qaydırma animasiyası
            setTimeout(() => {
                terms[termId].scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        }
    }

    // Axtarış funksiyası
    function searchTerm() {
        const searchText = document.getElementById('search').value.trim().toLowerCase();
        
        if (!searchText) {
            alert('Zəhmət olmasa axtarış sözü daxil edin!');
            return;
        }
        
        const foundTerm = Object.keys(terms).find(term => 
            term.includes(searchText) || 
            terms[term].querySelector('h2').textContent.toLowerCase().includes(searchText)
        );
        
        if (foundTerm) {
            showTerm(foundTerm);
        } else {
            alert('Termin tapılmadı! Aşağıdakı populyar terminlərdən birini yoxlaya bilərsiniz: \n\n' + 
                  Object.keys(terms).map(t => t.charAt(0).toUpperCase() + t.slice(1)).join(', '));
        }
    }

    // Enter düyməsi ilə axtarış
    document.getElementById('search').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchTerm();
        }
    });

    // Populyar termin teqlərinə klik üçün hadisə dinləyiciləri
    document.querySelectorAll('.term-tag').forEach(tag => {
        tag.addEventListener('click', function() {
            const termId = this.textContent.toLowerCase();
            showTerm(termId);
        });
    });

    // Sayt yüklənəndə ilk termini göstər
    showTerm('populizm');
});
