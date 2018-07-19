<form action="">
    <input type="text" name="num">
    <input type="submit">
</form>

<?php

    if(isset($_GET)) {
        $num = intval($_GET['num']);
    }
    for($i = $num; $i > 1; $i--) {
        if($num % $i != 0) {
            echo $i . ' ';
        }
    }
?>