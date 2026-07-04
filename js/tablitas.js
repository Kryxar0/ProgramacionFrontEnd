const urlUsuarios = 'https://jsonplaceholder.typicode.com/users';
const urlPublicaciones = 'https://jsonplaceholder.typicode.com/posts';
const urlComentarios = 'https://jsonplaceholder.typicode.com/comments';
const urlTareas = 'https://jsonplaceholder.typicode.com/todos';

window.onload = function () {
    $('#divTablaUsuarios').hide();
    $('#divTablaPublicaciones').hide();
    $('#divTablaComentarios').hide();
    $('#divTablaTareas').hide();
};

function seleccionarData() {
    const select = $('#selectDatos');

    switch (select.val()) {
        case '1':
            new DataTable('#tablaUsuarios', {
                ajax: {
                    url: urlUsuarios,
                    dataSrc: ''
                },
                columns: [
                    { data: 'id' },
                    { data: 'name' },
                    { data: 'username' },
                    { data: 'email' },
                    { data: 'phone' },
                    { data: 'website' }
                ],
                language: window.lenguaje
            });
            $('#divTablaUsuarios').show();
            $('#divTablaPublicaciones').hide();
            $('#divTablaComentarios').hide();
            $('#divTablaTareas').hide();
            break;
        case '2':
            new DataTable('#tablaPublicaciones', {
                data: cargarComentarios(),
                ajax: {
                    url: urlPublicaciones,
                    dataSrc: ''
                },
                columns: [
                    { data: 'id' },
                    { data: 'name' },
                    { data: 'title' },
                    { data: 'body' },
                ],
                language: window.lenguaje
            });
            $('#divTablaUsuarios').hide();
            $('#divTablaPublicaciones').show();
            $('#divTablaComentarios').hide();
            $('#divTablaTareas').hide();
            break;
        case '3':
            new DataTable('#tablaComentarios', {
                ajax: {
                    url: urlComentarios,
                    dataSrc: ''
                },
                columns: [
                    { data: 'id' },
                    { data: 'name' },
                    { data: 'username' },
                    { data: 'email' },
                    { data: 'phone' },
                    { data: 'website' }
                ],
                language: window.lenguaje
            });
            $('#divTablaUsuarios').hide();
            $('#divTablaPublicaciones').hide();
            $('#divTablaComentarios').show();
            $('#divTablaTareas').hide();
            break;
        case '4':
            new DataTable('#tablaTareas', {
                ajax: {
                    url: urlTareas,
                    dataSrc: ''
                },
                columns: [
                    { data: 'id' },
                    { data: 'userId' },
                    { data: 'title' },
                    { data: 'completed' }
                ],
                language: window.lenguaje
            });
            $('#divTablaUsuarios').hide();
            $('#divTablaPublicaciones').hide();
            $('#divTablaComentarios').hide();
            $('#divTablaTareas').show();
            break;
    }
};

async function cargarComentarios() {
    const [dataPublicaciones, dataUsuarios] = await Promise.all([
        fetch(urlPublicaciones),
        fetch(urlUsuarios)
    ]);
    const publicaciones = await dataPublicaciones.json();
    const usuarios = await dataUsuarios.json();

    const dataCombinada = publicaciones.map(publicacion => {
        const usuarioComentario = usuarios.find(usuario => usuario.id === publicacion.userId);
        return { publicacion, usuarioComentario };
    })
};