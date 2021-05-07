import './Private.css';
import SectionTitle from './SectionTitle';

function Private () {
    return (
        <>
        <div className="private">
            <SectionTitle name='Private'/>
            <div className="private-container">
                <div className="private-image"></div>
                <div className="private-text">
                    <h2>Email Required</h2>
                    <p>Only your email is required to use vorganiser.
                        All accounts are created using 0Auth on sign up.
                        No information is collected from users. You are not secretly a product like 
                        swith most free apps. I need to know the amount of users so it looks good in my cv.
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Private;