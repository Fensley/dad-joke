const quote = document.getElementById("joke");

const btn = document.getElementById("button");

// console.log(quote , button);

const random = " I always wanted to look into why I procrastinate, but I keep putting it off." ;


function getUsers() {
  fetch("https://randomuser.me/api/?results=50")
    .then((results) => {
      return results.json();
    })
    .then((data) => {
      console.log(data);
      // Access your data here
    });
}

getUsers();


btn.addEventListener("click" ,() =>{
  quote.innerHTML = getUsers()
})
