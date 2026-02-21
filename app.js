// Recipe data - Foundation for all 4 parts
const recipes = [
    {
        id: 1,
        title: "Classic Spaghetti Carbonara",
        time: 25,
        difficulty: "easy",
        description: "A creamy Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
        category: "pasta"
    },
    {
        id: 2,
        title: "Chicken Tikka Masala",
        time: 45,
        difficulty: "medium",
        description: "Tender chicken pieces in a creamy, spiced tomato sauce.",
        category: "curry"
    },
    {
        id: 3,
        title: "Vegetable Stir Fry",
        time: 20,
        difficulty: "easy",
        description: "A quick and healthy mix of vegetables sautéed in soy sauce and garlic.",
        category: "vegetarian"
    },
    {
        id: 4,
        title: "Beef Burger",
        time: 30,
        difficulty: "medium",
        description: "Juicy grilled beef patty served with lettuce, tomato, and cheese in a bun.",
        category: "fastfood"
    },
    {
        id: 5,
        title: "Chocolate Brownies",
        time: 40,
        difficulty: "medium",
        description: "Rich and fudgy chocolate brownies with a crackly top.",
        category: "dessert"
    },
    {
        id: 6,
        title: "Caesar Salad",
        time: 15,
        difficulty: "easy",
        description: "Fresh romaine lettuce tossed with Caesar dressing, croutons, and parmesan.",
        category: "salad"
    },
    {
        id: 7,
        title: "Grilled Salmon",
        time: 35,
        difficulty: "medium",
        description: "Perfectly grilled salmon fillet with lemon butter sauce.",
        category: "seafood"
    },
    {
        id: 8,
        title: "Paneer Butter Masala",
        time: 40,
        difficulty: "medium",
        description: "Soft paneer cubes cooked in a rich and creamy tomato-based gravy.",
        category: "curry"
    },
    {
    id: 9,
    title: "Homemade Croissants",
    time: 180,
    difficulty: "hard",
    description: "Buttery, flaky French pastries that require patience but deliver amazing results.",
    category: "baking"
    },
    // TODO: Add 6 more recipe objects following the same structure
];

const recipeContainer = document.querySelector('#recipe-container');
const createRecipeCard = (recipe) => {
    return `
        <div class="recipe-card" data-id="${recipe.id}">
            <h3>${recipe.title}</h3>
            <div class="recipe-meta">
                <span>⏱️ ${recipe.time} min</span>
                <span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
            </div>
            <p>${recipe.description}</p>
        </div>
    `;
};

// Function to render recipes to the DOM
const renderRecipes = (recipesToRender) => {
    const recipeCardsHTML = recipesToRender
        .map(createRecipeCard)
        .join('');
    
    recipeContainer.innerHTML = recipeCardsHTML;
};

// Initialize: Render all recipes when page loads
renderRecipes(recipes);