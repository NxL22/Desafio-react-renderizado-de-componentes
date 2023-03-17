import { useState } from 'react';
import { BaseColaboradores } from './componentes/BaseColaboradores';
//import { AgregarNuevoColaborador } from './componentes/AgregarNuevoColaborador.jsx'
//import { Navbar } from './componentes/Navbar.jsx

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [nuevoColaborador, setNuevoColaborador] = useState({
    nombre: '',
    correo: '',
    id: '',
  });
  
  const [busqueda, setBusqueda ] = useState('');


  const agregarColaborador = (e) => {
    e.preventDefault();

    if (nuevoColaborador.nombre === '' || nuevoColaborador.correo === '') {
      return alert('faltan campos por llenar')
    }

    setColaboradores([...colaboradores, nuevoColaborador]);
    setNuevoColaborador({
      id: '',
      nombre: '',
      correo: '',
    });
  }

  const colaboradoresFiltrados = colaboradores.filter((colaborador) => {
    if (colaborador.nombre.toLowerCase().includes(busqueda.toLowerCase())) {
      return true;
    }

    return false;
  });

  return (
    <>
      <nav>
        <input
          className='form-control me-2 my-3'
          placeholder='Buscar un Colaborador'
          onChange={(e) => setBusqueda(e.target.value)}
          value={busqueda}
          />
      </nav>

      <form action='' onSubmit={agregarColaborador}>
        <h3>Agregar Un Colaborador</h3>
        <label>Nombre del colaborador <strong>:</strong></label>
        <input
          className='form-control me-2 my-3'
          type='text'
          onChange={(e) => setNuevoColaborador({
            id: Date.now(),
            nombre: e.target.value,
            correo: nuevoColaborador.correo
          })}
          value={nuevoColaborador.nombre}
        />
        <label>Correo del colaborador <strong>:</strong></label>
        <input
          className='form-control me-2 my-3'
          type='email'
          onChange={(e) => setNuevoColaborador({
            id: Date.now(),
            nombre: nuevoColaborador.nombre,
            correo: e.target.value
          })}
          value={nuevoColaborador.correo}
        />

        <button
          className='mt-5 btn btn-primary'
          type='submit'
        >
          Agregar colaborador
        </button>
      </form>

      <div className='nt-3'>
        <h3>Listado de colaboradores</h3>
        <ul>
          {colaboradoresFiltrados.map(({ id, nombre, correo }) => <li key={id}>{nombre} | {correo}</li>)}
        </ul>

      </div>

    </>
  );
}

export default App;
