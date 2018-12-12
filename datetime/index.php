<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Date time picker in Input Field using Bootstrap by Lisenme</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

<link href="http://www.lisenme.com/demo/date_time_pick/css/bootstrap-datetimepicker.min.css" rel="stylesheet">
<script src="http://www.lisenme.com/demo/date_time_pick/js/bootstrap-datetimepicker.min.js"></script>

<style>
    h1 {
    color: white;
    background-color: #0984bf;
            padding: 4px 16px 6px;
}
.form-control{width: 200px; margin-bottom: 10px;}
</style>
</head>
<body>
<div class="container">    
<h1>Datetime Picker</h1>
<input size="16" type="text" class="form-control" id="datetime" readonly> 
<script type="text/javascript">
$("#datetime").datetimepicker({
	format: 'yyyy-mm-dd hh:ii',
	autoclose: true
});
</script>
</div>
</body>
</html>