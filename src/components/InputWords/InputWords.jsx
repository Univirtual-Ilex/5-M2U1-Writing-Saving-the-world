
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './InputWords_styles'
import { Input } from './InputWords_styles'
import { useState } from 'react'

// feedback: es una función que se lanza desde este componente y envia una validación del campo


// Componente base
const InputWords_base = ({ sendFeedback, answer ,...props}) => {

    const [Word, setWord] = useState('')
    const [ok_err, setOk_Err] = useState('err')
    const checkAnswer = (event) => {
        let data = event.target.value
        setWord(data)
        if (data.trim().toLowerCase() === answer.toLowerCase()) {
            event.target.disabled = true
            setOk_Err('ok')
            console.log('Nice: See the state ')
            if(sendFeedback) {
                sendFeedback(true)
            } else {
                console.log('sendFeedback is not defined')
            }
        } else {
            console.log('nope')
            setOk_Err('err')
        }


    }
    return (
        <div {...props}>
           <Input 
           className={'btn-clean ' + ok_err }
           onChange={checkAnswer}
           value = {Word}
           disabled = {false}
           />
        </div>
    )
}
const InputWords = styled(InputWords_base)`${ styles }`
export default InputWords
