
import React, {useState} from "react";
import styles from "./PracticeObject.module.css"

function PracticeObject () {

    const [bmi, setBmi] = useState('')
    const [message,setMessage] =useState('')
    const [weight,setWeight] =useState(0)
    const [height,setHeight] =useState(0)
    
    const img = "";
    return (
        <>
        <div className={styles.BMI}>
            <h1>BMI CALCULATOR</h1>
            <form>
                <label >Weight(kg)</label>
                <input type="number" value={weight} />
                <br />
                <label >Height(m)</label>
                <input type="number" value={height}/>
            </form>

            <div>
                <button type="submit">Result</button>
            </div>

            <div>
                 <h3>Your BMI is : {bmi}</h3>
                 <p>{message}</p>
            </div>

            <div className="img-container"> 
                <img src="" alt="" />
            </div>
        </div>
        </>
    ) 


}

export default PracticeObject;