
const baseServerUrl =   "http://localhost:3000"

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

let fetchButton = document.querySelector("#fetchButton")



let container = document.querySelector("#products")

async function fetchProducts(){
  try{
    let res = await fetch(`${baseServerUrl}/baitcastreels`,{
            method : 'GET',
            headers : {
              "Content-type": "application/json",
            }
    })
    let data = await res.json()
    console.log(data)
    displayData(data)

  }catch(error){
    return error
  }

}
fetchProducts()


function displayData(data){
  container.innerHTML = null;

  data.forEach(el => {

    let card = document.createElement("div")
    let img = document.createElement('img')
    let id = document.createElement("h3")
    let name = document.createElement("h3")
    let brand = document.createElement("p")
    let type = document.createElement("p")
    let price = document.createElement("p")

    img.setAttribute("src",el.image)
    id.textContent = el.id
    name.textContent = el.name
    brand.textContent = el.brand
    type.textContent = el.type
    price.textContent = el.price

    card.append(img,id,name,brand,type,price)
    container.append(card)
  });
}

