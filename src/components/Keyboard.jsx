import ButtonK from "./button";

const Keyboard = ({ agregarCaracter, borrarUltimo, borrarTodo, ejecucion }) => {
    return (
        <>
            <div className="row d-flex justify-content-center">
                <ButtonK onClick={borrarTodo} value="AC" theme="secondary" />
                <ButtonK onClick={borrarUltimo} value="C" theme="secondary" />
                {/*<ButtonK onClick={() => agregarCaracter("/")} value={<i className="bi bi-plus-slash-minus"></i>} theme="secondary" />*/}
                <ButtonK onClick={() => agregarCaracter("%")} value="%" theme="secondary" />
                <ButtonK onClick={() => agregarCaracter("/")} value="÷" theme="especial" />
                <ButtonK onClick={() => agregarCaracter("7")} value="7" />
                <ButtonK onClick={() => agregarCaracter("8")} value="8" />
                <ButtonK onClick={() => agregarCaracter("9")} value="9" />
                <ButtonK onClick={() => agregarCaracter("x")} value={<i className="bi bi-x"></i>} theme="especial" />
                <ButtonK onClick={() => agregarCaracter("4")} value="4" />
                <ButtonK onClick={() => agregarCaracter("5")} value="5" />
                <ButtonK onClick={() => agregarCaracter("6")} value="6" />
                <ButtonK onClick={() => agregarCaracter("-")} value={<i className="bi bi-dash"></i>} theme="especial" />
                <ButtonK onClick={() => agregarCaracter("1")} value="1" />
                <ButtonK onClick={() => agregarCaracter("2")} value="2" />
                <ButtonK onClick={() => agregarCaracter("3")} value="3" />
                <ButtonK onClick={() => agregarCaracter("+")} value={<i className="bi bi-plus"></i>} theme="especial" />
                <ButtonK onClick={() => agregarCaracter("")} value={<i className="bi bi-calculator-fill"></i>} disabled />
                <ButtonK onClick={() => agregarCaracter("0")} value="0" />
                <ButtonK onClick={() => agregarCaracter(".")} value="." />
                <ButtonK onClick={ejecucion} value={"="} theme="especial" />
                </div>
        </>
    );
};

export default Keyboard;