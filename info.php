<?php
if(isset($_POST['submit']))
{
extract($_POST);
$conn=mysqli_connect("localhost","root","","ujwal");
$dob=('Y-m-d');
/*$sql_insert="insert into html(name,middlename,surname,email,adress,mobile) values('$fname','$mname','$lname','$ead','$ad','$exp')";*/
$sql_insert="INSERT INTO `html` (`id`, `name`, `middlename`, `surname`, `dob`, `email`, `adress`, `mobile`) VALUES (NULL, '$fname', '$mname', '$lname', 'Y-m-d', '$ead', '$ad', '$exp')";
$insert=mysqli_query($conn,$sql_insert) or mysqli_error($conn);
if($insert)
{
	echo "Record Inserted Successfully.....";
}
else{
	mysql_error();
	echo "Record alredy inserted";

}
}
else{
	echo "fill up all the colomns";
}
?>