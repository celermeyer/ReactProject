import React  from "react";
import Faq from "react-faq-component";
import login1 from "../img/login1.png";
import login2 from "../img/login2.png";
import conv1 from "../img/conversation1.png";
import conv2 from "../img/conversation2.png";
import close1 from "../img/close1.png";
import close2 from "../img/close2.png";
import dark from "../img/dark.png";
import captureOffers from "../img/screenshotListOffers.png";
import captureOffersList from "../img/screenshotOfferList.png";
import "./style.css";

const data = {
    title: "FAQ (How it works)",
    rows: [
        {
            title: "How to connect to WeAll Chat",
            content: <p> Click on Login button to the home page and 
                enter your login and your password.<br/><br/>
            <img class="imageForFAQ" src={login1}/><br/><br/>
            <p>Applicant connection :
            sylvain.meyer@students.hevs.ch</p>
            <p>Entreprise connection :
            contact@entreprise.ch</p><br/>

            <p>When you are connected, you should see this : </p>
            <img class="imageForFAQ" src={login2}/><br/><br/>
            </p>,

        },
        {
            title: "How do I create a conversation",
            content: <p>
                After login in WeAll, click on "Create a conversation".<br/><br/>
                <img class="imageForFAQ" src={conv1}/><br/><br/>
                Choose the applicant or the company and click on "Create conversation" <br/><br/>
                <img class="imageForFAQ" src={conv2}/><br/><br/>
            </p>
        },
        {
            title: "How do I close a conversation",
            content: <p>Go to the home page and choose "Close a conversation".<br/><br/>
                     <img class="imageForFAQ" src={close1}/><br/><br/>
            <p>After that, you can choose the company/applicant you want to end the conversation with.</p>
            <img class="imageForFAQ" src={close2}/><br/><br/>
            Click on "Close conversation".
            </p>,
        },
        {
            title: "How do I see my offers",
            content: <p> Click on the "See List of Offers" button <br/><br/>
            <img class="imageForFAQ" src={captureOffers} /><br/><br/>
            <p>After that, you have the list of all the Offers or Applicant</p>
            <img class="imageForFAQ" src={captureOffersList} />
            </p>,

        },
        {
            title: "How to choose Light or Dark theme",
            content:
                <p>
                    At any time in the application, you can choose Dark or Light
                     theme by simply clicking on the following button :<br/><br/>
                    <img class="imageForFAQ" src={dark} />
                </p>,
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