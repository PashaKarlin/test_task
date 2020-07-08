
let initialState = {
    friends: [
        { name: 'Tolya', age: '20', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Ski_trail_rating_symbol-green_circle.svg/240px-Ski_trail_rating_symbol-green_circle.svg.png' },
        { name: 'Max', age: '20', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Ski_trail_rating_symbol-green_circle.svg/240px-Ski_trail_rating_symbol-green_circle.svg.png' },
        { name: 'Mitya', age: '20', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Ski_trail_rating_symbol-green_circle.svg/240px-Ski_trail_rating_symbol-green_circle.svg.png' },
    ]
}

const sidebarReducer = (state = initialState, action) =>{
    return state;
}
export default sidebarReducer;