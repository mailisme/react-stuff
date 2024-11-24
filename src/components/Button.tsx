import {ChangeEvent, useState} from 'react';

// @ts-ignore
function Btn(props) {
    const [count, changeCount] = useState(0)
    let [text, setText] = useState("Button")

    function handleClick() {
        changeCount(count+1)
    }

    function handleInputChange (e: ChangeEvent<HTMLInputElement>) {
        if (e.target.value.length < 1) {
            setText("Button")
        }
        else {
            setText(e.target.value)
        }
    }
    const Theme = props.themeIs;

    return (
        <>
            {Theme === "Dark" ?
                <div className="h-screen flex flex-col items-center justify-center transition-all">
                    <h2 className="text-center text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-blue-50">{count}</h2>
                    <button onClick={handleClick}
                            className="flex text-5xl md:text-6xl lg:text-7xl xl:text-8xl justify-center border-8 rounded-2xl text-blue-50 border-blue-200">
                        {text}</button>
                    <input onInput={handleInputChange} className="flex items-center justify-center m-2"></input>
                </div>
                :
                <div className="h-screen flex flex-col items-center justify-center transition-all">
                    <h2 className="text-center text-6xl md:text-7xl lg:text-8xl xl:text-9xl">{count}</h2>
                    <button onClick={handleClick}
                            className="flex text-5xl md:text-6xl lg:text-7xl xl:text-8xl justify-center border-8 rounded-2xl border-amber-200">{text}</button>
                    <input onInput={handleInputChange} className="flex items-center justify-center m-2"></input>
                </div>
            }
        </>
    )
}

export {Btn}