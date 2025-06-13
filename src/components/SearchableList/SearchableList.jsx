import { useState } from "react"

export default function SearchableList({items}) {
    const [searchTerm, setSearchTerm] = useState('')

    function handleChange(event){
        setSearchTerm(event.target.value)
    }

    const searchResults = items.filter(item => JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase()))

    return <div className="searchable-list">
        <input type="search" placeholder="Search" onChange={handleChange}/>
        <ul>
            {searchResults.map((item, i) => 
                <li key={`${i}-${item}`}>{item.toString()}</li>
            )}
        </ul>
    </div>
}