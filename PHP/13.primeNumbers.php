<form action="">
    <input type="text" name="num">
    <input type="submit">
</form>

<?php

function isPrime(int $n) : bool {
    for ($i = 2; $i <= sqrt($n); $i++)
        if ($n % $i == 0)
            return false;
    return true;
}

if(isset($_GET)) {
    $num = intval($_GET['num']);

    for($i = $num; $i > 1; $i--) {
        if(isPrime($i)) {
            echo $i . ' ';
        };
    }
}
?>