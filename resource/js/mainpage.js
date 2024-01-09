// SECTION1 //
const section1Move = document.querySelector("#section1 .imgbox .move");
const section1MoveTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: "#section1",
        start: "top top",
        end: "top+=1000",
        scrub: true,
        pin: true
    }
});
section1MoveTimeline.from(section1Move, {
    duration: 10,
    // x: "-500px",
    // y: "-350px",
    x: "-150%",
    y: "-350px",
    rotation: 360,
    scale: 0,
    autoAlpha: 0
});
section1MoveTimeline.to(section1Move, {
    duration: 100,
    scale: 10,
    rotation: 360,
    scrollTrigger: {
        trigger: "#section1",
        start: "top+=100",
        end: "bottom top",
        scrub: true,
        pin: true,
        anticipatePin: 1
    }
});
// end: SECTION1 //


// SECTION2 //
const section2Move = document.querySelector("#section2 .imgbox .move");
const section2Profile = document.querySelector("#section2 .section2-profile");
const section2MoveTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: "#section2",
        start: "top top",
        end: "bottom+=3000",
        scrub: true,
        pin: true
    }
});
section2MoveTimeline.from(section2Move, {
    duration: 10,
    rotation: 360,
    scale: 50
});
section2MoveTimeline.to(section2Profile, {
    duration: 1,
    scale: 10,
    scrollTrigger: {
        trigger: "#section2",
        start: "top+=100",
        end: "bottom top",
        scrub: true,
        pin: true,
        anticipatePin: 1
    }
});
section2MoveTimeline.to(section2Move, {
    duration: 10,
    rotation: 270,
    x: 2000,
    scrollTrigger: {
        trigger: "#section2",
        start: "top+=150",
        end: "+=3000",
        scrub: true,
        pin: true,
        anticipatePin: 1
    }
});
// end: SECTION2 //


// SECTION3 //
const section3Text = gsap.timeline();
section3Text.from("#section3 .sectionText span", {
    y: -100, 
    autoAlpha: 0, 
    ease: "back.out(4)",
    stagger: 0.1
});
ScrollTrigger.create({
    animation: section3Text,
    trigger: "#section3",
    start: "top top",
    end: "+=3000",
    scrub: true,
    pin: true,
    anticipatePin: 1
});
const section3Move = gsap.timeline();
section3Move.from("#section3 .imgbox .move", {
    x: "-1500%",
    duration: 10,
    rotation: 360
});
ScrollTrigger.create({
    animation: section3Move,
    trigger: "#section3 .imgbox",
    start: "top center",
    end: "+=5000",
    scrub: true,
    pin: true,
    anticipatePin: 1
});
// end: SECTION3 //


// SECTION4 //
const refWrap = document.querySelector("#section4");
const refBox = gsap.utils.toArray("#section4 .ref-box");
gsap.to(refBox, {
    xPercent: -100 * (refBox.length -1),
    ease: "none",
    scrollTrigger: {
        trigger: refWrap,
        start: "top top",
        end: () => "+=" + (refWrap.offsetWidth + innerWidth),
        pin: true,
        scrub: 1,
        // snap: {
        //     snapTo: 1/(refBox.length -1),
        //     inertia: false,
        //     duration: {min: 0.1, max: 0.1},
        // },
        invalidateOnRefresh: true,
        anticipatePin: 1        
    }
});
// end: SECTION4 //


// SECTION5 //
const section5Text = gsap.timeline();
section5Text.from("#section5 .sectionText span", {
    y: -100, 
    autoAlpha: 0, 
    ease: "back.out(4)",
    stagger: 0.1
});
ScrollTrigger.create({
    animation: section5Text,
    trigger: "#section5",
    start: "top top",
    end: "+=3000",
    scrub: true,
    pin: true,
    anticipatePin: 1
});
const section5Move = gsap.timeline();
section5Move.from("#section5 .imgbox .move", {
    x: "-1500%",
    y: "50%",
    duration: 10,
    rotation: 360
});
ScrollTrigger.create({
    animation: section5Move,
    trigger: "#section5 .imgbox",
    start: "top center",
    end: "+=5000",
    scrub: true,
    pin: true,
    anticipatePin: 1
});
// end: SECTION5 //


// parralax SECTION6~8 //
gsap.utils.toArray("#parallax section").forEach((panel, i) => {
    ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false
    });
})

gsap.utils.toArray(".parallax .imgbox").forEach((item, index) => {
    const animationConfig = {
        duration: 100,
        x: 100,
        scale: 1.05,
        scrollTrigger: {
            trigger: item,
            start: "top 70%",
            end: "bottom top",
            scrub: 0.5
        }
    };
    // .section7에 있는 .imgbox, x: -100으로 움직이도록 설정
    if (index === 1) {
        animationConfig.x = -100;
    }
    gsap.to(item, animationConfig);
});

