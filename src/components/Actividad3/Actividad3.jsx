//Import
import React from 'react'
import styled from 'styled-components'
import styles from './Actividad3_styles'
import Container from '../Container'
import Ilex from '../../App/variables'
import ProgressBar from '../ProgressBar'
import MainTitle from '../MainTitle'
import InputWords from '../InputWords'
import Modal from '../Generales/Modal'
// styles from styled
import { ProgressbarContainer } from '../Actividad1/Actividad_styles'
import {Olist} from './Actividad3_styles'
import {Item}from './Actividad3_styles'
import { IRow, ICol } from '../Grid'
import { useState } from 'react'


// Componente base
const Actividad3_base = ({staticContext, ...props}) => {
    const [feedback, setFeedback] = useState([])
    const setInfo = (info) => {
        setFeedback(feedback.concat(info))
    }
    return (
        <Container {...props} bgImage='./src/bg_actividad1.png' w={69} h={43}>
            <ProgressbarContainer>
                <ProgressBar progress={75} />
            </ProgressbarContainer>
            <div className='container-content'>
                <MainTitle color={Ilex.violeta2} size={1.3}> COMPLETE THE INFORMATION FROM THE EMAIL LETTER YOU ORGANIZED. WRITE THE INFORMATION ON THE SPACES.  </MainTitle>
            </div>

            <IRow>                
                <ICol py={1.5}>
                    <Olist>
                        <Item> The  person who writes the message is  <InputWords answer="pedro" sendFeedback={(data) => { setInfo(data) } }/>.</Item>
                        <Item> The person who sends the message is   <InputWords answer="jen" sendFeedback={(data) => { setInfo(data) } }/> </Item>
                        <Item> The student is in <InputWords answer="1st" sendFeedback={(data) => { setInfo(data) } }/> semester </Item>
                        <Item> The student is studying  <InputWords answer="early chilhood education" sendFeedback={(data) => { setInfo(data) } }/> </Item>
                        <Item> The student needs to leave  the university campus because he has classes at <InputWords   answer="la julita" w={10} sendFeedback={(data) => { setInfo(data) } }/> </Item>
                        <Item> He has to do a lot of <InputWords answer="oral presentations" sendFeedback={(data) => { setInfo(data) } }/></Item>
                        <Item> The majority of the students’ classmates are <InputWords answer="girls" sendFeedback={(data) => { setInfo(data) } }/> </Item>
                        <Item> The most difficult subject for the student is  <InputWords answer="math" sendFeedback={(data) => { setInfo(data) } }/> </Item>
                        <Item> The student feels <InputWords answer="happy" sendFeedback={(data) => { setInfo(data) } }/> with his program.</Item>
                        <Item> The student wants to contribute to <InputWords answer="future generations" sendFeedback={(data) => { setInfo(data) } }/></Item>
                    </Olist>

                </ICol>
            </IRow>

            <Modal visible={feedback.length === 10} ok nxtUrl="/home" repeatUrl="/actividad3" finish />

        </Container>

    )
}
const Actividad3 = styled(Actividad3_base)`${ styles }`

export default Actividad3
