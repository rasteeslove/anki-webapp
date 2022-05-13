import { useContext, useState } from "react";
import { ThemeContext } from "context/ThemeContext";
import { ButtonSwitch } from "components/ButtonSwitch";
import { StatusBar } from "components/StatusBar";
import { PlainInput } from "./PlainInput";
import { Decky } from "./Decky";
import MarkdownTextArea from "./MarkdownTextArea";

const EditMode = () => {
    const [theme, ] = useContext(ThemeContext)
    const [submode, setSubmode] = useState<string>('general')

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
                    <ButtonSwitch is_on={submode === 'general'} height={40} width={200} text={'general'} super={true} fontSize={20} onClick={() => {setSubmode('general')}}/>
                    <ButtonSwitch is_on={submode === 'description'} height={40} width={200} text={'description'} super={true} fontSize={20} onClick={() => {setSubmode('description')}}/>
                    <ButtonSwitch is_on={submode === 'cards'} height={40} width={200} text={'cards'} super={true} fontSize={20} onClick={() => {setSubmode('cards')}}/>
                </div>
                <div className='shadow-out-bottom' style={{
                    top: 92,
                    bottom: 32,
                    position: 'absolute',
                    width: '100%',
                    maxWidth: 900,
                    boxSizing: 'border-box',
                    zIndex: 100,
                    backgroundColor: theme.middleground,
                    borderRadius: 20,
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    paddingTop: submode === 'general' ? 40 : submode === 'description' ? 20 : 80,
                    gap: 40,
                    fontSize: 20,
                    color: theme.text,
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingBottom: submode === 'general' ? 0 : 40,
                }}>
                    {
                        submode === 'general' &&
                        <>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'column',
                                gap: 10,
                            }}>
                                deck name:
                                <PlainInput height={40} width={240}/>
                            </div>
                            <div style={{
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
                        </>
                    }
                    {
                        submode === 'description' &&
                        <>
                            <MarkdownTextArea/>
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                height: 40,
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <ButtonSwitch is_on={false} text={'show preview'} width={200} height={20} fontSize={18}/>
                            </div> 
                        </>
                    }
                    {
                        submode === 'cards' &&
                        <>
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                height: 40,
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'row',
                                fontSize: 20,
                                gap: 45
                            }}>
                                <ButtonSwitch is_on={false} text={'prev'} height={20} width={60} fontSize={16}/>
                                42/69
                                <ButtonSwitch is_on={false} text={'next'} height={20} width={60} fontSize={16}/>
                            </div>
                            <div style={{
                                position: 'absolute',
                                top: 40,
                                height: 40,
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'row',
                                gap: 40,
                            }}>
                                <ButtonSwitch is_on={true} height={20} width={120} text={'question'} fontSize={16}/>
                                <ButtonSwitch is_on={false} height={20} width={120} text={'answer'} fontSize={16}/>
                            </div>
                            <MarkdownTextArea/>
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                height: 40,
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <ButtonSwitch is_on={false} text={'show preview'} width={200} height={20} fontSize={18}/>
                            </div> 
                        </>
                    }
                    
                </div>
            </div>
        </div>
    )
}

export { EditMode }
