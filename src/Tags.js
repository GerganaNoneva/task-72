import { useState } from 'react'

function Tags(){
    const [tags, setTags] = useState([
        "boomdotdev", "task", "tags", "react"
    ])
    return (
        <div className="tags">
            { tags.map((tag, index) => (
                <div className="tag" key={index}>
                    <span className="tag">#{tag}</span>
                </div>
            )) }
        </div>
    )
}

export default Tags

//      <input type="text" className="tags-input" placeholder="Type somthing" />
//                 <span className="close">&times;</span>