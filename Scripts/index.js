document.querySelector("#bait").addEventListener("click",()=>{
    localStorage.setItem("cat","baitcastreels");
    window.location.href="./category.html";
})


document.querySelector("#sonar").addEventListener("click",()=>{
    localStorage.setItem("cat","sonar");
    window.location.href="./category.html";
})

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