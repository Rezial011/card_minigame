let card1 = null
let card2 = null

const draw = document.querySelector('#draw')

draw.addEventListener('click', (e) => {
    e.preventDefault()

    card1 = Math.floor(Math.random() * 2)

    if (card1 === 1) {
        card2 = 0
    } else if (card1 === 0) {
        card2 = 1
    }
    console.log(card1)
    console.log(card2)

    hide()

    cardbutton1.removeAttribute('disabled')
    cardbutton2.removeAttribute('disabled')
})

const cardbutton1 = document.querySelector('#kartu1')
const cardbutton2 = document.querySelector('#kartu2')
let pilih = null

cardbutton1.addEventListener('click', (e) => {
    e.preventDefault()
    pilih = 'a'

    guess()
    drawing()
    reset()
    disable()
})

cardbutton2.addEventListener('click', (e) => {
    e.preventDefault()
    pilih = 'b'

    guess()
    drawing()
    reset()
    disable()
})

function disable() {
    cardbutton1.setAttribute('disabled', 'true')
    cardbutton2.setAttribute('disabled', 'true')
}

const komentar = document.querySelector('p')

function guess() {
    const lose = ['you lose!', 'so close!', 'not that', 'try again', 'nooooooo']
    const win = ['you win!', 'great!', "excellent!", 'correct!', "let's goooo"]

    switch (pilih) {
        case 'a':
            if (card1 === 1) {
                komentar.innerText = `${win[Math.floor(Math.random() * 5)]}`
            } else if (card1 === 0) {
                komentar.innerText = `${lose[Math.floor(Math.random() * 5)]}`
            } else {
                komentar.innerText = 'draw first'
            }
        break;
            
        case 'b':
            if (card2 === 1) {
                komentar.innerText = `${win[Math.floor(Math.random() * 5)]}`
            } else if (card2 === 0) {
                komentar.innerText = `${lose[Math.floor(Math.random() * 5)]}`
            } else {
                komentar.innerText = 'draw first'
            }
        break;
    }
}

const backcard = document.querySelectorAll('img')

function hide() {
    for (let i = 0; i <= 1; i++) {
        backcard[i].src = 'image/pngwing.com.png'
    }
}

const kartu1 = document.querySelector('#kartu1img')
const kartu2 = document.querySelector('#kartu2img')

function drawing() {
    if (card1 === 1) {
        kartu1.src = 'image/pngwing.com (2).png'
        kartu2.src = 'image/pngwing.com (1).png'
    } else {
        kartu1.src = 'image/pngwing.com (1).png'
        kartu2.src = 'image/pngwing.com (2).png'
    }
}

function reset() {
    pilih = null
}