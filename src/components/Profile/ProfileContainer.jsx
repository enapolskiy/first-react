
import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRederect} from "../../HOC/withAuthRederect";
// import {usersAPI} from "../../api/api";



class ProfileContainer extends React.Component {
    componentDidMount() {
       let userId = this.props.match.params.userId;
       if (!userId) {
           userId = 2
       }
        this.props.getUserProfile(userId)
        // usersAPI.getProfile(userId).then (response => {
        //         this.props.setUserProfile (response.data);
        //     });
    }

    render () {
        return (
        <Profile {...this.props} profile={this.props.profile} /> )
    }


}
let AuthRedirectComponent = withAuthRederect(ProfileContainer)

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});



let WithUserDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect (mapStateToProps, {getUserProfile}) (WithUserDataContainerComponent) ;