
const baseServerUrl =   "https://dysfunctional-stomach-1310.onrender.com"

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

let fetchButton1 = document.querySelector(".fetch1")

fetchButton1.addEventListener("click",function(e){
  e.preventDefault()
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
})


let fetchButton2 = document.querySelector(".fetch2")

fetchButton2.addEventListener("click",function(e){
  e.preventDefault()
  let container = document.querySelector("#products")

async function fetchProducts(){
  try{
    let res = await fetch(`${baseServerUrl}/sonar`,{
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
})

let selected = document.querySelector("select")
let title = document.querySelector("#name")
let image = document.querySelector("#image")
let brand = document.querySelector("#brand")
let rating = document.querySelector("#rating")
let type = document.querySelector("#type")
let price = document.querySelector("#price")
let description = document.querySelector("#description")
let maxdrag = document.querySelector("#maxdrag")
let model = document.querySelector("#model")
let submit = document.querySelector("#add")

let titleV = title.value
let imageV = image.value
let brandV = brand.value
let ratingV = rating.value
let typeV = type.value
let priceV = price.value
let descriptionV = description.value
let maxdragV = maxdrag.value
let modelV = model.value
console.log(titleV)
console.log(selected.value)

add.addEventListener("click",function(e){

  if(selected.value == "baitcastreels"){

    // if(imageV == "" || titleV == "" || brandV == "" || ratingV == "" || typeV == "" || priceV == "" || descriptionV == "" || maxdragV == "" ){
    //   alert("Fill all the details")
    // }else{
  
    let productObj1 = {
      image : `${imageV}`,
      name: `${titleV}`,
      brand : `${brandV}`,
      rating : `${ratingV}`,
      type : `${typeV}`,
      price : `${priceV}`,
      description : `${descriptionV}`,
      maxdrag : `${maxdragV}`
    }
    async function fetchProducts(){
      try{
        let res = await fetch(`${baseServerUrl}/baitcastreels`,{
                method : 'POST',
                body : JSON.stringify(productObj1),
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
    alert("New Product Added")

  //  }
  }else if(selected.value == "sonar"){

    let productObj2 = {
      image : `${imageV}`,
      name: `${titleV}`,
      brand : `${brandV}`,
      rating : `${ratingV}`,
      type : `${typeV}`,
      price : `${priceV}`,
      description : `${descriptionV}`,
      model : `${modelV}`
    }
  
    async function fetchProducts(){
      try{
        let res = await fetch(`${baseServerUrl}/baitcastreels`,{
                method : 'POST',
                body : JSON.stringify(productObj2),
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
    alert("New Product Added")
  }
})



let logout = document.querySelector("#logout")

logout.addEventListener("click")
