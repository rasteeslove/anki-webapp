import { useContext } from "react";
import { ThemeContext } from "context";
import { ButtonSwitch } from "components";
import './styles/SaveChangesBar.css';

type Props = {
    saveFunction: () => void,
}

const SaveChangesBar = (props: Props) => {
    const [theme, ] = useContext(ThemeContext);

    return(
        <div className='save-changes-bar' style={{
            backgroundColor: theme.background,
        }}>
            <ButtonSwitch text={'save changes'}
                          is_on={false}
                          onClick={() => props.saveFunction()}
                          isSaveChangesButton={true}
                          // TODO: reimplement the line below in CCS
                          width={240} height={28} fontSize={18}/>
        </div>
    );
};

export { SaveChangesBar };
