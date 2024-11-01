import Post from "./Post";


function Blog({title,body}){
    return(
        <>
        <Post title={title} body={body}/>
        </>
    )

}
export default Blog;