import React from 'react'
import './ItemInfoPanel.css'
import { data } from '../../Homepage/Search/names-ids';
import { useParams } from 'react-router-dom';

const StaticInfoPanel = () => {
    const paramId = useParams();
    // eslint-disable-next-line
    const staticData = data.find(item => item["id"] == paramId.id);
    const nameForUrl = staticData.name.replace(/ /g, "_");
    const imgUrl = `url(https://oldschool.runescape.wiki/images/thumb/3/30/${nameForUrl}_detail.png/800px-${nameForUrl}_detail.png?)`

    return (
        <div className='static-info-panel'>
            <div className="static-left-col">
                <div className="item-name">
                    {staticData.name}
                </div>
                <div className="item-id">
                    Item ID: {staticData.id}
                </div>
                <div className="img-div" style={{backgroundImage: imgUrl}}></div>
            </div>
            <div className="static-right-col">
                <div className='examine-text-box' style={{paddingLeft: '15px'}}>
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