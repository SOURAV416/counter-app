//document.getElementById("count-el").innerText = 69
// let count=60
// console.log(count)
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count=0

function increment(){
    count+=1
    countEl.innerText=count
} 

function save(){
    let countStr=" "+count+" - "
    saveEl.textContent+=countStr
    countEl.innerText=0
    count=0
    //console.log(count)
}