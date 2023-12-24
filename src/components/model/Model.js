import './Model.css'
import {useState} from "react";

function Model(props) {
    let { modelTitle, modelContext } = props

    const [isHidden, hasHidden] = useState(true)

    return(
        <div className={'model-container'}>
            <div className={'model-container-item show-button-container'}>
                <button className={'app-button'} onClick={() => hasHidden(!isHidden)}>{modelTitle}</button>
            </div>
            <div className={'model-container-item model-context-container'} hidden={isHidden}>
                {modelContext}
            </div>
        </div>
    )
}

export default Model