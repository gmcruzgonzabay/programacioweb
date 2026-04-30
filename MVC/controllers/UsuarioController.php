<?php

require_once __DIR__ . '/../models/Usuario.php';

class UsuarioController
{
    private Usuario $model;

    public function __construct(Usuario $model)
    {
        $this->model = $model;
    }

    public function index(): void
    {
        $usuarios = $this->model->getAll();  // CONSULTA LOS DATOS
        $usuario = null;
        require __DIR__ . '/../views/usuarios.php'; // MUESTRA LA VISTA
    }

    public function guardar(): void
    {
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            header('Location: index.php');
            exit;
        }

        $data = [
            'nombre' => trim($_POST['nombre'] ?? ''),
            'correo' => trim($_POST['correo'] ?? ''),
            'rol'    => $_POST['rol'] ?? 'Usuario',
            'estado' => $_POST['estado'] ?? 'Activo',
        ];

        if ($this->model->create($data)) {
            header('Location: index.php?success=1');
            exit;
        }

        header('Location: index.php?error=1');
        exit;
    }

    public function editar(): void
    {
        $id = filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT);
        if ($id === false || $id === null) {
            header('Location: index.php');
            exit;
        }

        $usuario = $this->model->findById($id);
        if (!$usuario) {
            header('Location: index.php');
            exit;
        }

        $usuarios = $this->model->getAll();
        require __DIR__ . '/../views/usuarios.php';
    }

    public function actualizar(): void
    {
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            header('Location: index.php');
            exit;
        }

        $id = filter_input(INPUT_POST, 'id', FILTER_VALIDATE_INT);
        if ($id === false || $id === null) {
            header('Location: index.php?update_error=1');
            exit;
        }

        $data = [
            'nombre' => trim($_POST['nombre'] ?? ''),
            'correo' => trim($_POST['correo'] ?? ''),
            'rol'    => $_POST['rol'] ?? 'Usuario',
            'estado' => $_POST['estado'] ?? 'Activo',
        ];

        if ($this->model->update($id, $data)) {
            header('Location: index.php?updated=1');
            exit;
        }

        header('Location: index.php?update_error=1');
        exit;
    }

    public function eliminar(): void
    {
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            header('Location: index.php');
            exit;
        }

        $id = filter_input(INPUT_POST, 'id', FILTER_VALIDATE_INT);
        if ($id === false || $id === null) {
            header('Location: index.php?delete_error=1');
            exit;
        }

        if ($this->model->delete($id)) {
            header('Location: index.php?deleted=1');
            exit;
        }

        header('Location: index.php?delete_error=1');
        exit;
    }
}
