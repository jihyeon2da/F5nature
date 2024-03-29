$(function(){

    /* link 초기화 (a태그 방지) */
    $('a').click(function(e){
        e.preventDefault();
    });

    //🥨🥨🥨🥨스크립트 start!!!!!!!!!!!!
    
    //💛cont02 New
    /* toggle 사용 >>> 제이쿼리 */
    /* toggle 사용시 toggle로만 설정 가능 */
    let newBtn = $('.new .normal');
    newBtn.click(function(){
        $(this).siblings().slideToggle();
        $(this).toggleClass('on');
        /* 클릭한 것만 선택되도록 '$(this).형제선택자()'로 입력 */
        //siblings() : 나를 제외한 앞과 뒤의 모든 형제 선택자
        //next() : 바로 뒤에 있는 형제 선택자
        //nextAll() : 뒤에 있는 모든 형제 선택자
        //prev() : 바로 앞에 있는 형제 선택자
        //prevAll() : 앞에 있는 모든 형제 선택자

    });//newBtm.click()


    //💙cont03 Product jquery 탭메뉴 구현
    let productMenu = $('.product .product__menu li')
    let productList = $('.product .product__list')

    //$(this).index() => 클릭한 index값 찾기
    //eq() => index값 설정
    //let productMenu[3] :java <=> let productMenu.eq(3) :jquery
    //eq($(this).index())

    productMenu.click(function(){
        productMenu.removeClass('on');
        $(this).addClass('on');

        //console.log($(this).index());
        productList.removeClass('on');
        productList.eq($(this).index()).addClass('on');

    });//productMenu.click()


    //💚cont04 Best
    let bestLink = $('.best .item-big a');
    let bestImage = $('.best .item-big img');
    let bestTitle = $('.best .item-big h4');
    let bestText = $('.best .item-big strong');

    let bestSmallItem = $('.best .item-small .item');

    bestSmallItem.mouseenter(function(){

        bestSmallItem.find('img').css({
            'opacity' : '0.3'
        });
        $(this).find('img').css({
            'opacity' : '1'
        });


        /* find() : 자식,자손 중 a태그를 찾아서 속성값('href') */
        let thisLink = $(this).find('a').attr('href');
        let thisImage = $(this).find('img').attr('src');
        let thisTitle = $(this).find('h4').text();
        let thisText = $(this).find('strong').text();
        //find() : 자식,자손 중 태그 찾기
        //attr() : 속성값 ex)'href', 'src'

        bestLink.attr('href', thisLink);
        bestImage.attr('src', thisImage);
        bestTitle.text(thisTitle);
        bestText.text(thisText);


    });//bestSmallItem.mouseenter()


    //💜Md
    /* var swiper = new Swiper(".md_pick_slides", {
        slidesPerView: 2.5,
        spaceBetween: 25,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        767: {
        slidesPerView: 3.5,
        spaceBetween: 30,
        },
        1024: {
        slidesPerView: 4.5,
        spaceBetween: 35,
        },
        1024: {
        slidesPerView: 5.5,
        spaceBetween: 35,
        },
    },
    }); */

    if($(window).width() < 481) {
        $('.md .swiper').removeClass('.md_pick_slides');
        } else {
            var swiper = new Swiper(".md_pick_slides", {
                slidesPerView: 2.5,
                spaceBetween: 25,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                767: {
                slidesPerView: 3.5,
                spaceBetween: 30,
                },
                1024: {
                slidesPerView: 4.5,
                spaceBetween: 35,
                },
                1024: {
                slidesPerView: 5.5,
                spaceBetween: 35,
                },
            },
            });
        }


    //💝image-box
    let imageBoxImage = document.querySelectorAll('.image_box figure');
    let imageBoxNextBtn = document.querySelector('.image_box .slide_btn');
    let imageBoxPage = document.querySelector('.image_box .slide_pagination');

    /* figure의 수 만큼 .slide_pagination의 li를 추가시켜줌 */
    for (let i = 0; i < imageBoxImage.length; i++) {
        imageBoxPage.innerHTML += '<li></li>'
    }

    /*  for문으로 생성한 첫번째 li에게 클래스명 추가 해주기 */
    let pageBtn = document.querySelectorAll('.slide_pagination li');
    pageBtn[0].classList.add('on');
    //인덱스값 적기!!!

    //1. 페이징버튼 클릭 시 페이지 변경
    for(let i = 0; i < pageBtn.length; i++) {
        pageBtn[i].addEventListener('click',()=>{
            //console.log(i);
            imageBoxImage.forEach((item) => {
                item.classList.remove('on');
            })
            imageBoxImage[i].classList.add('on');

            pageBtn.forEach((item) => {
                item.classList.remove('on');
            })
            pageBtn[i].classList.add('on');

        });

        //2. 다음버튼(화살표아이콘)을 클릭시 페이지 변경
        let index = 0; /* 위쪽과 다르게 움직일 것으로 헷갈릴 수 있어서 다르게 지정 */
        imageBoxNextBtn.addEventListener('click',()=>{
            index++;
            if(index >= pageBtn.length) {
                index = 0;
            }
            imageBoxImage.forEach((item) => {
                item.classList.remove('on');
            })
            imageBoxImage[index].classList.add('on');

            pageBtn.forEach((item) => {
                item.classList.remove('on');
            })
            pageBtn[index].classList.add('on');
        })/* imageBoxNextBtn.('click') */
        /* 두 가지를 동시에 진행하게 되면 함께 사용이 안됨. */

        /* 3. 시간에 맞춰서 반복적으로 실행*/
        setInterval(() => {
            //setInterval: 시간을 설정하여 그 시간에 맞춰서 반복적으로 실행
            //1s = 1000
            //시간설정은 스크립트가 끝나는 중괄호와 소괄호 사이에 ,와 함께 입력
            index++;
            if(index >= pageBtn.length) {
                index = 0;
            }
            //console.log(index); 
            //자동으로 시간 초에 맞춰서 콘솔 생성이 되는 것을 확인 가능함(setInterval)
            imageBoxImage.forEach((item) => {
                item.classList.remove('on');
            })
            imageBoxImage[index].classList.add('on');

            pageBtn.forEach((item) => {
                item.classList.remove('on');
            })
            pageBtn[index].classList.add('on');
        }, 2000);// setInterval()

    }//for

    //🎃🎃🎃.footer
    $('.company_info-mobile').click(function(){
        $(this).next().slideToggle();
        // toggle() : 나타나고 사라짐
        // slidetoggle() : 부드럽게 나타나고 사라짐
        $(this).toggleClass('on');

    });//.company_info-mobile.click()



});//script end