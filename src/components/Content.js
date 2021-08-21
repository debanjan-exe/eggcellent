import React from 'react';
import img1 from "../images/img-1.jpg";
import img2 from "../images/img-2.jpg";

const Content = () => {
    return (
        <>
            <div className="menu-card">
                <img src={img1} alt="img-1" className="h-full rounded mb-20 shadow" />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl mb-2">Egg Muffins</h2>
                    <p className="mb-2">Crispy, Delicious & Rich with protein</p>
                    <span>$15</span>
                </div>
            </div>
            <div className="menu-card">
                <img src={img2} alt="img-2" className="h-full rounded mb-20 shadow" />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl mb-2">Egg Salad</h2>
                    <p className="mb-2">Crispy, Delicious & Nutricious</p>
                    <span>$18</span>
                </div>
            </div>
        </>
    )
}

export default Content
