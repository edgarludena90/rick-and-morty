// very first project LETS WORK!!!!
//step chose an api make sure its
// we have two event listeners left hoover and click

fetch('http://localhost:3000/characters/')
  .then(res => res.json())
  .then(data => renderCharacters(data))

// add click event

const form = document.querySelector('#new-character')
const imageUrl = document.querySelector('#new-image')
const newName = document.querySelector('#new-name')
const newComment = document.querySelector('#new-comment')
// Added submit listner to add characters
function handleSubmit(e) {
  e.preventDefault()
  const newChar = {
    name: form['name'].value,
    image: form['image'].value,
    comment: form['new-comment'].value,
    status: form['new-status'].value,
    likes: parseInt(form['new-likes'].value),
  }
  renderCharacter(newChar)
  postCharacter(newChar)
}
form.addEventListener('submit', handleSubmit)

function postCharacter(characterObj) {
  fetch('http://localhost:3000/characters/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(characterObj),
  })
    .then(res => res.json())
    .then(character => console.log(character))
}

// UPDATE character detail
function updateCharacter(characterObj) {
  fetch('http://localhost:3000/characters/', {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
    },
    body: json.stringify(characterObj),
  })
    .then(res => res.json())
    .then(character => console.log(character))
}
const charHtml = document.querySelector('#character-bar')

function renderCharacter(character) {
  // target id of character-bar

  // create tags
  const id = document.createElement('p')
  const name = document.createElement('p')
  const status = document.createElement('p')
  const characterImage = document.createElement('img')
  const likes = document.createElement('p')
  const comment = document.createElement('p')

  //   // target tag
  name.textContent = character.name
  status.textContent = character.status
  characterImage.src = character.image
  likes.textContent = character.likes

  //  append each to the page
  charHtml.append(characterImage)
}

function renderCharacters(characters) {
  characters.forEach(character => {
    renderCharacter(character)
    //const ricksWorld = document.querySelector('#Ricks-world')

    // const detailImg = document.querySelector('.detail-image')
    // const name = document.querySelector('.name')
    // const status = document.querySelector('status')
    // const likes = document.querySelector('likes')

    ricksWorld.addEventListener('click', () => {
      const ricksWorld = document.querySelector('#Ricks-world')

      const detailImg = document.querySelector('.detail-image')
      const name = document.querySelector('.name')
      const status = document.querySelector('status')
      const likes = document.querySelector('likes')

      detailImg.src = character.image
      name.textContent = character.name
      status.textContent = character.status
      likes.textContent = character.likes
    })
    
  })
}



