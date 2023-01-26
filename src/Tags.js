import { useState } from 'react'

function Tags(){
    const [tags, setTags] = useState([
        "boomdotdev", "task", "tags", "react"
    ])
    return (
        <div className="tags">
            { tags.map((tag, index) => (
                <div className="tag-item" key={index}>
                    <span className="tag">#{tag}</span>
                    <span className="close">&times;</span>
                </div>
            )) }
            <input type="text" className="tags-input" placeholder="Type somthing" />
        </div>
    )
}

export default Tags