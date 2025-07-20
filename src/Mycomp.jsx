import React, {useState} from 'react';

function Mycomp(){

    const [name,setName] = useState("Guest");
    const [age,setage] = useState(0);
    const updatename = () => {
        // name="Yash";
        // console.log(name);
        setName("Yash");
        setage(20);

    }
    return(
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <button onClick = {updatename}>set Name</button>
            {/* <button onClick = {updatename}>set Age</button> */}
        </div>);

   

}
export default Mycomp