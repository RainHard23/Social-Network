import React from "react";
import s from './Post.module.css'

type PostTypeProps = {
    message: string
    likeCount: number
}
const Post = (props: PostTypeProps) => {
    return (
                    <div className={s.item}>
                        <img src="https://slovnet.ru/wp-content/uploads/2019/01/53-9.jpg" alt=""/>
                        {props.message}
                        <div><span>{props.likeCount}</span></div>
                    </div>
)
}

export default Post;