import React from 'react'
import styles from './Card.module.css'

const Jumbotron = () => {

    return(
        <div className={styles.jumbotron}>
            <div className="jumbotron">
                <h1 className="display-4">¡Hola, mundo!</h1>
                <p className="lead">Este es un ejemplo de un Jumbotron en Bootstrap.</p>
                <hr className="my-4"/>
                <p>Es muy fácil de usar y puedes personalizarlo según tus necesidades.</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">¡Empecemos!</a>
            </div>
        </div>
    )
}

export default Jumbotron