$(document).ready(function(){
	$('#cus_tab').click(function(){
		$('#cus_container').css("display","block");
		$('#emp_container').css("display","none");
		$('#cus_tab').attr("class","active");
		$('#emp_tab').attr("class","");
	});
	$('#emp_tab').click(function(){
		$('#emp_container').css("display","block");
		$('#cus_container').css("display","none");
		$('#emp_tab').attr("class","active");
		$('#cus_tab').attr("class","");
	});
});

var person = function(){
	//private data
	var data = {
		firstName:'Human',
		$firstName: function(n){data.firstName=n},
		lastName:'Being',
		$lastName:function(n){data.lastName=n},
		email:'Email',
		$email:function(n){data.email=n},
	};
	var F = function(){};
	f = new F();

	//public data
	f.sname = 'Person'
	f.run = function(e){
		return data[e];
	};

	return f;
};

var customer = function(p){

	//private data
	var data = {
		firstName:'Human',
		$firstName: function(n){data.firstName=n},
		lastName:'Being',
		$lastName:function(n){data.lastName=n},
		email:'Email',
		$email:function(n){data.email=n},
		cusNum:'Cust_Num',
		$cusNum:function(n){data.cusNum=n},
	};

	var F = function(){};
	F.prototype = p;
	f = new F();

	//public data
	f.cname = 'Customer'
	f.run = function(e){
		var r = data[e];
		if(r == undefined) return F.prototype.run(e);
		else return r;
	};

	return f;
}(person);

var employee = function(p){

	//private data
	var data = {
		firstName:'Human',
		$firstName: function(n){data.firstName=n},
		lastName:'Being',
		$lastName:function(n){data.lastName=n},
		email:'Email',
		$email:function(n){data.email=n},
		social:'Social',
		$social:function(n){data.social=n},
	};

	var F = function(){};
	F.prototype = p;
	f = new F();

	//public data
	f.cname = 'Customer'
	f.run = function(e){
		var r = data[e];
		if(r == undefined) return F.prototype.run(e);
		else return r;
	};

	return f;
}(person);
function no(){
	$("body").html('<h1 id="gb">GoodBye</h1>');
}


function create_emp(){
	var emp = Object.create(employee);
	emp.run('$firstName')($("#emp_first").val());
	emp.run('$lastName')($("#emp_last").val());
	emp.run('$email')($("#emp_email").val());
	emp.run('$social')($("#emp_social").val());

	$("#main").html(
		"<table class='table'><caption>You Entered:</caption><thead>"+
		"<tr><th>Name</th><th>Email</th><th>Social Security Number</th></tr>"+
		"<tr><td>"+emp.run('firstName')+" "+emp.run('lastName')+"</td><td>"+emp.run('email')+
		"</td><td>"+emp.run('social')+"</td></tr>"+
		"</table><h2><small>Continue?</small></h2><button onclick='window.location.reload()'>Yes</button>"+
		"<button onclick='no();'>No</button>");	
};


function create_cus(){
	var cus = Object.create(customer);
	cus.run('$firstName')($("#cus_first").val());
	cus.run('$lastName')($("#cus_last").val());
	cus.run('$email')($("#cus_email").val());
	cus.run('$cusNum')($("#cus_num").val());

	$("#main").html(
		"<table class='table'><caption>You Entered:</caption><thead>"+
		"<tr><th>Name</th><th>Email</th><th>Customer Number</th></tr>"+
		"<tr><td>"+cus.run('firstName')+" "+cus.run('lastName')+"</td><td>"+cus.run('email')+
		"</td><td>"+cus.run('cusNum')+"</td></tr>"+
		"</table><h2><small>Continue?</small></h2><button onclick='window.location.reload()'>Yes</button>"+
		"<button onclick='no();'>No</button>");	

};
