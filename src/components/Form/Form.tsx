import { FormStyle } from "./Form-style";

interface FormProps {
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
    children: React.ReactNode;
}
const Form :React.FC<FormProps> = ({onSubmit, children})=>{
    return(
        <FormStyle className="form" onSubmit={onSubmit}>
            {children}
        </FormStyle>
    )
}

export default Form