import React, {useEffect, useState} from "react";

export default {
    title: "useEffect.memo demo",
}

export const SimpleExample = () => {
    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);

    console.log("Simple Example");

    useEffect(() => {
        console.log("useEffect every render");
        document.title = counter.toString();
    })

    useEffect(() => {
        console.log("useEffect only first render(componentDidMount)");
        document.title = counter.toString();
    }, [])

    useEffect(() => {
        console.log("useEffect first render and every counter change");
        document.title = counter.toString();
    }, [counter])


    return <>
        Hello, {counter} {fake}
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
        <button onClick={() => setFake(fake + 1)}>fake+</button>
    </>
}

export const SetTimeOutExample = () => {
    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);

    console.log("SetTimeOutExample");

    useEffect(() => {

        setInterval(() => {
            console.log("tick" + counter)
            setCounter(counter + 1);
        }, 1000000);

    })
    return <>
        Hello, counter: {counter} - fake: {fake}
        <hr/>
    </>
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1);

    console.log("Rendered");

    useEffect(() => {
        console.log("effect done " + counter);

        return () => {
            console.log("Reset Effect");
        }
    }, [counter])

    const increase = () => {setCounter(counter + 1)}

    return <>
        Hello, counter: {counter} <button onClick={increase}>+</button>
    </>
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState(1);

    console.log("Rendered " + text);

    useEffect(() => {
        window.addEventListener("keypress", (e) => {
            console.log(e.key);
        })
    }, [])

    return <>
        Hello, counter: {text}
    </>
}


