import { useContext } from "react";
import { ThemeContext } from "context/ThemeContext";
import ButtonSwitch from "components/ButtonSwitch";

const DeckInfo = () => {
    const [theme, ] = useContext(ThemeContext)

    // todo: deck info to be retrieved from API using the URL

    return(
        <div className='shadow-out-bottom' style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            height: 500,
            width: '100%',
            maxWidth: 900,
            zIndex: 100,
            backgroundColor: theme.middleground,
            borderRadius: 20,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 20,
            color: theme.text,
        }}>
            <div className='shadow-in-top-light' style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                borderRadius: 20,
            }}/>
            <div style={{
                position: 'absolute',
                top: 0,
                height: 60,
                width: '100%',
                fontSize: 32,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                Spanish
            </div>
            <div style={{
                position: 'absolute',
                top: 60,
                width: '100%',
                height: 44,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 40,
            }}>
                <ButtonSwitch is_on={true} text={'description'}
                              width={160} height={24} fontSize={16}/>
                <ButtonSwitch is_on={false} text={'stats'}
                              width={160} height={24} fontSize={16}/>
            </div>
            <div style={{
                position: 'absolute',
                top: 60+44,
                bottom: 40,
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <div style={{
                    width: 600,
                    fontSize: 18,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                }}>
                    This is to be a description box of sorts, I imagine. By default it is to be something like “(no description)” but italic because I want it to be so. The user can also write something meaningful here in order to define the purpose of the deck. I imagine this box would also support markdown and stuff but it’s not compulsory. This is just a description after all.
                    <br/>
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium varius massa. Aliquam erat volutpat. Maecenas vel justo a diam finibus gravida. Curabitur cursus, erat ac sodales consectetur, augue diam cursus tellus, et consectetur diam felis vel urna.
                    <br/>
                    <br/>
                    The box is to be scrollable too.
                </div>
            </div>
            <div style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                maxWidth: 400,
                height: 40,
                backgroundColor: '#F594C3',
                borderRadius: '20px 20px 0px 0px',
            }}></div>
        </div>
    )
};

export default DeckInfo
