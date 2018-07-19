<form action="">
    <input type="text" name="num1">
    <input type="text" name="num2">
    <input type="submit">
</form>

<?php

if(isset($_GET['num1'])&& isset($_GET['num2'])) {
    $num1 = intval($_GET['num1']);
    $num2 = intval($_GET['num2']);
    echo "<ul>";
    for($i = 1; $i <= $num1; $i++) {
        echo "<li>List $i<ul>";
        for($j = 1; $j <= $num2; $j++) {
            echo "<li>Element $i.$j</li>";
        }
        echo "</ul></li>";
    }
    echo "</ul>";
}
?>