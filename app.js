/* --------------------------------------------------------------------------
   PROJECTS DATA DATABASE
   -------------------------------------------------------------------------- */
const projectsData = {
    1: {
        title: "Stock Price Forecasting (LSTM)",
        category: "Data Science & AI",
        tools: ["Python", "TensorFlow", "Streamlit", "Pandas", "NumPy"],
        role: "Data Scientist & Developer",
        duration: "Studi Mandiri (2025)",
        description: "Pengembangan model pembelajaran mendalam (deep learning) berbasis Long Short-Term Memory (LSTM) untuk memprediksi pergerakan harga saham harian PT Vale Indonesia Tbk (INCO) dengan menggunakan data historis deret waktu.",
        details: [
            "Melakukan proses persiapan data ujung-ke-ujung (end-to-end), termasuk pembersihan data, penskalaan fitur menggunakan MinMax Scaler, dan pembuatan sekuens data deret waktu.",
            "Melatih dan mengoptimasi model LSTM melalui eksperimen sistematis pada hyperparameter seperti jumlah neuron, dropout rate, batch size, dan jumlah epoch.",
            "Mengevaluasi performa model menggunakan metrik Mean Absolute Percentage Error (MAPE), dan berhasil mencapai nilai MAPE sebesar 6.8%, membuktikan keefektifan model dalam menangkap tren non-linear harga saham."
        ],
        github: "#",
        demo: "#"
    },
    2: {
        title: "TERLUKA - Burn Wound Detection",
        category: "Data Science & AI",
        tools: ["YOLOv5", "OpenCV", "Streamlit", "PyTorch", "Python"],
        role: "Machine Learning Engineer",
        duration: "Proyek Kolaboratif (2025)",
        description: "Platform kecerdasan buatan (AI) terintegrasi untuk pendeteksian luka bakar otomatis secara cepat dan klasifikasi tingkat keparahan luka bakar berdasarkan citra medis.",
        details: [
            "Mengelola dataset gambar luka bakar, melakukan prapemrosesan gambar, penotasian manual (annotation), serta augmentasi citra untuk meningkatkan ketangguhan model dari anomali cahaya.",
            "Melatih model berbasis algoritma YOLOv5 (Object Detection) dan mencapai tingkat akurasi validasi sebesar 85% untuk pengenalan area luka dan kelas keparahannya.",
            "Mengintegrasikan model hasil latihan ke antarmuka aplikasi web berbasis Streamlit, memungkinkan pengguna umum mengunggah foto luka dan menerima diagnosis instan beserta pertolongan pertama yang direkomendasikan secara real-time."
        ],
        github: "#",
        demo: "#"
    },
    3: {
        title: "Industrial Fire Detection System",
        category: "Data Science & AI",
        tools: ["YOLOv8", "Torch", "OpenCV", "Python", "Streamlit"],
        role: "Lead AI Developer",
        duration: "Proyek Mandiri (2025)",
        description: "Sistem deteksi kebakaran real-time berbasis YOLOv8 untuk mendukung otomatisasi pemantauan keselamatan kerja di area industri dan pergudangan.",
        details: [
            "Melakukan pengumpulan dan pelabelan dataset khusus api dan asap industri dengan teknik data augmentation untuk menghindari overfitting.",
            "Melatih model YOLOv8 Object Detection dengan framework PyTorch hingga memperoleh akurasi pemantauan sebesar 82% pada data pengujian video.",
            "Menghubungkan model deteksi ke dasbor monitoring interaktif yang mampu menyajikan visualisasi kamera langsung (live camera streaming) dengan penggambaran bounding box deteksi kebakaran secara instan."
        ],
        github: "#",
        demo: "#"
    },
    4: {
        title: "Socioeconomic Dashboard Salatiga",
        category: "BI & Visualisasi Data",
        tools: ["Google Looker Studio", "Google Sheets", "Pembersihan Data"],
        role: "Data Analyst",
        duration: "Riset Akademik (2025)",
        description: "Dasbor interaktif visualisasi data sosial ekonomi Kota Salatiga Jawa Tengah untuk mendukung diseminasi informasi strategis daerah secara transparan.",
        details: [
            "Mengumpulkan, menstandarkan, dan mengintegrasikan indikator makro sosial ekonomi seperti jumlah penduduk, tingkat pengangguran terbuka (TPT), angka kemiskinan, tingkat pendidikan, dan laju pertumbuhan ekonomi daerah.",
            "Merancang arsitektur visual dasbor Looker Studio yang interaktif, bersih, dan informatif sehingga memudahkan pemangku kepentingan dalam melakukan perbandingan data antartahun.",
            "Membantu menyederhanakan data kompleks menjadi wawasan siap pakai untuk perencanaan program kesejahteraan daerah."
        ],
        github: "#",
        demo: "#"
    },
    5: {
        title: "Data Science Salary Analysis",
        category: "BI & Visualisasi Data",
        tools: ["Power BI", "Looker Studio", "Excel", "Analisis Deskriptif"],
        role: "BI Developer",
        duration: "Studi Kasus Proyek (2024)",
        description: "Dasbor analitis interaktif untuk mengeksplorasi dan menganalisis tren gaji profesional di bidang Data Science secara global untuk periode 2020-2022.",
        details: [
            "Menyajikan visualisasi komparatif gaji rata-rata, jenis pekerjaan dengan bayaran tertinggi, sebaran geografis lokasi kerja, serta persentase sebaran sistem kerja jarak jauh (remote work).",
            "Menganalisis hubungan antara tingkat pengalaman profesional (Entry, Mid-Level, Senior, Executive) dan ukuran perusahaan dengan total kompensasi tahunan.",
            "Mengintegrasikan fitur filter interaktif multi-dimensi guna mempermudah pencarian tren kompensasi kerja di sektor data."
        ],
        github: "#",
        demo: "#"
    },
    6: {
        title: "Game Sales Analysis Dashboard",
        category: "BI & Visualisasi Data",
        tools: ["Tableau", "MS Excel", "Forecasting"],
        role: "Data Analyst",
        duration: "Proyek Mandiri (2024)",
        description: "Dasbor intelijen bisnis yang mengubah data transaksi penjualan game global menjadi visualisasi tren performa industri *gaming* lintas kawasan.",
        details: [
            "Menganalisis performa penjualan video game secara geografis di berbagai wilayah utama (North America, Europe, Japan, dan negara lainnya).",
            "Mengevaluasi pangsa pasar dari berbagai platform konsol game populer serta menyajikan prediksi/peramalan sederhana untuk laju penjualan di masa mendatang.",
            "Membuat presentasi visual berbasis Tableau Story untuk menjelaskan performa genre game terpopuler kepada audiens umum."
        ],
        github: "#",
        demo: "#"
    },
    7: {
        title: "Agricultural Sector Sustainability",
        category: "BI & Visualisasi Data",
        tools: ["Tableau", "MS Excel", "Analisis Korelasi"],
        role: "Business Statistician",
        duration: "Studi Kasus (2024)",
        description: "Dasbor visualisasi interaktif untuk menganalisis produktivitas serta isu keberlanjutan lingkungan pada sektor pertanian global di berbagai negara.",
        details: [
            "Menganalisis dan memvisualisasikan korelasi antara volume produksi hasil panen komoditas utama dengan tingkat pendapatan ekonomi dari sektor agraria.",
            "Memetakan distribusi geografis emisi gas karbon dioksida (CO₂), tingkat konsumsi pestisida pertanian, dan hubungannya dengan kesehatan tanah permukaan.",
            "Menyajikan analisis komparatif akses irigasi lahan tani antartipe komoditas tanaman pangan dunia."
        ],
        github: "#",
        demo: "#"
    },
    8: {
        title: "PT Mulia Global Solusi Platform",
        category: "Web Development",
        tools: ["Laravel 11", "PHP", "MySQL", "Bootstrap 5", "Looker Studio"],
        role: "IT Developer Intern",
        duration: "Magang (Jan 2026 - Apr 2026)",
        description: "Pengembangan modul situs web profil perusahaan, dasbor administrasi internal, dan modul input data produk untuk mempercepat otomatisasi manajemen data barang dagang.",
        details: [
            "Mengembangkan modul backend menggunakan framework Laravel 11 untuk penanganan CRUD data produk secara aman dengan database MySQL.",
            "Membangun dasbor admin interaktif berbasis Bootstrap 5 untuk pelacakan alur data produk masuk-keluar.",
            "Menghubungkan basis data website dengan Google Looker Studio, memungkinkan tim internal mengidentifikasi tren produk terpopuler secara visual 2x lebih cepat dibanding metode manual sebelumnya."
        ],
        github: "#",
        demo: "#"
    },
    9: {
        title: "PBPHH Licensing Recap Dashboard",
        category: "Web Development",
        tools: ["Laravel 11", "PHP", "MySQL", "Bootstrap 5", "VSCode"],
        role: "Fullstack Web Developer",
        duration: "Magang Dishut Jatim (Jan 2025 - Feb 2025)",
        description: "Dasbor administrasi rekapitulasi data Perizinan Berusaha Pengolahan Hasil Hutan (PBPHH) Dinas Kehutanan Provinsi Jawa Timur untuk menggantikan perekaman data manual.",
        details: [
            "Merancang skema database relasional MySQL untuk menampung riwayat penerbitan izin PBPHH secara bersih dan menstandarkan format data historis izin guna meminimalisir anomali data.",
            "Membangun antarmuka admin dasbor interaktif berbasis Bootstrap 5 untuk penyaringan data izin berdasarkan wilayah kabupaten, tipe badan usaha, dan tahun penerbitan.",
            "Menyematkan grafik tren produksi tahunan hasil hutan terpadu menggunakan pustaka Chart.js untuk mempermudah pemantauan oleh otoritas kehutanan tingkat provinsi."
        ],
        github: "#",
        demo: "#"
    }
};

