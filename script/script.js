//1. 모바일 메뉴 숨기기
//객체 = 모바일메뉴 m_nav_open
//객체.속성 style.display = 'none'
//2. 햄버거 메뉴 클릭 시 모바일 메뉴 보이기
//객체 = 햄버거 메뉴 m_nav, 모바일 메뉴 m_nav_open 
//객체.이벤트 객체.속성
//3. x버튼 클릭 시 모바일 메뉴 숨기기
//객체 = x버튼 close, 모바일메뉴 m_nav_open
//변수생성
const m_nav = document.querySelector('.m_nav');
const m_nav_open = document.querySelector('.m_nav_open');
const close = document.querySelector('#close');
//정상출력 확인
console.log(m_nav, m_nav_open, close);
//1. 모바일 메뉴 숨기기
m_nav_open.style.display = 'none';
//2. 햄버거 메뉴 클릭 시 모바일 메뉴 보이기
m_nav.addEventListener('click',function(){
    m_nav_open.style.display = 'block';
})
//3. x버튼 클릭 시 모바일 메뉴 숨기기                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
close.addEventListener('click',function(){
    m_nav_open.style.display = 'none';
})

//main-swiper-slide
// const 변수명 = new Swiper('적용대상');
// const 변수명 = new Swiper('적용대상',{속성:값, 속성:값});
const pawin_slide = new Swiper('#pawin_slide',{
    autoplay:{delay:10000}, //자동재생
    loop:true, //마지막슬라이드->첫번째슬라이드 자연스러운변경
    // effect:'fade',
    direction:'horizontal',
    navigation: { //이전, 다음 내비게이션 연결
        nextEl: '#pawin_slide .swiper-button-next',
        prevEl: '#pawin_slide .swiper-button-prev'
    } //제자리변경 슬라이드 효과
    // direction:'vertical'
});
const slide2 = new Swiper('#slide2',{
    autoplay:{delay:1000},
    loop:true,
    effect:'fade',
    navigation: {
        nextEl: '#slide2 .swiper-button-next',
        prevEl: '#slide2 .swiper-button-prev'
    }
});
//pawin-slide2
const pawin_slide2 = new Swiper('#pawin_slide2',{
    autoplay:{delay:1000},
    loop:true,
    effect:'fade',
});
//입양정보 slide
const dog_info_slide = new Swiper('#dog_info_slide',{
    slidesPerView:'auto',//breakpoints옵션추가시 'auto', 한번에 보이는 슬라이드 개수
    spaceBetween:20,//슬라이드 사이 여백
    //swiper-slide 반응형웹 옵션
    autoplay:{delay:1000},
    loop:true,
    breakpoints:{
        //해상도:{옵션:값}
        //해상도 순서는 작은 해상도 -> 큰 해상도 순으로 작성
        400:{slidesPerView:2}, //400~899
        // 700:{slidesPerView:2}, //700이상일때
        900:{slidesPerView:3}, //900이상일때
        1160:{slidesPerView:4},//1160이상일 경우 슬라이드 4개 표시
    },
});