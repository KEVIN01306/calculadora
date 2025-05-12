import { useState, useEffect } from "react";
import InputOperaciones from "../components/Input_operaciones.jsx";
import Keyboard from "../components/key_board.jsx";

const Calculadora = () => {
    const [operacion, setOperacion] = useState(() => {
        return localStorage.getItem("operacion") || "0";
    });

    useEffect(() => {
        localStorage.setItem("operacion", operacion);
    }, [operacion]);

    const agregarCaracter = (caracter) => {
        setOperacion((prevOperacion) => {
            if (prevOperacion === "0" && caracter !== ".") {
                return caracter;
            }
            return prevOperacion + caracter;
        });
    };

    const borrarUltimo = () => {
        setOperacion((prevOperacion) => {
            if (prevOperacion.length <= 1) {
                return "0";
            }
            return prevOperacion.slice(0, -1);
        });
    };

    const borrarTodo = () =>{
        setOperacion("0");
    }

    const ejecucion = () => {

        setOperacion(eval(operacion.replace(/x/g, "*")).toString());


    };

    return (
        <>
            <div className="container-calculadora">
                <InputOperaciones  operacion={operacion} />
                <Keyboard
                    agregarCaracter={agregarCaracter}
                    borrarUltimo={borrarUltimo}
                    borrarTodo={borrarTodo}
                    ejecucion={ejecucion}
                />
            </div>
        </>
    );
};

export default Calculadora;