/* --------------------------------------------------------------------------
   DOM ELEMENTS
   -------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
    // Navigation elements
    const navbar = document.getElementById("main-navbar");
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");
    
    // Mobile navigation
    const mobileToggle = document.getElementById("mobile-toggle");
    const mobileClose = document.getElementById("mobile-close");
    const mobileMenuOverlay = document.getElementById("mobile-menu-overlay");
    const mobileLinks = document.querySelectorAll(".mobile-link");
    
    // Theme toggle
    const themeToggle = document.getElementById("theme-toggle");
    
    // Project filter & cards
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");
    const projectsGrid = document.getElementById("projects-grid");
    
    // Modal elements
    const modal = document.getElementById("project-modal");
    const modalCloseBtn = document.getElementById("modal-close-btn");
    const modalBodyContent = document.getElementById("modal-body-content");
    
    // Clipboard buttons
    const copyButtons = document.querySelectorAll(".copy-btn");
    const toast = document.getElementById("toast");
    
    // Contact Form
    const contactForm = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");

    /* --------------------------------------------------------------------------
       THEME CONTROLLER
       -------------------------------------------------------------------------- */
    // Check saved theme or system preference
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme) {
        document.body.className = savedTheme;
    } else {
        // Default to dark theme as planned
        document.body.className = "dark-theme";
        localStorage.setItem("portfolio-theme", "dark-theme");
    }

    // Toggle theme event
    themeToggle.addEventListener("click", () => {
        if (document.body.classList.contains("dark-theme")) {
            document.body.classList.remove("dark-theme");
            document.body.classList.add("light-theme");
            localStorage.setItem("portfolio-theme", "light-theme");
        } else {
            document.body.classList.remove("light-theme");
            document.body.classList.add("dark-theme");
            localStorage.setItem("portfolio-theme", "dark-theme");
        }
    });

    /* --------------------------------------------------------------------------
       STICKY NAVBAR & ACTIVE LINKS
       -------------------------------------------------------------------------- */
    // Sticky on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
        
        // Active link tracking
        let currentSectionId = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute("id");
            }
        });

        if (currentSectionId) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${currentSectionId}`) {
                    link.classList.add("active");
                }
            });
        }
    });

    /* --------------------------------------------------------------------------
       MOBILE NAVIGATION OVERLAY
       -------------------------------------------------------------------------- */
    mobileToggle.addEventListener("click", () => {
        mobileMenuOverlay.classList.add("open");
    });

    const closeMobileMenu = () => {
        mobileMenuOverlay.classList.remove("open");
    };

    mobileClose.addEventListener("click", closeMobileMenu);
    
    mobileLinks.forEach(link => {
        link.addEventListener("click", closeMobileMenu);
    });

    /* --------------------------------------------------------------------------
       PROJECT FILTERS
       -------------------------------------------------------------------------- */
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            // Update active state in buttons
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-filter");

            // Filter project cards
            projectCards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");
                
                // Hide with transition
                card.style.opacity = "0";
                card.style.transform = "scale(0.95)";
                
                setTimeout(() => {
                    if (filterValue === "all" || cardCategory === filterValue) {
                        card.classList.remove("hidden");
                        // Trigger reflow for transition
                        void card.offsetWidth;
                        card.style.opacity = "1";
                        card.style.transform = "scale(1)";
                    } else {
                        card.classList.add("hidden");
                    }
                }, 200);
            });
        });
    });

    /* --------------------------------------------------------------------------
       PROJECT MODAL OVERLAY
       -------------------------------------------------------------------------- */
    // Open modal on project card click
    projectCards.forEach(card => {
        card.addEventListener("click", () => {
            const projectId = card.getAttribute("data-project-id");
            const data = projectsData[projectId];
            
            if (data) {
                // Generate tools HTML badges
                const toolsBadges = data.tools.map(t => `<span class="skill-badge">${t}</span>`).join("");
                
                // Generate details bullet points
                const detailsList = data.details.map(point => `<li>${point}</li>`).join("");

                // Render content inside modal body
                modalBodyContent.innerHTML = `
                    <div class="modal-body">
                        <div class="modal-header-info">
                            <span class="modal-cat">${data.category}</span>
                            <h2 id="modal-title">${data.title}</h2>
                            <div class="section-line" style="margin-left: 0;"></div>
                        </div>

                        <div class="modal-meta-grid">
                            <div class="meta-item">
                                <span class="meta-label">Peran</span>
                                <span class="meta-value">${data.role}</span>
                            </div>
                            <div class="meta-item">
                                <span class="meta-label">Periode</span>
                                <span class="meta-value">${data.duration}</span>
                            </div>
                        </div>

                        <div class="modal-description">
                            <h3>Deskripsi Proyek</h3>
                            <p>${data.description}</p>
                            
                            <h3>Kontribusi & Detail Implementasi</h3>
                            <ul class="modal-bullets">
                                ${detailsList}
                            </ul>
                        </div>

                        <div class="modal-description" style="margin-bottom: 0;">
                            <h3>Teknologi Yang Digunakan</h3>
                            <div class="skill-tags" style="margin-top: 10px; margin-bottom: 30px;">
                                ${toolsBadges}
                            </div>
                        </div>

                        <div class="modal-actions">
                            <a href="${data.github}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                                <i class="fa-brands fa-github"></i> Repository GitHub
                            </a>
                            <a href="${data.demo}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
                                <i class="fa-solid fa-arrow-up-right-from-square"></i> Demo Proyek
                            </a>
                        </div>
                    </div>
                `;
                
                // Open modal
                modal.classList.remove("hidden");
                document.body.style.overflow = "hidden"; // Prevent body scrolling
            }
        });
    });

    const closeModal = () => {
        modal.classList.add("hidden");
        document.body.style.overflow = ""; // Restore scrolling
    };

    modalCloseBtn.addEventListener("click", closeModal);
    
    // Close modal when clicking overlay background
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !modal.classList.contains("hidden")) {
            closeModal();
        }
    });

    /* --------------------------------------------------------------------------
       CLIPBOARD COPY CONTROLLER
       -------------------------------------------------------------------------- */
    copyButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation(); // Avoid triggering any parent actions
            const textToCopy = btn.getAttribute("data-copy");
            
            navigator.clipboard.writeText(textToCopy).then(() => {
                // Show toast notification
                toast.classList.remove("hidden");
                
                setTimeout(() => {
                    toast.classList.add("hidden");
                }, 2000);
            }).catch(err => {
                console.error("Gagal menyalin teks: ", err);
            });
        });
    });

    /* --------------------------------------------------------------------------
       CONTACT FORM SUBMIT CONTROLLER
       -------------------------------------------------------------------------- */
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Get form values
            const nameInput = document.getElementById("name").value.trim();
            const emailInput = document.getElementById("email").value.trim();
            const messageInput = document.getElementById("message").value.trim();
            
            if (nameInput && emailInput && messageInput) {
                // Mock form submission process
                formStatus.className = "form-status";
                formStatus.textContent = "Mengirim pesan...";
                
                setTimeout(() => {
                    formStatus.className = "form-status success";
                    formStatus.textContent = `Terima kasih, ${nameInput}! Pesan Anda telah disimulasikan berhasil terkirim.`;
                    
                    // Clear inputs
                    contactForm.reset();
                    
                    // Clear status after 5 seconds
                    setTimeout(() => {
                        formStatus.textContent = "";
                    }, 5000);
                }, 1000);
            } else {
                formStatus.className = "form-status error";
                formStatus.textContent = "Silakan lengkapi semua kolom formulir!";
            }
        });
    }
});
