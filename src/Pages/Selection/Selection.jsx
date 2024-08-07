import React from 'react';
import './Selection.css';
import selCard1 from '../../img/1.png';
import selCard2 from '../../img/2.png';
import selCard3 from '../../img/3.png';
import selCard4 from '../../img/4.png';
import selCard5 from '../../img/5.png';
import selCard6 from '../../img/6.png';

const Selection = () => {
    return (
        <div id='selection' className='Selection'>
            <h3 className="grant-title">Nima uchun aynan TOPIK academy?</h3>

            <div className="selection-block">
                <div className="selection-block-card">
                    <img src={selCard1} alt="card img" className="selection-card-img" />
                </div>
                <div className="selection-block-card">
                    <img src={selCard2} alt="card img" className="selection-card-img" />
                </div>
                <div className="selection-block-card">
                    <img src={selCard3} alt="card img" className="selection-card-img" />
                </div>
                <div className="selection-block-card">
                    <img src={selCard4} alt="card img" className="selection-card-img" />
                </div>
                <div className="selection-block-card">
                    <img src={selCard5} alt="card img" className="selection-card-img" />
                </div>
                <div className="selection-block-card">
                    <img src={selCard6} alt="card img" className="selection-card-img" />
                </div>
            </div>
        </div>
    );
}

export default Selection;
