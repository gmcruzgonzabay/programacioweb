<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nosotros</title>
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <?php
    $nombre='Gregorio';
    ?>

    <h1>Hola  <?php echo $nombre;?></h1>


    <form method='POST'>
        Nombre <input type='text' name='nombre'>
        <button type='submit' >Enviar</button>
         
    </form>
    
    
    <?php

   /*
        if(isset($_POST['nombre']))
            {
                $nombre= $_POST['nombre'];
                echo "<h2> Hola $nombre </h2>";
            }
*/

          
            if($_SERVER["REQUEST_METHOD"]== "POST")
                {

                if(isset($_POST['nombre']))
            {
                $nombre= $_POST['nombre'];
                echo "<h2> Hola $nombre </h2>";
            }



                }
    ?>
    
</body>
</html>