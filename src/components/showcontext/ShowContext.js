import './ShowContext.css'
import Model from "../model/Model";
import {getContextWithMistakes, getDefaultContext, getWordSentenceContext} from "../../contextholder/contextHolder";

function ShowContext() {
    return(
        <div className={'show-context-container'}>
            <div className={'show-context-container-item'}>
                <Model modelTitle={"Стандартная модель"} modelContext={getDefaultContext()}/>
            </div>
            <div className={'show-context-container-item'}>
                <Model modelTitle={"Модель с ошибками"} modelContext={getContextWithMistakes()}/>
            </div>
            <div className={'show-context-container-item'}>
                <Model modelTitle={"Слово - предложение"} modelContext={getWordSentenceContext()}/>
            </div>
        </div>
    )
}

export default ShowContext