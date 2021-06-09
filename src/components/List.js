//one of the components and needed to connect to Todo section
import Todo from './Todo'

//function of List that is calling upon the component
const List = ({ todos }) => {
    return (
      //using .map() method to create a new array
        <div>
          {todos.map((todo) => 
          //a 'key' is needed to iterate the items in the object of arrays
         //if there's no key, it won't work with an error of 
      //Warning: Each child in a list should have a unique "key" prop.
            <Todo key={todo.id} todo={todo} />
          )}  
        </div>
    )
}
//export is like 'return' for an api which returns this information to the Header 

export default List

