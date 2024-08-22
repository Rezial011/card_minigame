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
})

const cardbutton1 = document.querySelector('#card1')
const cardbutton2 = document.querySelector('#card2')
let pilih = null

cardbutton1.addEventListener('click', (e) => {
    e.preventDefault()
    pilih = 'a'

    guess()
    drawing()
    reset()
})

cardbutton2.addEventListener('click', (e) => {
    e.preventDefault()
    pilih = 'b'

    guess()
    drawing()
    reset()
})

const komentar = document.querySelector('p')

function guess() {
    const lose = ['you lose!', 'so close!', 'not that', 'try again', 'nooooooo']
    const win = ['you win!', 'great!', "that's cool!", 'correct!', "let's goooo"]

    switch (pilih) {
        case 'a':
            if (card1 === 1) {
                komentar.innerText = `${win[Math.floor(Math.random() * 5)]}`
            } else if (card1 === 0) {
                komentar.innerText = `${lose[Math.floor(Math.random() * 5)]}`
            } else {
                console.log('draw first')
            }
        break;
            
        case 'b':
            if (card2 === 1) {
                komentar.innerText = `${win[Math.floor(Math.random() * 5)]}`
            } else if (card2 === 0) {
                komentar.innerText = `${lose[Math.floor(Math.random() * 5)]}`
            } else {
                console.log('draw first')
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

const kartu1 = document.querySelector('#kartu1')
const kartu2 = document.querySelector('#kartu2')

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
    // card1 = null
    // card2 = null
    pilih = null
}