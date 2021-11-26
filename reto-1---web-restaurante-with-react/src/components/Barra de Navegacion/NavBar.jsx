import React, {memo, useContext, useEffect, useRef} from "react";
import ComponentEtiquetaLi from "../Creacion de Etiquetas HTML/EtiquetaLi";
import ComponentEtiquetaA from "../Creacion de Etiquetas HTML/EtiquetaA";
import FontAwsomeIcon from "../FontAwesome/EtiquetaFontAwesomeIcon";
import objectsUl from "../../consts json/Barra de Navegacion/objectsUl.json";
import objectRedesSociales from "../../consts json/Barra de Navegacion/objectRedesSociales.json";
import NavBarContext from "../../contexts/NavBar/NavBarContext";
import EtiquetaLink from "../Creacion de Etiquetas HTML/EtiquetaLink";
import ModalHistoria from "../Nosotros/ModalHistoria";
import ModalEmpleados from "../Nosotros/ModalEmpleados";
import ModalTestimonios from "../Nosotros/ModalTestimonios";

const NavBar = () => {
    const refNavBar = useRef();

    const {handleChangeNavBar} = useContext(NavBarContext);
    useEffect(() => {
        handleChangeNavBar(refNavBar.current);
    }, [handleChangeNavBar]);
    return (
        <>
            <nav
                id="menu"
                ref={refNavBar}
                className="navbar navbar-expand-lg  bg-red-600"
            >
                <div className="container-fluid">
                    {objectsUl.imgLogo.li.map((imgLogoLi, index) => {
                        return <EtiquetaLink key={index} objectArray={imgLogoLi}/>;
                    })}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarScroll"
                        aria-controls="navbarScroll"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <FontAwsomeIcon objectArray={objectsUl.fontAwesomeIcon}/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul {...objectsUl.datos.atributosUl}>
                            {objectsUl.datos.li.map((objeto, index) => {
                                Object.assign(objeto.atributosLink, {id: `li_${index}`});
                                return <ComponentEtiquetaLi key={index} objectArray={objeto}/>;
                            })}
                            {/*Botón del Admin donde están las opciones*/}
                            <li className="my-auto">
                                <button
                                    id="AdminPicture"
                                    type="button"
                                    className="btn"
                                    data-bs-toggle="dropdown"
                                    data-hover="dropdown"
                                    aria-expanded="false"
                                >
                                    <img
                                        src="https://picsum.photos/200"
                                        className="rounded-circle mb-4 mb-lg-0 shadow-2 border border-white border-3"
                                        alt="Imagen del trabajador"
                                        width={50}
                                        height={50}
                                        style={{objectFit: "cover"}}
                                    />
                                </button>
                                <ul
                                    className="dropdown-menu dropdown-menu-end MenuAdmin"
                                    style={{
                                        margin: "-3rem 1.5rem 0 0",
                                        borderRadius: 12,
                                        padding: "0.5rem",
                                    }}
                                >
                                    <li>
                                        <button
                                            className="dropdown-item"
                                            type="button"
                                            data-bs-toggle="modal"
                                            data-bs-target="#ModalHistoria"
                                        >
                                            Editar información de nuestra historia
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className="dropdown-item"
                                            type="button"
                                            data-bs-toggle="modal"
                                            data-bs-target="#ModalEmpleados"
                                        >
                                            Editar información de los empleados
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className="dropdown-item"
                                            type="button"
                                            data-bs-toggle="modal"
                                            data-bs-target="#ModalTestimoniales"
                                        >
                                            Editar testimoniales
                                        </button>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                <div
                    id="redes-sociales-flotante"
                    className="d-flex justify-content-end"
                    style={{zIndex: 1}}
                >
                    <section className="d-flex flex-column bg-red-800 redes-sociales">
                        {objectRedesSociales.map((objeto, index) => {
                            return <ComponentEtiquetaA key={index} objectArray={objeto}/>;
                        })}
                    </section>
                </div>
            </nav>

            {/*Se llaman a los modal de cada una de las 3 opciones*/}
            <ModalHistoria/>
            <ModalEmpleados/>
            <ModalTestimonios/>
        </>
    );
};

export default memo(NavBar);
