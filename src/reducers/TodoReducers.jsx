

const InitialValue = {
  Todo: []
}

export const TodoReducer=(state= InitialValue, action)=>{

  switch(action.type){
    case "ADDTODO":
      return {...state, Todo: [...state.Todo, action.payload]}
    case "REMOVETODO":
      return state.Todo.filter((_, index) => index !== action.payload);
    default:
      return state
  }

}


