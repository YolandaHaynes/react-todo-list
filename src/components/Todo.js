//one of the components

//a function for the Todo which is an component
const Todo = ({ todo }) => {
//can't find the todo.item
    return (
        <div>
            <h2>{todo.item}</h2>
        </div>
    )
}


//export is like 'return' for an api
export default Todo

