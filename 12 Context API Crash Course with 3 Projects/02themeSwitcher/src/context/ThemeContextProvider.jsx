import React from "react";

import { useEffect, useState } from 'react';
import ThemeContext from './ThemeContext';

function ThemeContextProvider({children}){

    const [themeMode,setThemeMode] = useState('dark')
    let html = document.querySelector('html')
    
    function lightTheme(){
        setThemeMode('light')
    }
    function darkTheme(){
        setThemeMode('dark')
    }

    useEffect(()=>{
        html.classList.remove('light','dark')
        html.classList.add(themeMode)
    },[themeMode])

    return(
        <ThemeContext.Provider value={{themeMode,lightTheme,darkTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;