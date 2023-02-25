//


// localStorage.setItem("product", JSON.stringify(obj))


let dummyData = JSON.parse(localStorage.getItem("product"))


let mainImg = document.getElementById("img_right")
let brand = document.getElementById("brandName")
let details = document.getElementById("details")
let title = document.getElementById("title")
let rating = document.getElementById("rating_text")
let reviews = document.getElementById("reviews")
let price = document.getElementById("price")
let smallImg1 = document.getElementById("upper")
let smallImg2 = document.getElementById("lower")
let price2 = document.querySelector("#rightsection>div>h2")



title.innerText = dummyData.name



rating.innerText = `${dummyData.rating} (283)` 

let imageTag = document.createElement("img")
imageTag.setAttribute("src",dummyData.image)
imageTag.className = "imageTag"
mainImg.append(imageTag)


price.innerText = `Price:- ${dummyData.price} (save $230)`

brand.innerText = dummyData.brand

details.innerText = dummyData.description

let upperImg = document.createElement("img")
upperImg.setAttribute("src",dummyData.image)
upperImg.className = "sideImg"
smallImg1.append(upperImg)

let lowerImg = document.createElement("img")
lowerImg.setAttribute("src",dummyData.image)
lowerImg.className = "sideImg"
smallImg2.append(lowerImg)

smallImg2.addEventListener("click",()=>{
    imageTag.setAttribute("src",dummyData.image)
    mainImg.append(imageTag)
    
})


smallImg1.addEventListener("click",()=>{
    imageTag.setAttribute("src",dummyData.image)
    mainImg.append(imageTag)
   
})


let count=1;
price2.innerText = `Price:- ${dummyData.price}`

let decrease = document.getElementById("negative")
let increase = document.getElementById("positive")
let quantity = document.getElementById("quantity")

decrease.addEventListener("click",()=>{
    let currentQuantity = parseInt(quantity.innerText)
    if(currentQuantity>1){
        currentQuantity--
        quantity.innerText = currentQuantity
        price2.innerText = `Price:- ${currentQuantity* dummyData.price}`
    }
})


increase.addEventListener("click",()=>{
    let currentQuantity = parseInt(quantity.innerText)
    if(currentQuantity<=5){
        currentQuantity++
        quantity.innerText = currentQuantity
        price2.innerText = `Price:- ${currentQuantity* dummyData.price}`
    }
})




// ***************************ADD TO CART BUTTON**********************************************


let cartData = JSON.parse(localStorage.getItem("cartData"))||[]

let cartBtn = document.getElementById("addingCart")

cartBtn.addEventListener("click",()=>{
    let isAdded = cartData.find((el) => el.id == dummyData.id);
    if(isAdded){
        alert("Oops the product is already exist in the cart")
    }
    else{
        alert("Succesfully added to the cart")
        cartData.push(dummyData)
        localStorage.setItem("cartData",JSON.stringify(cartData))
    }
})