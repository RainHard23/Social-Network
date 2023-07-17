import React from "react";

import {addPostAC,} from "../../../redux/store";
import MyPosts from "./MyPosts";
import {AppStateType, DispatchType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {PostType} from "../../../redux/profile-reducer";


// const MyPostsContainer = () => {
//
//
//     // let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likesCount}/>)
//
//
//     return (
//         <StoreContext.Consumer>
//             {
//             (store) => {
//                 const state = store.getState()
//                 let addPost = (newPostText: string) => {
//                     store.dispatch(addPostAC(newPostText))
//                 }
//                 const onPostChange = (newText: string) => {
//                     store.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: newText})
//                 }
//
//                 return <MyPosts posts={state.profilePage.posts}
//                                 newPostText={state.profilePage.newPostText}
//                                 addPostAC={addPost}
//                                 updateNewPostText={onPostChange}/>
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state: AppStateType):MapStatePostsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: DispatchType): MapDispatchPostsType => {
    return {
        updateNewPostText: (newText: string) => {
            dispatch({type: "UPDATE-NEW-POST-TEXT", newText: newText})
        },
        addPostAC: () => {
            dispatch(addPostAC())
        }
    }
}

export type MapStatePostsType = {
    posts: PostType[]
    newPostText: string


}
export type MapDispatchPostsType = {
    updateNewPostText?: (newText: string) => void
    addPostAC?: () => void
}

const MyPostsContainer
    = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer