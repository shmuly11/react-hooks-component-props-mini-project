function Article({title, date = "January 1, 1970", preview, minutes}){

    function emoji(){
        let count
        let emojis

        if(minutes < 30){
            count = Math.ceil(minutes/5)
            return emojis = "☕️".repeat(count)
        }else{
            count = Math.ceil(minutes/10)
            return emojis = "🍱".repeat(count)
        }
    }

    
    return(
        <article>
            <h3>{title}</h3>
            <small>{date} · {emoji()}{minutes} min read</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article