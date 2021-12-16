import React from 'react'
import Header from '../Homepage/Header/Header'
import StaticInfoPanel from './StaticInfoPanel/StaticInfoPanel'
import GraphPanel from './GraphPanel/GraphPanel'
import UserItemList from './UserItemList/UserItemList'
import './ItemView.css'
import '../Homepage/Header/Header.css'
import Background from '../Homepage/Background/Background'

const ItemView = () => {
    return (
        <div className="item-view">
            <Header />
            <Background />
            <div className="grid-container">
                    <StaticInfoPanel />
                    <div className="grid-row-span-2">
                        <UserItemList />
                    </div>
                    <GraphPanel />
            </div>
        </div>
    )
}

export default ItemView