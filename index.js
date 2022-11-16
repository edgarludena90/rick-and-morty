// very first project LETS WORK!!!!
//step chose an api make sure its

//1st main requirments are fetch, is done
//2nd app has to run on a single HTML Page we have it, its done
//3rd we need to 3 event listeners hover, submit and click
//4th using some type of arrya itiration we have it already it is the foreach
//5th dry code

fetch('http://localhost:3000/characters/')
  .then(res => res.json())
  .then(data => renderCharacters(data))

function renderCharacters(characters) {
  characters.forEach(data => {
    // target id of character-bar
    const character = document.querySelector('#character-bar')

    // create tags
    const id = document.createElement('p')
    const name = document.createElement('p')
    const status = document.createElement('p')
    const characterImage = document.createElement('img')
    const likes = document.createElement('p')
    const comment = document.createElement('p')

    // target tag
    name.textContent = data.name
    status.textContent = data.status
    characterImage.src = data.image
    likes.textContent = data.likes

    // append each to the page
    character.append(name)
    character.append(status)
    character.append(characterImage)
    character.append(likes)
  })
}

// POST new character
// what we do her eis make another fetch request to the same API that we have above, with this we will add a new character based on what we added
function postCharacter(characterObj) {
  fetch('http://localhost:3000/characters/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: json.stringify(characterObj),
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
// google hpw to grab form and save info to pass into the pots and patch request 


// eventlistener to grab data when clicked
// e.preventDefault()
// grab form data, save data as obj?
// pass obj to POST request

// characterImage.addEventListener('click', () => {
//   const detail = document.querySelector('.detail-image')
//   const species = document.querySelector('.species')
//   const rate = document.querySelector('#rating-display')
//   console.log(renderRick)
// })

