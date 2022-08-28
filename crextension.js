// alert('mine')
let myLeads = [] // ['mine.com', 'onGod.com', 'vawulence.com']

const inputEl = document.querySelector('#input-el')
const inputBtn = document.querySelector('#input-btn')
const deleteBtn = document.querySelector('#delete-btn')
const ulEl = document.querySelector('#ul-el')
const tabBtn = document.querySelector('#tab-btn')

const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))
// console.log(leadsFromLocalStorage)
// console.log(typeof leadsFromLocalStorage)

// localStorage.clear()

let truthyFalsy = Boolean(leadsFromLocalStorage)
console.log(truthyFalsy)

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads) // fomerly renderLeads()
}

// console.log(localStorage)

// const tabs = [
//     {url: 'https://www.linkedin.com/in/akorede-mohammed-93b4651a4/'}
// ] I used this to test line 31

tabBtn.addEventListener('click', function () {
    // console.log(typeof tabs[0].url)
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem('myLeads', JSON.stringify(myLeads))
        render(myLeads) 
    })
    // The function above was down here before!
    // myLeads.push(tabs[0].url)
    // localStorage.setItem('myLeads', JSON.stringify(myLeads))
    // render(myLeads)
})

inputBtn.addEventListener('click', function () {
    myLeads.push(inputEl.value)
    inputEl.value = ''
    console.log(myLeads)
    // myLeads = JSON.stringify(myLeads)
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    render(myLeads)

    // console.log(localStorage.getItem('myLeads'))
    // console.log(typeof localStorage.getItem('myLeads'))
})

// deleteBtn.addEventListener('click', function () {
//     console.log('Yeah! I am making progress in my front-end web development journey')
// })


deleteBtn.addEventListener('dblclick', function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)
    // ulEl.textContent = '' I can also use this to clear the DOM instead of line 57!
    // console.log(localStorage)
    // console.log('Yeah! I got signed in ALX Software Engineering program!')
})


// console.log(myLeads)

function render(leads) {
    let listItems = ''

    for (i = 0; i < leads.length; i++) {
        // listItems += '<li><a href="' + myLeads[i] + '" target="_blank">' + myLeads[i] + '</a></li>'
        listItems += `
                    <li>
                    <a href='${leads[i]}' target='_blank'>${leads[i]}</a>
                    </li>
        `
        // const li = document.createElement('li')
        // li.textContent = myLeads[i]
        // ulEl.append(li)
        // console.log(listItems)
    }

    ulEl.innerHTML = listItems
}





