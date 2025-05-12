import { useRef, useEffect } from "react";

const InputOperaciones  = ({ operacion }) =>{
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
        inputRef.current.scrollLeft = inputRef.current.scrollWidth;
        }
    }, [operacion]);

    return (
        <>
            <div className="container-fluid">
                <div className="input-operaciones" ref={inputRef}>
                    {operacion}
                </div> 
                
            </div>
        </>
    )
}
export default InputOperaciones ;