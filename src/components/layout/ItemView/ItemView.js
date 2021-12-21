import React from 'react'
import Header from '../Homepage/Header/Header'
import ItemInfoPanel from './ItemInfoPanel/ItemInfoPanel'
import ItemFinancialPanel from './ItemFinancialPanel/ItemFinancialPanel'
import GraphPanel from './GraphPanel/GraphPanel'
import UserItemList from './UserItemList/UserItemList'
import './ItemView.css'
import '../Homepage/Header/Header.css'
import { useParams } from 'react-router-dom'

const ItemView = () => {
    const Params = useParams();
    return (
        <div className="item-view">
            <Header />
            <div className="grid-container">
                    <ItemInfoPanel />
                    <ItemFinancialPanel id={Params.id}/>
                    <GraphPanel />
                    <UserItemList />
            </div>
        </div>
    )
}

export default ItemView