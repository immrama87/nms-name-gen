window.onload = function(){
	var form = document.getElementById('name-gen-form');
	var gen = document.getElementById('generate');
	var name = document.getElementById("name-wrapper");
	var restart = document.getElementById("restart");
	
	name.style.display = "none";
	
	gen.addEventListener("click", function(evt){
		evt.preventDefault();
		
		var inputs = {};
		var required = ['biome', 'resources', 'life', 'law', 'structures', 'climate', 'direction'];
		var missing = [];
		
		for(var i=0;i<required.length;i++){
			if(form[required[i]].value.trim() != ""){
				inputs[required[i]] = form[required[i]].value;
			}
			else {
				missing.push(required[i]);
			}
		}
		
		if(missing.length > 0){
			alert("The following values were not entered:\n" + missing.join("\n"));
		}
		else {
			var now = new Date();
			var dateString = lPad(now.getMonth()+1, 2, "0") + lPad(now.getDate(), 2, "0") + now.getFullYear().toString().substring(2);
			var gen_name = inputs['biome'] + inputs['resources'] + inputs['life'] + inputs['law'] + inputs['structures'] + inputs['climate'] + " " + inputs['direction'] + "-" + dateString;
			document.getElementById("name").innerHTML = gen_name;
			name.style.display = "";
			form.style.display = "none";
			
			for(var j=0;j<required.length;j++){
				form[required[j]].value = "";
			}
		}
	});
	
	restart.addEventListener("click", function(evt){
		name.style.display = "none";
		form.style.display = "";
	});
}

function lPad(str, len, chr){
	str = str.toString();
	while(str.length < len){
		str = chr + str;
	}
	
	return str;
}