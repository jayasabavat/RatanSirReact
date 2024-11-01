import PostBody from "./PostBody";
import PostTitle from "./PostTitle";

function Post({title,body}){
    return(
        <>
        <PostTitle title={title}/>
        <PostBody body={body}/>
        </>
    )
}
export default Post;