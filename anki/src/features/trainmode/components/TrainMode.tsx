import { useContext } from "react";
import { ThemeContext } from "context/ThemeContext";
import { StatusBar } from "components/StatusBar";
import ProgressBar from "./ProgressBar";
import { ButtonSwitch } from "components/ButtonSwitch";


const TrainMode = () => {
    const [theme, ] = useContext(ThemeContext)

    return(
        <div style={{
            position: 'absolute',
            top: 40,
            bottom: 0,
            left: 0,
            right: 0,
        }}>
            <StatusBar status={'the "Spanish" deck: training mode'}/>
            <div style={{
                position: 'absolute',
                top: 40,
                bottom: 0,
                width: '100%',
                display: 'flex',
                flex: '1 1 auto',
                justifyContent: 'center',
            }}>
                <ProgressBar current={42} total={69}/>
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
                    gap: 40,
                    fontSize: 20,
                    color: theme.text,
                    paddingLeft: 20,
                    paddingRight: 20,
                }}>
                    <div style={{
                        position: 'absolute',
                        width: '100%',
                        bottom: 0,
                        height: 80,
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <ButtonSwitch is_on={false} text={'Knew it'} width={180} height={40} color={'rgb(124, 255, 62, 0.6)'}/>
                        <ButtonSwitch is_on={false} text={'Not there yet'} width={180} height={40} color={'rgb(255, 96, 62, 0.6)'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { TrainMode }
