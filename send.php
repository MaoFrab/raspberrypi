<?php
$pin = $_POST['id'];
$state = $_POST['state'];

exec("gpio mode ".$pin." out && gpio write ".$pin." ".$state, $a, $b);

if($b == 0)
echo 'success';
else echo 'something wrong, code '.$b;
