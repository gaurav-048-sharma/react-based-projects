import {useState} from "react";
function init() {
    return Math.random();
}

export default function Counter() {
    //let [stateVaribale, setStateVariable] = useState(0);
    let [count, setCount] = useState(init);
    let inCount = () => {
    //     setCount((currCout) => {
    //         return currCout+1
    //     });
    //     // setCount((currCout) => {
    //     //     return currCout+1
    //     // });
    setCount(init);
    }
    // let count = 0;
    // function inCount() {
    //     count +=1;
    //     //State.StateCounter ={count};
    //     console.log(count);
    // }
    return(
        <div>
            <h3>Count {count}</h3>
            <button onClick={inCount}>Increase Count</button>
        </div>
        // <div>
        // //     <h3>Count</h3>
        // //     <button>Increase Count</button>
        // </div>
    )
}