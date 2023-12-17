import React from 'react'
import Link from 'next/link'
import styles from './page.module.css'

const Button = (props:any) => {
    return (
        <div>
            <Link href="" className={styles.startbtn}> {props.name}</Link>
        </div>
    )
}

export default Button 