// Inicializa os ícones do Lucide
lucide.createIcons();

let activeCategory = 'all';

// Filtra por Categoria
function filterCategory(category, element) {
  activeCategory = category;
  
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  element.classList.add('active');

  applyFilters();
}

// Filtra por Busca e Categoria
function filterMaterials() {
  applyFilters();
}

function applyFilters() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const cards = document.querySelectorAll('.card');
  let visibleCount = 0;

  cards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    const description = card.querySelector('p').textContent.toLowerCase();
    const type = card.getAttribute('data-type');

    const matchesCategory = (activeCategory === 'all' || type === activeCategory);
    const matchesSearch = title.includes(query) || description.includes(query);

    if (matchesCategory && matchesSearch) {
      card.style.display = 'flex';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  // Atualiza contador de itens visíveis
  document.getElementById('materialCount').textContent = `${visibleCount} material${visibleCount !== 1 ? 'is' : ''}`;
}
