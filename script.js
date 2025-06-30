import recipes from './recipes.js';

const recipeContainer = document.getElementById('recipe-container');
const searchBox = document.getElementById('search-box');
const categoryButtonsDiv = document.getElementById('category-buttons');
const tagSidebar = document.getElementById('tag-sidebar');
const modal = document.getElementById('recipe-modal');
const modalTitle = document.getElementById('modal-title');
const modalIngredients = document.getElementById('modal-ingredients');
const modalInstructions = document.getElementById('modal-instructions');
const modalClose = document.getElementById('modal-close');

let activeCategory = null;
let activeTag = null;
let currentRecipes = recipes;

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
    <h2>${recipe.title}</h2>
    <p class="card-category">${recipe.category}</p>
    <div class="card-tags">${tags}</div>
  `;
  card.addEventListener('click', () => displayRecipeDetails(recipe));
  return card;
}

export function loadRecipes(recipeArray) {
  recipeContainer.innerHTML = '';
  recipeArray.forEach(r => {
    const card = createCard(r);
    recipeContainer.appendChild(card);
  });
}

export function displayRecipeDetails(recipe) {
  modalTitle.textContent = recipe.title;
  modalIngredients.innerHTML = '';
  recipe.ingredients.forEach(i => {
    const li = document.createElement('li');
    const emoji = getIngredientEmoji(i);
    li.textContent = emoji ? `${i} ${emoji}` : i;
    modalIngredients.appendChild(li);
  });
  modalInstructions.innerHTML = '';
  recipe.instructions.forEach(step => {
    const li = document.createElement('li');
    li.textContent = step;
    modalInstructions.appendChild(li);
  });
  modal.classList.remove('hidden');
}

modalClose.addEventListener('click', () => {
  modal.classList.add('hidden');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});

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
  loadRecipes(filtered);
}

searchBox.addEventListener('input', () => {
  filterRecipes();
});

// Initial load
setupCategories();
setupTags();
filterRecipes();
