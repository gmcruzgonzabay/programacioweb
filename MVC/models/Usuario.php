<?php
class Usuario {


private  PDO db:

public function __construct(PDO $db){
    $this->db = $db;
}

// Método para obtener todos los usuarios
public function getAll():array{
    $stmt = $this->db->query("SELECT id,nombre,correo,rol,estado FROM usuarios");
    return $stmt->fetchAll();  


}

// Método para crear un nuevo usuario
public function create (array $data):bool{
    $stmt=$this->db->prepare("INSERT INTO usuarios (nombre, correo, rol, estado) VALUES (:nombre, :correo, :rol, :estado)");
retutn $stmt->execute([
    ':nombre' => $data['nombre'],
    ':correo' => $data['correo'],
    ':rol' => $data['rol'],
    ':estado' => $data['estado']
]);


}

public function delete(int $id):bool{
    $stmt = $this->db->prepare("DELETE FROM usuarios WHERE id = :id");
    return $stmt->execute([':id' => $id]);
}   




?>