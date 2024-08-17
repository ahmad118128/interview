import React, { useState } from 'react'

const Button = () => {
    const [change, setChange] = useState(false)

    const changeHandel=()=>{
        setChange(!change)
    }
  return (
    <div>
        <button onClick={changeHandel}>{!change ? "of" : "on"}</button>
    </div>
  )
}

export default Button