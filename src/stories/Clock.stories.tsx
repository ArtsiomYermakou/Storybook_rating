import React from "react";
import {Clock} from "../components/Clock/Clock";

export default {
    title: "Clock",
    component: Clock,
};

export const BaseAnalogExample = () => {
    return <Clock mode={"analog"} />
};

export const BaseDigitalExample = () => {
    return <Clock mode={"digital"}/>
};