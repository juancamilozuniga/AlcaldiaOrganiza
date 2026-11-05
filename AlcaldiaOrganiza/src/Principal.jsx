import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
// AÑADIDO: hooks de React para guardar si el carrusel está en pausa y para acceder a él
import { useEffect, useRef, useState } from "react";
// AÑADIDO: el JavaScript de Bootstrap, necesario para que el carrusel funcione
import { Carousel } from "bootstrap";

function Principal() {

    // AÑADIDO: referencia al carrusel para controlarlo con el JavaScript de Bootstrap
    const carruselRef = useRef(null);

    // AÑADIDO: guarda si el carrusel está en pausa (false = reproduciendo)
    const [pausado, setPausado] = useState(false);

    // AÑADIDO: al cargar la página, inicia el carrusel con cambio automático cada 4 segundos
    useEffect(() => {
        Carousel.getOrCreateInstance(carruselRef.current, {
            interval: 4000,
            ride: "carousel"
        });
    }, []);

    // AÑADIDO: botón PAUSAR / REANUDAR, usa los métodos pause() y cycle() de Bootstrap
    function alternarPausa() {
        const carrusel = Carousel.getOrCreateInstance(carruselRef.current);

        if (pausado) {
            carrusel.cycle();
        } else {
            carrusel.pause();
        }

        setPausado(!pausado);
    }

    return (
        <>

            <div className="bg-primary text-white w-100 text-center position-relative py-2">
                <span className="fs-3 fw-semibold lh-sm position-absolute top-0 start-0 px-4 py-2">gov.co</span>

                <h1 className="fs-3 fw-bold">AlcaldiaOrganiza</h1>
                <p>Alcaldia de Popayan</p>
            </div>

            <div className="text-center">

            </div>

           <div className="d-flex align-items-center gap-3">
    <img src="/imagenes/alcaldia popayan.jpeg" alt="" />

    <Link to="/login" className="btn btn-light text-black">Iniciar sesión</Link>

    <Link to="/login" className="btn btn-light text-black">crear cuenta</Link>
                <div className="input-group ms-auto w-25 me-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Buscar"
                    />
                    <button className="btn btn-primary">
                        <i className="bi bi-search"></i>
                    </button>
                </div>


            </div>

            <div>

                {/* AÑADIDO: contenedor del carrusel.
                    - "carousel slide" activa el carrusel con animación de deslizamiento.
                    - "position-relative" permite colocar la barra de pausa encima de las imágenes.
                    - ref={carruselRef} conecta este div con el código de arriba. */}
                <div
                    id="carruselPrincipal"
                    className="carousel slide position-relative"
                    ref={carruselRef}
                >

                    {/* AÑADIDO: contenedor de las imágenes (cada "carousel-item" es una imagen) */}
                    <div className="carousel-inner">

                        {/* AÑADIDO: primera imagen. "active" indica que es la que se ve al inicio */}
                        <div className="carousel-item active">
                            {/* "d-block w-100" hace que la imagen ocupe todo el ancho */}
                            <img src="/imagenes/alcaldiauno.png" className="d-block w-100" alt="" />
                        </div>

                        {/* AÑADIDO: segunda imagen */}
                        <div className="carousel-item">
                            <img src="/imagenes/alcaldiados.png" className="d-block w-100" alt="" />
                        </div>

                        {/* AÑADIDO: tercera imagen */}
                        <div className="carousel-item">
                            <img src="/imagenes/alcaldiatres.jpg" className="d-block w-100" alt="" />
                        </div>

                    </div>

                    {/* AÑADIDO: flecha izquierda (anterior).
                        "data-bs-slide='prev'" le dice a Bootstrap que retroceda una imagen.
                        El icono tiene "bg-dark rounded-circle" para que se vea como círculo. */}
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carruselPrincipal"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon bg-dark rounded-circle"></span>
                        <span className="visually-hidden">Anterior</span>
                    </button>

                    {/* AÑADIDO: flecha derecha (siguiente) */}
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carruselPrincipal"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon bg-dark rounded-circle"></span>
                        <span className="visually-hidden">Siguiente</span>
                    </button>

                    {/* AÑADIDO: barra azul inferior con el botón de pausa y los puntos.
                        - "position-absolute bottom-0 start-50 translate-middle-x" la pega abajo y la centra.
                        - "bg-primary text-white" le da el fondo azul y el texto blanco.
                        - "rounded-top" redondea solo las esquinas de arriba, como en la imagen. */}
                    <div className="position-absolute bottom-0 start-50 translate-middle-x bg-primary text-white d-flex align-items-center gap-3 px-4 py-2 rounded-top">

                        {/* AÑADIDO: botón PAUSAR / REANUDAR. Cambia el texto y el icono según el estado */}
                        <button
                            className="btn btn-link text-white text-decoration-none p-0"
                            type="button"
                            onClick={alternarPausa}
                        >
                            {pausado ? "REANUDAR" : "PAUSAR"}
                            <i className={pausado ? "bi bi-play-fill ms-1" : "bi bi-pause-fill ms-1"}></i>
                        </button>

                        {/* AÑADIDO: puntos indicadores (uno por imagen).
                            "position-static m-0" los saca de su posición por defecto para
                            que queden dentro de la barra azul, al lado del botón. */}
                        <div className="carousel-indicators position-static m-0">
                            <button
                                type="button"
                                data-bs-target="#carruselPrincipal"
                                data-bs-slide-to="0"
                                className="active"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carruselPrincipal"
                                data-bs-slide-to="1"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carruselPrincipal"
                                data-bs-slide-to="2"
                            ></button>
                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}

export default Principal;