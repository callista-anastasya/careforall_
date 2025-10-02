document.addEventListener('DOMContentLoaded', () => {
    const filterCards = () => {
      const activeTabPane = document.querySelector('.tab-pane.show.active');
      if (!activeTabPane) {
        return;
      }
  
      const activeGender = document.querySelector('.filter-group[data-filter-type="gender"] .btn-filter.active')?.dataset.filterValue;
      const activeUsia = document.querySelector('.filter-group[data-filter-type="usia"] .btn-filter.active')?.dataset.filterValue;
      const activeHarga = document.querySelector('.filter-group[data-filter-type="harga"] .btn-filter.active')?.dataset.filterValue;
  
      const allCards = activeTabPane.querySelectorAll('.doctor-card');
  
      allCards.forEach(card => {
        const cardGender = card.dataset.gender;
        const cardUsia = card.dataset.usia;
        const cardHarga = parseInt(card.dataset.harga, 10);
  
        const genderMatch = !activeGender || cardGender === activeGender;
        const usiaMatch = !activeUsia || cardUsia === activeUsia;
        
        let hargaMatch = false;
        if (!activeHarga) {
          hargaMatch = true;
        } else if (activeHarga === 'rendah' && cardHarga <= 50000) {
          hargaMatch = true;
        } else if (activeHarga === 'sedang' && cardHarga > 50000 && cardHarga <= 100000) {
          hargaMatch = true;
        } else if (activeHarga === 'tinggi' && cardHarga > 100000) {
          hargaMatch = true;
        }
  
        if (genderMatch && usiaMatch && hargaMatch) {
          card.classList.remove('d-none');
        } else {
          card.classList.add('d-none');
        }
      });
    };
  
    document.querySelectorAll('.btn-filter').forEach(button => {
      button.addEventListener('click', () => {
        const filterType = button.closest('.filter-group').dataset.filterType;
        
        document.querySelectorAll(`.filter-group[data-filter-type="${filterType}"] .btn-filter`).forEach(sibling => {
          sibling.classList.remove('active', 'btn-primary');
          sibling.classList.add('btn-secondary');
        });
  
        button.classList.add('active', 'btn-primary');
        button.classList.remove('btn-secondary');
        
        filterCards();
      });
    });
  
    document.querySelectorAll('button[data-bs-toggle="tab"]').forEach(tabButton => {
      tabButton.addEventListener('shown.bs.tab', filterCards);
    });
  
    filterCards();
  });