// LOADING //
document.addEventListener("DOMContentLoaded", function () {
    const loadingContainer = document.querySelector(".loading-container");
    const loadingText = document.getElementById("loading-text");
    let progress = 0;

    function updateLoadingText() {
        loadingText.textContent = `${progress}%`;

        if (progress === 100) {
            loadingContainer.style.opacity = 0;
            setTimeout(() => {
                loadingContainer.style.visibility = "hidden"; // Hide the element after fade out
                document.body.classList.remove("active"); // Remove "active" class from body
            }, 500); // 줄인 부분: 1000ms -> 500ms
        }
    }

    function simulateLoading() {
        document.body.classList.add("active");
        if (progress < 100) {
            progress += 2; // 수정된 부분: 1씩 증가하는 대신 2씩 증가
            updateLoadingText();
            setTimeout(simulateLoading, 25); // 줄인 부분: 50ms -> 25ms
        }
    }

    simulateLoading();
});

// end: LOADING //

// FULLMENU CLICK //
document.querySelector('.full-menu').addEventListener('click', function() {
    var nav = document.querySelector('.nav');
    var navEffect = document.querySelector('.nav-effect');
    nav.classList.add('active');
    navEffect.classList.add('active');
    // 2초 뒤에 active 클래스 제거
    setTimeout(function() {
        navEffect.classList.remove('active');
    }, 700);
});
document.querySelector('.nav-back').addEventListener('click', function() {
    var nav = document.querySelector('.nav');
    var navEffect = document.querySelector('.nav-effect');
    nav.classList.remove('active');
    navEffect.classList.remove('active');
});
// end: FULLMENU CLICK //