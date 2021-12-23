// React imports.
import {React, useEffect, useState} from 'react'
// Component imports.
import Header from '../Homepage/Header/Header'
import ItemInfoPanel from './ItemInfoPanel/ItemInfoPanel'
import ItemFinancialPanel from './ItemFinancialPanel/ItemFinancialPanel'
import GraphPanel from './GraphPanel/GraphPanel'
// Css imports.
import './ItemView.css'
// Accessory imports.
import { useParams } from 'react-router-dom'
import { data } from '../Homepage/Search/names-ids';
import { SpinnerCircular } from 'spinners-react'
import { wikiLatestId, grabItemVolume, wikiTimeseries } from '../../../osrsWikiAPI/osrsWikiApi'

const ItemView = () => {
    const [itemWikiData, setItemWikiData] = useState();
    const [itemVolumeData, setItemVolumeData] = useState();
    const [itemGraphData, setItemGraphData] = useState();
    const Params = useParams();
    const staticData = data.find(item => item["id"] === parseInt(Params.id));

    useEffect(() => {
        wikiLatestId(Params.id)
        .then(response => setItemWikiData(response))
        grabItemVolume(Params.id)
        .then(response => setItemVolumeData(response))
        wikiTimeseries(Params.id, '24h')
        .then(response => setItemGraphData(response))
    }, [Params.id])

    if (itemVolumeData && itemWikiData && itemGraphData) {
        return (
            <div className="item-view">
                <Header />
                <div className="grid-container">
                    <ItemInfoPanel staticData={staticData} />
                    <ItemFinancialPanel id={Params.id} finPanelData={itemWikiData} itemVolumeData={itemVolumeData} geLimit={staticData.limit}/>
                    <GraphPanel id={Params.id} timeSeriesData={itemGraphData} itemName={staticData.name}/>
                </div>
            </div>
        )
    } else {
        return (
            <div className="item-view">
                <Header />
                <SpinnerCircular style={{minHeight: '100vh', margin: 'auto', width: "100px", height: "100px"}} />
            </div>
        )
    }
}

export default ItemView