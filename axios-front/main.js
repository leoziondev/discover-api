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

function getUser(id) {
  axios.get(`${url}/${id}`)
    .then(response => {
      userID.textContent = response.data.id
      userName.textContent = response.data.name
      userCity.textContent = response.data.city
      userAvatar.src = response.data.avatar
    })
    .catch(error => console.error(error))
}

function updateUser(id, updatedUser) {
  axios.put(`${url}/${id}`, updatedUser)
    .then(response => console.log(response.data))
    .catch(error => console.error(error))
}

const newUser = {
  name: "Marilda Alfredo",
  avatar: "https://picsum.photos/200/300",
  city: "Maranhão"
}
const updatedUser = {
  name: "Suzan Doe",
  avatar: "https://picsum.photos/200/300",
  city: "Massachussets"
}

addUser(newUser)
updateUser(3, updatedUser)

getUsers()
getUser(3)