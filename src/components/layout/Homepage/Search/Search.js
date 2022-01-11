import { React, useState} from 'react'
import './Search.css'
import { data } from './names-ids';
import { useNavigate } from 'react-router-dom'

// Sprite API endpoint https://secure.runescape.com/m=itemdb_oldschool/obj_sprite.gif?id=4151

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    async function onSubmit(e) {
        e.preventDefault(); // Prevent default form submission.
        const itemToFind = (data.find(item => item.search_term === searchTerm)); // Search items for metadata.
        if (itemToFind) {
            navigate(`/item/${itemToFind.id}`, {replace: true});
        }
    }

    return (
        <div>
            <div className="homepage-title">The Grand Exchange</div>
            <form className="search-box" onSubmit={onSubmit}>
                <input type="text" placeholder="Enter an item..." className='homepage-search' 
                onChange={(e) => {setSearchTerm(e.target.value.toLowerCase())}} />
                <button type="submit" className='homepage-submit'>Submit</button>
            </form>
        </div>
    )
}

export default Search