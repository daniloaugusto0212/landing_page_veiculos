$(function () {

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
})