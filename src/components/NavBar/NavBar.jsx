import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    const brand = "https://lh3.googleusercontent.com/drive-viewer/AK7aPaB3Unti0Ph9mSZtLQO7lfuhGPKGD97V3aBZTgENHQZnA3vM_XrE4JSzL2UhgXOTPDq9Rtbuxn5Ruj08NiAwW7q-_5ix=s1600"
    return (
        <header className='d-flex justify-content-between'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <img className='brandImg' src={brand} alt="imagen con el nombre wine meeting y su logo" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <p className="nav-link active" aria-current="page">Inicio</p>
                            <ul className='d-flex'>
                                <li className="nav-link active">Malbec</li>
                                <li className="nav-link active">Syrah</li>
                                <li className="nav-link active">Cabernet</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <CartWidget/>
        </header>
    )
}

export default Navbar