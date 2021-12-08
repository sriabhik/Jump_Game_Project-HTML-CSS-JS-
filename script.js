score = 0;
flag = 0;
audio = new Audio('death.mp3')
audioGo = new Audio('game_music.mp3')
count = 0;
document.onkeydown = function (e) {
    console.log("Key Code is :", e.keyCode);
    if (e.keyCode == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700);
    }
    console.log(e.keyCode);
    if (e.keyCode == 39) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 30 + "px";

    }
    if (e.keyCode == 37) {
        dino = document.querySelector('.dino');
        dinoXX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoXX - 30) + "px";

    }
}
setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    Obstacle = document.querySelector('.Obstacle');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(Obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(Obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);

    if (offsetX < 127 && offsetY < 105) {
        gameOver.innerHTML = 'GAME OVER';
        Obstacle.classList.remove('ObstacleAni');
        Obstacle.classList.remove('animateDino');
        flag = 1;
        audio.play();
        setTimeout(() => {
            audio.pause();
            audioGo.pause();
        }, 1000)
        count++;

    }
    else if (flag == 0) {
        score += 1;

        updateScore(score);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(Obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.0000001;
            Obstacle.style.animationDuration = newDur + 's';
        }, 500);
        audioGo.play();

        setTimeout(() => {

        }, 1000)

    }

}, 10);
function updateScore(score) {
    scoreCont.innerHTML = "Score  " + score
}