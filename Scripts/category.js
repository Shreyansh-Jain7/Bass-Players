
let av=localStorage.getItem("loggedin");
console.log(av);

if(av!=null){
    document.querySelector("#avt").innerHTML=null;
    console.log(av);
    let logo=document.createElement("h1");
    logo.innerText=av;
    logo.style.fontSize="40px"
    logo.style.marginTop="15px";
    logo.style.marginLeft="15px"
    logo.style.color="white";
    document.querySelector("#avt").append(logo);
    document.querySelector("#avt").style.width="50px";
    document.querySelector("#avt").style.height="50px";
    document.querySelector("#avt").style.padding="auto";
    document.querySelector("#avt").style.backgroundColor="black";
    document.querySelector("#avt").style.borderRadius="50%";
}
let fetchedData=[];

document.querySelectorAll('.prices').forEach(x => {
    x.addEventListener('click', () => {
        let checkbox=x.value;
        let filtered = fetchedData.filter((element) =>{
            let cost="";
            for(let z=1;z<element.price.length;z++){
                cost+=element.price[z];
            }
            if(Number(cost)<=checkbox && Number(cost)>checkbox-100){
                return true;
            }else{
                return false;
            }
        })
        displayProducts(filtered);
    });
});

document.querySelectorAll('.brand').forEach(x => {
    x.addEventListener('click', () => {
        let checkbox=x.value;
        let filtered = fetchedData.filter((element) =>{
            if(element.brand===checkbox){
                return true;
            }else{
                return false;
            }
        })
        displayProducts(filtered);
    });
});



document.querySelectorAll('.type').forEach(x => {
    x.addEventListener('click', () => {
        let checkbox=x.value;
        let filtered = fetchedData.filter((element) =>{
            if(element.type===checkbox){
                return true;
            }else{
                return false;
            }
        })
        displayProducts(filtered);
    });
});

// document.querySelectorAll('.size').forEach(x => {
//     x.addEventListener('click', () => {
//         let checkbox=x.value;
//         let filtered = fetchedData.filter((element) =>{
//             if(element.size===checkbox){
//                 return true;
//             }else{
//                 return false;
//             }
//         })
//         displayProducts(filtered);
//     });
// });

document.querySelector("#resetsort").addEventListener("click",()=>{
    displayProducts(fetchedData);
})

function sortPrice(){
    let sortedProducts = fetchedData.sort(
        (p1, p2) => {
            let cost1="";
            for(let z=1;z<p1.price.length;z++){
                cost1+=p1.price[z];
            }
            let cost2="";
            for(let y=1;y<p2.price.length;y++){
                cost2+=p2.price[y];
            }
            if(Number(cost1)>Number(cost2)){
                return 1;
            }else if(Number(cost1)<Number(cost2)){
                return -1;
            }else{
                return 0;
            }
        });
    displayProducts(sortedProducts);
}
function sortRating(){
    let sortedProducts = fetchedData.sort(
        (p1, p2) => (p1.rating < p2.rating) ? 1 : (p1.rating > p2.rating) ? -1 : 0);
    displayProducts(sortedProducts);
}

// displayProducts(fetchedData);

const baseServerUrl =   "https://dysfunctional-stomach-1310.onrender.com";
let cat=localStorage.getItem("cat");
async function fetchProducts(){
    try{
      let res = await fetch(`${baseServerUrl}/${cat}`,{
              method : 'GET',
              headers : {
                "Content-type": "application/json",
              }
      })
      let data = await res.json()
      fetchedData=data;
      console.log(data);
      displayProducts(data);
  
    }catch(error){
      return error
    }
  
}
fetchProducts()

if(cat=="baitcastreels"){
    document.querySelector("#procat").innerText="Baitcast Reels";
    document.querySelector("#prohead").innerText="Baitcast Reels";
    document.querySelector("#title").innerText="Baitcast Reels";
}else{
    document.querySelector("#procat").innerText="Sonar";
    document.querySelector("#prohead").innerText="Sonar";
    document.querySelector("#title").innerText="Sonar";
}


document.querySelector("#search-btn").addEventListener("click",()=>{
    let q = document.querySelector("#search").value;
    console.log(q);
    let newData = fetchedData.filter((el) =>
        el.name.toLowerCase().includes(q.toLowerCase())
    );
    displayProducts(newData);
})

function displayProducts(data){
    document.querySelector("#product-container").innerHTML=null;
    let count=0;
    data.forEach((element) => {

        let card=document.createElement("div");
        let image=document.createElement("img");
        image.setAttribute("src",element.image);
        let price=document.createElement("h3");
        price.innerText=`${element.price}`
        let name=document.createElement("h3");
        name.innerText=element.name;
        name.style.color="grey";
        // let more= document.createElement("div");
        let rating=document.createElement("h3");
        rating.innerText=`★${element.rating}`;
        rating.style.color="orange";
        // let star=document.createElement("img");
        // star.src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Orange_star.svg/1200px-Orange_star.svg.png";
        // let location=document.createElement("p");
        // location.innerText=element.location;
        // location.style.color="grey";
        let fs=document.createElement("p");
        fs.innerText=element.brand;
        fs.style.color="grey";
        // more.append(star,rating);
        card.append(image,name,price,fs,rating);
        document.querySelector("#product-container").append(card);
        card.addEventListener("mouseover",()=>{
            card.style.borderColor="#24a3b5";
            card.style.boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px";
            setTimeout(()=>{
                card.style.borderColor="";
                card.style.boxShadow="";
            },1000)
        },false)

        card.addEventListener("click",()=>{
            localStorage.setItem("product",JSON.stringify(element));
            window.location.href="product_info.html";
        })
        count++;
    })
    document.querySelector("#total").innerText=count;
}