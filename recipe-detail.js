import recipes from './recipes.js';

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

const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const recipe = recipes.find(r => r.slug === id);

if (recipe) {
  document.title = recipe.title;
  document.getElementById('detail-title').textContent = recipe.title;
  const container = document.getElementById('recipe-detail');
  const ingredients = recipe.ingredients.map(i => {
    const emoji = getIngredientEmoji(i);
    return `<li>${emoji ? i + ' ' + emoji : i}</li>`;
  }).join('');
  const instructions = recipe.instructions.map(i => `<li>${i}</li>`).join('');
  container.innerHTML = `
    <img class="recipe-image" src="${recipe.image}" alt="${recipe.title}">
    <div class="detail-meta">
      <span>⏱ ${recipe.prepTime}</span>
      <span>🍽 ${recipe.servings}</span>
      <span>⭐ ${recipe.difficulty}</span>
    </div>
    <h2>Ingredientes</h2>
    <ul>${ingredients}</ul>
    <h2>Instrucciones</h2>
    <ol>${instructions}</ol>
  `;
  const img = container.querySelector('.recipe-image');
  img.addEventListener('error', () => img.remove());
}
