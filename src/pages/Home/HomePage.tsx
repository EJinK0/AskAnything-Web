import React from 'react'
import Login from '../../components/Login/Login';
import mainBG from '../../assets/images/cy_BG3.jpg';
import styled from 'styled-components';

const HomePage: React.FC = () => {
    return (
        <div>
            <BgImg src={mainBG}/>

            <div className='mainFeed'>
                <div className='wrapper'>
                    <div className='feed-list'>     
                        <Login/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;

const BgImg = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: -1;
    max-width: 700px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;