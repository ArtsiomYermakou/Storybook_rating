import React, {useState} from "react";

export default {
    title: "React.memo demo",
}

const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}


const UsersSecret = (props: { users: Array<string> }) => {
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}
const Users = React.memo(UsersSecret);

export const Example1 = () => {

    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Dimych", "Valera", "Artem", "Katya"]);

    const inc = () => {
        setCounter(counter + 1);
    }

    const addUser = () => {
        const newUsers: any = prompt("Name?" + new Date().getTime());
        setUsers([...users, newUsers]);
    }

    return <>
        <button onClick={inc}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}