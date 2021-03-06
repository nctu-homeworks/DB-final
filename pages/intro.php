<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="The system managing flights.">
	<meta name="author" content="Chih-Yung Liang">
	<link rel="shortcut icon" href="">
	<link href="css/lib/bootstrap.min.css" rel="stylesheet">
	<link href="css/jumbotron.css" rel="stylesheet">
	<link rel="stylesheet" href="css/lib/jquery.remodal.css">
	<title>Flight-managing System</title>

	<!-- Just for debugging purposes. Don't actually copy this line! -->
	<!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
	<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
	<!--[if lt IE 9]>
	  <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
	  <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
	<![endif]-->
	</head>
<body>
<div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
<div class="container">
	<div class="navbar-header">
		<a class="navbar-brand" href="#">Flight-managing System</a>
	</div>
	<div class="navbar-collapse collapse">
	<form class="navbar-form navbar-right" id="form-login" role="form">
		<div class="form-group">
			<input type="email" name="email" placeholder="Email" class="form-control">
		</div>
		<div class="form-group">
			<input type="password" name="password" placeholder="Password" class="form-control">
		</div>
		<button type="submit" class="btn btn-success">Sign in</button>
	</form>
	</div>
</div>
</div>

<div class="jumbotron">
<div class="container">
	<h1>Flight-managing System</h1>
	<p>This is a system that manage flights, as well as information about countries, airports, etc.</p>
	<p><a class="btn btn-primary btn-lg" data-toggle="modal" data-target="#modal-regist">Get an account &raquo;</a></p>
	<p><a class="btn btn-primary btn-lg" data-toggle="modal" data-target="#modal-ticket">Search for tickets &raquo;</a></p>
</div>
</div>

<div class="container">
	<div class="row">
		<div class="col-md-4">
			<h2>As an administrator</h2>
			<p>
				You can manage (usually add, edit, and delete) the information of countries, airports, flights, users. You can also do what users can do.
			</p>
		</div>
		<div class="col-md-4">
			<h2>As an user</h2>
			<p>
				You can look up the information of countries, airports, flights. In addition, you may create watch lists to stay focus on some ticket. You can also do what guests can do.
			</p>
			<p>
				Regist to be a user is easy and free, as the account would be created immediately. Furthermore, An user may raise a request to upgrade to an administrator and wait for administrator to commit.
			</p>
		</div>
		<div class="col-md-4">
			<h2>As a guest</h2>
			<p>
				No registration is required.
			</p>
			<p>
				You can search flight tickets.
			</p>
		</div>
	</div>

	<hr>
	<footer>
		<p>&copy; Chih-Yung Liang 2014</p>
	</footer>
</div> <!-- /container -->

<div class="modal fade" id="modal-regist">
<div class="modal-dialog">
<div class="modal-content">
	<div class="modal-header">
		<button type="button" class="close" data-dismiss="modal">&times;</button>
		<h4 class="modal-title">Registration</h4>
	</div>
	<div class="modal-body">
		<form id="form-regist" class="form-horizontal" method="POST" action="">
		<div class="form-group">
			<label class="control-label col-md-4" for="regist-name">Name:</label>
			<div class="col-md-8">
				<input type="text" class="form-control" name="name" id="regist-name" placeholder="Ex: John Smith" required>
			</div>
		</div>
		<div class="form-group">
			<label class="control-label col-md-4" for="regist-email">Email:</label>
			<div class="col-md-8">
				<input type="email" class="form-control" name="email" id="regist-email" placeholder="Ex: xxx@example.com" required>
			</div>
		</div>
		<div class="form-group">
			<label class="control-label col-md-4" for="regist-pwd">Password:</label>
			<div class="col-md-8">
				<input type="password" class="form-control" name="password" id="regist-pwd" required>
			</div>
		</div>
		<div class="form-group">
			<label class="control-label col-md-4" for="regist-vpwd">Verifying password:</label>
			<div class="col-md-8">
				<input type="password" class="form-control" id="regist-vpwd" required>
			</div>
		</div>
		</form>
	</div>
	<div class="modal-footer">
		<button type="submit" form="form-regist" data-loading-text="Registing..." class="btn btn-success">Regist!</button>
		<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
	</div>
</div>
</div>
</div>

<div class="modal fade" id="modal-ticket">
<div class="modal-dialog modal-lg">
<div class="modal-content">
	<div class="modal-header">
		<button type="button" class="close" data-dismiss="modal">&times;</button>
		<h4 class="modal-title">Ticket searching</h4>
	</div>
	<div class="modal-body" id="ticket-content">
	</div>
</div>
</div>
</div>

<!-- Bootstrap core JavaScript
================================================== -->
<!-- Placed at the end of the document so the pages load faster -->
<script src="js/lib/jquery-1.11.1.min.js"></script>
<script src="js/lib/jquery-ui-1.10.4.custom.min.js"></script>
<script src="js/lib/jquery.remodal.min.js"></script>
<script src="js/lib/bootstrap.min.js"></script>
<script src="js/jquery-table.js"></script>
<script src="js/jquery-ticket.js"></script>
<script src="js/jquery-airport.js"></script>
<script src="js/intro.js"></script>
<script src="js/abPost.js"></script>
</body>
</html>
