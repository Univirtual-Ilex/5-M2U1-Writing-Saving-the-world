import {css} from 'styled-components'
import Ilex from '../../App/variables'
import animations from './Home_animations'
// La utilidad css me permite usar css desde un elemento externo
const estilos_home = css`
    h1 {
        color: ${Ilex.morado};
        font-size: 4em;
        font-weight: bold;
        line-height:0.95;
    }

    .bloque-izquierdo,.bloque-derecho{
        flex-grow:1;
        width:50%;
        position: relative
    }

    .bloque-izquierdo {
        padding:5em 3em 3em 5em;
        box-sizing:border-box;
        margin-top: 1em;
        .bloque-izquierdo-container{
        width:27.5em;
        margin: auto;
         }
         p{
             margin: 2em 0;
             color: ${Ilex.textos};

         }
         .negrilla{
        font-weight: bold;
        }
    }

    .bloque-derecho>figure{
        position:absolute;
        top: 6.5em;
        left: 2em;
        img{
            display:block;
            width:28.5em;
            height: auto;
            transform: scale(0.6);
            margin-top: -10em;
            margin-left: 5em;
        }

    }

    .entrada-top-Y{
        animation-name: ${animations.entrada_top_Y}
    }
    .saldida-top-X{
        animation-name: ${animations.entrada_top_Y}
    }
    .start{
        margin-top: -0.2em;
    }

`

export default estilos_home