//

let obj = {
    id:1,
    image:{firstimg:"https://assets.basspro.com/image/upload/b_rgb:FFFFFF,c_limit,dpr_1.0,f_auto,h_1289,q_auto,w_2900/c_limit,h_1289,w_2900/v1/ProductImages/200/master1_150122075110064_main?pgw=1",
secondimg:"https://assets.basspro.com/image/upload/b_rgb:FFFFFF,c_limit,dpr_1.0,f_auto,h_755,q_auto,w_1700/c_limit,h_755,w_1700/v1/ProductImages/200/master1_150122075110064_alt1?pgw=1"},
price: 699,
title: "Garmin ECHOMAP UHD 93sv Fish Finder/Chartplotter Combo with GT54 Transducer",
brand: "Garmin",
details: "Find more fish with the Garmin® ECHOMAP™ UHD 93sv Fish Finder/Chartplotter Combo with GT54 Transducer, its bright, sunlight-readable 9 touch screen with keyed assist. The GT54 transducer gives you Ultra High-Definition ClearVü and SideVü scanning sonars for crystal-clear images of what's around and below your boat, as well as Garmin high wide CHIRP traditional sonar for remarkable target separation, all in the same transducer. Preloaded LakeVü g3 inland maps with integrated Navionics® data cover more than 17,000 lakes with up to 1' contours. The Garmin ECHOMAP UHD 93sv Fish Finder/Chartplotter Combo features a quick-release bail mount, making it easy to remove and take with you. NMEA 2000® and NMEA 0183 network support provides engine data, sensor connection, autopilot integration, and more. This ECHOMAP fish finder even brings compatibility with select trolling motors for full control of the motor from the screen plus the ability to route to waypoints, follow tracks, and more.",
color: "Black",
size: 9,
webID: "234kd2n320dx",
ratings: 5.3,
reviews: 324,
saving: "$200"
}

localStorage.setItem("Data", JSON.stringify(obj))


let dummyData = JSON.parse(localStorage.getItem("Data"))


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



title.innerText = dummyData.title



rating.innerText = `${dummyData.ratings} (${dummyData.reviews})` 

let imageTag = document.createElement("img")
imageTag.setAttribute("src",dummyData.image.firstimg)
imageTag.className = "imageTag"
mainImg.append(imageTag)


price.innerText = `Price:- $${dummyData.price} (save ${dummyData.saving})`

brand.innerText = dummyData.brand

details.innerText = dummyData.details

let upperImg = document.createElement("img")
upperImg.setAttribute("src",dummyData.image.firstimg)
upperImg.className = "sideImg"
smallImg1.append(upperImg)

let lowerImg = document.createElement("img")
lowerImg.setAttribute("src",dummyData.image.secondimg)
lowerImg.className = "sideImg"
smallImg2.append(lowerImg)

smallImg2.addEventListener("click",()=>{
    imageTag.setAttribute("src",dummyData.image.secondimg)
    mainImg.append(imageTag)
    
})


smallImg1.addEventListener("click",()=>{
    imageTag.setAttribute("src",dummyData.image.firstimg)
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