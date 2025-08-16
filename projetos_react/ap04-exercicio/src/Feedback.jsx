import React from 'react'

const Feedback = props => {
    return (
        // .d-flex.justify-content-evenly.m-2
        <div className="d-flex justify-content-evenly m-1">
            <button
                className='btn btn-primary mt-4'
                type="button" style={{width: '200px'}} onClick={props.funcaoAprovar}>
                {props.textoAprova}
            </button>
            <button className='btn btn-danger mt-4'
                type="button" style={{width: '200px'}} onClick={props.funcaoReprovar}>
                {props.textoReprova}
            </button>
        </div>
    )
}

export default Feedback