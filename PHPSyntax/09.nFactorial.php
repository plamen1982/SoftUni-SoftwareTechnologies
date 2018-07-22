<form action="">
    <input type="text" name="num">
    <input type="submit">
</form>

<?php
$sum = 1;
if(isset($_GET)) {
    $num = intval($_GET['num']);
}
for($i = 1; $i <= $num; $i++) {
    $sum *= $i;
}
echo $sum;
?>