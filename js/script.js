/**
 * POLITIK SÖZLÜK - INTERACTIVE FUNCTIONS
 * This script handles all interactive features of the political terms dictionary
 */

// Wait for DOM to be fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', function() {

    // ======================
    // 1. INITIAL SETUP
    // ======================
    
    // Get all term cards and convert NodeList to array
    const termCards = Array.from(document.querySelectorAll('.term-card'));
    
    // Create terms object with id references
    const terms = termCards.reduce((acc, card) => {
        acc[card.id] = card;
        return acc;
    }, {});
    
    // Get DOM elements
    const searchInput = document.getElementById('search');
    const searchButton = document.querySelector('.search-box button');
    const termTags = document.querySelectorAll('.term-tag');

    // ======================
    // 2. CORE FUNCTIONS
    // ======================

    /**
     * Hides all term cards
     */
    function hideAllTerms() {
        termCards.forEach(card => {
            card.classList.remove('active');
            card.style.display = 'none';
        });
    }

    /**
     * Displays a specific term card
     * @param {string} termId - The ID of the term to show
     */
    function showTerm(termId) {
        // First hide all terms
        hideAllTerms();
        
        // Validate term exists
        if (!terms[termId]) {
            console.error(`Term "${termId}" not found!`);
            return;
        }
        
        // Show the selected term
        terms[termId].style.display = 'block';
        setTimeout(() => {
            terms[termId].classList.add('active');
            
            // Update search input
            searchInput.value = termId;
            
            // Smooth scroll to term
            terms[termId].scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }, 50);
    }

    /**
     * Searches for a term and displays it
     */
    function searchTerm() {
        const searchText = searchInput.value.trim().toLowerCase();
        
        if (!searchText) {
            alert('Zəhmət olmasa axtarış sözü daxil edin!');
            return;
        }
        
        // Check for direct ID match
        if (terms[searchText]) {
            showTerm(searchText);
            return;
        }
        
        // Check for partial matches in term titles
        const foundTerm = termCards.find(card => {
            const title = card.querySelector('h2').textContent.toLowerCase();
            return title.includes(searchText);
        });
        
        if (foundTerm) {
            showTerm(foundTerm.id);
        } else {
            alert('Termin tapılmadı! Aşağıdakı terminlərdən birini yoxlaya bilərsiniz:\n\n' + 
                  Object.keys(terms).join(', '));
        }
    }

    // ======================
    // 3. EVENT LISTENERS
    // ======================

    // Search button click
    searchButton.addEventListener('click', searchTerm);
    
    // Enter key in search input
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchTerm();
        }
    });

    // Term tag clicks
    termTags.forEach(tag => {
        tag.addEventListener('click', function() {
            const termId = this.textContent.toLowerCase();
            showTerm(termId);
        });
    });

    // ======================
    // 4. INITIALIZATION
    // ======================
    
    // Show first term by default
    if (termCards.length > 0) {
        showTerm(termCards[0].id);
    }
    
    // Debug info
    console.log('Politik Sözlük uğurla yükləndi!');
    console.log('Mövcud terminlər:', Object.keys(terms));
});
