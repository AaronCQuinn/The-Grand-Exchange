import {React, useState, useEffect} from 'react'
import './ItemFinancialPanel.css'
import Coins from './800px-Coins_detail.png'
import { wikiLatestId, grabItemVolume } from '../../../../osrsWikiAPI/osrsWikiApi'
import { SpinnerInfinity } from 'spinners-react'

const ItemFinancialPanel = ({ id }) => {
    const [finPanelData, setFinPanelData] = useState();
    const [itemVolumeData, setItemVolumeData] = useState();

    /* Note for Esteban:
    Works as intended currently. Problem being I'm unsure in what situations using async / not using async
    is considered good or bad practice. Until now almost every code example I've seen where using an async
    call is applicable, it is used. Without using an async/await call, I force the component to wait for the 
    information rather then let the code run. Unsure if this is good practice or could be changed for the 
    better, but what I wanted to happen works as intended with this setup!
    */
    useEffect(() => {
        wikiLatestId(id)
        .then(
            response => (setFinPanelData(response), console.log(response))
        )
        grabItemVolume(id)
        .then(
            response => (setItemVolumeData(response))
        )
    }, [])

    function numberWithCommas(x) {
        if (x) return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    if (itemVolumeData === undefined) { 
        return <SpinnerInfinity style={{margin: 'auto', width: 'auto', height: "200px", padding: '10px'}}/>
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
                    <div className="fin-grid-item">Daily Volume: {itemVolumeData[178].tradeVolume} </div>
                    <div className="fin-grid-item">Maximum ROI: {(finPanelData.high - finPanelData.low)}</div>
                </div>
            </div>
        )
    }
}

export default ItemFinancialPanel