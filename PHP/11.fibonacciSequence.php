<form action="">
    <input type="text" name="num">
    <input type="submit">
</form>

<?php

if(isset($_GET)) {
    $num = intval($_GET['num']);
}
$previousFibonacci = 0;
$fibonacci = 1;
$nextFibonacci = 1;
echo 1 . ' ';
for($i = 0; $i < $num - 1; $i++) {
    $nextFibonacci = $previousFibonacci + $fibonacci;
    echo $nextFibonacci . ' ';
    $previousFibonacci = $fibonacci;
    $fibonacci = $nextFibonacci;
}

?>