import React from 'react';
import style from './card.module.css'
const Card = ({title , description , src}) => {
    return (
        <div className={style["card"]}>
              <div className={style["left"]}>
                    <h1 className={style["title"]}>
                        {title}
                    </h1>
                    <h4 className={style["description"]}>
                        {description}
                    </h4>
                </div>
               <div className={style["right"]}>
                    <img className={style["card-img"]} src={src}/>
                </div>   
        </div>
    )
}

export default Card