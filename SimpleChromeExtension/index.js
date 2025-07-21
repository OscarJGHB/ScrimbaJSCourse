const myLeads = []

//HTML ELEMENTS
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const outputEl = document.querySelector("#output-el")

inputBtn.addEventListener("click",function () {
    const inputStr = inputEl.value;
    if (!(inputStr.trim()  === "")) {
        myLeads.push(inputStr);
        inputEl.value = "";
        render()
    }
})

function render(){
    let strOfLeads = ""
    myLeads.forEach((lead) => {
        strOfLeads +=
    `<li>
        <a href="${lead}" target = "_blank">
            ${lead}
        </a>
    </li>`
    })
    outputEl.innerHTML = strOfLeads
}


