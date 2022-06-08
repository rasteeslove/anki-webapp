import { ButtonSwitch } from "components/ButtonSwitch";
import MarkdownTextArea from "./MarkdownTextArea";

const Description = () => {
    return(
        <>
            <div className="description-md-container">
                <MarkdownTextArea/>
            </div>
            <div className="description-show-preview-container">
                <ButtonSwitch is_on={false} text={'show preview'} width={200} height={'var(--button-height)'} fontSize={18}/>
            </div> 
        </>
    );
};

export { Description };
