import { css } from 'styled-components'
import Ilex from '../../App/variables'

const styles = css`
    display: inline-block;
    padding:0.1em 0.6em 0.1em 0.4em;
    color: ${Ilex.violeta2};
    &:hover{
        color: ${Ilex.verde};
    }
`
    // crear el template string
    export default styles
    