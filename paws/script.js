let count = 0;
const loveButton = document.getElementById('loveButton');
const countDisplay = document.getElementById('count');

loveButton.addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;

    // 애니메이션 효과
    countDisplay.style.transform = 'scale(1.3)';
    countDisplay.style.color = '#e84393';

    setTimeout(() => {
        countDisplay.style.transform = 'scale(1)';
        countDisplay.style.color = '#fd79a8';
    }, 200);

    // 축하 메시지
    if (count === 10) {
        alert('와! 발바닥을 10번이나 사랑해주셨네요! 🎉');
    } else if (count === 50) {
        alert('50번 사랑! 당신은 진정한 젤리 발바닥 애호가입니다! 😻');
    } else if (count === 100) {
        alert('100번 달성! 발바닥 마스터입니다! 👑');
    }
});