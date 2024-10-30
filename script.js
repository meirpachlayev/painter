let currentIndex = 0;
const imagesToShow = 3; // מספר התמונות שמוצגות בו זמנית
const totalImages = 6; // סך כל התמונות

function changeSlide(direction) {
    currentIndex += direction;

    // אם הגענו לסוף, נחזור להתחלה
    if (currentIndex < 0) {
        currentIndex = totalImages - imagesToShow;
    } else if (currentIndex > totalImages - imagesToShow) {
        currentIndex = 0;
    }

    // מחשב את ההזזה בהתאם למספר התמונות שמוצגות
    const offset = -Math.floor(currentIndex / imagesToShow) * (100 / imagesToShow); 
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

// אוטומטית מחליף בין התמונות כל 3 שניות
setInterval(() => changeSlide(1), 3000);