// very first project LETS WORK!!!!
//step chose an api make sure its
fetch('http://localhost:3000/characters/')
  .then(res => res.json())
  .then(data => renderRick(data))

function renderRick() {}
