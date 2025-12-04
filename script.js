// Snowflakes
function createSnowflakes() {
    const snowflakesContainer = document.getElementById('snowflakes');
    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.innerHTML = '❄';
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.animationDuration = Math.random() * 3 + 5 + 's';
        snowflake.style.animationDelay = Math.random() * 5 + 's';
        snowflake.style.opacity = Math.random();
        snowflakesContainer.appendChild(snowflake);
    }
}
createSnowflakes();

// Data
const branches = [
    {
        name: "Bajaj Nagar",
        address: "Shop No. 5, Bajaj Nagar, Nagpur",
        mapLink: "https://maps.google.com",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800"
    },
    {
        name: "MIHAN",
        address: "Plot No. 12, MIHAN, Nagpur",
        mapLink: "https://maps.google.com",
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800"
    },
    {
        name: "Wardha Nagar",
        address: "Near Main Square, Wardha Nagar, Nagpur",
        mapLink: "https://maps.google.com",
        image: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800"
    }
];

const categories = [
    {
        name: "Cakes",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800",
        description: "Custom cakes for every celebration"
    },
    {
        name: "Breads",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800",
        description: "Freshly baked artisan breads"
    },
    {
        name: "Desserts",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800",
        description: "Irresistible sweet treats"
    }
];

const owners = [
    {
        name: "Arya",
        title: "Co-Founder & Head Baker",
        bio: "With 15 years of baking experience, bringing passion and perfection to every creation. Signature cakes have won multiple awards.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
    },
    {
        name: "Rucha",
        title: "Co-Founder & Creative Director",
        bio: "Artistic vision transforms simple ingredients into masterpieces. Specializes in custom designs and innovative flavors.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
    }
];

// Manual products - ADD YOUR PRODUCTS HERE
const products = [
    {
        title: "Christmas Special Cake",
        content: "Delicious red velvet cake with cream cheese frosting",
        price: 599,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800"
    },
    {
        title: "Snowflake Cookies",
        content: "Handcrafted butter cookies with royal icing decoration",
        price: 249,
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800"
    },
    {
        title: "Chocolate Yule Log",
        content: "Traditional Christmas log cake with chocolate ganache",
        price: 799,
        image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800"
    },
    {
        title: "Peppermint Cupcakes",
        content: "Moist vanilla cupcakes with peppermint buttercream",
        price: 299,
        image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=800"
    }
];

// Scroll function
function scrollToNext(sectionId) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
}

// Render branches
const branchesContainer = document.getElementById('branches-container');
branches.forEach(branch => {
    const card = document.createElement('div');
    card.className = 'branch-card';
    card.innerHTML = `
        <img src="${branch.image}" alt="${branch.name}" class="branch-image">
        <div class="branch-content">
            <h3 class="branch-name">${branch.name}</h3>
            <p class="branch-address">${branch.address}</p>
            <a href="${branch.mapLink}" target="_blank" class="branch-link">
                📍 Get Directions
            </a>
        </div>
    `;
    branchesContainer.appendChild(card);
});

// Render categories
const categoriesContainer = document.getElementById('categories-container');
categories.forEach(category => {
    const card = document.createElement('div');
    card.className = 'category-card';
    card.innerHTML = `
        <img src="${category.image}" alt="${category.name}" class="category-image">
        <div class="category-overlay">
            <h3 class="category-name">${category.name}</h3>
            <p class="category-description">${category.description}</p>
        </div>
    `;
    categoriesContainer.appendChild(card);
});

// Render owners
const ownersContainer = document.getElementById('owners-container');
owners.forEach(owner => {
    const card = document.createElement('div');
    card.className = 'owner-card';
    card.innerHTML = `
        <img src="${owner.image}" alt="${owner.name}" class="owner-image">
        <h3 class="owner-name">${owner.name}</h3>
        <p class="owner-title">${owner.title}</p>
        <p class="owner-bio">${owner.bio}</p>
    `;
    ownersContainer.appendChild(card);
});

// Render products
const productsContainer = document.getElementById('products-container');
products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.title}" class="product-image">
        <div class="product-content">
            <h3 class="product-title">${product.title}</h3>
            <p class="product-description">${product.content}</p>
            <!-- <p class="product-price">₹ ${product.price}</p> -->
            <button class="order-button">Order Now 🎄</button>
        </div>
    `;
    productsContainer.appendChild(card);
});

// Form submission
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon. 🎅❄️');
    e.target.reset();
});
