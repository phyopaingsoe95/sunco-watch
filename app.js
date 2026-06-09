/* 
   SU&CO WATCH SHOWCASE - APPLICATION LOGIC
   Vanilla Javascript Implementation
*/

// --- Watch Database ---
const WATCH_DATABASE = [
    {
        id: 'red-sovereign',
        title: 'Red Sovereign',
        subtitle: 'Sovereign Edition',
        brand: 'suco',
        category: 'executive',
        image: 'assets/watch_hero.jpg',
        badge: 'SU&CO',
        description: 'The crown jewel of SU&CO. Combining a signature deep crimson dial with meticulously polished Oyster Steel casing. Designed for those who appreciate distinct leadership and timeless elegance.',
        specs: {
            case: '42 mm',
            dial: 'Crimson Red',
            movement: 'Swiss Automatic Caliber S-17',
            glass: 'Sapphire Crystal (Anti-Reflective)',
            strap: 'Oyster Stainless Steel',
            water: '10 ATM (100m / 330ft)'
        }
    },
    {
        id: 'chronograph-classic',
        title: 'Chronograph Classic',
        subtitle: 'Heritage Series',
        brand: 'suco',
        category: 'chronograph',
        image: 'assets/watch_classic.png',
        badge: 'SU&CO',
        description: 'Designed for those who appreciate mechanical complexity. Featuring three separate subdials measuring seconds, minutes, and hours, bound by a satin crimson dial and dual stopwatch pushers.',
        specs: {
            case: '41 mm',
            dial: 'Satin Red',
            movement: 'Automatic Chronograph Caliber C-20',
            glass: 'Double Dome Sapphire Glass',
            strap: 'Polished Oyster Steel',
            water: '5 ATM (50m / 165ft)'
        }
    },
    {
        id: 'vulcan-sport',
        title: 'Vulcan Sport',
        subtitle: 'Active Collection',
        brand: 'suco',
        category: 'sport',
        image: 'assets/watch_sport.png',
        badge: 'SU&CO',
        description: 'Rugged performance meet modern lines. Built inside a lightweight, matte black titanium case with a textured carbon dial, glowing red hands, and a double-injected vulcanized rubber strap.',
        specs: {
            case: '43 mm',
            dial: 'Carbon Black & Crimson Red',
            movement: 'Japanese Miyota Automatic',
            glass: 'Sapphire Crystal (Impact Resistant)',
            strap: 'Vulcanized Crimson Rubber',
            water: '20 ATM (200m / 660ft)'
        }
    },
    {
        id: 'rose-gold-executive',
        title: 'Rose Gold Executive',
        subtitle: 'Executive Collection',
        brand: 'suco',
        category: 'executive',
        image: 'assets/watch_executive.png',
        badge: 'SU&CO',
        description: 'An exceptional study in prestige. Crafted with an 18K rose gold casing, pristine enamel white dial, and a premium hand-stitched alligator leather strap. Sophisticated, refined, and powerful.',
        specs: {
            case: '40 mm',
            dial: 'Enamel White',
            movement: 'Swiss Hand-wound Caliber H-09',
            glass: 'Ultra-thin Sapphire Crystal',
            strap: 'Black Alligator Leather',
            water: '3 ATM (30m / 100ft)'
        }
    },
    {
        id: 'monochrome-minimal',
        title: 'Monochrome Minimal',
        subtitle: 'Minimalist Series',
        brand: 'suco',
        category: 'minimalist',
        image: 'assets/watch_hero.jpg', // Fallback or minimalist image
        badge: 'SU&CO',
        description: 'Understated beauty in its purest form. Features an ultra-thin stainless steel casing, silver Milanese mesh strap, and a clean white face punctuated by a single red sweep-second hand.',
        specs: {
            case: '38 mm',
            dial: 'Matte White',
            movement: 'Swiss Quartz Movement',
            glass: 'Flat Scratch-Proof Sapphire',
            strap: 'Silver Milanese Mesh',
            water: '3 ATM (30m / 100ft)'
        }
    },
    {
        id: 'saga-jewelry',
        title: 'SAGA Space Bangle',
        subtitle: 'Designer Jewelry Series',
        brand: 'saga',
        category: 'minimalist',
        image: 'assets/watch_saga.png',
        badge: 'SAGA',
        description: 'An exquisite designer timepiece from SAGA. Crafted as a jewelry bangle watch with an elegant oval dial, sapphire crystal casing, and a sleek gold mesh finish. The intersection of modern art and time.',
        specs: {
            case: '36 mm',
            dial: 'Gold Sunray',
            movement: 'Swiss Quartz Movement',
            glass: 'Curved Sapphire Crystal',
            strap: 'Gold Steel Bangle Mesh',
            water: '3 ATM (30m / 100ft)'
        }
    },
    {
        id: 'mathey-tissot-vintage',
        title: 'Mathey Tissot Heritage',
        subtitle: 'Swiss Heritage Series',
        brand: 'mathey-tissot',
        category: 'executive',
        image: 'assets/watch_mathey_tissot.png',
        badge: 'Mathey Tissot',
        description: 'Established in 1886, Mathey Tissot brings Swiss heritage to your wrist. Featuring a classic fluted bezel, champagne gold dial, date indicator magnifying lens, and a premium two-tone steel-gold jubilee bracelet.',
        specs: {
            case: '39 mm',
            dial: 'Champagne Gold',
            movement: 'Swiss Automatic ETA 2824',
            glass: 'Magnified Sapphire Crystal',
            strap: 'Two-Tone jubilee Steel & Gold',
            water: '5 ATM (50m / 165ft)'
        }
    },
    {
        id: 'maserati-chrono',
        title: 'Maserati Racing Chrono',
        subtitle: 'Sport Chrono Edition',
        brand: 'maserati',
        category: 'chronograph',
        image: 'assets/watch_maserati.png',
        badge: 'Maserati',
        description: 'Driven by automotive legacy. A high-performance racing chronograph featuring a carbon fiber bezel, deep blue dial accents, three subdial displays, the iconic trident logo at 12, and hand-stitched leather strap.',
        specs: {
            case: '44 mm',
            dial: 'Matte Black & Racing Blue',
            movement: 'Quartz Chronograph Caliber M-88',
            glass: 'Hardened Mineral Glass',
            strap: 'Blue-Stitched Black Leather',
            water: '10 ATM (100m / 330ft)'
        }
    }
];



