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
</form>

export default AgregarNuevoColaborador;