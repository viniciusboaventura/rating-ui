const Button = ({children,className,disabled,onClick}) => {
    return ( <button
     onClick={onClick}
     className={className}
     disabled={disabled}
    
     >
    {children}</button> );
}
 
export default Button;