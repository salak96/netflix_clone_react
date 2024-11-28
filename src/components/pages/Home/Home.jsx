import React from 'react';
import './Home.css'
import Navbar from '../../Navbar/navbarNetflix';
import heroBanner from '../../../assets/hero_judul.jpg';
import heroTitle from '../../../assets/hero_title.png';
import playIcon from '../../../assets/Play_icon.png';
import infoIcon from '../../../assets/info_icon.png';
import TitleCard from '../../titleCards/titleCard';

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <div className='hero'>
                <img src={heroBanner} alt='banner' className='banner-img' />
                <div className='hero-caption'>
                    <img src={heroTitle} alt='title' className='caption-img' />
                    <p>
                    Ipar Adalah Maut" berhasil menarik perhatian lebih dari 3 juta penonton hanya dalam waktu 14 hari sejak penayangan perdananya pada 13 Juni 2024 lalu.
Melalui akun Instagram resmi, @iparadalahmautmovie, mereka mengumumkan capaian terbaru ini dengan jumlah penonton mencapai 3.051.789 orang.
                    </p>
                    <div className="hero-btns">
                        <button className='btn'><img src={playIcon} alt="play" />Play</button>
                        <button className='btn dark-btn'><img src={infoIcon} alt="info" />More Info</button>
                    </div>
                    <TitleCard />
                </div>
            </div>
        </div>
    );
};

export default Home;
