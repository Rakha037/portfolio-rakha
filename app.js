/* --------------------------------------------------------------------------
   PROJECTS DATA DATABASE (English Version with Image Captions)
   -------------------------------------------------------------------------- */
const projectsData = {
    1: {
        title: "Stock Price Forecasting (LSTM)",
        category: "Data Science & AI",
        tools: ["Python", "TensorFlow", "Streamlit", "Pandas", "NumPy"],
        role: "Data Scientist & Developer",
        duration: "Independent Study (2025)",
        description: "Development of a deep learning model based on Long Short-Term Memory (LSTM) to predict the daily stock price of PT Vale Indonesia Tbk (INCO) using historical time-series data.",
        details: [
            "Executed end-to-end data preparation workflows, including data cleaning, MinMax scaling, and time-series sequence generation.",
            "Trained and optimized the LSTM model through systematic experiments on hyperparameters such as hidden units, dropout rates, batch sizes, and epochs.",
            "Evaluated model performance using Mean Absolute Percentage Error (MAPE), achieving a low forecasting error of 6.8%, demonstrating the model's effectiveness in capturing non-linear stock trends."
        ],
        github: "#",
        demo: "#",
        gallery: [
            { src: "images/page_6_img_1.png", caption: "Streamlit web interface displaying the actual vs. predicted stock prices of PT Vale Indonesia Tbk (INCO) in a time-series line chart." },
            { src: "images/page_6_img_2.png", caption: "Close-up of the evaluation metrics panel displaying the achieved Mean Absolute Percentage Error (MAPE) of 6.8% and parameter tuning logs." }
        ]
    },
    2: {
        title: "TERLUKA - Burn Wound Detection",
        category: "Data Science & AI",
        tools: ["YOLOv5", "OpenCV", "Streamlit", "PyTorch", "Python"],
        role: "Machine Learning Engineer",
        duration: "Collaborative Project (2025)",
        description: "An integrated artificial intelligence platform designed to automate skin burn wound identification and classify severity levels based on image analysis.",
        details: [
            "Curated the burn wound dataset, performed image annotation, dataset preprocessing, and data augmentation to improve model resilience against lighting variations.",
            "Trained an object detection model based on YOLOv5, achieving 85% accuracy on validation datasets for wound identification and severity classification.",
            "Integrated the trained model into a Streamlit-based web interface, enabling users to upload injury images, receive instant diagnosis, and view first-aid recommendations in real-time."
        ],
        github: "#",
        demo: "#",
        gallery: [
            { src: "images/page_7_img_3.jpg", caption: "YOLOv5 object detection model recognizing and drawing a bounding box around a burn wound, showing severity classification and confidence score." },
            { src: "images/page_7_img_4.jpg", caption: "Web application dashboard built with Streamlit that enables users to upload wound photos, analyze them, and read immediate treatment recommendations." }
        ]
    },
    3: {
        title: "Industrial Fire Detection System",
        category: "Data Science & AI",
        tools: ["YOLOv8", "Torch", "OpenCV", "Python", "Streamlit"],
        role: "Lead AI Developer",
        duration: "Independent Project (2025)",
        description: "Real-time fire detection system based on YOLOv8 to support automated workplace safety monitoring in industrial and warehouse environments.",
        details: [
            "Collected and labeled custom datasets of industrial fire and smoke, applying augmentation techniques to prevent model overfitting.",
            "Trained the YOLOv8 object detection model using PyTorch, achieving a detection accuracy of 82% on video test files.",
            "Integrated the model with a web monitoring dashboard supporting live camera streams with instant bounding box visualizations of detected fire hazards."
        ],
        github: "#",
        demo: "#",
        gallery: [
            { src: "images/page_8_img_5.png", caption: "Real-time fire detection model identifying flame bodies in an industrial setting, marked by bounding boxes." },
            { src: "images/page_8_img_6.png", caption: "The object detection model detecting smoke plumes and identifying pre-flame conditions under dark lighting." },
            { src: "images/page_8_img_7.png", caption: "Web-based safety monitoring dashboard containing live video feeds with bounding boxes and emergency fire alert triggers." }
        ]
    },
    4: {
        title: "Socioeconomic Dashboard Salatiga",
        category: "BI & Data Viz",
        tools: ["Google Looker Studio", "Google Sheets", "Data Cleaning"],
        role: "Data Analyst",
        duration: "Academic Research (2025)",
        description: "An interactive visualization dashboard of socioeconomic data for Salatiga City, Central Java, supporting transparent public dissemination of regional macro indicators.",
        details: [
            "Gathered, standardized, and integrated regional socioeconomic data such as population distribution, open unemployment rates, poverty statistics, and economic growth.",
            "Designed Looker Studio report pages with clean, interactive, and user-friendly layouts to help non-technical stakeholders compare yearly metrics easily.",
            "Synthesized complex datasets into clear, actionable insights for regional welfare planning and strategy."
        ],
        github: "#",
        demo: "#",
        gallery: [
            { src: "images/page_9_img_8.png", caption: "Google Looker Studio dashboard main page highlighting Salatiga City's key macroeconomic indicators, population distribution, and demographics." },
            { src: "images/page_9_img_9.png", caption: "Interactive chart section displaying Salatiga's annual unemployment rates and labor force participation statistics." },
            { src: "images/page_9_img_10.png", caption: "Socioeconomic dashboard tab showing regional poverty trends, Gini ratio tracking, and historical economic growth." }
        ]
    },
    5: {
        title: "Data Science Salary Analysis",
        category: "BI & Data Viz",
        tools: ["Power BI", "Looker Studio", "Excel", "Descriptive Analysis"],
        role: "BI Developer",
        duration: "Case Study Project (2024)",
        description: "An interactive business intelligence dashboard to explore and analyze global professional compensation trends in the Data Science sector for the 2020-2022 period.",
        details: [
            "Presented comparative visualizations of average salaries, highest-paying job titles, geographic distributions, and remote work ratios by country.",
            "Analyzed salary variations based on professional experience level (Entry, Mid, Senior, Executive) and company size to reveal salary patterns.",
            "Configured multi-dimensional filter panels to simplify the investigation of compensation structures across the global data workforce."
        ],
        github: "#",
        demo: "#",
        gallery: [
            { src: "images/page_10_img_11.png", caption: "Interactive Google Looker Studio dashboard showing salary distribution by job title, experience level, and company size." },
            { src: "images/page_10_img_12.png", caption: "Geographical heat map dashboard tracking global average salaries in Data Science and the density of fully remote positions by country." }
        ]
    },
    6: {
        title: "Game Sales Analysis Dashboard",
        category: "BI & Data Viz",
        tools: ["Tableau", "MS Excel", "Forecasting"],
        role: "Data Analyst",
        duration: "Independent Project (2024)",
        description: "A business intelligence dashboard transforming raw global game transaction records into analytical charts of sales performance across gaming regions.",
        details: [
            "Analyzed video game transaction performance across major sales territories (North America, Europe, Japan, and other regions).",
            "Evaluated the market share of major console platforms and provided sales volume forecasts for upcoming console cycles.",
            "Created a structured Tableau Story presentation to communicate gaming market trends to general business audiences."
        ],
        github: "#",
        demo: "#",
        gallery: [
            { src: "images/page_11_img_13.png", caption: "Tableau dashboard detailing global video game sales trends, tracking peak sales years, and console market share." },
            { src: "images/page_11_img_14.png", caption: "Regional sales breakdown charts (North America, Europe, Japan, Rest of World) highlighting genre popularity and platform performance." }
        ]
    },
    7: {
        title: "Agricultural Sector Sustainability",
        category: "BI & Data Viz",
        tools: ["Tableau", "MS Excel", "Correlation Analysis"],
        role: "Business Statistician",
        duration: "Case Study (2024)",
        description: "An interactive environmental dashboard analyzing agricultural productivity and ecological sustainability indicators across countries over multiple years.",
        details: [
            "Analyzed and mapped the correlation between crop production volumes and regional economic income from agricultural activities.",
            "Visualized the global distribution of greenhouse gas emissions (CO₂), pesticide application rates, and their impact on soil quality.",
            "Presented a comparative view of agricultural irrigation access and land use practices across different staple food crops."
        ],
        github: "#",
        demo: "#",
        gallery: [
            { src: "images/page_12_img_15.png", caption: "Comprehensive Tableau dashboard illustrating global crop yield comparison against chemical pesticide consumption, CO2 emissions, and soil health metrics." }
        ]
    },
    8: {
        title: "PT Mulia Global Solusi Platform",
        category: "Web Development",
        tools: ["Laravel 11", "PHP", "MySQL", "Bootstrap 5", "Looker Studio"],
        role: "IT Developer Intern",
        duration: "Internship (Jan 2026 - Apr 2026)",
        description: "Development of corporate website profile modules, internal admin dashboards, and product entry forms to automate catalog management and accelerate internal operations.",
        details: [
            "Created backend modules using Laravel 11 for secure CRUD operations of product catalogs stored in a MySQL database.",
            "Designed a clean admin control panel using Bootstrap 5 to track product entries, catalog changes, and dashboard logs.",
            "Linked the website database to Looker Studio reports, enabling team members to identify trending items 2x faster than using manual reporting."
        ],
        github: "#",
        demo: "#",
        gallery: [
            { src: "images/page_14_img_17.png", caption: "Clean responsive corporate landing page for PT Mulia Global Solusi built with Laravel 11 and Bootstrap 5." },
            { src: "images/page_14_img_18.png", caption: "Admin control panel for PT MGS showing the database interface for inputting, updating, and categorizing new product catalog entries." },
            { src: "images/page_14_img_19.png", caption: "Looker Studio dashboard embedded into the Laravel admin module to track popular items, product entry metrics, and catalog status." }
        ]
    },
    9: {
        title: "PBPHH Licensing Recap Dashboard",
        category: "Web Development",
        tools: ["Laravel 11", "PHP", "MySQL", "Bootstrap 5", "VSCode"],
        role: "Fullstack Web Developer",
        duration: "Dishut Jatim Internship (Jan 2025 - Feb 2025)",
        description: "A web-based administration dashboard for recapitulating Forest Product Processing Business Permits (PBPHH) at the East Java Forestry Service, replacing manual ledger entries.",
        details: [
            "Designed a relational database schema in MySQL to store permit transaction logs cleanly and resolve data anomalies.",
            "Built an interactive admin search interface using Bootstrap 5 to filter permit records by district, business category, and issuance year.",
            "Embedded dynamic forestry production charts using Chart.js to support provincial authorities in tracking annual forest yield trends."
        ],
        github: "#",
        demo: "#",
        gallery: [
            { src: "images/page_13_img_16.png", caption: "Interactive administration dashboard for PBPHH permit recapitulation in Dinas Kehutanan East Java, showing logs, filters, and licensing history." }
        ]
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

                // Generate gallery HTML if exists with descriptions
                let galleryHTML = "";
                if (data.gallery && data.gallery.length > 0) {
                    const galleryItems = data.gallery.map(item => `
                        <div class="modal-gallery-item">
                            <div class="modal-gallery-img-container">
                                <img src="${item.src}" alt="${data.title}" class="modal-gallery-img" onerror="this.parentElement.parentElement.style.display='none';">
                            </div>
                            <div class="modal-gallery-caption">${item.caption}</div>
                        </div>
                    `).join("");
                    galleryHTML = `
                        <div class="modal-description">
                            <h3>Project Screenshots & Visualizations</h3>
                            <div class="modal-gallery">
                                ${galleryItems}
                            </div>
                        </div>
                    `;
                }

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
                                <span class="meta-label">Role</span>
                                <span class="meta-value">${data.role}</span>
                            </div>
                            <div class="meta-item">
                                <span class="meta-label">Period</span>
                                <span class="meta-value">${data.duration}</span>
                            </div>
                        </div>

                        <div class="modal-description">
                            <h3>Project Description</h3>
                            <p>${data.description}</p>
                            
                            <h3>Contributions & Key Implementations</h3>
                            <ul class="modal-bullets">
                                ${detailsList}
                            </ul>
                        </div>

                        ${galleryHTML}

                        <div class="modal-description" style="margin-bottom: 0;">
                            <h3>Technologies Used</h3>
                            <div class="skill-tags" style="margin-top: 10px; margin-bottom: 30px;">
                                ${toolsBadges}
                            </div>
                        </div>

                        <div class="modal-actions">
                            <a href="${data.github}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                                <i class="fa-brands fa-github"></i> GitHub Repository
                            </a>
                            <a href="${data.demo}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
                                <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
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
                console.error("Failed to copy text: ", err);
            });
        });
    });
});
