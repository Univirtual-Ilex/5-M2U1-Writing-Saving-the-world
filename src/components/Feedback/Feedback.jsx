
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './Feedback_styles'

// Componente base
const Feedback_base = ({checkresult, ...props}) => {

    return (

        <span className={props.className} > {/* className={props.className} es lo mismo que {...props}*/}
            {
                checkresult === 'ok' ?
                    <span className='ok'><img src='./src/ok.svg' alt='Ok'/></span>
                : checkresult === 'err' ?
                    <span className='err'><img src='./src/wrong.svg' alt='Error'/></span>
                : ''
            }
            
           
        </span>
    )
}
const Feedback = styled(Feedback_base)`${ styles }`
export default Feedback
