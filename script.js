import recipes from './recipes.js';

const recipeContainer = document.getElementById('recipe-container');
const searchBox = document.getElementById('search-box');
const categoryButtonsDiv = document.getElementById('category-buttons');
const modal = document.getElementById('recipe-modal');
const modalTitle = document.getElementById('modal-title');
const modalIngredients = document.getElementById('modal-ingredients');
const modalInstructions = document.getElementById('modal-instructions');
const modalClose = document.getElementById('modal-close');

let currentRecipes = recipes;

function createCard(recipe) {
  const card = document.createElement('div');
  card.className = 'recipe-card';
  card.innerHTML = `
    <h3>${recipe.title}</h3>
    <p>${recipe.category}</p>
    <p class="tags">${recipe.tags.join(' ')}</p>
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
    li.textContent = i;
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
