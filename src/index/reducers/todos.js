const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      debugger;

      console.log(state);
      console.log(action.id);
      console.log(action.text);

      console.log('ADD_TODO in todos.js');

      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map(todo => 
        todo.id === action.id ? { ...todo, completed: !todo.completed }  : todo
      );
    default:
      return state;
  }
};

export default todos;