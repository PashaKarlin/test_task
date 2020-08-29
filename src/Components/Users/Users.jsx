import React from 'react'
import userPhoto from '../assets/images/user.png'
import styles from './Users.module.css'



let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let removedPages = pages.splice(0, 12)
    
    return <div>
        <div>
            {removedPages.map(page => {
                return <div className = {styles.pageNumber}><span className={props.currentPage === page && styles.selectedPage}
            onClick={(e) => { props.onPageChanged(page) }}>{page + " "}</span></div>
            })}
        </div>
        {
            props.users.map(user => (
                <div key={user.id}>
                    <span>
                        <div>
                            <img alt={'#'} src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto} />
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => { props.unfollow(user.id) }}> Unfollow </button>
                                : <button onClick={() => { props.follow(user.id) }}> Follow </button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{"user.location.city"}</div>
                            <div>{"user.location.country"}</div>
                        </span>
                    </span>
                </div>))
        }
    </div>
}
export default Users;