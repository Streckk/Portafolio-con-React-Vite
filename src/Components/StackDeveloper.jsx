import arregloRutas from "../scripts/rutas";

const StackDeveloper = () => {
    return (
        <div className="Container_Stack">
            <h4>Stack De Desarrollo</h4>
            <div className="Icons">
                {
                    arregloRutas.map(e =>(
                        <img key={e} src={e} alt="" />
                    ))
                }
            </div>

        </div>
    )
}

export default StackDeveloper
