document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efek Navbar Berubah Saat Di-scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '12px 0';
            navbar.style.background = 'rgba(6, 6, 12, 0.95)';
        } else {
            navbar.style.padding = '20px 0';
            navbar.style.background = 'rgba(6, 6, 12, 0.8)';
        }
    });

    // 2. Logika Modal QRIS & Redirect Link
    const modal = document.getElementById('qrisModal');
    const purchaseForm = document.getElementById('purchaseForm');
    const closeModal = document.querySelector('.close-modal');
    const btnConfirmPayment = document.getElementById('btnConfirmPayment');

    // Aksi ketika form data diri disubmit (Klik BAYAR SEKARANG)
    if (purchaseForm) {
        purchaseForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Menahan refresh halaman
            
            // Membuka popup QRIS
            modal.style.display = 'block';
        });
    }

    // Aksi menutup popup ketika klik tombol silang (X)
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    // Aksi menutup popup jika klik di luar area kotak modal
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Aksi ketika mengklik tombol "Saya Sudah Membayar" (Direct Link)
    if (btnConfirmPayment) {
        btnConfirmPayment.addEventListener('click', () => {
            
            // ⬇️ TEMPAT INPUT DIRECT LINK ANDA DI SINI ⬇️
            // Ganti 'https://google.com' di bawah ini dengan tautan tujuan Anda (misal: link WhatsApp, Drive, dll)
            const directLink = 'https://api.whatsapp.com/send/?phone=6283853462238&text=Halo%2C+saya+sudah+membeli+produk+game+Anda%29&type=phone_number&app_absent=0'; 
            
            // Proses mengalihkan pengguna ke link tersebut
            window.location.href = directLink;
            
        });
    }

    // 3. Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});