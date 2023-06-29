$(document).ready(function () {
    /*setTimeout(function() { 
         $('body').addClass('oh');
         $('.modal-bg').addClass('vis');
         $('.modal').addClass('vis');
    }, 2000);*/
    $('.modal__close').click(function() {
        $('body').removeClass('oh');
        $('.modal-bg').removeClass('vis');
        $('.modal').removeClass('vis');
    });
    function modal(){
        $('body').addClass('oh');
        $('.modal-bg').addClass('vis');
        $('.modal').addClass('vis');
    }
    $('.btn, .login, .post__btn, .post__all, .user__follow-inner, .post__head-action, .post__all, .post-prev, .post-next').click(modal);
    $('.post__more').click(function() {
        $(this).parent().addClass('full');
        $(this).remove();
    });

    // let elem = document.querySelectorAll('.post__all');
    // console.log(elem);
    // elem.addEventListener('click', function(event) {
    //     event.preventDefault();
    // });
    document.querySelectorAll('.post__all').forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault();
        })
    })

    $('.slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        prevArrow: `<button class="slick-prev" aria-label="Previous" type="button">
                                <svg>
                                    <use xlink:href="./img/sprite.svg#icon-ar"></use>
                                </svg>
                            </button>`,
                nextArrow: `<button class="slick-next" aria-label="Next" type="button">
                                <svg>
                                    <use xlink:href="./img/sprite.svg#icon-ar"></use>
                                </svg>
                            </button>`,
    });

    $(".pauseplay").click(function() {
        var audio = $(this).closest('.post__audio').find('.audio')[0];
      
        if (audio.paused) {
          audio.play();
        } else {
          audio.pause();
          audio.currentTime = 0
        }
      
        $(this).toggleClass('pause');
    });

    $(window).scroll(function() {
		$('video').each(function(){
			if ($(this).is(":in-viewport( 0 )")) {
				//$(this)[0].play();
			} else {
				$(this)[0].pause();
			}
		});
	});

    var videoPlaying = null;
    const onPlay = function() {
    if (videoPlaying && videoPlaying != this) {
        videoPlaying.pause()
    }
    videoPlaying = this
    }
    const videos = document.getElementsByTagName("video")
    for (let i = 0; i < videos.length; i++) {
    videos[i].addEventListener("play", onPlay)
    } 


    var audioPlaying = null;
    const onPlayAudio = function() {
    if (audioPlaying && audioPlaying != this) {
        audioPlaying.pause()
    }
    audioPlaying = this
    }
    const audios = document.getElementsByTagName("audio")
    for (let i = 0; i < audios.length; i++) {
        audios[i].addEventListener("play", onPlayAudio)
    } 

});

$(window).on('load', function() {
    /*$("button").on('mouseenter',function() {	
        $(this).attr("title","");
        console.log('qwe');
    });
    $("button").focus(function() {	
        $(this).attr("title","");
        console.log('qwe');
    });*/
    $("button").click(function() {	
        $(this).removeAttr("type");
        console.log('as');
    });
    
});






