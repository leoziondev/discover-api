const url = 'http://localhost:3000/api'

function getUsers() {
  axios.get(url)
    .then(response => {
      renderApiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

function addUser(newUser) {
  axios.post(url, newUser)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

const newUser = {
  name: "Marilda Alfredo",
  avatar: "https://picsum.photos/200/300",
  city: "Maranhão"
}

addUser(newUser)

getUsers()