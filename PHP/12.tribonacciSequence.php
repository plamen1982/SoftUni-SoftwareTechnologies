<form action="">
    <input type="text" name="num">
    <input type="submit">
</form>

<?php

if(isset($_GET)) {
    $num = intval($_GET['num']);
    $first = 0;
    $second = 0;
    $third = 1;

    for($i = 0; $i < $num; $i++) {
        echo $third . ' ';
        $tmp = $first + $second + $third;
        $first = $second;
        $second = $third;
        $third = $tmp;
    }
}
?>