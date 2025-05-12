

const ButtonK = ({theme = "primary", value = "0", onClick}) => {

    return (
        <>
            <div className={`btn-keyboard btn-${theme} text-default col-3 g-2 m-1`} onClick={onClick}>
                {value}
            </div>
        </>
    )
}

export default ButtonK;