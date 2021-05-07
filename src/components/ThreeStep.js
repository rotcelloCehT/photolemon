import "./ThreeStep.css";
import SectionTitle from "./SectionTitle";


function ThreeStep () {
    return (
        <>
        <div className="threestep">
            < SectionTitle name="3 Step Process" />
            <div className="threestep-container">
                <div className="threestep-column">
                    <button className="column-button"> SOURCE </button>
                    <p>Select a folder<br/>containing the images<br/>you want to organise</p>
                    <div className="sd column-graphic"></div>
                </div>
                <div className="threestep-column">
                    <button className="column-button"> OUTPUT </button>
                    <p>Select the parent<br/>folder containing all<br/>your dated folders</p>
                    <div className="mouse column-graphic"></div>
                </div>
                <div className="threestep-column">
                    <button className="column-button"> ORGANISE </button>
                    <p>One click of a button<br/>and your photos will<br/>be sorted by date</p>
                    <div className="clock column-graphic"></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ThreeStep;