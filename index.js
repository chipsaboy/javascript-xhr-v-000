function getRepositories() {
  const req = new XMLHttpRequest()
  req.open("GET", 'https://api.github.com/users/chipsaboy/repos')
  req.send()
}

function showRepositories(event, data) {
  console.log(this.responseText)
}