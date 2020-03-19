import { css } from 'styled-components'
import Ilex from '../../App/variables'
const styles = css`

    width: 20.20em;
    height: 12.124em;
    background-color: ${Ilex.dragItem};
    background-image: url('src/estado_vacio.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size:30% auto;
    border-radius: 1em;
    border: 2px dashed ${Ilex.bordeGris};
    padding: 1em;
    margin:0 0.5em;
    h3{
        color: ${Ilex.grisOscuro};
        text-transform: uppercase;
        text-align: center;
    }
`

export default styles
    