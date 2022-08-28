// alert('mine!')

const imgs = [
    "images/bailey-burton-rf9DBYPIqqA-unsplash.jpg",
    "images/peyton-zino-MnAb5PvyV6g-unsplash.jpg",
    "images/lee-chinyama-xfPpDm1lQ0s-unsplash.jpg"
]

let header = document.querySelector('#head')
// console.log(header)
header.textContent = 'THE BROOKLYN AGENCY'

let imgBtn = document.querySelector('#container')
// imgBtn.textContent = 'mine'

function render() {
    let renderImages = ''

    for (i = 0; i < imgs.length; i++) {
        renderImages += `
            <img class="team-img" src="${imgs[i]}" alt="">
        `
    }

    imgBtn.innerHTML = renderImages
}

render()


