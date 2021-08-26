$(function () {

    //Sistema de PEquisa

    var currentValue = 0
    var isDrag = false
    var precoMaximo = 70000
    var precoAtual = 0

    $('.pointer-barra').mousedown(function () {
        isDrag = true
    })

    $(document).mouseup(function () {
        isDrag = false
        desableTextSelection()
    })

    $('.barra-preco').mousemove(function (e) {
        if (isDrag) {
            desableTextSelection()
            var elBase = $(this)
            var mouseX = e.pageX - elBase.offset().left
            if (mouseX < 0) {
                mouseX = 0
            } else if (mouseX > elBase.width()) {
                mouseX = elBase.width()
            }

            $('.pointer-barra').css('left', (mouseX - 13) + 'px')
            currentValue = (mouseX / elBase.width()) * 100
            $('.barra-preco-fill').css('width', currentValue + '%')

            precoAtual = currentValue / 100 * precoMaximo
            precoAtual = formatarPreco(precoAtual)
            $('.preco_pesquisa').html('R$' + precoAtual)
        }
    })

    function formatarPreco(precoAtual) {
        precoAtual = precoAtual.toFixed(2)
        precoArr = precoAtual.split('.')
        
        var novoPreco = formatarTotal(precoArr)

        return novoPreco
    }

    function formatarTotal(precoArr) {
        if (precoArr[0] < 1000) {
            return precoArr[0] + ',' + precoArr[1]
        } else if (precoArr[0] < 10000) {
            return precoArr[0][0] + '.' + precoArr[0].substr(1,precoArr[0].length) + ',' + precoArr[1]
        } else {
            return precoArr[0][0] + precoArr[0][1] + '.' + precoArr[0].substr(2,precoArr[0].length) + ',' + precoArr[1]
        }
    }

    function desableTextSelection() {
        $('body').css('-webkit-user-select', 'none')
        $('body').css('-moz-user-select', 'none')
        $('body').css('-ms-user-select', 'none')
        $('body').css('-o-user-select', 'none')
        $('body').css('user-select', 'none')
    }


    /*

    Sistema de SLide da página individual de cada carro

    */

    var imgShow = 3
    var maxIndex = Math.ceil($('.mini-img-wraper').length / 3) - 1
    var curIndex = 0

    initSlider()
    navigateSlider()
    clickSlider()
    function initSlider() {
        var amt = $('.mini-img-wraper').length * 33.3
        var elScroll = $('.nav-galeria-wraper')
        var elSingle = $('.mini-img-wraper')
        elScroll.css('width', amt + '%')
        elSingle.css('width',33.3 * (100 / amt) + '%')
    }

    function navigateSlider() {
        $('.arrow-right-nav').click(function(){
            if (curIndex < maxIndex) {
                curIndex++
                var elOff = $('.mini-img-wraper').eq(curIndex * 3).offset().left - $('.nav-galeria-wraper').offset().left
                $('.nav-galeria').animate({'scrollLeft':elOff + 'px'})
            } else {

            }
        })

        $('.arrow-left-nav').click(function(){
            if (curIndex > 0) {
                curIndex--
                var elOff = $('.mini-img-wraper').eq(curIndex * 3).offset().left - $('.nav-galeria-wraper').offset().left
                $('.nav-galeria').animate({'scrollLeft':elOff + 'px'})
            } else {

            }
        })
    }

    function clickSlider() {
        $('.mini-img-wraper').click(function(){
            $('.mini-img-wraper').css('background-color', 'transparent')
            $(this).css('background-color', 'rgb(210, 210, 210)')
            var img = $(this).children().css('background-image')
            $('.foto-destaque').css('background-image', img)
        })

        $('.mini-img-wraper').eq(0).click()
    }

    //Clicar e ir para a div de contato com base no atributo goto
    var directory = '/front-end-danki/Projeto_05/'

    $('[goto=contato]').click(function(){
        location.href=directory + 'index.html?contato'
        return false
    })

    checkUrl()

    function checkUrl() {
        var url =  location.href.split('/')
        var curPage = url[url.length - 1].split('?')

        if (curPage[1] == 'contato') {
            $('header nav a').css('color', 'black')
            $('footer nav a').css('color', 'white')
            $('[goto=contato]').css('color', '#eb2d2d')
            $('html,body').animate({'scrollTop':$('#contato').offset().top})
        }
    }

    /*Menu responsivo*/

    $('.mobile').click(function(){
        $(this).find('ul').slideToggle()
    })



    /*Sistema de navegação nos depoimentos da index*/

    var amtDepoimento = $('.depoimento-single q').length
    var curIndex = 0

    iniciarDepoimentos()
    navegarDepoimentos()

    function iniciarDepoimentos() {
        $('.depoimento-single q').hide()
        $('.depoimento-single q').eq(0).show()
    }

    function navegarDepoimentos() {
        $('[next]').click(function(){
            curIndex++
            if (curIndex >= amtDepoimento) {
                curIndex = 0                
            }
            $('.depoimento-single q').hide()
            $('.depoimento-single q').eq(curIndex).show()
        })

        $('[prev]').click(function(){
            curIndex--
            if (curIndex < 0) {
                curIndex = amtDepoimento -1                
            }
            $('.depoimento-single q').hide()
            $('.depoimento-single q').eq(curIndex).show()
        })
    }

})