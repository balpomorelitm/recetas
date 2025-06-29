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
      const active = button.classList.toggle('active');
      [...categoryButtonsDiv.children].forEach(btn => {
        if (btn !== button) btn.classList.remove('active');
      });
      if (active) {
        const filtered = recipes.filter(r => r.category === cat);
        currentRecipes = filtered;
        loadRecipes(filtered);
      } else {
        currentRecipes = recipes;
        loadRecipes(recipes);
      }
    });
    categoryButtonsDiv.appendChild(button);
  });
}

function setupTags() {
  const tags = [...new Set(recipes.flatMap(r => r.tags))].sort((a, b) => a.localeCompare(b));
  tags.forEach(tag => {
    const span = document.createElement('span');
    span.textContent = tag;
    tagSidebar.appendChild(span);
  });
}

searchBox.addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase();
  const filtered = currentRecipes.filter(r => {
    return (
      r.title.toLowerCase().includes(term) ||
      r.tags.join(' ').toLowerCase().includes(term) ||
      r.ingredients.join(' ').toLowerCase().includes(term)
    );
  });
  loadRecipes(filtered);
});

// Initial load
setupCategories();
loadRecipes(recipes);
setupTags();
