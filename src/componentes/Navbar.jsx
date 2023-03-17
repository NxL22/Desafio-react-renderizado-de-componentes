import React from 'react';

function Navbar({ busqueda, setBusqueda }) {
    return (
        <nav>
            <input
                className='form-control me-2 my-3'
                placeholder='Buscar un Colaborador'
                onChange={(e) => setBusqueda(e.target.value)}
                value={busqueda}
            />
        </nav>
    );
}

export const Navbar;
