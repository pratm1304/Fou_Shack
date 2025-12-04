// Create snowflakes
        function createSnowflakes() {
            const hero = document.getElementById('hero');
            for (let i = 0; i < 30; i++) {
                const snowflake = document.createElement('div');
                snowflake.className = 'snowflake';
                snowflake.innerHTML = '❄';
                snowflake.style.left = Math.random() * 100 + '%';
                snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
                snowflake.style.animationDelay = Math.random() * 5 + 's';
                snowflake.style.fontSize = (Math.random() * 1 + 1) + 'rem';
                hero.appendChild(snowflake);
            }
        }
        createSnowflakes();

        // Data
        const launches = [
            {
                title: "Christmas Special Cake",
                description: "Delightful red velvet cake with rich cream cheese frosting, perfect for your holiday celebrations!",
                image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800"
            },
            {
                title: "Frozen Berry Delight",
                description: "Fresh seasonal berries on buttery tart crust with smooth vanilla cream. A winter favorite!",
                image: "https://images.unsplash.com/photo-1519915212116-7cfef71f1d3e?w=800"
            },
            {
                title: "Winter Wonderland Cupcakes",
                description: "Moist vanilla cupcakes topped with refreshing peppermint buttercream. Holiday magic in every bite!",
                image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=800"
            }
        ];

        const branches = [
            {
                name: "Bajaj Nagar",
                address: "Shop No. 5, Bajaj Nagar, Nagpur - 440010",
                icon: "🏪",
                mapLink: "https://maps.google.com"
            },
            {
                name: "MIHAN",
                address: "Plot No. 12, MIHAN, Nagpur",
                icon: "🏬",
                mapLink: "https://maps.google.com"
            },
            {
                name: "Wardha Nagar",
                address: "Near Main Square, Wardha Nagar, Nagpur",
                icon: "🏢",
                mapLink: "https://maps.google.com"
            }
        ];

        const founders = [
            {
                name: "Arya",
                role: "Co-Founder & Head Baker",
                bio: "With 15 years of baking experience, Arya brings passion and perfection to every creation. Known for award-winning signature cakes that delight customers.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
            },
            {
                name: "Rucha",
                role: "Co-Founder & Creative Director",
                bio: "Rucha's artistic vision transforms simple ingredients into edible masterpieces. Specializes in custom designs and innovative flavor combinations.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
            }
        ];

        const categories = [
            {
                name: "Cakes",
                description: "Custom cakes for every celebration",
                image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800"
            },
            {
                name: "Breads",
                description: "Freshly baked artisan breads",
                image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800"
            },
            {
                name: "Desserts",
                description: "Irresistible sweet treats",
                image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800"
            }
        ];

        const favorites = [
            {
                title: "Chocolate Dream Cake",
                description: "Rich chocolate layers with ganache",
                image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800"
            },
            {
                title: "Butter Croissants",
                description: "Buttery, flaky, fresh daily",
                image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800"
            },
            {
                title: "Signature Cookies",
                description: "Baked fresh every morning",
                image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800"
            },
            {
                title: "Gourmet Cupcakes",
                description: "Variety of delicious flavors",
                image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=800"
            }
        ];

        // Render Functions
        const launchesContainer = document.getElementById('launches-container');
        launches.forEach(launch => {
            launchesContainer.innerHTML += `
                <div class="launch-card">
                    <span class="new-badge">NEW</span>
                    <img src="${launch.image}" alt="${launch.title}">
                    <div class="launch-card-content">
                        <h3>${launch.title}</h3>
                        <p>${launch.description}</p>
                    </div>
                </div>
            `;
        });

        const branchesContainer = document.getElementById('branches-container');
        branches.forEach(branch => {
            branchesContainer.innerHTML += `
                <div class="branch-card">
                    <div class="branch-icon">${branch.icon}</div>
                    <h3>${branch.name}</h3>
                    <p>${branch.address}</p>
                    <a href="${branch.mapLink}" target="_blank" class="branch-link">Get Directions</a>
                </div>
            `;
        });

        const foundersContainer = document.getElementById('founders-container');
        founders.forEach(founder => {
            foundersContainer.innerHTML += `
                <div class="founder-card">
                    <img src="${founder.image}" alt="${founder.name}" class="founder-img">
                    <h3>${founder.name}</h3>
                    <p class="role">${founder.role}</p>
                    <p>${founder.bio}</p>
                </div>
            `;
        });

        const categoriesContainer = document.getElementById('categories-container');
        categories.forEach(category => {
            categoriesContainer.innerHTML += `
                <div class="category-card">
                    <img src="${category.image}" alt="${category.name}">
                    <div class="category-overlay">
                        <h3>${category.name}</h3>
                        <p>${category.description}</p>
                    </div>
                </div>
            `;
        });

        const favoritesContainer = document.getElementById('favorites-container');
        favorites.forEach(fav => {
            favoritesContainer.innerHTML += `
                <div class="favorite-card">
                    <img src="${fav.image}" alt="${fav.title}">
                    <div class="favorite-card-content">
                        <h3>${fav.title}</h3>
                        <p>${fav.description}</p>
                        <button class="order-btn">Order Now 🎄</button>
                    </div>
                </div>
            `;
        });

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });