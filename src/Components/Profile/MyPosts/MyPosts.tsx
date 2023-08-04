import React, {ChangeEvent, useRef} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {MapDispatchPostsType, MapStatePostsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/Validators";
import {FormControl} from "../../../Components/common/FormsControls/FormsControls";


type ProfilePagePostProps = MapStatePostsType & MapDispatchPostsType

const maxLength10 = maxLengthCreator(10)
let AddNewPostForm: React.FC<InjectedFormProps<AddPostFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText' component={FormControl}
                       validate={[required, maxLength10]}
                       elementType='textarea'

                />
            </div>
            <div>
                <button>Add post</button>
            </div>
            <button>Remove</button>
        </form>
    )
}
let AddNewPostFormRedux = reduxForm<AddPostFormType>({form: "ProfileAddNewPostForm"}) (AddNewPostForm)

const MyPosts = React.memo((props: ProfilePagePostProps) => {
    let postsElements = props.posts.map((p, index) =>
        <Post
            key={index}
            message={p.message}
            likeCount={p.likesCount}/>)


    let addPost = (values: AddPostFormType) => {
         props.addPostAC?.(values.newPostText)
    }


    return (
        <div className={s.mypostBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={addPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
})

type AddPostFormType = {
    newPostText: string
}



export default MyPosts;