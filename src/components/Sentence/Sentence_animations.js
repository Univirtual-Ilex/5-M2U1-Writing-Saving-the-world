import {css} from 'styled-components'
export let entradaZoomIn = css`

@keyframes entradaZoomIn {
    0% {
        transform: scale(0) rotate(0deg)
    }
    100% {
        transform: scale(0) rotate(360deg)
    }
}

`

export let fadeIn = css`
@keyframes fadeIn {
    0% {
       opacity: 0
    }
    100% {
        opacity:1
    }
}


`