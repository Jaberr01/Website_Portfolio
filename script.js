const boxes = document.querySelectorAll('.proj-box');

boxes.forEach(box => {
    let centered = false;
    box.addEventListener('click', () => {
        if (!centered) {

            const rect = box.getBoundingClientRect();

            const boxCenterX = rect.left + rect.width / 2;
            const boxCenterY = rect.top + rect.height / 2;

            const screenCenterX = window.innerWidth / 2;
            const screenCenterY = 500;

            const dx = screenCenterX - boxCenterX;
            const dy = screenCenterY - boxCenterY;

            box.style.transform = `translate(${dx}px, ${dy}px) scale(3)`;
            box.style.zIndex = 20;
            box.style.transition = 'transform 0.5s ease';


        centered = true;
        } else {
            box.style.transform = '';
            setTimeout(() => {
                box.style.zIndex = 0;
            }, 500);
            centered = false;
        }
    });
});