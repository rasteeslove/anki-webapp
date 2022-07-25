import { useContext, useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import { CardType } from "types";
import { ThemeContext } from "context/ThemeContext";
import { StatusBar } from "components/StatusBar";

import { pullNextCard, postFeedback } from "../api";
import { ProgressBar } from "./ProgressBar";
import { ButtonSwitch } from "components/ButtonSwitch";

import "./TrainMode.css";

const TrainMode = () => {
    const { username, deckname } = useParams();
    const [theme, ] = useContext(ThemeContext);
    const [totalCardNumber, setTotalCardNumber] = useState<number>(0);
    const [cardNumber, setCardNumber] = useState<number>(0);
    const [cardInfo, setCardInfo] = useState<CardType | undefined>(undefined);
    const [showAnswer, setShowAnswer] = useState<boolean>(false);
    const [completed, setCompleted] = useState<boolean>(false);

    useEffect(() => {
        let cardNum = 0;
        do {
            const input = prompt('how many cards to train on?');
            if (input != null && !isNaN(parseInt(input))) {
                cardNum = parseInt(input);
            }
        } while (cardNum <= 0);
        setCardNumber(cardNum);
        setTotalCardNumber(cardNum);
    }, []);

    useEffect(() => {
        if (cardNumber > 0) {
            pullNextCard(username!, deckname!).then((data) => {
                setCardInfo(data);
            });
        } else {
            if (totalCardNumber > 0) {
                setCompleted(true);
            }
        }

    }, [username, deckname, cardNumber]);

    return(
        <div className="trainmode-and-status-bar">
            <StatusBar status={`the "${deckname}" deck: training mode`}/>
            <div className="trainmode">
                {
                    !completed && cardInfo &&
                    <>
                        <ProgressBar current={totalCardNumber-cardNumber} total={totalCardNumber}/>
                        <div className='shadow-out-bottom question-answer' style={{
                            backgroundColor: theme.middleground,
                            color: theme.text,
                        }}>
                            <div className='question-container'>
                                {cardInfo.question}
                            </div>
                            { /* TODO: maybe add visual separator */ }
                            <div className='answer-container'>
                                {
                                    showAnswer ?
                                        <>
                                            {cardInfo.answer}
                                        </>
                                        :
                                        <>
                                            <ButtonSwitch text='show answer'
                                                          is_on={false}
                                                          width={160} height={40} fontSize={16}
                                                          onClick={() => setShowAnswer(true)}/>
                                        </>
                                }
                            </div>
                            <div className='feedback-container'>
                                {
                                    showAnswer &&
                                    <>
                                        <ButtonSwitch text={'knew it'}
                                                      is_on={false}
                                                      color='#7CFF3E'
                                                      width={160} height={40}
                                                      onClick={() => {
                                                          postFeedback(username!, deckname!,
                                                              cardInfo.id, true)
                                                              .then(() => {
                                                                  setCardNumber(cardNumber-1);
                                                                  setShowAnswer(false);
                                                              });
                                                      }}/>
                                        <ButtonSwitch text={'not there yet'}
                                                      is_on={false}
                                                      color='#FF603E'
                                                      width={160} height={40}
                                                      onClick={() => {
                                                          postFeedback(username!, deckname!,
                                                              cardInfo.id, false)
                                                              .then(() => {
                                                                  setCardNumber(cardNumber-1);
                                                                  setShowAnswer(false);
                                                              });
                                                      }}/>
                                    </>
                                }

                            </div>
                        </div>
                    </>
                }
                {
                    completed &&
                    <div className='completed-container shadow-out-bottom' style={{
                        backgroundColor: theme.middleground,
                        color: theme.text,
                    }}>
                        <div className='completed-main'>
                            Good job! You have trained on {totalCardNumber} card(s).
                            <br/>
                            <br/>
                            <Link to={`/${username}/${deckname}`}>Back to deck</Link>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export { TrainMode }
