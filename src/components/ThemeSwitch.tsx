import {Btn} from "./Button.tsx";
// @ts-ignore
import React, {useState} from "react";

function ThemeSwitch() {
    let [Theme, setTheme] = useState("Dark")

    function handleClick() {
        if (Theme === "Dark") {
            setTheme("Light")
        }
        if (Theme === "Light") {
            setTheme("Dark")
        }
    }

    return (
        <>
            {Theme === "Dark" ?
                <div
                    className="h-screen w-screen flex flex-col items-center justify-center transition-all bg-gray-800">
                    <button onClick={handleClick} className="m-3 text-blue-50">{Theme}(this is a button)</button>
                    <h1 className="text-6xl text-center md:text-7xl lg:text-8xl xl:text-9xl transition-all text-blue-50">Click the button</h1>
                    <Btn themeIs={Theme}></Btn>
                </div>
                :
                <div className="h-screen w-screen flex flex-col items-center justify-center transition-all bg-amber-100">
                    <button onClick={handleClick} className="m-3 text-amber-950">{Theme}(this is a button)</button>
                    <h1 className="text-6xl text-center md:text-7xl lg:text-8xl xl:text-9xl transition-all text-amber-950">Click the button</h1>
                    <Btn themeIs={Theme}></Btn>
                </div>
            }
        </>
    )
}

export {ThemeSwitch}