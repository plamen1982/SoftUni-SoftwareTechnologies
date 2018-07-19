<form action="">
    <input type="text" name="num1" placeholder="num1">
    <input type="text" name="num2" placeholder="num2">
    <input type="text" name="num3" placeholder="num3">
    <input type="submit">
</form>

<?php
    if(isset($_GET['num1']) && isset($_GET['num2']) && isset($_GET['num3'])) {
        $num1 = intval($_GET['num1']);
        $num2 = intval($_GET['num2']);
        $num3 = intval($_GET['num3']);
    }
    $count = 0;
        if($num1 < 0) {
            $count++;
        }
        if($num2 < 0) {
            $count++;
        }
        if($num3 < 0) {
            $count++;
        }
        if($num1 == 0 || $num2 == 0 || $num3 == 0) {
            echo 'Positive';
            return;
        }
    if($count % 2 == 0) {
            echo 'Positive';
    } else {
            echo 'Negative';
    }
?>