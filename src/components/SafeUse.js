import './SafeUse.css';

import SectionTitle from './SectionTitle';

function SafeUse () {
    return (
        <>
        <div className="safeuse">
            <SectionTitle name='Safe To Use'/>
            <div className="safeuse-container">
                <div className="safeuse-text">
                    <h2>Delete Manually</h2>
                    <p>Voltofold prevents errors<br/> that can delete your<br/> precious memories 
                        by only<br/> copying information. You<br/> are in charge of deleting the photos 
                        in the original<br/> destination.
                    </p>
                </div>
                <div className="safeuse-image"></div>
            </div>
        </div>
        </>
    )
}

export default SafeUse;