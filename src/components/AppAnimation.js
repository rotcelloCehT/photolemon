import { useState } from 'react';

import './AppAnimation.css';

import SectionTitle from "./SectionTitle";

import friends1 from '../images/friends-1.svg';
import friends2 from '../images/friends-2.svg';
import friends3 from '../images/friends-3.svg';
import friends4 from '../images/friends-4.svg';
import friends5 from '../images/friends-5.svg';
import friends6 from '../images/friends-6.svg';
import folderDark from '../images/folder-dark.svg';

function AppAnimation() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(true);

    return (
        <>
            <div className="app-animation">
                <div className="app-animation-container">
                    < SectionTitle name="Simple Interface" />
                    <div className={ click ? "animation-images-container data-image" : "animation-images-container"}>
                        <div className={ click ? "image-line animate-images" : "image-line"}>
                            <img src={ friends1 } alt="friends-img-1"/>
                            <img src={ friends2 } alt="friends-img-2"/>
                            <img src={ friends3 } alt="friends-img-3"/>
                        </div>
                        <div className={ click ? "folder-line animate-folders" : "folder-line"}>
                            <img src={ folderDark } alt="folder-dark"/>
                            <p className="folder-size">3</p>
                            <p className="folder-date">2021-01-01</p>
                        </div>
                        <div className={ click ? "image-line animate-images" : "image-line"}>
                            <img src={ friends4 } alt="friends-img-4"/>
                            <img src={ friends5 } alt="friends-img-5"/>
                        </div>
                        <div className={ click ? "folder-line animate-folders" : "folder-line"}>
                            <img src={ folderDark } alt="folder-dark"/>
                            <p className="folder-size">2</p>
                            <p className="folder-date">2021-01-04</p>
                        </div>
                        <div className={ click ? "image-line animate-images" : "image-line"}>
                            <img src={ friends6 } alt="friends-img-6"/>
                        </div>
                        <div className={ click ? "folder-line animate-folders" : "folder-line"}>
                            <img src={ folderDark } alt="folder-dark"/>
                            <p className="folder-size">1</p>
                            <p className="folder-date">2021-01-07</p>
                        </div>
                    </div>
                    <div className="organise-container">
                        <button className={ click ? "organise-button" : "organise-button pulse"} onClick={ handleClick }> ORGANISE </button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default AppAnimation;