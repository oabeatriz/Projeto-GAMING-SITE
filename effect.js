var paragrafo = document.querySelector('h4')
var texto = paragrafo.innerHTML
var inicio = 0


const escrever = () => {
    paragrafo.innerHTML = paragrafo.innerHTML.replace('|', '')

    if (texto.length > inicio) {
        if (inicio == 0) {
        paragrafo.innerHTML = texto.charAt(inicio)
    } else {
        paragrafo.innerHTML += texto.charAt(inicio)
    }
    paragrafo.innerHTML += '|'
    inicio++
    setTimeout(escrever, 50)
}
}

escrever()







