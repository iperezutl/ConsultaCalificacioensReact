import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";

const App = () => {

    /****************Trabajando con la API de Alumnos*********************/
    //Definimos el estado
    const [alumnos, setAlumno] = useState([]);

    const ConsumirAPI = async () => {
        const response = await fetch("api/alumos/ObtenerAlumno");

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            setEmpleado(data);
        }
    }

    /*Agregamos un useEffect para controlar el ciclo de vida del componente*/
    useEffect(() => {
        console.log("La aplicación ha iniciado");
        ConsumirAPI();
    }, []);

    return (
        <div className="container-fluid">
            <h1>Lista de Alumnos</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Calificacion</th>
                        <th>Grupo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        empleados.map((item) => (
                            <tr key={item.idAlumno}>
                                <td>{item.nombre}</td>
                                <td>{item.apellido}</td>
                                <td>{item.calificacion}</td>
                                <td>{item.grupo}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default App;
