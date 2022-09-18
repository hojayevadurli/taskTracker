import React from 'react'
import PropTypes from 'prop-types'
// import { useLocation } from 'react-router-dom'
import Button from './Button'

type HeaderProps ={
    title: string
}

const Header=({title}: HeaderProps)=>{
    const onClick=()=>{
        console.log('Click')
    }
    return (
        <header className='header'>
            <h1 >{title}</h1>
            <Button 
             text='Add'
             onClick={onClick}/>            

        </header>
    )
}

Header.defaultProps={
    title: 'Notes',
}

export default Header
