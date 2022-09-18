import React from 'react'
import PropTypes from 'prop-types'
// import { useLocation } from 'react-router-dom'
import Button from './Button'

type HeaderProps ={
    title: string
    onAdd: any
    showAdd: boolean
}

const Header=({title, onAdd, showAdd}: HeaderProps)=>{
    
    return (
        <header className='header'>
            <h1 >{title}</h1>
            <Button 
             color={showAdd? 'red': 'green'}
             text={showAdd ? 'Close': 'Add'}
             onClick={onAdd}/>            

        </header>
    )
}

Header.defaultProps={
    title: 'Notes',
}

export default Header
