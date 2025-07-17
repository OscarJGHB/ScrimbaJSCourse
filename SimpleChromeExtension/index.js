//HTML ELEMENTS
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
inputBtn.addEventListener("click",saveLead)

let myLeads = []

function saveLead(){
    myLeads.push(inputEl.value)
    console.log(myLeads)
}


