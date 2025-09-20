document.addEventListener('DOMContentLoaded', () => {
    const filterCards = () => {
      // Menemukan panel tab yang sedang aktif
      const activeTabPane = document.querySelector('.tab-pane.show.active');
      if (!activeTabPane) {
        return;
      }
  
      // Mengumpulkan filter yang saat ini aktif
      const activeGender = document.querySelector('.filter-group[data-filter-type="gender"] .btn-filter.active')?.dataset.filterValue;
      const activeUsia = document.querySelector('.filter-group[data-filter-type="usia"] .btn-filter.active')?.dataset.filterValue;
      const activeHarga = document.querySelector('.filter-group[data-filter-type="harga"] .btn-filter.active')?.dataset.filterValue;
  
      // Menemukan semua kartu dokter di dalam tab yang aktif
      const allCards = activeTabPane.querySelectorAll('.doctor-card');
  
      // Iterasi setiap kartu dan terapkan filter
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
  
    // Event listener untuk tombol filter
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
  
    // Event listener untuk tab
    document.querySelectorAll('button[data-bs-toggle="tab"]').forEach(tabButton => {
      tabButton.addEventListener('shown.bs.tab', filterCards);
    });
  
    // Jalankan filter saat halaman pertama kali dimuat
    filterCards();
  });