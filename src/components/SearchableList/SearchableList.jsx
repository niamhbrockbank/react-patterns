import { useRef, useState } from "react"

export default function SearchableList({items, itemKeyFn, children}) {
    const lastChange = useRef()
    const [searchTerm, setSearchTerm] = useState('')

    function handleChange(event){
        if (lastChange.current) {
            clearTimeout(lastChange.current)
        }

        lastChange.current = setTimeout(() => {
            lastChange.current = null 
            setSearchTerm(event.target.value)
        }, 500)
    }

    const searchResults = items.filter(item => JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase()))

    return <div className="searchable-list">
        <input type="search" placeholder="Search" onChange={handleChange}/>
        <ul>
            {searchResults.map((item, i) => 
                <li key={itemKeyFn(item)}>{children(item)}</li>
            )}
        </ul>
    </div>
}