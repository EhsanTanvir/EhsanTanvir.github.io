const buttons = document.querySelectorAll('.menu button');
const sections = document.querySelectorAll('.sections section');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    sections.forEach(sec => sec.classList.remove('active'));

    btn.classList.add('active');
    const target = document.getElementById(btn.dataset.section);
    target.classList.add('active');
  });
});

// Activate first section by default
buttons[0].click();
