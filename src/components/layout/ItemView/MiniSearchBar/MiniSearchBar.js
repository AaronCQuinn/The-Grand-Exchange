import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { data } from '../../Homepage/Search/names-ids'
import './MiniSearchBar.css'
import {AiOutlineHeart} from 'react-icons/ai'

const MiniSearchBar = () => {
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
        <div className='mini-search-bar-flex'>
            <form onSubmit={onSubmit}>
                <input type="text" className='mini-search-box' placeholder='Enter an item...' onChange={(e) => {setSearchTerm(e.target.value.toLowerCase())}} />
            </form>
            <AiOutlineHeart size={35}/>
        </div>
    )
}

export default MiniSearchBar