import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from '@storybook/addon-actions';

export default {
    title: 'input',
    // component: onOff,
};

export const UncontrolledInput = () => <input/>


export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("")
    return <><input onChange={(e) => {
        const actualValue = e.currentTarget.value;
        setValue(actualValue);
    }}/> - {value}  </>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("")

    return <><input /><button onClick={()=>{ setValue("dsad")}}>save</button> - actual value: {value}  </>
}

export const ControlledInput = () => {

    const [parentValue, setParentValue] = useState("")

    const onChange = (e:ChangeEvent<HTMLInputElement>)=> {setParentValue(e.currentTarget.value)}

    return <input value={parentValue} onChange={onChange} />

}
export const ControlledCheckbox = () => {

    const [parentValue, setParentValue] = useState(true)

    const onChange = (e:ChangeEvent<HTMLInputElement>)=> {
        setParentValue(e.currentTarget.checked)
    }

    return <input type="checkbox" checked={parentValue} onChange={onChange} />

}
export const ControlledSelect = () => {

}


export const СontrolledInputWithFixedValue = () => <input value={"Ermakov Artem"}/>

