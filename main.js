let gs = [];
let shells = [];
var audio = new Audio('Imagine Dragons - Believer.mp3');
let bt = 480;
let bt2 = 240;
let bt3 = 160;
let bt4 = 120;
let playing = false;

document.addEventListener('DOMContentLoaded', function() {
    for (let i = 0; i < 6; i++) {
        gs.push(document.getElementById(`g${i + 1}`));
    }
    for (let g of gs) {
        path = g.getElementsByTagName('path')[0];
        shells.push(
            new Shell(
                path,
                Math.floor(Math.random() * 255),
                Math.floor(Math.random() * 255),
                Math.floor(Math.random() * 255)
            )
        );
    }
});


document.addEventListener('click', () =>{if (!playing) {playing = true; audio.play(); setTimeout(music, 480);}});

function randomColor() {
    color = [
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255)];
    return
}

function music() {
    all();
    beat1();
    setInterval(beat1, bt * 2);
    beat2();
    setInterval(beat2, bt * 16);
    setTimeout(() => {shells[3].flash(255, 255, 0)}, bt * 17);
    setTimeout(() => {shells[1].flash(255, 255, 0)}, bt * 18);
    setTimeout(() => {shells[3].flash(255, 255, 0)}, bt * 21);
    setTimeout(() => {shells[1].flash(255, 255, 0)}, bt * 21.5);
    setTimeout(() => {shells[3].flash(255, 255, 0)}, bt * 48);
    setTimeout(() => {shells[1].flash(255, 255, 0)}, bt * 49);
    setTimeout(() => {shells[2].flash(255, 255, 0)}, bt * 84);
    setTimeout(() => {shells[1].flash(255, 255, 0)}, bt * 84.5);
    setTimeout(() => {shells[2].flash(255, 255, 0)}, bt * 85);
    setTimeout(() => {shells[1].flash(255, 255, 0)}, bt * 85.5);
    setTimeout(() => {shells[2].flash(255, 255, 0)}, bt * 90);
    setTimeout(() => {shells[1].flash(255, 255, 0)}, bt * 90.5);
    setTimeout(() => {shells[2].flash(255, 255, 0)}, bt * 91);
    setTimeout(() => {shells[1].flash(255, 255, 0)}, bt * 91.5);
    setTimeout(() => {shells[2].flash(255, 255, 0)}, bt * 92);
    setTimeout(() => {shells[1].flash(255, 255, 0)}, bt * 92.5);
    setTimeout(() => {shells[2].flash(255, 255, 0)}, bt * 93);
    setTimeout(() => {shells[1].flash(255, 255, 0)}, bt * 93.5);
    setTimeout(() => {shells[2].flash(255, 255, 0)}, bt * 94);
    setTimeout(() => {shells[1].flash(255, 255, 0)}, bt * 94.5);
    setTimeout(() => {shells[2].flash(255, 255, 0)}, bt * 95);
    setTimeout(() => {shells[1].flash(255, 255, 0)}, bt * 95.5);
    setTimeout(() => {shells[2].flash(255, 255, 0)}, bt * 96);
    setTimeout(() => {shells[1].flash(255, 255, 0)}, bt * 96.5);
    setTimeout(() => {shells[2].flash(255, 255, 0)}, bt * 97);
    setTimeout(() => {shells[1].flash(255, 255, 0)}, bt * 97.5);
    setTimeout(all1, 114 * bt);
    setTimeout(all1, 130 * bt);
    setTimeout(all1, 144 * bt);
    setTimeout(all1, 164 * bt);
    setTimeout(all1, 240 * bt);
}

function all() {
    for (let shell of shells) {
        shell.flash(255, 255, 0, 1920);
    }
}

function all1() {
    for (let shell of shells) {
        shell.flash(255, 0, 0, 1920);
    }
}

function beat2() {
    setTimeout(tribit, 3 * bt);
    setTimeout(tribit, 7 * bt);
    setTimeout(tribit, 11 * bt);
    setTimeout(all, 16 * bt);
}

function beat1() {
    shells[0].flash(255, 255, 0);
    setTimeout(() => {
        shells[4].flash(255, 255, 0);
        shells[5].flash(255, 255, 0);
    }, bt);
}

function tribit() {
    shells[3].flash(255, 255, 0);
    setTimeout(() => {
        shells[1].flash(255, 255, 0);
        setTimeout(() => {
            shells[2].flash(255, 255, 0);
        }, bt3);
    }, bt3);
}

function voice() {
}
