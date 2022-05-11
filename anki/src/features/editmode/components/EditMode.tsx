import { useContext } from "react";
import { ThemeContext } from "context/ThemeContext";
import { ButtonSwitch } from "components/ButtonSwitch";
import { StatusBar } from "components/StatusBar";
import { PlainInput } from "./PlainInput";
import { Decky } from "./Decky";

const EditMode = () => {
    const [theme, ] = useContext(ThemeContext)

    return(
        <div style={{
            position: 'absolute',
            top: 40,
            bottom: 0,
            left: 0,
            right: 0,
        }}>
            <StatusBar status={'the "Spanish" deck: editing mode'}/>
            <div style={{
                position: 'absolute',
                top: 40,
                bottom: 0,
                width: '100%',
                display: 'flex',
                flex: '1 1 auto',
                justifyContent: 'center',
                paddingBottom: 28, // to be changed on mobile
            }}>
                <div style={{
                    position: 'absolute',
                    top: 20,
                    width: '100%',
                    maxWidth: 680,
                    height: 40,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 40,
                }}>
                    <ButtonSwitch is_on={true} height={40} width={200} text={'general'} super={true} fontSize={20} />
                    <ButtonSwitch is_on={false} height={40} width={200} text={'description'} super={true} fontSize={20} />
                    <ButtonSwitch is_on={false} height={40} width={200} text={'cards'} super={true} fontSize={20} />
                </div>
                <div className='shadow-out-bottom' style={{
                    top: 92,
                    bottom: 32,
                    position: 'absolute',
                    width: '100%',
                    maxWidth: 900,
                    zIndex: 100,
                    backgroundColor: theme.middleground,
                    borderRadius: 20,
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    paddingTop: 40,
                    gap: 40,
                }}>
                    <div style={{
                        fontSize: 20,
                        color: theme.text,
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        gap: 10,
                    }}>
                        deck name:
                        <PlainInput height={40} width={240}/>
                    </div>
                    <div style={{
                        fontSize: 20,
                        color: theme.text,
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        gap: 10,
                    }}>
                        deck color:
                        <PlainInput height={40} width={240} children={<div className="shadow-in-top" style={{
                            width: 32,
                            height: 32,
                            backgroundColor: '#F594C3',
                            borderRadius: 16,
                            transform: 'translate(-40px)'
                        }}/>}/>
                    </div>
                    <div style={{
                        fontSize: 20,
                        color: theme.text,
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        gap: 10,
                    }}>
                        preview:
                        <Decky name={'Spanish'} color={'#F594C3'}/>
                    </div>

                    <div style={{
                        position: 'absolute',
                        bottom: 20,
                        height: 32,
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 40,
                    }}>
                        <ButtonSwitch is_on={true} text={'private'} height={32} width={120} fontSize={16}/>
                        <ButtonSwitch is_on={false} text={'public'} height={32} width={120} fontSize={16}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { EditMode }
