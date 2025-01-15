import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function ThemeButton() {

    const {themeMode,lightTheme,darkTheme} = useContext(ThemeContext)
   function onChangeBtn(e){
        let themeStatus = e.currentTarget.checked
        if(themeStatus){
            darkTheme()
        }
        else{
            lightTheme()
        }
   }
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox"
             className="sr-only peer"
             checked={themeMode === 'dark'} 
             onChange={onChangeBtn} />

            <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-500 transition-colors duration-200"></div>
            <div className="absolute top-0.5 left-1 w-5 h-5 bg-white rounded-full shadow-md peer-checked:translate-x-full transform transition-transform duration-200"></div>
        </label>
    );
}

export default ThemeButton;
