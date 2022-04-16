import React from 'react';
import style from  './register.module.css'
import Card from './card/card'
import {Link} from 'react-router-dom';
const Register = () => {
    return (
        <div className={style["container"]}>
        <div className={style["register"]}>
            <div className={style["container2"]}>
                <div className={style["register-nav"]}>
                    <div className={style["left"]}>
                            <img className={style["register-img"]} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="logo" />
                        </div>  
                </div> 
                <div className={style["content"]}>
                        <h1 className={style["content-h1"]}>
                        Unlimited movies, TV shows, and more.
                        </h1>
                        <h5 className={style["content-h5"]}>
                        Watch anywhere. Cancel anytime.
                        </h5>
                        <p className={style["content-p"]}>
                        Ready to watch? Enter your email to create or restart your membership.
                        </p>
                        <Link to="/home">
                        <button className={style["content-btn"]}>Get Started</button>
                        </Link>
                </div>
            </div>
        </div>
        <div>
                <Card 
                    title="Enjoy on your TV."
                    description="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                />
                <Card 
                    title="Download your shows to watch offline."
                    description="Save your favorites easily and always have something to watch."
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                />
                <Card 
                    title="Watch everywhere."
                    description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
                />
                <Card 
                    title="Create profiles for kids."
                    description="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
                    src="https://occ-0-55-56.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd"
                />
        </div>
        </div>
    );
}

export default Register;