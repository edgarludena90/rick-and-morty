const form = document.querySelector('#new-character')
const charBar = document.querySelector('#character-bar')
const detailImg = document.querySelector('.detail-image')
const detailName = document.querySelector('.name')
const status1 = document.querySelector('.status')
const detailRating = document.querySelector('#rating-display')
const detailComment = document.querySelector('#comment-display')

const editForm = document.querySelector('#new-character')
const editRating = document.querySelector('#new-rating')
const editComment = document.querySelector('new-comment')

let allCharacter = []

fetch('http://localhost:3000/characters')
  .then(resp => resp.json())
  .then(data => renderCharacter(data))

const renderCharacter = characters => {
  allCharacter = characters

  if (characters.length < 1) {
    charBar.innerHTML = ''

    detailImg.src = ''
    detailName.textContent = ''
    status1.textContent = ''
    detailRating.textContent = ''
    detailComment.textContent = ''
    return
  }

  detailImg.src = characters[0].image
  detailName.textContent = characters[0].name
  status1.textContent = characters[0].status
  detailRating.textContent = characters[0].rating
  detailComment.textContent = characters[0].comment

  characters.forEach(character => {
    const img = document.createElement('img')
    img.src = character.image

    charBar.append(img)

    img.addEventListener('click', () => {
      detailImg.src = character.image
      detailName.textContent = character.name
      status1.textContent = character.status
      detailRating.textContent = character.rating
      detailComment.textContent = character.comment
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

    const detailImg = document.querySelector('.detail-image')
    const detailName = document.querySelector('.name')
    const detailRestaurant = document.querySelector('.restaurant')
    const detailRating = document.querySelector('#rating-display')
    const detailComment = document.querySelector('#comment-display')

    img.src = character.image

    charBar.append(img)

    img.addEventListener('click', () => {
      detailImg.src = character.image
      detailName.textContent = character.name
      status1.textContent = character.status
      detailRating.textContent = character.rating
      detailComment.textContent = character.comment
    })
  })
}

const updateCharacter = () => {
  editForm.addEventListener('submit', e => {
    e.preventDefault()
    detailRating.textContent = e.target[0].value
    detailComment.textContent = e.target[1].value
  })
}

const allInputs = document.querySelectorAll('.hover')
allInputs.forEach(input => {
  input.addEventListener('mouseover', () => {
    input.style.color = 'blue'
  })
  input.addEventListener('mouseout', () => {
    input.style.color = ''
  })
})

console.log(allInputs)

addCharacter()
updateCharacter()
