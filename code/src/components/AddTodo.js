import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { todos } from 'reducers/todos'


const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Textarea = styled.textarea`
    margin-top: 20px;
    font:inherit;
    border: none;
    resize: none;
`
const Button = styled.button`
    margin-top: 20px;
    border-radius: 10%;
    border: none;
    box-shadow: 10px 5px 5px grey;
    padding: 5px;
    font:inherit;
    cursor: grab;
    outline:none;

    :hover {background-color: #ccced2}

    :active {transform: translateY(4px)}

    @media (min-width: 667px) {
        font-size: 20px;
    }
`

//state for input
export const AddTodo = () => {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState('')

    const handleOnSubmit = e => {
        e.preventDefault()
        //What we add within the curly braces is the payload:
        dispatch(todos.actions.addOne({   
            id: Math.random(), 
            text: inputValue,
            complete: false
        })
        )
        setInputValue('')
}

    return (
            <Form onSubmit={handleOnSubmit}>
                <Textarea 
                    aria-label='text area'
                    type= 'text'
                    rows= '2'
                    cols= '30'
                    placeholder= 'What to do next?'
                    onChange={e => setInputValue(e.target.value)}
                    value={inputValue} required
                />
                
                <Button type='submit'>
                    Add todo
                </Button>
            </Form>
    )
} 