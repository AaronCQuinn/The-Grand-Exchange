import React from 'react'
import './ItemInfoPanel.css'


const StaticInfoPanel = ({ staticData }) => {
    // eslint-disable-next-line
    const nameForUrl = staticData.name.replace(/ /g, "_");
    const imgUrl = `https://oldschool.runescape.wiki/images/thumb/3/30/${nameForUrl}_detail.png/800px-${nameForUrl}_detail.png?`

    return (
        <div className='static-info-panel'>
            <div className="static-left-col">
                <div className="item-name">
                    {staticData.name}
                </div>
                <div className="item-id">
                    Item ID: {staticData.id}
                </div>
                <img src={imgUrl} alt='Could not get resource.'/>
            </div>
            <div className="static-right-col">
                <div className='examine-text-box'>
                    <div style={{textDecoration: 'underline'}}>Examine Text</div>
                    <br />
                    {staticData.examine}
                </div>
                <div className="static-right-col-bot">
                    <div className='static-info-item'>Members Only?
                        <div> {staticData.members ? ' Yes' : " No"}</div> 
                    </div>
                    <div className='static-info-item'>High Alch: 
                        <div>{staticData.highalch}</div> 
                    </div>
                    <div className='static-info-item'>GE Buy Limit: 
                        <div>{staticData.limit}</div> 
                    </div>
                    <div className='static-info-item'>Low Alch:
                        <div>{staticData.lowalch}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StaticInfoPanel