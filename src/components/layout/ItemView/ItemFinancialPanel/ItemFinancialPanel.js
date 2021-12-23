import {React} from 'react'
import './ItemFinancialPanel.css'
import Coins from './800px-Coins_detail.png'

const ItemFinancialPanel = ({ finPanelData, itemVolumeData, geLimit }) => {
    function numberWithCommas(x) {
        if (x) return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <div className='item-financial-panel'>
            <div className="financial-left-col">
                <div className="item-name">
                    Financial Information
                </div>
                <img src={Coins} alt='Could not get resource.'/>
            </div>
            <div className="fin-info-grid">
                <div className="fin-grid-item">Buy Price: {numberWithCommas(finPanelData.high)}</div>
                <div className="fin-grid-item">Sell Price: {numberWithCommas(finPanelData.low)}</div>
                <div className="fin-grid-item">Margin: {numberWithCommas(finPanelData.high - finPanelData.low)}</div>
                <div className="fin-grid-item">Current Trade ROI: {(((finPanelData.high - finPanelData.low) / finPanelData.low) * 100).toFixed(2)}%</div>
                {itemVolumeData ? <div className="fin-grid-item">Daily Volume: {itemVolumeData[178].tradeVolume} </div> : null}
                <div className="fin-grid-item">Buy Limit ROI: {numberWithCommas((finPanelData.high - finPanelData.low) * geLimit)}</div>
            </div>
        </div>
    )
}




export default ItemFinancialPanel