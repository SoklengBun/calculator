	var stat ="1";
	var op ="0";
	function pressbtn(num){		
		if (stat=="0"){
			var oldtext = document.getElementById("txtdisplay").value;		
			document.getElementById("txtdisplay").value = oldtext+num;	
			
		}
		else{
			document.getElementById("txtdisplay").value = "";
			var oldtext = document.getElementById("txtdisplay").value;		
			document.getElementById("txtdisplay").value = oldtext+num;
		
			stat="0";
		}
		
	}
	function subst(){
		var s = document.getElementById("txtdisplay").value;
		results = s.substring(0,s.length - 1);
		document.getElementById("txtdisplay").value = results;
		
	}
	function pressdot(){
		var a = document.getElementById("txtdisplay").value;
		if(!a.includes('.')){
			document.getElementById("txtdisplay").value = a+'.';	
		}
	}
	function c(){		
		document.getElementById("txtdisplay").value = "";
		stat="0";
		results="default";
	}
	var results="default";
	op = "default";
	function add(){			
		cal();
		stat="1";
		op="add";		
	}
	function sub(){
		cal();
		stat="1";
		op="sub";		
	}
		function times(){
		cal();
		stat="1";
		op="times";		
	}
		function divs(){
		cal();
		stat="1";
		op="divs";		
	}
	function equal(){
		cal();
		stat="1";
		op="eq";		
	}
	function change(){		
		results = parseFloat(results) * (-1);
		document.getElementById("txtdisplay").value =results;
		results="default";		
	}
	
	function cal(){
		if(results=="default"){
			var a = document.getElementById("txtdisplay").value;
			results = a;
		}
		else{
			if(op=="add"){
			var tmp = results;
			var a = document.getElementById("txtdisplay").value;
			results= parseFloat(tmp)+parseFloat(a);
			document.getElementById("txtdisplay").value = results;
			}
			else if(op=="sub"){
			var tmp = results;
			var a = document.getElementById("txtdisplay").value;
			results= parseFloat(tmp)-parseFloat(a);
			document.getElementById("txtdisplay").value = results;
			}
			else if(op=="eq"){			
			document.getElementById("txtdisplay").value = results;
			}
			else if(op=="times"){
			var tmp = results;
			var a = document.getElementById("txtdisplay").value;
			results= parseFloat(tmp)*parseFloat(a);
			document.getElementById("txtdisplay").value = results;
			}
			else if(op=="divs"){
			var tmp = results;
			var a = document.getElementById("txtdisplay").value;
			results= parseFloat(tmp)/parseFloat(a);
			document.getElementById("txtdisplay").value = results;
			}
		}
	}


