import React from 'react'
//Components
import Container from '../Container'
import ProgressBar from '../ProgressBar'
import MainTitle from '../MainTitle'
import ButtonUi from '../ButtonControlUI'
import {ICol, IRow} from '../Grid'
import Sentence from '../Sentence'
import Modal from '../Generales/Modal'

// Styles
import styled from 'styled-components'
import styles, { ProgressbarContainer, UiButtonsContainer } from './Actividad_styles'
import Ilex from '../../App/variables'
import { useState, useEffect } from 'react'




const Actividad_base =  ({staticContext,...props})  => {
    const [okSentences, setOkSentences] = useState([])
    const [solvedActivity, setSolvedActivity] = useState(false)
    const registerFeedBack = (data)  => {
        setOkSentences(okSentences.concat(data))
    }

    useEffect(()  => {
        let numberofSentences = 7
        if (okSentences.length === numberofSentences){
            setSolvedActivity(true)
            console.log('Great Work')
        }

    },[okSentences])

    return (
        <Container bgImage='./src/bg_actividad1.png' w={69} h={38.8} {...props}>
            
            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='slide the sentences to organize them, then press check to verify if it is right or wrong, press hint if you need help   ' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' />
            </UiButtonsContainer>
     


            <MainTitle color={Ilex.violeta2}>
            ORGANIZE THE SENTENCES IN THE CORRECT ORDER
            </MainTitle>

            <IRow w={90} align='center' pt={2}>
                <ICol w={100}> 
                    <Sentence basename='1).' words={[{id:0, name: 'Adjust'}, {id:1, name: 'the'}, {id:2, name: 'thermostat'}, {id:3, name: 'to avoid'}, {id:4, name: 'carbon dioxide'}, {id:5, name: 'emissions'}]} sendFeedback={(info)  =>{ registerFeedBack(info)}} />
                    <Sentence basename='2).' words={[{id:0, name: 'Turn off'}, {id:1, name: 'lights'}, {id:2, name: 'and'}, {id:3, name: 'electronic equipment'}, {id:4, name: 'when'}, {id:5, name: 'you'}, {id:6, name: 'leave'}, {id:7, name: 'a room'}]}  sendFeedback={(info)  =>{ registerFeedBack(info)}} />
                    <Sentence basename='3).' words={[{id:0, name: 'Use'}, {id:1, name: 'cold'}, {id:2, name: 'water'}, {id:3, name: 'and'},{id:4, name:  'set'}, {id:5, name: 'the washing machine'}, {id:6, name: 'in low mode'}, {id:7, name: 'to save'}, {id:8, name: 'energy'}]}  sendFeedback={(info) =>{ registerFeedBack(info)}} />
                    <Sentence basename='4).' words={[{id:0, name: 'Pay bills'}, {id:1, name: 'online'}, {id:2, name: 'to save'}, {id:3, name: 'paper'}, {id:4, name: 'and'}, {id:5, name: 'prevent'}, {id:6, name: 'carbon'}, {id:7, name: 'emissions'},]}  sendFeedback={(info) =>{ registerFeedBack(info)}} />
                    <Sentence basename='5).' words={[{id:0, name: 'Don’t'}, {id:1, name: 'buy'}, {id:2, name: 'food'}, {id:3, name: 'that comes'}, {id:4, name: 'from other'}, {id:5, name: 'places'}, {id:6, name: 'to reduce'},{id:7, name:  'polution'}]}  sendFeedback={(info) =>{ registerFeedBack(info)}} />
                    <Sentence basename='6).' words={[{id:0, name: 'Recycle'}, {id:1, name: 'plastic bottles'}, {id:2, name: 'paper'}, {id:3, name: 'and batteries'}, {id:4, name: 'to improve'}, {id:5, name: 'waste disposal'}]}  sendFeedback={(info) =>{ registerFeedBack(info)}} />
                    <Sentence basename='7).' words={[{id: 0,name: 'Install'}, {id: 1,name: 'solar panels'}, {id: 2,name: 'to reduce'}, {id: 3,name: 'electricity'}, {id: 4,name: 'consumption'}, {id: 5,name: 'and'}, {id: 6,name: 'carbon'}, {id: 7, name: 'emissions'}]}  sendFeedback={(info) =>{ registerFeedBack(info)}}/>
                </ICol>
            </IRow>

            <Modal visible={solvedActivity} ok  repeatUrl="/actividad1" finished={true} />
        </Container>
    )

}

const Actividad = styled(Actividad_base)`
    ${ styles.mistyles }
`


export default Actividad