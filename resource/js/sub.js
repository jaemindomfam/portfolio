// ========= SUBPAGE START ========= //
// 페이지 로드 시 실행할 함수
function addActiveClass() {
    // 요소를 찾아서 클래스 추가
    var horizText = document.querySelector('.horiz-text');
    horizText.classList.add('active');
}
// 페이지가 로드되면 함수 실행
window.onload = addActiveClass;


// 텍스트 애니메이션 //
document.addEventListener('DOMContentLoaded', function () {
    var desk = document.querySelector('.subsection');
    var contactContent = document.querySelector('.sub-content');

    // 스크롤 이벤트 추가
    window.addEventListener('scroll', function () {
        // 현재 스크롤 위치 가져오기
        var scrollPosition = window.scrollY || document.documentElement.scrollTop;

        // 스크롤 위치가 100 이상인 경우 .active 클래스 추가, 그렇지 않으면 제거
        if (scrollPosition >= 100) {
            contactContent.classList.add('active');
        } else {
            contactContent.classList.remove('active');
        }
    });
});
// end: SUBPAGE START //