function setDemo(state, btn) {
  document.body.className = 'state-' + state;
  document.querySelectorAll('.ds-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}
