<form action="">
    <input type="text" name="num">
    <input type="submit">
</form>
<?php
if(isset($_GET['num'])) {
    $num = intval($_GET['num']);
}

for($i = $num; $i > 0; $i--) {
    if($i % 2 != 0) {
        echo $i . ' ';
    }
}
?>