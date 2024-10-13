document.getElementById('hamburger').addEventListener('click', function() {
  document.getElementById('side-panel').style.width = '250px';
});

document.getElementById('closebtn').addEventListener('click', function() {
  document.getElementById('side-panel').style.width = '0';
});
