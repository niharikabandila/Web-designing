import React from 'react'
import Andhrabank from './Andhrabank'
import Corporationbank from './Corporationbank'

export default function Unionbank() {

    let initialdata = {
        name: "hello"
    }
    return (
        <div>
             <Andhrabank  location="Guntur" data={initialdata}/>
             <Corporationbank location="Kakinada" data={initialdata}/>
        </div>
    )
}
