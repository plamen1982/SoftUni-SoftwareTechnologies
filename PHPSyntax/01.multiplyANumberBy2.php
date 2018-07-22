<form action="">
    N: <input type="text" name="num">
    <input type="submit">
</form>

<?php
var_dump($_GET);
if(isset($_GET['num'])) {
    $n = intval($_GET['num']);
}
echo  2 * $n;
?>