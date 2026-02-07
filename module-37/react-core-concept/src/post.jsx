export default function Post({post}){
    const {title,body}=post
    return(
        <div className="friend">
            <p>Title: {title}</p>
            <p>Body: {body}</p>
        </div>
    )
}