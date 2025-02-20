const cursor = document.createElement('div');
document.body.style.cursor = 'none';
cursor.classList.add('cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX - 10 + 'px';
  cursor.style.top = e.clientY - 10 + 'px';
});

const elementos = document.querySelectorAll('.elemento');

elementos.forEach(elemento => {
  elemento.addEventListener('mouseover', () => {
    cursor.style.backgroundColor = 'red';
  });

  elemento.addEventListener('mouseout', () => {
    cursor.style.backgroundColor = 'black';
  });
});