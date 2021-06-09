//one of the components and needed to connect to useState react
import { useState } from 'react'

//a function for the AddTodo which is an component
const AddTodo = ({ onAdd }) => { 
    //a destructuring variable
    const [item, setItem] = useState('')

    //e is for event
    //a function that prevents page from refreshing on the click event (submit) and prevents from doing a GET
    const onSubmit = (e) => {
        e.preventDefault()
        onAdd({item})

        setItem('')
    }

    //taking the submit click event as a form
    //gotta look into onSubmit, don't know what that is
    return (
        <form onSubmit={onSubmit}>
            <label>Add Todo:</label>
            <input 
                type="text" 
                placeholder="Todo Item"
                value={item}
                //gotta look into onChange, don't know what that is
                onChange={ (e) => setItem(e.target.value)}
            /> 
            <input type="submit" value="Add Todo" />
        </form>
    )
}

//export is like 'return' for an api which returns this information to the AddTodo 
export default AddTodo
