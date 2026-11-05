import { useEffect, useRef, useState } from "react";

function Dashboard() {
    const [ancho, setAncho] = useState(320);
    const [redimensionando, setRedimensionando] = useState(false);

    const inicioX = useRef(0);
    const anchoInicial = useRef(320);

    function iniciarRedimensionamiento(e) {
        inicioX.current = e.clientX;
        anchoInicial.current = ancho;
        setRedimensionando(true);
        e.preventDefault();
    }

    useEffect(() => {
        if (!redimensionando) return;

        function moverMouse(e) {
            const nuevoAncho =
                anchoInicial.current + (e.clientX - inicioX.current);

            setAncho(Math.max(220, Math.min(600, nuevoAncho)));
        }

        function soltarMouse() {
            setRedimensionando(false);
        }

        window.addEventListener("mousemove", moverMouse);
        window.addEventListener("mouseup", soltarMouse);

        return () => {
            window.removeEventListener("mousemove", moverMouse);
            window.removeEventListener("mouseup", soltarMouse);
        };
    }, [redimensionando]);

    return (
        <div className="container-fluid">
            <div className="row">

                <aside
                    className="border-end min-vh-100 d-flex flex-column p-3 position-relative"
                    style={{
                        width: `${ancho}px`,
                        flex: `0 0 ${ancho}px`
                    }}
                >

                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <button className="btn btn-light">
                            <i className="bi bi-layout-sidebar"></i>
                        </button>

                        <div className="d-flex gap-3">
                            <button className="btn btn-light">
                                <i className="bi bi-inbox"></i>
                            </button>

                            <button className="btn btn-light">
                                <i className="bi bi-pencil-square"></i>
                            </button>
                        </div>
                    </div>

                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Buscar o preguntar"
                        />
                        <span className="input-group-text">Ctrl+K</span>
                    </div>

                    <div className="d-flex gap-2 mb-3">
                        <button className="btn btn-light fw-semibold">
                            <i className="bi bi-house-door-fill me-2"></i>
                            Inicio
                        </button>

                        <button className="btn btn-light">
                            <i className="bi bi-chat"></i>
                        </button>

                        <button className="btn btn-light">
                            <i className="bi bi-calendar"></i>
                        </button>
                    </div>

                    <div className="mb-4">
                        <button className="btn btn-light w-100 text-start">
                            <i className="bi bi-grid me-3"></i>
                            Conexiones
                        </button>
                    </div>

                    <p className="text-secondary fw-semibold mb-2">
                        Próximos eventos
                    </p>

                    <button className="btn btn-light text-start mb-4">
                        <i className="bi bi-calendar-date text-primary me-3"></i>
                        Conecta tu calendario
                    </button>

                    <p className="text-secondary fw-semibold mb-2">
                        Compartido
                    </p>

                    <button className="btn btn-light text-start mb-4">
                        <i className="bi bi-plus-lg me-3"></i>
                        Empieza a colaborar
                    </button>

                    <p className="text-secondary fw-semibold mb-2">
                        Privado
                    </p>

                    <button className="btn btn-light text-start mb-2">
                        <i className="bi bi-list-task me-3"></i>
                        Tareas semanales
                    </button>

                    <button className="btn btn-light text-start mb-2">
                        <i className="bi bi-hand-wave me-3"></i>
                        ¡Te damos la bienvenida!
                    </button>

                    <button className="btn btn-light text-start mb-4">
                        <i className="bi bi-currency-exchange me-3"></i>
                        Presupuesto mensual
                    </button>

                    <button className="btn btn-light text-start mt-auto mb-3">
                        <i className="bi bi-sliders me-3"></i>
                        Personalizar la barra lateral
                    </button>

                    <hr />

                    <div className="d-flex justify-content-between align-items-center">
                        <button className="btn btn-light fw-semibold">
                            <i className="bi bi-house-door me-2"></i>
                            Espacio de trabajo
                        </button>

                        <div className="d-flex gap-2">
                            <button className="btn btn-light">
                                <i className="bi bi-question-circle"></i>
                            </button>

                            <button className="btn btn-light">
                                <i className="bi bi-grid"></i>
                            </button>
                        </div>
                    </div>

                    <div
                        onMouseDown={iniciarRedimensionamiento}
                        className="position-absolute top-0 end-0 h-100"
                        style={{
                            width: "6px",
                            cursor: "col-resize",
                            zIndex: 10,
                            touchAction: "none"
                        }}
                    />

                </aside>

                {/* ✅ AÑADIDO: sección derecha, solo clases de Bootstrap */}
                <main className="col px-5 py-5 overflow-hidden">

                    {/* ✅ AÑADIDO: título y botón azul */}
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h1 className="display-5 fw-bold m-0">
                            Biblioteca
                        </h1>

                        <button className="btn btn-primary fw-semibold px-3">
                            Nueva página
                        </button>
                    </div>

                    {/* ✅ AÑADIDO: pestañas (izquierda) e iconos de acción (derecha) */}
                    <div className="d-flex justify-content-between align-items-center">

                        <div className="d-flex align-items-center gap-1">
                            <button className="btn btn-light rounded-pill fw-semibold px-3">
                                <i className="bi bi-clock-history me-2"></i>
                                Recientes
                            </button>

                            <button className="btn btn-link text-secondary text-decoration-none fw-semibold">
                                <i className="bi bi-star me-2"></i>
                                Favoritas
                            </button>

                            <button className="btn btn-link text-secondary text-decoration-none fw-semibold">
                                <i className="bi bi-people me-2"></i>
                                Compartidas
                            </button>

                            <button className="btn btn-link text-secondary text-decoration-none fw-semibold">
                                <i className="bi bi-lock me-2"></i>
                                Privado
                            </button>

                            <button className="btn btn-link text-secondary text-decoration-none fw-semibold">
                                <i className="bi bi-mic me-2"></i>
                                Anotador con IA
                            </button>

                            <button className="btn btn-link text-secondary text-decoration-none">
                                1 más
                            </button>
                        </div>

                        <div className="d-flex gap-1">
                            <button className="btn btn-light bg-transparent border-0 text-secondary">
                                <i className="bi bi-filter-left"></i>
                            </button>

                            <button className="btn btn-light bg-transparent border-0 text-secondary">
                                <i className="bi bi-search"></i>
                            </button>

                            <button className="btn btn-light bg-transparent border-0 text-secondary">
                                <i className="bi bi-sliders"></i>
                            </button>
                        </div>

                    </div>

                </main>

            </div>
        </div>
    );
}

export default Dashboard;