// --- Model Configuration mapping ---
const MODEL_MAPPING = {
    hero: {
        img: 'assets/watch_hero.jpg',
        desc: 'The ultimate hybrid between sporty durability and dress elegance. Crimson dial face and stainless casing.',
        collectionValue: 'sovereign'
    },
    classic: {
        img: 'assets/watch_classic.png',
        desc: 'A classic chronograph featuring detailed subdials, stopwatch buttons, and full stainless steel bracelet.',
        collectionValue: 'classic'
    },
    sport: {
        img: 'assets/watch_sport.png',
        desc: 'Sport active design. Matte black titanium bezel with an ultra-durable crimson rubber strap.',
        collectionValue: 'sport'
    },
    executive: {
        img: 'assets/watch_executive.png',
        desc: 'Elegant rose gold case, clean enamel white dial, and a premium black leather strap.',
        collectionValue: 'executive'
    },
    minimalist: {
        img: 'assets/watch_minimalist.png',
        desc: 'Ultra-thin case, clean white dial with a single red second hand, paired with a silver mesh strap.',
        collectionValue: 'minimalist'
    }
};

// --- DOM Elements ---
document.addEventListener('DOMContentLoaded', () => {
    // Nav Elements
    const header = document.querySelector('.main-header');
    const scrollProgress = document.getElementById('scroll-progress');
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Gallery Elements
    const galleryGrid = document.getElementById('gallery-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('gallery-search');
    const displayedCount = document.getElementById('displayed-count');



    // Modal Elements
    const modal = document.getElementById('product-modal');
    const modalClose = document.getElementById('modal-close');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalBadge = document.getElementById('modal-badge');
    const modalDescText = document.getElementById('modal-desc-text');
    const specCase = document.getElementById('spec-case');
    const specDial = document.getElementById('spec-dial');
    const specMovement = document.getElementById('spec-movement');
    const specGlass = document.getElementById('spec-glass');
    const specStrap = document.getElementById('spec-strap');
    const specWater = document.getElementById('spec-water');
    const modalOrderBtn = document.getElementById('modal-order-btn');
    const modalShareBtn = document.getElementById('modal-share-btn');
    const backdrop = document.querySelector('.modal-backdrop');

    // Form Elements
    const boutiqueForm = document.getElementById('boutique-form');
    const formSuccessMsg = document.getElementById('form-success-msg');
    const resetFormBtn = document.getElementById('reset-form-btn');
    const bookingCollection = document.getElementById('booking-collection');

    // Toast Container
    const toastContainer = document.getElementById('toast-container');

    // --- Toast System ---
    function showToast(message, duration = 3000) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `
            <i class="fa-solid fa-circle-info toast-icon"></i>
            <span>${message}</span>
        `;
        toastContainer.appendChild(toast);

        // Trigger reflow to animate
        toast.offsetHeight;
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, duration);
    }

    // --- Scroll Handler ---
    window.addEventListener('scroll', () => {
        // Scroll Progress
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        scrollProgress.style.width = scrolled + '%';

        // Header Shrink & Background change
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Active Navigation link updates
        let currentSection = '';
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    });

    // --- Mobile Menu Toggle ---
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu on link clicks
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // --- Product Modal Operations ---
    function openProductModal(watchId) {
        const watch = WATCH_DATABASE.find(w => w.id === watchId);
        if (!watch) return;

        modalImg.src = watch.image;
        modalImg.alt = watch.title;
        modalTitle.textContent = watch.title;
        modalBadge.textContent = watch.badge;
        modalDescText.textContent = watch.description;

        specCase.textContent = watch.specs.case;
        specDial.textContent = watch.specs.dial;
        specMovement.textContent = watch.specs.movement;
        specGlass.textContent = watch.specs.glass;
        specStrap.textContent = watch.specs.strap;
        specWater.textContent = watch.specs.water;

        // Store watch name on inquiry button
        modalOrderBtn.setAttribute('data-watch', watch.id);

        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Lock background scroll
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore background scroll
    }

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);

    if (modalOrderBtn) {
        modalOrderBtn.addEventListener('click', () => {
            const watchId = modalOrderBtn.getAttribute('data-watch');
            const watch = WATCH_DATABASE.find(w => w.id === watchId);

            closeModal();

            // Set collection in dropdown
            const mapped = MODEL_MAPPING[watchId.split('-')[0]] || MODEL_MAPPING[watchId];
            if (mapped && bookingCollection) {
                bookingCollection.value = mapped.collectionValue || 'all';
            }

            // Smooth scroll to boutique section
            document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
            showToast(`Selected ${watch.title} for appointment inquiry.`);
        });
    }

    if (modalShareBtn) {
        modalShareBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(window.location.href).then(() => {
                showToast('Share link copied to clipboard!');
            }).catch(() => {
                showToast('Failed to copy link.');
            });
        });
    }

    // Active filter state
    let activeBrand = 'all';
    let activeStyle = 'all';

    // --- Gallery Render & Filters ---
    function renderGallery() {
        if (!galleryGrid) return;

        galleryGrid.innerHTML = '';
        const searchQuery = searchInput ? searchInput.value : '';

        const filteredWatches = WATCH_DATABASE.filter(watch => {
            // Brand match
            const matchesBrand = activeBrand === 'all' || watch.brand === activeBrand;

            // Category match
            const matchesCategory = activeStyle === 'all' || watch.category === activeStyle;

            // Search query match
            const lowerQuery = searchQuery.toLowerCase().trim();
            const matchesSearch = searchQuery === '' ||
                watch.title.toLowerCase().includes(lowerQuery) ||
                watch.brand.toLowerCase().includes(lowerQuery) ||
                watch.description.toLowerCase().includes(lowerQuery) ||
                watch.specs.movement.toLowerCase().includes(lowerQuery) ||
                watch.specs.strap.toLowerCase().includes(lowerQuery);

            return matchesBrand && matchesCategory && matchesSearch;
        });

        // Update display count
        if (displayedCount) displayedCount.textContent = filteredWatches.length;

        if (filteredWatches.length === 0) {
            galleryGrid.innerHTML = `
                <div class="gallery-empty-state" style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
                    <i class="fa-solid fa-hourglass-empty" style="font-size: 48px; color: var(--border-gray); margin-bottom: 16px;"></i>
                    <h4>No watch matches found</h4>
                    <p style="font-size: 14px; margin-top: 8px;">Try refining your search terms or filters.</p>
                </div>
            `;
            return;
        }

        filteredWatches.forEach(watch => {
            const card = document.createElement('div');
            card.className = 'watch-card';
            card.innerHTML = `
                <div class="card-img-container">
                    <span class="card-badge badge-${watch.brand}">${watch.badge}</span>
                    <img src="${watch.image}" alt="${watch.title}" class="card-watch-img">
                    <div class="card-overlay">
                        <button class="quick-view-btn" data-id="${watch.id}">Quick View</button>
                    </div>
                </div>
                <div class="card-info">
                    <h4 class="card-title">${watch.title}</h4>
                    <p class="card-desc">${watch.description}</p>
                    <div class="card-footer">
                        <a href="#booking" class="card-action-link" data-id="${watch.id}">Inquire <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            `;
            galleryGrid.appendChild(card);
        });

        // Add Quick View triggers
        document.querySelectorAll('.quick-view-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                openProductModal(id);
            });
        });

        // Add Direct Inquire triggers
        document.querySelectorAll('.card-action-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const id = link.getAttribute('data-id');
                const watch = WATCH_DATABASE.find(w => w.id === id);

                // Set collection dropdown
                if (bookingCollection) {
                    // Try to match id prefix
                    const baseId = id.replace('-minimal', 'minimalist').split('-')[0];
                    const mapped = MODEL_MAPPING[baseId] || MODEL_MAPPING[id];
                    if (mapped) {
                        bookingCollection.value = mapped.collectionValue;
                    } else {
                        // Fallback for brand watch direct matches
                        if (id.startsWith('saga')) bookingCollection.value = 'saga';
                        else if (id.startsWith('mathey-tissot')) bookingCollection.value = 'mathey-tissot';
                        else if (id.startsWith('maserati')) bookingCollection.value = 'maserati';
                    }
                }

                document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
                showToast(`Selected ${watch.title} for appointment inquiry.`);
            });
        });
    }

    // Set up Brand filter click events
    const brandFilterButtons = document.querySelectorAll('.brand-filter-btn');
    brandFilterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            brandFilterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            activeBrand = btn.getAttribute('data-brand');
            renderGallery();
        });
    });

    // Set up Style filter click events
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            activeStyle = btn.getAttribute('data-filter');
            renderGallery();
        });
    });

    // Set up search keyup events
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            renderGallery();
        });
    }



    // --- Booking Form Operations ---
    if (boutiqueForm) {
        boutiqueForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Retrieve values
            const name = document.getElementById('booking-name').value;
            const email = document.getElementById('booking-email').value;
            const date = document.getElementById('booking-date').value;

            if (name && email && date) {
                // Toggle success card
                boutiqueForm.style.display = 'none';
                formSuccessMsg.style.display = 'flex';
                showToast("Appointment requested successfully!");
            }
        });
    }

    if (resetFormBtn) {
        resetFormBtn.addEventListener('click', () => {
            boutiqueForm.reset();
            boutiqueForm.style.display = 'flex';
            formSuccessMsg.style.display = 'none';
        });
    }

    // Initialize Page
    renderGallery();
});
