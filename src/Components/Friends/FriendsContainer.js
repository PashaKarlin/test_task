
import { connect } from 'react-redux'
import Friends from './Friends'

let mapStateToProps = (state) => {
    return {
        friends: state.sidebar.friends,
    }
}

let FriendsContainer = connect(mapStateToProps)(Friends)

export default FriendsContainer;
