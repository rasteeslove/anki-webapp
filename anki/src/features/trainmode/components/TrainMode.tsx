import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CardType } from "types";
import { MiddleGroundPanel } from "components";

import { pullNextCard, postFeedback } from "../api";
import { ProgressBar } from "./ProgressBar";
import { ButtonSwitch } from "components/ButtonSwitch";

import "./styles/TrainMode.scss";
import { PlainInput } from "components/PlainInput";

const TrainMode = () => {
    const { username, deckname } = useParams();
    const navigate = useNavigate();

    const [inputCardNum, setInputCardNum] = useState<string>('');
    const [started, setStarted] = useState<boolean>(false);
    const [totalCardNumber, setTotalCardNumber] = useState<number>(0);
    const [cardNumber, setCardNumber] = useState<number>(0);
    const [cardInfo, setCardInfo] = useState<CardType | undefined>(undefined);
    const [showAnswer, setShowAnswer] = useState<boolean>(false);
    const [completed, setCompleted] = useState<boolean>(false);

    useEffect(() => {
        if (cardNumber > 0) {
            pullNextCard(username!, deckname!).then((data) => {
                setCardInfo(data.card);
            });
        } else {
            if (totalCardNumber > 0) {
                setCompleted(true);
            }
        }

    }, [username, deckname, cardNumber, totalCardNumber]);

    return(
        <div className="trainmode">
            {
                !started &&
                <MiddleGroundPanel className='alert-container shadow-out-bottom'>
                    <div className='alert-main'>
                        How many cards to train on?
                        <PlainInput value={inputCardNum}
                                    onChange={(event) => {
                                        setInputCardNum(event.target.value);
                                    }}
                                    width={200} height={40}/>
                        <ButtonSwitch text='start'
                                      is_on={false}
                                      onClick={() => {
                                          const input = parseInt(inputCardNum);
                                          if (!isNaN(input) && input > 0) {
                                              setCardNumber(input);
                                              setTotalCardNumber(input);
                                              setStarted(true);
                                          }
                                      }}
                                      width={220} height={40}/>
                    </div>
                </MiddleGroundPanel>
            }
            {
                started && cardInfo &&
                <>
                    <ProgressBar current={totalCardNumber-cardNumber} total={totalCardNumber}/>
                    {
                        !completed &&
                        <MiddleGroundPanel className='shadow-out-bottom question-answer'>
                            <div className='question-container'>
                                <div className='question' key={cardInfo.id}>
                                    {cardInfo.question}
                                </div>
                            </div>
                            <div className='break-line'/>
                            <div className='answer-container'>
                                {
                                    showAnswer ?
                                        <div className='answer'>
                                            {cardInfo.answer}
                                        </div>
                                        :
                                        <ButtonSwitch text='show answer'
                                                      is_on={false}
                                                      width={160} height={40} fontSize={16}
                                                      onClick={() => setShowAnswer(true)}/>
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
                        </MiddleGroundPanel>
                    }
                    {
                        completed &&
                        <MiddleGroundPanel className='alert-container shadow-out-bottom'>
                            <div className='alert-main'>
                                Good job! You have trained on {totalCardNumber} card(s).
                                <ButtonSwitch text='back to deck'
                                              is_on={false}
                                              onClick={() => {
                                                  navigate(`/${username}/${deckname}`);
                                              }}
                                              width={220} height={40}/>
                            </div>
                        </MiddleGroundPanel>
                    }
                </>
            }
        </div>
    )
}

export { TrainMode }
