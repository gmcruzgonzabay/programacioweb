<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mantenimiento de Usuarios</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">

<div class="container mt-5">

    <div class="card shadow">
        <div class="card-header bg-primary text-white">
            <h4>Mantenimiento de Usuarios</h4>
        </div>

        <div class="card-body">

            <?php if (isset($_GET['success'])): ?>
                <div class="alert alert-success">Usuario guardado correctamente.</div>
            <?php endif; ?>

            <?php if (isset($_GET['updated'])): ?>
                <div class="alert alert-success">Usuario actualizado correctamente.</div>
            <?php endif; ?>

            <?php if (isset($_GET['error'])): ?>
                <div class="alert alert-danger">Error al guardar el usuario.</div>
            <?php endif; ?>

            <?php if (isset($_GET['update_error'])): ?>
                <div class="alert alert-danger">Error al actualizar el usuario.</div>
            <?php endif; ?>

            <?php if (isset($_GET['deleted'])): ?>
                <div class="alert alert-success">Usuario eliminado correctamente.</div>
            <?php endif; ?>

            <?php if (isset($_GET['delete_error'])): ?>
                <div class="alert alert-danger">Error al eliminar el usuario.</div>
            <?php endif; ?>

            <form method="POST" action="index.php?action=<?= isset($usuario) && $usuario ? 'actualizar' : 'guardar' ?>">
                <?php if (!empty($usuario)): ?>
                    <input type="hidden" name="id" value="<?= htmlspecialchars($usuario['id']) ?>">
                <?php endif; ?>

                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label>Nombre</label>
                        <input type="text" name="nombre" class="form-control" required value="<?= htmlspecialchars($usuario['nombre'] ?? '') ?>">
                    </div>

                    <div class="col-md-6 mb-3">
                        <label>Correo</label>
                        <input type="email" name="correo" class="form-control" required value="<?= htmlspecialchars($usuario['correo'] ?? '') ?>">
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label>Rol</label>
                        <select name="rol" class="form-select">
                            <option value="Administrador" <?= (!empty($usuario) && $usuario['rol'] === 'Administrador') ? 'selected' : '' ?>>Administrador</option>
                            <option value="Usuario" <?= empty($usuario) || $usuario['rol'] === 'Usuario' ? 'selected' : '' ?>>Usuario</option>
                        </select>
                    </div>

                    <div class="col-md-6 mb-3">
                        <label>Estado</label>
                        <select name="estado" class="form-select">
                            <option value="Activo" <?= empty($usuario) || $usuario['estado'] === 'Activo' ? 'selected' : '' ?>>Activo</option>
                            <option value="Inactivo" <?= (!empty($usuario) && $usuario['estado'] === 'Inactivo') ? 'selected' : '' ?>>Inactivo</option>
                        </select>
                    </div>
                </div>

                <button type="submit" class="btn btn-success"><?= !empty($usuario) ? 'Actualizar' : 'Guardar' ?></button>
                <?php if (!empty($usuario)): ?>
                    <a href="index.php" class="btn btn-secondary ms-2">Cancelar</a>
                <?php endif; ?>
            </form>

            <hr>

            <h5>Listado de Usuarios</h5>

            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Rol</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($usuarios as $u): ?>
                        <tr>
                            <td><?= htmlspecialchars($u['nombre']) ?></td>
                            <td><?= htmlspecialchars($u['correo']) ?></td>
                            <td><?= htmlspecialchars($u['rol']) ?></td>
                            <td><?= htmlspecialchars($u['estado']) ?></td>
                            <td>
                                <a href="index.php?action=editar&id=<?= htmlspecialchars($u['id']) ?>" class="btn btn-sm btn-warning">Editar</a>
                                <form method="POST" action="index.php?action=eliminar" style="display:inline; margin-left: 5px;">
                                    <input type="hidden" name="id" value="<?= htmlspecialchars($u['id']) ?>">
                                    <button type="submit" class="btn btn-sm btn-danger" onclick="return confirm('¿Eliminar usuario?');">Eliminar</button>
                                </form>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>

        </div>
    </div>

</div>

</body>
</html>
