import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
};

const callback = action("accordion mode change event fired");
const onClickCallback = action("accordion mode change event fired");

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback} items={[]} onClick={onClickCallback}/>
export const UsersUncollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} onChange={callback} items={[{title: "Users", value: 1}, {title:"More Users", value: 2}]} onClick={onClickCallback}/>

export const ChangeMode = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion titleValue={"Users"} collapsed={value} onChange={() => setValue(!value)} items={[{title: "Users", value: 1}, {title:"More Users", value: 2}]} onClick={onClickCallback}/>
};
