<form action="">
    <input type="text" name="num">
    <input type="submit">
</form>

<?php

if(isset($_GET)) {
    $num = intval($_GET['num']);
    for($i = 1; $i <= $num; $i++) {
        echo "<button>$i</button>";
    }
}
?>