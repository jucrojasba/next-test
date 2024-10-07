"use client"
import { SelectStyle } from "./Select-style";
interface SelectProps {
    onChange?: (even:React.ChangeEvent<HTMLSelectElement>) => void;
    children: React.ReactNode;
    value?: string 
  }
  
  const Select: React.FC<SelectProps> = ({ onChange, children, value }) => {
    return (
      <SelectStyle
        onChange={onChange}
        value = {value}
      >
        {children}
      </SelectStyle>
    );
  };
  
  export default Select;