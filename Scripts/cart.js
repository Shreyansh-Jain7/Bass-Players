let carts=JSON.parse(localStorage.getItem("cartData")) || [] ;


let tbodyel = document.querySelector(".cart-container")
display(carts)
function display(data){
    tbodyel.innerHTML=null;
    data.forEach((element,id) => {
        let card=document.createElement("div")
        card.className = "product-card"

        let img=document.createElement("img")
        img.setAttribute("src",element.image)

        let name=document.createElement("h2")
        name.innerText=element.name;

        let price=document.createElement("h3")
        price.innerText=element.price;

        let div = document.createElement("div")
        div.className = "removebuy"

        let button=document.createElement("button")
        button.innerText="Remove"

        // let buyBtn = document.createElement("button")
        // buyBtn.innerText = "Buy Now"

        div.append(button)

        button.addEventListener("click",()=>{
            carts.splice(id,1)
            localStorage.setItem("cartData",JSON.stringify(carts))
            display(carts)
        })
        // let Price=carts.reduce((acc,el) => acc+(Number(el.price)),0);
        // console.log(Math.floor(Price))
        // document.querySelector("#pan").innerText="₹"+Price;

        let Price=0
        Price = carts.reduce((acc, el) => acc + Number(el.price.slice(1)), 0);
        console.log(Math.floor(Price));
        if(carts.length>=1){
            document.querySelector("#pan").innerText = "$" + Price;
        }else{
            document.querySelector("#pan").innerText = "$" + 0;
        }
        
        // buyBtn.addEventListener("click",()=>{
        //     bought.push(element);
        //     localStorage.setItem("buyproduct",JSON.stringify(bought));
        //     window.location.href="./payment.html";
        // })
        console.log(card)
        card.append(img,name,price,div)
        tbodyel.append(card)
    });
}

document.querySelector("#paynow").addEventListener("click",()=>{
    window.location.href="./payment.html";
})
        