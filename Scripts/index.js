document.querySelector("#bait").addEventListener("click",()=>{
    localStorage.setItem("cat","baitcastreels");
    window.location.href="./category.html";
})


document.querySelector("#sonar").addEventListener("click",()=>{
    localStorage.setItem("cat","sonar");
    window.location.href="./category.html";
})