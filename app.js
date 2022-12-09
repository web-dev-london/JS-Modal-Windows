const openBtn = document.getElementById('open-btn');
const modalContainer = document.getElementById(
  'modal-container',
);
const closeBtn = document.getElementById('close-btn');

// Add Event Listener

openBtn.addEventListener('click', () => {
  modalContainer.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modalContainer.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modalContainer) {
    modalContainer.style.display = 'none';
  }
});
