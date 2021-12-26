function change() {
let url = "https://gist.githubusercontent.com/chrisjpatty/5ba7af7bfdf58e97667b9fcea19ea5a8/raw/ff3c4f7cc3151ab71a1a6d9cf898330fe7a6c28f/shakespeare.json"
fetch(url)
  .then(response => response.json())
  .then(data => {
      let randInd = Math.floor(Math.random()*10);
      document.getElementById('api.saying').innerHTML =  `"${data[randInd]}"`
  })
}
    
