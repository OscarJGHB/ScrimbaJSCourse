let myLeads = []

//HTML ELEMENTS
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const outputEl = document.querySelector("#output-el")
const deleteBtn = document.querySelector("#delete-btn")

//fetch from localStorage

inputBtn.addEventListener("click",function () {
    const inputStr = inputEl.value;
    if (!(inputStr.trim()  === "")) {
        myLeads.push(inputStr);
        localStorage.setItem("leads", JSON.stringify(myLeads));
        inputEl.value = "";
        render(myLeads)
    }
})

deleteBtn.addEventListener("click",function () {
    localStorage.removeItem("leads");
    myLeads = []
    render(myLeads)

})

function render(leads){
    let strOfLeads = ""
    leads.forEach((lead) => {
        strOfLeads +=
    `<li>
        <a href="${lead}" target = "_blank">
            ${lead}
        </a>
    </li>`
    })
    outputEl.innerHTML = strOfLeads
}

function startApp(){
    let leadsFromLocal = JSON.parse(localStorage.getItem("leads"))
    if(leadsFromLocal && Array.isArray(leadsFromLocal)) {
        myLeads = leadsFromLocal;
    }
    render(myLeads)
}

startApp()


