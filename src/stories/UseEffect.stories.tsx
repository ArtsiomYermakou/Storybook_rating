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
    const Time = () => {
        let a = new Date();



        const hours = a.getHours()
        const minutes = a.getMinutes()
        const seconds = a.getSeconds()

        setInterval(() => {

        }, 1000);

        return (
            <>
                {`Время: ${hours}: ${minutes}: ${seconds} `}
                </>
        )


    }


    return <>
        Hello, counter: {counter} - fake: {fake}<hr/>
        <Time/>
        {/*<button onClick={() => setCounter(counter + 1)}>counter+</button>*/}
        {/*<button onClick={() => setFake(fake + 1)}>fake+</button>*/}
    </>
}


