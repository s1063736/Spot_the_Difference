
let yesAudio = $('#yes')[0],
    b1Audio = $('#beep')[0],
    b2Audio = $('#bom')[0],
    b3Audio = $('#boo')[0],
    bgm = $('#bgm')[0],
    score = [0, 0, 0, 0]


$('body').on('click', function () {
    bgm.muted = false;
    bgm.play()
})


// 計分數
$('.teams > div > div').on("click", function () {
    let i = Math.floor(Math.random() * 3) + 1
    console.log(i)
    switch(i){
        case 1: b1Audio.play()
                break;
        case 2: b2Audio.play()
                break;
        case 3: b3Audio.play()
                break;
    }
    
})

$('.team1 > div').on("click", function () {
    score[0]++
    $('.team1 > p').html(score[0])
})

$('.team2 > div').on("click", function () {
    score[1]++
    $('.team2 > p').html(score[1])
})

$('.team3 > div').on("click", function () {
    score[2]++
    $('.team3 > p').html(score[2])
})

$('.team4 > div').on("click", function () {
    score[3]++
    $('.team4 > p').html(score[3])
})


// 找碴

$('#err1').on("click", function () {
    $('.pop,.c1').fadeIn(200)
    yesAudio.play()
    $('.errpage').css({
        'background-image': 'url(img/err1.webp)'
    })
    $('.corpage').css({
        'background-image': 'url(img/cor1.webp)'
    })
    $(this).css("pointer-events", "none")
    $('.text').html('Santa Claus')
})

$('#err2').on("click", function () {
    $('.pop,.c2').fadeIn(200)
    yesAudio.play()
    $('.errpage').css({
        'background-image': 'url(img/err2.webp)'
    })
    $('.corpage').css({
        'background-image': 'url(img/cor2.webp)'
    })
    $(this).css("pointer-events", "none")
    $('.text').html('Sled')
})

$('#err3').on("click", function () {
    $('.pop,.c3').fadeIn(200)
    yesAudio.play()
    $('.errpage').css({
        'background-image': 'url(img/err3.webp)'
    })
    $('.corpage').css({
        'background-image': 'url(img/cor3.webp)'
    })
    $(this).css("pointer-events", "none")
    $('.text').html('Reindeer')
})

$('#err4').on("click", function () {
    $('.pop,.c4').fadeIn(200)
    yesAudio.play()
    $('.errpage').css({
        'background-image': 'url(img/err4.webp)'
    })
    $('.corpage').css({
        'background-image': 'url(img/cor4.webp)'
    })
    $(this).css("pointer-events", "none")
    $('.text').html('Snowman')
})

$('#err5').on("click", function () {
    $('.pop,.c5').fadeIn(200)
    yesAudio.play()
    $('.errpage').css({
        'background-image': 'url(img/err5.webp)'
    })
    $('.corpage').css({
        'background-image': 'url(img/cor5.webp)'
    })
    $(this).css("pointer-events", "none")
    $('.text').html('Yule Log')
})

$('#err6').on("click", function () {
    $('.pop,.c6').fadeIn(200)
    yesAudio.play()
    $('.errpage').css({
        'background-image': 'url(img/err6.webp)'
    })
    $('.corpage').css({
        'background-image': 'url(img/cor6.webp)'
    })
    $(this).css("pointer-events", "none")
    $('.text').html('Stockings')
})

$('#err7').on("click", function () {
    $('.pop,.c7').fadeIn(200)
    yesAudio.play()
    $('.errpage').css({
        'background-image': 'url(img/err7.webp)'
    })
    $('.corpage').css({
        'background-image': 'url(img/cor7.webp)'
    })
    $(this).css("pointer-events", "none")
    $('.text').html('Gifts')
})

$('#err8_1,#err8_2,#err8_3').on("click", function () {
    $('.pop,.c8').fadeIn(200)
    yesAudio.play()
    $('.errpage').css({
        'background-image': 'url(img/err8.webp)'
    })
    $('.corpage').css({
        'background-image': 'url(img/cor8.webp)'
    })
    $('.err8').css("pointer-events", "none")
    $('.text').html('Gingerbread Man')
})

$('#err9_1,#err9_2,#err9_3').on("click", function () {
    $('.pop,.c9').fadeIn(200)
    yesAudio.play()
    $('.errpage').css({
        'background-image': 'url(img/err9.webp)'
    })
    $('.corpage').css({
        'background-image': 'url(img/cor9.webp)'
    })
    $('.err9').css("pointer-events", "none")
    $('.text').html('Candy Cane')
})

$('.pop').on("click", function () {
    $('.pop').fadeOut(200)
})