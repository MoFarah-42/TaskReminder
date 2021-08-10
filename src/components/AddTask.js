import { useState } from 'react'

const AddTask = ({onAdd}) => {
  const[text, setText] = useState('')
  const[day, setDay] = useState('')
  const[reminder, setReminder] = useState(false)

  const onSubmit = (e)=>{
    e.preventDefault()

    // Text validation
    if(!text){
      alert("Please add a task")
      return
    }

    // Call onAdd, pass in an object
    onAdd({text, day, reminder})

    // Clear the form
    setText('')
    setDay('')
    setReminder(false)
  }


  return (
    <form className = "add-form" onSubmit={onSubmit}>
      <div className = 'form-control'>
        <label>Task</label>
        <input 
        type="text" 
        placeholder='Add Task'
        value={text}
        onChange={(e) => setText(e.target.value)} />
      </div>
      <div className = 'form-control'>
        <label>Day & Time</label>
        <input 
        type="text" 
        placeholder='Add Day & Time'
        value={day}
        onChange={(e) => setDay(e.target.value)} />
      </div>
      <div className = 'form-control form-control-check'>
        <label>Set Reminder</label>
        <input 
        type="checkbox"
        checked = {reminder} // unchecks the box
        placeholder='Add Task'
        value={reminder}
        onChange={(e) => setReminder(e.currentTarget.checked)} 
        />
      </div>

      <input type='submit' value ='Save Task' className = 'btn btn-block' />
    </form>
  )
}

export default AddTask