// Inicializa os ícones da biblioteca Lucide
lucide.createIcons();

let activeCategory = 'all';

// Filtra os cartões ao clicar nos botões de categoria
function filterCategory(category, element) {
  activeCategory = category;
  
  // Atualiza classe ativa dos botões
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  element.classList.add('active');

  applyFilters();
}

// Filtra os cartões ao digitar na barra de pesquisa
function filterMaterials() {
  applyFilters();
}

// Aplica a combinação de filtros (Categoria + Pesquisa por texto)
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

  // Atualiza dinamicamente o contador de materiais
  document.getElementById('materialCount').textContent = `${visibleCount} material${visibleCount !== 1 ? 'is' : ''}`;
}
