import React, {useMemo, useState} from "react";
import {log} from "util";

export default {
    title: "useState.memo demo",
}

function generateData(){
    console.log("generate data")
    return 1;
}

export const Example1 = () => {
    console.log("Example1")

    // const initValue = useMemo(generateData, []);

    const [counter, setCounter] = useState(generateData);
    const inc = () => {
        setCounter(changer);
    }
    const changer = (state: number) => state + 1;

    return <>
        <button onClick={inc}>+</button>
        {counter}
    </>
}