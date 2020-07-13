import React from 'react'
import styles from './Users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1, photo: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg',
                    followed: true, fullName: 'Pasha', status: "i`m a creator", location: { city: "Odessa", country: 'Ukraine' }
                },
                {
                    id: 2, photo: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg',
                    followed: false, fullName: 'Yulia', status: "i`m a QA", location: { city: "Moscow", country: 'Russia' }
                },
                {
                    id: 3, photo: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg',
                    followed: true, fullName: 'Mitya', status: "i`m a UI designer", location: { city: "Poltava", country: 'Ukraine' }
                },
                {
                    id: 4, photo: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg',
                    followed: false, fullName: 'Tolya', status: "i`m a telecom ingeneer", location: { city: "Athens", country: 'Greece' }
                },
                {
                    id: 5, photo: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg',
                    followed: true, fullName: 'Max', status: "i`m a developer", location: { city: "Kyiv", country: 'Ukraine' }
                },
            ]
        )
    }

    return <div>{
        props.users.map(user => (
            <div key={user.id}>
                <span>
                    <div>
                        <img alt={'#'} src={user.photo} className={styles.userPhoto} />
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => { props.unfollow(user.id) }}> Unfollow </button>
                            : <button onClick={() => { props.follow(user.id) }}> Follow </button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.location.city}</div>
                        <div>{user.location.country}</div>
                    </span>
                </span>
            </div>))

    }
    </div>

}

export default Users;