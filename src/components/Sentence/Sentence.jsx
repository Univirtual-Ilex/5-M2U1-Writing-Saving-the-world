
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './Sentence_styles'
import Ilex from '../../App/variables'
import {ReactSortable} from 'react-sortablejs'

//Components
import DraggableItem from '../Draggable'
import ButtonEval from '../ButtonEval'
import { useState } from 'react'
import Feedback from '../Feedback'


// Componente base
const Sentence_base = ({basename, words, sendFeedback, ...props}) => {

    // Función que valida el orden correcto de las frases
    const check = () => {

        let initialPhrase = InitialState.map(item => item.name)
        let actualOrder = WordsState.map(item=>item.name)
        let result = JSON.stringify(initialPhrase)===JSON.stringify(actualOrder)
        if (result) {
            setResult('ok')
            if (sendFeedback) {
                sendFeedback(true)
            }
        } else {
            setResult('err')
        }

    }

    // Función que lanza pistas del orden correcto
    const hint = () => {
        let limitHint = 3
        let hint // obtengo la pista
        let previousValue // obtengo el valor del  index 0
        let initialindex // obtengo el index inicial de la pista
        let hinted = WordsState.map((word, index) =>{
            if (index===counterHint){
                previousValue = word }

            if (word.id === counterHint) {
                hint = word
                initialindex = index
            }
            return word
        })
        // swapping
        hinted[counterHint] = hint
        hinted[initialindex] = previousValue

        // Colorize
        setColor(counterHint)
       // hinted[0] = hinted[index]
       // hinted[index] = hinted[hint]

        setWordsState(hinted)
        if(counterHint !== limitHint) {
            setCounterHint(counterHint + 1)
        }
    }

    // Colorea items hinted


    // Función que reordena las palabras de forma aleatoria
    const randomizeItems = (array) => {
        //let sortable = array.sort(()=>Math.random() - 0.5) // realiza un reordenamiento al azar
        let sortable = array.map((item, index) =>{
            return item
        })
        sortable.sort(() =>Math.random() - 0.5)
        return sortable
    }
    

    // States
    // Orden correcto de las frases
    const InitialState = words
    let [WordsState, setWordsState] = useState(randomizeItems(words))
    // Maneja 3 estado hidden(por defecto), ok, error
    let [result, setResult] = useState('hidden')
    let [counterHint, setCounterHint] = useState(0)
    //colorizar
    // eslint-disable-next-line
    let [color, setColor] = useState(-1)
    // Disabled sentence

    return (
        <div {...props}>
            <article className='container'>
                <div className='d-line field'>{basename}</div>
                <div className='d-line words'>
                    <ReactSortable 
                        list={WordsState} 
                        setList={setWordsState}
                        group="groupName"
                        animation={300}
                        delayOnTouchStart={true}
                        delay={2}
                        direction="horizontal"
                    >
                    { WordsState.map((word, index) => {
                        return(
                            <DraggableItem name={word.name} key={basename+''+word.id} className={ index < counterHint ? 'colorize': 'clean' } />
                        )
                    }) }
                    </ReactSortable>
                </div>
                <div className='d-line eval'>
                    <Feedback checkresult={result} />
                    <ButtonEval color={Ilex.morado} mx={0.2} onClick={check} >Check</ButtonEval>
                    <div className={`${result === 'ok' ? 'visible' : 'hidden'} overlay`}></div>
                </div>
            </article>
        </div>
    )
}
const Sentence = styled(Sentence_base)`${ styles }`
export default Sentence
    