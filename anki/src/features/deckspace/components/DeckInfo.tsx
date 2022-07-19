import { useContext, useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { ThemeContext } from "context";
import { getDeckInfo } from "../api";
import { ButtonSwitch } from "components/ButtonSwitch";
import { DeckInfoType } from "../types";
import "./DeckInfo.css";

const DeckInfo = () => {
    const [theme, ] = useContext(ThemeContext);
    const [deckInfo, setDeckInfo] = useState<DeckInfoType>();
    const { username, deckname } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getDeckInfo(username!, deckname!)
            .then(data => setDeckInfo(data))
            .catch((error) => {
                // todo: if refresh token error => auth
                //       if 404 error => /{username}
                if (error.response.status === 404) {
                    navigate(`/${username}`);
                } else {

                }
            });
    }, [username, deckname, navigate]);

    return(
        <div className='shadow-out-bottom deckinfo' style={{
            backgroundColor: theme.middleground,
            color: theme.text,
        }}>
            <div className='shadow-in-top-light inner-shadow-maker'/>
            <div className="deckname-holder">
                { deckInfo && deckInfo.name }
                <div className='deckinfo-closer'>
                    <Link style={{
                        color: theme.text,
                    }} to={`/${username}`}>×</Link>
                </div>
            </div>
            <div className="mode-buttons-holder">
                <ButtonSwitch is_on={true} text={'description'}
                            width={'var(--button-width)'}
                            height={'var(--button-height)'}
                            fontSize={16}/>
                <ButtonSwitch is_on={false} text={'stats'}
                            width={'var(--button-width)'}
                            height={'var(--button-height)'}
                            fontSize={16}/>
            </div>
            <div className="deckinfo-main">
                <div className="deckinfo-description-box">
                    { !!deckInfo && deckInfo.description }
                </div>
            </div>
            <div className="bottom-clippy" style={{
                backgroundColor: deckInfo?.color,
            }}>

            </div>
        </div>
    );
};

export { DeckInfo };
