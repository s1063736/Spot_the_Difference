
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
$('.teams > div').on("click", function () {
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

$('.team1').on("click", function () {
    score[0]++
    $('.team1 > p').html(score[0])
})

$('.team2').on("click", function () {
    score[1]++
    $('.team2 > p').html(score[1])
})

$('.team3').on("click", function () {
    score[2]++
    $('.team3 > p').html(score[2])
})

$('.team4').on("click", function () {
    score[3]++
    $('.team4 > p').html(score[3])
})


// 找碴

$('#err1').on("click", function () {
    $('.poppage,.c1').fadeIn(200)
    yesAudio.play()
    $('.poppage').css({
        'background-image': 'url(../img/err1.png)'
    })
    $(this).css("pointer-events", "none")
})

$('#err2').on("click", function () {
    $('.poppage,.c2').fadeIn(200)
    yesAudio.play()
    $('.poppage').css({
        'background-image': 'url(../img/err2.png)'
    })
    $(this).css("pointer-events", "none")
})

$('#err3').on("click", function () {
    $('.poppage,.c3').fadeIn(200)
    yesAudio.play()
    $('.poppage').css({
        'background-image': 'url(../img/err3.png)'
    })
    $(this).css("pointer-events", "none")
})

$('#err4').on("click", function () {
    $('.poppage,.c4').fadeIn(200)
    yesAudio.play()
    $('.poppage').css({
        'background-image': 'url(../img/err4.png)'
    })
    $(this).css("pointer-events", "none")
})

$('#err5').on("click", function () {
    $('.poppage,.c5').fadeIn(200)
    yesAudio.play()
    $('.poppage').css({
        'background-image': 'url(../img/err5.png)'
    })
    $(this).css("pointer-events", "none")
})

$('#err6').on("click", function () {
    $('.poppage,.c6').fadeIn(200)
    yesAudio.play()
    $('.poppage').css({
        'background-image': 'url(../img/err6.png)'
    })
    $(this).css("pointer-events", "none")
})

$('#err7').on("click", function () {
    $('.poppage,.c7').fadeIn(200)
    yesAudio.play()
    $('.poppage').css({
        'background-image': 'url(../img/err7.png)'
    })
    $(this).css("pointer-events", "none")
})

$('#err8_1,#err8_2,#err8_3').on("click", function () {
    $('.poppage,.c8').fadeIn(200)
    yesAudio.play()
    $('.poppage').css({
        'background-image': 'url(../img/err8.png)'
    })
    $('.err8').css("pointer-events", "none")
})

$('#err9_1,#err9_2,#err9_3').on("click", function () {
    $('.poppage,.c9').fadeIn(200)
    yesAudio.play()
    $('.poppage').css({
        'background-image': 'url(../img/err9.png)'
    })
    $('.err9').css("pointer-events", "none")
})

$('.poppage').on("click", function () {
    $(this).fadeOut(200)
})