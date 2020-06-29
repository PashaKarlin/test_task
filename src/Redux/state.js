import { rerenderEntireTree } from "../render";

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you', likesCount: 12 },
            { id: 2, message: 'Its my first post', likesCount: 21 }
        ]
    },
    dialogsPage: {
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How are you?' },
            { id: 3, message: 'Yo' },
            { id: 4, message: 'Yewwww' },
            { id: 5, message: 'HAllooooo' },
        ],
        dialogs: [
            { id: 1, name: 'Pasha' },
            { id: 2, name: 'Mitya' },
            { id: 3, name: 'Tolik' },
            { id: 4, name: 'Sanya' },
            { id: 5, name: 'Vlad' },
        ],
    },
    sidebar: {
        friends: [
            { name: 'Tolya', age: '20', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Ski_trail_rating_symbol-green_circle.svg/240px-Ski_trail_rating_symbol-green_circle.svg.png' },
            { name: 'Max', age: '20', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Ski_trail_rating_symbol-green_circle.svg/240px-Ski_trail_rating_symbol-green_circle.svg.png' },
            { name: 'Mitya', age: '20', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Ski_trail_rating_symbol-green_circle.svg/240px-Ski_trail_rating_symbol-green_circle.svg.png' },
        ]
    },
}

export let addPostGlobal = (newMessage) =>{
    let newPost = {
        id:5,
        message : newMessage,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;
