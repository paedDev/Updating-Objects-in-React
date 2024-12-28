
import React, {useState} from "react"
import styles from "./Objects.module.css"

function Object () {

    const [car, setCar] = useState({
        year:2024,
        make:"Ford",
        model:"Mustang",
    });
    const [carModel,setCarModel] = useState("")

    const handleYearChange = (e) =>{
        setCar(c => ({...car, year:e.target.value}))
    }
    const handleMakeChange = (e) =>{
       setCar(c => ({...car , make:e.target.value}))
    }

    const handleModelChange = (e) =>{
        setCar(c ({...car,model: e.target.value}))
    }
    const handleCarModelChange = (e) =>{
        setCarModel(c => e.target.value)
    }

    return (
        <>
        <div>
            <p>Your favorite car is {car.year} {car.make} {car.model}</p>

            <input type="number" value = {car.year} onChange={handleYearChange}/>
            <input type="text" value = {car.make} onChange={handleMakeChange}/>
            <input type="text" value = {car.model} onChange={handleModelChange}/>
       
            <div>
            <select value={carModel} onChange={handleCarModelChange}>
                <option value="">Select a model</option>
                <option value="Pagani">Pagani</option>
                <option value="Lambo">Lambo</option>
                <option value="Kuliglig">Kuliglig</option>
            </select>
            <label>Select a car</label>
           
            <p>You pick: {carModel}</p>
            </div>
        </div>
        
        
        </>
    )
}

export default Object;