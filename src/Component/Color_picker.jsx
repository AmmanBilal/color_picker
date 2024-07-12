import React,{useState} from 'react'

const Color_picker = () => {

    const [color,Setcolor]=useState("#FFFFFF")


    const handle_color_change=(event)=>{
            Setcolor(event.target.value)
    }
  return (
    <div className='color_picker_container'>
            <h1>Color Picker</h1>
            <div className="color_display" style={{backgroundColor: color}}>
                <p>Selcted color:{color}</p>
            </div>
            <label>Select a Color:  </label>
            <input type="color" value={color} onChange={handle_color_change} />
    </div>
  )
}

export default Color_picker