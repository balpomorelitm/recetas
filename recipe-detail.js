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
  document.getElementById('recipe-title').textContent = recipe.title;
  document.getElementById('recipe-time').textContent = recipe.prepTime;
  document.getElementById('recipe-servings').textContent = recipe.servings;
  document.getElementById('recipe-difficulty').textContent = recipe.difficulty;

  const img = document.getElementById('recipe-image');
  img.src = recipe.image;
  img.alt = `Foto de ${recipe.title}`;
  img.addEventListener('error', () => img.remove());

  const ingredientsList = document.getElementById('recipe-ingredients');
  ingredientsList.innerHTML = recipe.ingredients.map(i => {
    const emoji = getIngredientEmoji(i);
    return `<li>${emoji ? `${i} ${emoji}` : i}</li>`;
  }).join('');

  const instructionsList = document.getElementById('recipe-instructions');
  instructionsList.innerHTML = recipe.instructions.map(i => `<li>${i}</li>`).join('');
}
