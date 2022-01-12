function App() {
    /* const title = 'Blog Post'
    const body = 'This is my blog post'
    //List
    const comments = [
        {id: 1, text: 'Comment 1'},
        {id: 2, text: 'Comment 2'},
        {id: 3, text: 'Comment 3'}
    ]

    const loading = false
    const showComments = true

    if (loading) {
        return (<h1>Loading...</h1>)
    }

    const commentBlock = (<div className="comments">
        <h3>Comments ({comments.length})</h3>
        <ul>
            {comments.map((comment, index) => (
                 // 'keys must be unique
                <li key={index}>{comment.text}</li>
            ))}
        </ul>
    </div>)

    return (
        <div className="container">
            <h1>{title}</h1>
            <p>{body}</p>

            {showComments && commentBlock} 
        </div>
    ) */

    return (
        // Elements must be part of a single parent element (allows to include multiple lines)
        <div className="container">
            <h1>My App</h1>
            
        </div>
    )
}

export default App;