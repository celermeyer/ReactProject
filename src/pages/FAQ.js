import React  from "react";
import Faq from "react-faq-component";
import captureOffers from "../img/CaptureOffre.PNG";
import "./style.css";

const data = {
    title: "FAQ (How it works)",
    rows: [
        {
            title: "How to connect to WeAll Chat",
            content: `text from word file`,
        },
        {
            title: "How do I create a conversation",
            content:
                "How to choose a Company or a Postulant",
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
            content: <p> <img className="captureOffres" src={captureOffers} /></p>,
        },
        {
            title: "How to choose Light or Dark theme",
            content:
                "How to choose a Company or a Postulant",
        },
    ],
};

const styles = {

    titleTextColor: "grey",
    rowTitleColor: "grey",
    rowContentColor: 'grey',
    arrowColor: "red",
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