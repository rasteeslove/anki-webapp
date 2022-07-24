import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "context/ThemeContext";
import { StatusBar } from "components/StatusBar";

import { pullNextCard, postFeedback } from "../api";
import { ProgressBar } from "./ProgressBar";
import { ButtonSwitch } from "components/ButtonSwitch";

import "./TrainMode.css";

const TrainMode = () => {
    const { username, deckname } = useParams();
    const [theme, ] = useContext(ThemeContext);
    const [cardNumber, setCardNumber] = useState<number>(0);

    useEffect(() => {
        let cardNum = 0;
        do {
            const input = prompt('how many cards to train on?');
            if (input != null && !isNaN(parseInt(input))) {
                cardNum = parseInt(input);
            }
        } while (cardNum <= 0);
        setCardNumber(cardNum);
    }, []);

    useEffect(() => {
        pullNextCard(username!, deckname!).then(() => {

        });
    }, [username, deckname, cardNumber]);

    return(
        <div className="trainmode-and-status-bar">
            <StatusBar status={`the "${deckname}" deck: training mode`}/>
            <div className="trainmode">
                <ProgressBar current={4} total={14}/>
                <div className='shadow-out-bottom question-answer' style={{
                    backgroundColor: theme.middleground,
                    color: theme.text,
                }}>


                    
                </div>
            </div>
        </div>
    )
}

export { TrainMode }
