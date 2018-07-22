<form action="">
    <input type="text" name="num1" placeholder="num1">
    <input type="text" name="num2" placeholder="num2">
    <input type="submit">
</form>

<?php
    if(isset($_GET['num1']) && isset($_GET['num2'])) {
        $num1 = floatval($_GET['num1']);
        $num2 = floatval($_GET['num2']);

        if($num1 <= $num2) {
            echo $num1 * $num2;
        } else {
            echo $num1 / $num2;
        }
    }
?>