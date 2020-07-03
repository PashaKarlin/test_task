
let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you', likesCount: 12 },
                { id: 2, message: 'Its my first post', likesCount: 21 }
            ],
            newPostText: ''
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
    },
    _callSubscriber() {
        console.log('Чисто ради наблюдателя')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action){
        if (action.type === 'ADD-POST'){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state );
        }else if(action.type === 'UPDATE-NEW-POST-TEXT'){   
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    },
    
}


export default store;









