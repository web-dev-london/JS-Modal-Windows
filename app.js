const modal = document.querySelector('#modal');
const openBtn = document.querySelector('.open-button');
const closeBtn = document.querySelector('.close-button');

openBtn.addEventListener('click', () => {
  modal.showModal();
});
closeBtn.addEventListener('click', () => {
  modal.close();
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.close();
  }
});
