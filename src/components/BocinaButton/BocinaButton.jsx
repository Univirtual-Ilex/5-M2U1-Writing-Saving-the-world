
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './BocinaButton_styles'

// Componente base
const BocinaButton_base = ({className, audio ,...props}) => {
    console.log(className)
    return (

            <button className={'btn-clean ' + className}> 
                <i className='ilx-bocina'></i>
            </button>

    )
}
const BocinaButton = styled(BocinaButton_base)`${ styles }`
export default BocinaButton
