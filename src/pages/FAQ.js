import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import captureOffers from "../img/CaptureListOfOffers.PNG";
import captureLight from "../img/CaptureLight.PNG";
import captureDark from "../img/CaptureDark.PNG";
import captureLogin from "../img/CaptureLogin.PNG";
import captureCreateConversation from "../img/CaptureCreateConversation.PNG";
import "./style.css";

const data = {
    title: "FAQ (How it works)",
    rows: [
        {
            title: "How to connect to WeAll Chat",
            content:
                <div>
                    <p> Please create your account on <a href="https://app.weallbackend.ch/connexion">  WeAllApp</a>
                    and enter your email and password into the Login form</p>
                    <img className="capture" src={captureLogin}/>
                </div>
            ,
        },
        {
            title: "How do I create a conversation",
            content:
                <div>
                    <p> Choose the contacts in the drop list </p>
                    <img className="capture" src={captureCreateConversation}/>
                </div>
        },
        {
            title: "How do I close a conversation",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
        },
        {
            title: "How do I see my offers",
            content:
                <div>
                    <p> In the menu item "See List of Offers" you can see all avaliable offers  </p>
                    <img className="capture" src={captureOffers} />
                </div>

        },
        {
            title: "How to choose Light or Dark theme?",
            content: <div>
                <p>You can switch between Dark or Light mode by clicking the button Light </p>
                <img className="capture" src={captureLight}/>
                <p>or the button Dark for the Dark mode</p>
                <img className="capture" src={captureDark}/>
            </div>

        },
    ],
};

const styles = {

    titleTextColor: "grey",
    rowTitleColor: "grey",
    rowContentColor: 'grey',
    arrowColor: "red",
    background: "transparent",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

export default function FAQ () {

    return (
        <div>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
}