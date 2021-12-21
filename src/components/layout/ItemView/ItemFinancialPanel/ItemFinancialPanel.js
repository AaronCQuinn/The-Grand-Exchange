import {React, useState, useEffect} from 'react'
import './ItemFinancialPanel.css'
import Coins from './800px-Coins_detail.png'
import { wikiLatestId } from '../../../../osrsWikiAPI/osrsWikiApi'
import { SpinnerInfinity } from 'spinners-react'
import axios from 'axios'

const ItemFinancialPanel = ({ id }) => {
    const [finPanelData, setFinPanelData] = useState();
    const [itemVolumeData, setItemVolumeData] = useState();

    async function grabFinPanelData() {
        await wikiLatestId(id)
        .then(response => {
            setFinPanelData(response);
        })
    }
    
    async function grabItemVolume() {
        await axios.get(`http://localhost:5000/api/item/${id}`)
        .then(response => {
            setItemVolumeData(response);
        })
    }

    function numberWithCommas(x) {
        if (x) return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    if (itemVolumeData === undefined) { 
        return <SpinnerInfinity style={{margin: 'auto'}}/>
    } else {
        return (
            <div className='item-financial-panel'>
                <div className="financial-left-col">
                    <div className="item-name">
                        Financial Information
                    </div>
                    <div className="img-div" style={{backgroundImage: `url(${Coins})`}}></div>
                </div>
                <div className="fin-info-grid">
                    <div className="fin-grid-item">Buy Price: {numberWithCommas(finPanelData.high)}</div>
                    <div className="fin-grid-item">Sell Price: {numberWithCommas(finPanelData.low)}</div>
                    <div className="fin-grid-item">Margin: {numberWithCommas(finPanelData.high - finPanelData.low)}</div>
                    <div className="fin-grid-item">Current Trade ROI: {(((finPanelData.high - finPanelData.low) / finPanelData.low) * 100).toFixed(2)}%</div>
                    <div className="fin-grid-item">Daily Volume: </div>
                    <div className="fin-grid-item">Potential Maximum ROI:</div>
                </div>
            </div>
        )
    }
}

export default ItemFinancialPanel