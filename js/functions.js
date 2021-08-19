$(function(){

    var currentValue = 0
    var isDrag = false
    var precoMaximo = 70000
    var precoAtual = 0

    $('.pointer-barra').mousedown(function(){
        isDrag = true
    })

    $(document).mouseup(function(){
        isDrag = false
        desableTextSelection()
    })

    $('.barra-preco').mousemove(function(e){
        if (isDrag) {
            desableTextSelection()
            var elBase = $(this)
            var mouseX = e.pageX - elBase.offset().left
            if (mouseX < 0) {
                mouseX = 0
            } else if (mouseX > elBase.width()) {
                mouseX = elBase.width()
            }

            $('.pointer-barra').css('left', (mouseX-13)+'px')
            currentValue = (mouseX / elBase.width()) * 100
            $('.barra-preco-fill').css('width', currentValue+'%')

            //TODO: Ajustar o formato do preço.
            precoAtual = currentValue / 100 * precoMaximo
            $('.preco_pesquisa').html('R$' + precoAtual)
        }
    })

    function desableTextSelection(){
        $('body').css('-webkit-user-select','none')
        $('body').css('-moz-user-select','none')
        $('body').css('-ms-user-select','none')
        $('body').css('-o-user-select','none')
        $('body').css('user-select','none')
    }
})