let count = 0;
const loveButton = document.getElementById('loveButton');
const countDisplay = document.getElementById('count');

loveButton.addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;

    // 애니메이션 효과
    countDisplay.style.transform = 'scale(1.3)';
    countDisplay.style.color = '#0984e3';

    setTimeout(() => {
        countDisplay.style.transform = 'scale(1)';
        countDisplay.style.color = '#74b9ff';
    }, 200);

    // 축하 메시지
    if (count === 10) {
        alert('와! 고양이 눈을 10번이나 사랑해주셨네요! 🎉');
    } else if (count === 50) {
        alert('50번 사랑! 당신은 진정한 고양이 눈 애호가입니다! 😻');
    } else if (count === 100) {
        alert('100번 달성! 눈동자 마스터입니다! 👑');
    }
});