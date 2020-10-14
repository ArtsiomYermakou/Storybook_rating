import React, {useEffect, useState} from "react";

type PropsType = {
    mode?: "analog" | "digital"
}

const get2digitsString = (num: number) => num < 10 ? "0" + num : num

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => {
            clearInterval(intervalID)
        }
    }, []);

    let view;

    switch (props.mode) {
        case "analog":
            view = <AnalogClockView date={date}/>
            break;
        case "digital":
        default:
            view = <DigitalClockView date={date}/>
    }
    return <div>
        {view}
    </div>
}

export type ClockViewPropsType = {
    date: Date
}

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return <><span>{get2digitsString(date.getHours())}</span>
        :
        <span>{get2digitsString(date.getMinutes())}</span>
        :
        <span>{get2digitsString(date.getSeconds())}</span>
    </>
}

export const AnalogClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return <span>ANALOG</span>
}