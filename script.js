import recipes from './recipes.js';

const recipeContainer = document.getElementById('recipe-container');
const searchBox = document.getElementById('search-box');
const categoryButtonsDiv = document.getElementById('category-buttons');
const sortSelect = document.getElementById("sort-select");
const tagSidebar = document.getElementById('tag-sidebar');

let activeCategory = null;
let activeTag = null;
let sortOption = "az";
let currentRecipes = recipes;

function parseTime(str) {
  const hrs = /([0-9]+)\s*hr/.exec(str);
  const mins = /([0-9]+)\s*min/.exec(str);
  return (hrs ? parseInt(hrs[1]) * 60 : 0) + (mins ? parseInt(mins[1]) : 0);
}

function sortCurrentRecipes() {
  if (sortOption === 'time') {
    currentRecipes.sort((a, b) => parseTime(a.prepTime) - parseTime(b.prepTime));
  } else {
    currentRecipes.sort((a, b) => a.title.localeCompare(b.title));
  }
}

function getIngredientEmoji(ingredient) {
  const lower = ingredient.toLowerCase();
  const map = {
    'huevo': '🥚',
    'huevos': '🥚',
    'pollo': '🍗',
    'conejo': '🍖',
    'jamón': '🥓',
    'jamon': '🥓',
    'arroz': '🍚',
    'tomate': '🍅',
    'cebolla': '🧅',
    'ajo': '🧄',
    'aceituna': '🫒',
    'pimiento': '🫑',
    'zanahoria': '🥕',
    'patata': '🥔',
    'patatas': '🥔',
    'espinacas': '🥬',
    'chocolate': '🍫',
    'limón': '🍋',
    'lima': '🍋',
    'naranja': '🍊',
    'manzana': '🍎',
    'pera': '🍐',
    'fresa': '🍓',
    'fresas': '🍓',
    'plátano': '🍌',
    'platano': '🍌',
    'piña': '🍍',
    'mantequilla': '🧈',
    'leche': '🥛',
    'queso': '🧀',
    'yogur': '🍦',
    'almendra': '🥜',
    'almendras': '🥜',
    'nueces': '🥜',
    'garbanzos': '🫘',
    'champiñones': '🍄',
    'setas': '🍄',
    'miel': '🍯',
    'vino': '🍾'
  };
  for (const key in map) {
    if (lower.includes(key)) {
      return map[key];
    }
  }
  return '';
}

function createCard(recipe) {
  const card = document.createElement('div');
  card.className = 'recipe-card';
  const tags = recipe.tags
    .map(tag => `<span>${tag}</span>`)
    .join('');
  card.innerHTML = `
    <img src="${recipe.image}" alt="${recipe.title}">
    <div class="card-body">
      <h2>${recipe.title}</h2>
      <p class="card-category">${recipe.category}</p>
      <div class="card-meta">
        <span>⏱ ${recipe.prepTime}</span>
        <span>🍽 ${recipe.servings}</span>
        <span>⭐ ${recipe.difficulty}</span>
      </div>
      <div class="card-tags">${tags}</div>
    </div>
  `;
  card.addEventListener('click', () => {
    window.location.href = `recipe.html?id=${recipe.slug}`;
  });
  return card;
}

export function loadRecipes(recipeArray) {
  recipeContainer.innerHTML = '';
  recipeArray.forEach(r => {
    const card = createCard(r);
    recipeContainer.appendChild(card);
  });
}


function setupCategories() {
  const categories = [...new Set(recipes.map(r => r.category))];
  categories.forEach(cat => {
    const button = document.createElement('button');
    button.textContent = cat;
    button.addEventListener('click', () => {
      if (activeCategory === cat) {
        activeCategory = null;
        button.classList.remove('active');
      } else {
        activeCategory = cat;
        [...categoryButtonsDiv.children].forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
      }
      filterRecipes();
    });
    categoryButtonsDiv.appendChild(button);
  });
}

function setupTags() {
  const tags = [...new Set(recipes.flatMap(r => r.tags))].sort((a, b) => a.localeCompare(b));
  tags.forEach(tag => {
    const button = document.createElement('button');
    button.textContent = tag;
    button.addEventListener('click', () => {
      if (activeTag === tag) {
        activeTag = null;
        button.classList.remove('active');
      } else {
        activeTag = tag;
        [...tagSidebar.children].forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
      }
      filterRecipes();
    });
    tagSidebar.appendChild(button);
  });
}

function filterRecipes() {
  let filtered = recipes;
  if (activeCategory) {
    filtered = filtered.filter(r => r.category === activeCategory);
  }
  if (activeTag) {
    filtered = filtered.filter(r => r.tags.includes(activeTag));
  }
  const term = searchBox.value.toLowerCase();
  if (term) {
    filtered = filtered.filter(r => (
      r.title.toLowerCase().includes(term) ||
      r.tags.join(' ').toLowerCase().includes(term) ||
      r.ingredients.join(' ').toLowerCase().includes(term)
    ));
  }
  currentRecipes = filtered;
  sortCurrentRecipes();
  loadRecipes(currentRecipes);
}

searchBox.addEventListener('input', () => {
  filterRecipes();
});

sortSelect.addEventListener('change', () => {
  sortOption = sortSelect.value;
  sortCurrentRecipes();
  loadRecipes(currentRecipes);
});

// Initial load
setupCategories();
setupTags();
filterRecipes();
