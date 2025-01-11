export const taskReducer = (state, action) => {
    console.log(state, action);

    switch (action.type) {
        case 'ADD_TASK':
            return [...state, { id: Date.now(), text: action.payload, completed: false }]

        case 'TOGGLE_TASK':
            return state.map((task) => task.id === action.payload ? { ...task, completed: !task.completed } : task)
        case 'DELETE_TASK':
            return state.filter(task => task.id !== action.payload)

        case 'UPDATE_TASK':
            return state.map(task => task.id === action.payload.id ? { ...task, text: action.payload.text } : task)

        default:
            return state;
    }
}