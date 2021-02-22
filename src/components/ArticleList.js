import blogData from "../data/blog"
import Article from './Article'


function ArticleList(){
    const list = blogData.posts.map(post => {
        return <Article 
        key={post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}
        minutes={post.minutes}
        />
    })
    return(
        <main>
            {list}
        </main>
    )
}

export default ArticleList