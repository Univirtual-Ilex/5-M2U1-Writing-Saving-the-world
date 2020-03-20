import { css } from 'styled-components'
import Ilex from '../../App/variables'
import {fadeIn} from './Sentence_animations'
const styles = css`
${fadeIn}
text-align:center;
position: relative;
background-color: #eee;
margin: 0.2em;
text-align: left
.d-line{
    display: inline-block;
    font-size:0.87em;
    margin-left: 2em;
    span{
        display:inline-block;
        padding: 0;
        img{
            display: block;
            width:1.5em;
            height: 1.5em;
            padding:0.2em;
            margin:0 0.3em;
            padding: 0.04em;
        }
    }
}

.eval{
    margin-right: 3em;
    position: absolute;
    right: 0;
    padding: 0.4em;
}

.field{
    font-weight:bold;
    color:${Ilex.textos};
}

.overlay{
    position: absolute;
    background-color: rgba(255,255,255,0.4);
    z-index:400;
    width: 100%;
    height: 100%;
    bottom: 0;
    top: 0;
    left:0;
    right:0;
    &.visible{
        display:block;
        animation: fadeIn 0.5s ease-in-out
    }
    &.hidden{
        display:none;
    }
}


`

export default styles
    