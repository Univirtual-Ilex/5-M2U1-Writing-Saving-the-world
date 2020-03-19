
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './ButtonTF_styles'

// Componente base
const ButtonTF_base = ({ t, f, ...props}) => {
    return (
        <div {...props}>
            <button className={`btn-clean ${ t ? 'c-true' : f ? 'c-false' : '' }`}>
                { t ? 'True' : f ? 'False' : 'None' }
            </button>

        </div>
    )
}
const ButtonTF = styled(ButtonTF_base)`${ styles }`
export default ButtonTF
