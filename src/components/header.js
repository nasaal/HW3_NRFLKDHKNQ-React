import React from 'react';
import hulk from '../img/hulk-1.jpg';
import venom1 from '../img/venom-1.jpg';
import venom2 from '../img/venom-2.jpg';


export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <h1 className="title">Mavel's Fearless</h1>
                <p className="subtitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
                    molestias earum eveniet.
          </p>
                <div className="search-bar">
                    <input type="search" placeholder="Search" />
                </div>

                <div className="sample-wallpaper">
                    <article className="wallpaper">
                        <img src={hulk} alt="Wallpaper #1" class="wallpaper" />
                    </article>

                    <article className="wallpaper">
                        <img src={venom1}  alt="Wallpaper #1" class="wallpaper" />
                    </article>

                    <article className="wallpaper">
                        <img src={venom2}  alt="Wallpaper #1" class="wallpaper" />
                    </article>
                </div>
            </div>
        </header>
    )
}