const section6Move = document.querySelector("#section6 .star");
gsap.to(section6Move,{
    duration: 10,
    x: 800,
    y: 1000,
    rotation: 360,

    scrollTrigger:{
        trigger: "#section6",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        toggleActions: "play none reverse none"
    }
});
const section7Move = document.querySelector("#section7 .star");
gsap.to(section7Move,{
    duration: 10,
    x: -500,
    y: 800,
    rotation: 360,

    scrollTrigger:{
        trigger: "#section7",
        start: "top 50%",
        end: "bottom 20%",
        scrub: true,
        toggleActions: "play none reverse none"
    }
});
const section8Move = document.querySelector("#section8 .star");
gsap.to(section8Move,{
    duration: 10,
    x: 100,
    y: 1000,
    rotation: 360,

    scrollTrigger:{
        trigger: "#section8",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        toggleActions: "play none reverse none"
    }
});
// end: parralax SECTION6~8 //


// SECTION9 //
const section9Text = document.querySelector("#section9 .txtbox");
gsap.to(section9Text, {
    scrollTrigger: {
        trigger: "#section9",
        start: "top top",
        end: "bottom center",
        toggleClass: {targets: "#section9 .txtbox", className: "active"},
        markers: false,
    }
});

const section9Move = document.querySelector("#section9 .txtbox .move");
gsap.to(section9Move,{
    duration: 2,
    x: '800%',
    rotation: 360,
    autoAlpha: 1,

    scrollTrigger:{
        trigger: "#section9",
        start: "top top",
        end: "bottom bottom",
        toggleActions: "play none reverse none",
        markers: false
    }
});
// end: SECTION9 //


// 타이포 스크립트
String.prototype.toKorChars = function() { 
    var cCho = [ 'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ' ], 
        cJung = [ 'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ' ], 
        cJong = [ '', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ' ], cho, jung, jong; 
    var str = this, 
        cnt = str.length, 
        chars = [], 
        cCode; 
    for (var i = 0; i < cnt; i++) { 
        cCode = str.charCodeAt(i);
        // 한글이 아닌 경우 
        if (cCode == 32) { 
            chars.push(" ");
            continue;
        }
        if (cCode < 0xAC00 || cCode > 0xD7A3) { 
            chars.push(str.charAt(i)); continue; 
        } 
        cCode = str.charCodeAt(i) - 0xAC00; 
        // 종성 
        jong = cCode % 28; 
        // 중성 
        jung = ((cCode - jong) / 28 ) % 21 
        // 초성 
        cho = (((cCode - jong) / 28 ) - jung ) / 21 
    
        // 테스트라는 문장이 있으면 ㅌ테ㅅ스ㅌ트 형식으로 저장되도록함 (타이핑을 위해서)
        chars.push(cCho[cho]);
        chars.push(String.fromCharCode( 44032 + (cho * 588) + (jung  * 28)));
        if (cJong[jong] !== '') { 
            chars.push(String.fromCharCode( 44032 + (cho * 588) + (jung  * 28) + jong ));
        }
    } 
    return chars; 
}
  
// 타이핑할 문장
var result  = "도전을 즐기며 코드에 강렬한 희망을 심겠습니다.<br>ka604@naver.com<br>010-4664-4965";
var typeing1=[];
result = result.split(''); // 한글자씩자름

//각글자 초성,중성,종성으로 나눔
for(var i =0; i<result.length; i++) {
    typeing1[i]=result[i].toKorChars();
}

//출력할 엘리먼트요소 가져옴 
var resultDiv = document.querySelector("#text");

var text = "",
    i=0,
    j=0, 
    imax = typeing1.length,
    isPause = false,
    isReset = false,
    timer;

function startTimer() {
    isPause = false;
    if (isReset == true) {
        isReset = false;
        timer = setInterval(function() {
        typi();
        }, 50)
    } else {
        timer = setInterval(function() {
        typi();
        }, 50)
    }
}

function stopTimer() {
    clearInterval(timer);
    isPause = true;
}

function resetTimer() {
    clearInterval(timer);
    isPause = true;
    isReset = true;
    i = 0;
    text = "";
}

function typi() {
    if(i<=imax-1) {
        //각 글자가 초성 중성 종성 순서대로 추가되도록 
        var jmax = typeing1[i].length;
        resultDiv.innerHTML = text + typeing1[i][j];
        j++;
        if(j==jmax){
        text+=  typeing1[i][j-1];//초성중성종성 순서대로 출력된 글자는 저장 ( 다음 글자와 이어붙이기 위해서 )
        i++;
        j=0;
        resultDiv.innerHTML += "<br>";
        }
    } else {
        stopTimer();
    }
}

gsap.registerPlugin(ScrollTrigger);

gsap.to('#text', {
    duration: 3,
    scrollTrigger: {
        trigger: "#section9",
        toggleActions: "restart none reverse none",
        start: "top top",
        end: "bottom bottom",
        onEnter: function() { startTimer() },
        onLeaveBack: function() { resetTimer() },
    },
});