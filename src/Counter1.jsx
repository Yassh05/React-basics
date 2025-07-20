import React, {useState} from 'react';

function Counter(){

    const [number,setnumber] = useState(0);

    const inc = () => {
        setnumber(number + 1);
    }
    const reset= () => {
        setnumber(0);
    }
    const dec= () => {
        setnumber(number - 1);
    }

    return(
        <div>
            <h1>{number}</h1>
            <button onClick={inc}>Increment</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}
export default Counter; 