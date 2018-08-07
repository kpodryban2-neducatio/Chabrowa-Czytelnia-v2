let collapsible = document.querySelectorAll('.mobile-collapsible');

for (let i = 0; i < collapsible.length; i++) {
const el = collapsible[i];
  el.addEventListener('click', function() {
  if (el.classList.contains('open') === true) {
    el.classList.remove('open');
  } else {
    el.classList.add('open');
  }}
)};