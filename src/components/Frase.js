import React from 'react';
import styles from './frase.module.css';

export default function Frase()
{
    return (
        <div className={styles.fraseContainer}>
            <h1 className={styles.fraseContent}>Tentei fugir de mim... </h1>
            <h1 className={styles.fraseC2}>Tentei fugir de mim... </h1>
        </div>
    );
}