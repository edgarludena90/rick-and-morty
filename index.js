const form = document.querySelector('#new-character')
const charBar = document.querySelector('#character-bar')
const charImg = document.querySelector('.detail-image')
const charName = document.querySelector('.name')
const status1 = document.querySelector('.status')
const charRating = document.querySelector('#rating-display')
const charComment = document.querySelector('#comment-display')
const ricksWorld = document.querySelector("#ricks-world")

fetch('http://localhost:3000/characters')
  .then(resp => resp.json())
  .then(data => renderCharacter(data))

const renderCharacter = characters => {
  characters.forEach(character => {
    const img = document.createElement('img')
    img.src = character.image
    
    charBar.append(img)

    img.addEventListener('click', () => {
      charImg.src = character.image
      charName.textContent = character.name
      status1.textContent = character.status
      charRating.textContent = character.rating
      charComment.textContent = character.comment
    })
  })
}

const addCharacter = () => {
  form.addEventListener('submit', e => {
    e.preventDefault()
    const character = {
      name: form['name'].value,
      image: form['image'].value,
      rating: form['rating'].value,
      comment: form['new-comment'].value,
    }
    fetch('http://localhost:3000/characters', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(character),
    })

    const img = document.createElement('img')
    img.src = character.image
    charBar.append(img)

    img.addEventListener('click', () => {
      charImg.src = character.image
      charName.textContent = character.name
      status1.textContent = character.status
      charRating.textContent = character.rating
      charComment.textContent = character.comment
    })
  })
}

const allInputs = document.querySelectorAll('.hover')
allInputs.forEach(input => {
  input.addEventListener('mouseover', () => {
    input.style.color = 'white'
  })
  input.addEventListener('mouseout', () => {
    input.style.color = ''
  })
})


addCharacter()
