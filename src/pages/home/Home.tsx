import React from 'react'
import Header from '../../components/Header/Header';
import './Home.scss';
import { Feed } from '../../components/Feed/Feed';

const Home: React.FC = () => {
    return (
        <div>
            <Header />

            <div className='mainFeed'>
                <div className='wrapper'>
                    <div className='feed-list'>
                        <div className='write-feed'>
                            <div className='profile-image'></div>
                            <div className='inp'>
                                <input type='text' placeholder='오늘 무슨일이 있었나요?' />
                            </div>
                            <div className='get-image'>
                                <label htmlFor='get-image-input'>
                                   
                                </label>
                                <input id='get-image-input' type='file' />
                            </div>
                        </div>

                        <Feed/>

                        <div className='feed'>
                            <div className='top'>
                                <div className='profile-image'>

                                </div>
                                <div className='profile-desc'>
                                    <div className='nickName txt-bold'>
                                        Ellie
                                    </div>
                                    <div className='timestamp'>
                                        8:15 pm, yesterday
                                    </div>
                                </div>
                            </div>
                            <div className='contents'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, qui. Culpa quisquam aliquid illo voluptas quaerat iste, soluta sed, omnis doloribus sequi exercitationem, dolores velit delectus tempore ab. Quidem, odit?
                                <div className='image'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
