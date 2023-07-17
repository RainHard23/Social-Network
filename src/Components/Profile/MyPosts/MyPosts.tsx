import React, {ChangeEvent, useRef} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {MapDispatchPostsType, MapStatePostsType} from "./MyPostsContainer";

type ProfilePagePostProps = MapStatePostsType & MapDispatchPostsType
    // {
    // posts: PostType[]
    // addPostCallBack: (postMessage: string) => void
    // newPostText: string
    // updateNewPostText: (newText: string) => void
    // addPostAC?: () => void
   // dispatch: (action: DispatchPropsType) => void
// }



const MyPosts = (props: ProfilePagePostProps) => {
    let postsElements = props.posts.map((p, index) =>
        <Post
            key={index}
            message={p.message}
            likeCount={p.likesCount}/>)


    let addPost = () => {

            // props.addPostCallBack(props.newPostText)
         props.addPostAC?.()
    }

    const onPostChange =(e: ChangeEvent<HTMLTextAreaElement>)=> {

        props.updateNewPostText?.(e.currentTarget.value)
        // props.updateNewPostText(e.currentTarget.value)
        // props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: e.currentTarget.value})
    }

    return (
        <div className={s.mypostBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;