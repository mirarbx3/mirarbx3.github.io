let dino = document.querySelector('.dino')
let cactus = document.querySelector('.cuctus')
let game = document.querySelector('.game')
let pScore = document.querySelector('.p-score')
let pRecord = document.querySelector('.p-record')

function jumpFantion() {
    dino.classList.add('jump');
    setTimeout(() => {
        dino.classList.remove('jump');
    }, 600)

}
game.onclick = function () {
    jumpFantion()
}
window.addEventListener('keydown', function (event) {


    if (event.code == 'Space' || event.code == 'ArrowUp') {
        jumpFantion()
    }
})
let t = 0;
let time = 0;
let record = 0;

if (localStorage.getItem('DinoMax') !=null) {
    record = localStorage.getItem('DinoMax')
    pRecord.innerHTML = record;
    
}

function finish() {
    let x = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
    let y = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));

    t++;
    if (t % 30 == 0) {
        time++
    }
    pScore.innerHTML = time


    if (x > 100 && x < 130 && y > 110) {
        alert('Finish!')

        if (time > record) {
            record = time
            pRecord.innerHTML = record;
            localStorage.setItem('DinoMax', record)
        }
        t = time = 0;
    }



}


setInterval(() => {
    finish();
}, 10)



