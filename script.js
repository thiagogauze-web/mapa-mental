function filterCategory(category) {
  const cards = document.querySelectorAll('.card');
  const buttons = document.querySelectorAll('.filter-btn');

  // Atualiza classe ativa dos botões
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  // Filtra os cartões visíveis
  cards.forEach(card => {
    if (category === 'all' || card.classList.contains(category)) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}
