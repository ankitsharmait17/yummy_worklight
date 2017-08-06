function initialize() {
	
	if (navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition(showPosition);
	} else {
	    alert("Geolocation is not supported by this browser.");
	}
	
	
	
}



function showPosition(position) {
	lat= position.coords.latitude; 
	lon= position.coords.longitude;
	
	var myLatLng = new google.maps.LatLng(lat, lon);
	
	var mapProp = {
	    center: new google.maps.LatLng(lat,lon),
	    zoom:14,
	    mapTypeId:google.maps.MapTypeId.ROADMAP
	  };
	
	
	
	  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
	  
	  var locations=[];
	  locations.push({name:"Avani Mall", locLatLon: new google.maps.LatLng(22.56354,88.32373)});
	  locations.push({name:"South City", locLatLon: new google.maps.LatLng(22.501539, 88.362066)});
	  locations.push({name:"Quest Mall", locLatLon: new google.maps.LatLng(22.538962, 88.365564)});
	  locations.push({name:"City Center", locLatLon: new google.maps.LatLng(22.588034, 88.408404)});
	  	  
	  var i;
	  for(i=0;i<locations.length;i++)
		  {
				  var marker = new google.maps.Marker({
				      position: locations[i].locLatLon,
				      map: map,
				      title: locations[i].name
				  });
				  
				  
				  var infowindow =  new google.maps.InfoWindow({
				        content: ""
				    });
				  
				  bindInfoWindow(marker, map, infowindow, locations[i].name);
		    } 
	  		
	  
		}

		function bindInfoWindow(marker, map, infowindow, description) {
			
			if(description=="Avani Mall")
			{
				google.maps.event.addListener(marker, 'click', function() {
			        infowindow.setContent(description+"<br><br><a data-role='button' href='#pgavi'>Book Now</a>");
			        infowindow.open(map, marker);
			    });
			}
			else if(description=="South City")
				{
					google.maps.event.addListener(marker, 'click', function() {
				        infowindow.setContent(description+"<br><br><a data-role='button' href='#pgsouth'>Book Now</a>");
				        infowindow.open(map, marker);
				    });	
				}
			else if(description=="Quest Mall")
			{
				google.maps.event.addListener(marker, 'click', function() {
			        infowindow.setContent(description+"<br><br><a data-role='button' href='#pgquest'>Book Now</a>");
			        infowindow.open(map, marker);
			    });
			}
			else if(description=="City Center")
			{
				google.maps.event.addListener(marker, 'click', function() {
			        infowindow.setContent(description+"<br><br><a data-role='button' href='#pgcity'>Book Now</a>");
			        infowindow.open(map, marker);
			    });
			}
				
			
			
		}
	
		
/*	*************************************AVNI BOOKING*****************************/
		
function favni(id)
{
    a_nam=$("#acus_name").val();
	
	
	at=id.toString();
	
	alert("The name is "+a_nam+" The id is "+at);
	
	var invocationData={
			adapter:'yummy_adapter',
			procedure:'procedure1',
			parameters:[id]
	
	};



	var options={
			onSuccess:asu,
			onFailure:afa			
	};




	WL.Client.invokeProcedure(invocationData, options);
	
}

function asu(result)
{
	
	
	if(result.invocationResult.resultSet.length>4)
		{
		
			var wait=20*(result.invocationResult.resultSet.length-3);
			alert("Waiting time is "+wait+" minutes");
		
		}
	else
		{
			ains(a_nam,at);
		}
}
function ains(a,b)
{
	var invocationData={
			adapter:'yummy_adapter',
			procedure:'procedure6',
			parameters:[a,b]
	
	};



	var options={
			onSuccess:aisu,
			onFailure:aifa			
	};




	WL.Client.invokeProcedure(invocationData, options);
}
		
function aisu()
{
	alert("Table booked");
}
		
function aifa()
{
	alert("Sorry for inconvenience");
}		
		
function afa(){
	
}		
		
/***************************************South City Booking****************************/	

function fsouth(id)
{
    s_nam=$("#scus_name").val();
	
	
	st=id.toString();
	
	alert("The name is "+s_nam+" The id is "+st);
	
	var invocationData={
			adapter:'yummy_adapter',
			procedure:'procedure3',
			parameters:[id]
	
	};



	var options={
			onSuccess:ssu,
			onFailure:sfa			
	};




	WL.Client.invokeProcedure(invocationData, options);
	
}

function ssu(result)
{
	
	
	if(result.invocationResult.resultSet.length>4)
		{
		
			var wait=20*(result.invocationResult.resultSet.length-4);
			alert("Waiting time is "+wait+" minutes");
		
		}
	else
		{
			sins(s_nam,st);
		}
}
function sins(a,b)
{
	var invocationData={
			adapter:'yummy_adapter',
			procedure:'procedure7',
			parameters:[a,b]
	
	};



	var options={
			onSuccess:sisu,
			onFailure:sifa			
	};




	WL.Client.invokeProcedure(invocationData, options);
}
		
function sisu()
{
	alert("Table booked");
}
		
function sifa()
{
	alert("Sorry for inconvenience");
}		
		
function sfa(){
	
}	

/*********************************QUEST MALL**********************************/

function fquest(id)
{
    q_nam=$("#qcus_name").val();
	
	
	qt=id.toString();
	
	alert("The name is "+q_nam+" The id is "+qt);
	
	var invocationData={
			adapter:'yummy_adapter',
			procedure:'procedure4',
			parameters:[id]
	
	};



	var options={
			onSuccess:qsu,
			onFailure:qfa			
	};




	WL.Client.invokeProcedure(invocationData, options);
	
}

function qsu(result)
{
	
	
	if(result.invocationResult.resultSet.length>4)
		{
		
			var wait=20*(result.invocationResult.resultSet.length-4);
			alert("Waiting time is "+wait+" minutes");
		
		}
	else
		{
			qins(q_nam,qt);
		}
}
function qins(a,b)
{
	var invocationData={
			adapter:'yummy_adapter',
			procedure:'procedure8',
			parameters:[a,b]
	
	};



	var options={
			onSuccess:qisu,
			onFailure:qifa			
	};




	WL.Client.invokeProcedure(invocationData, options);
}
		
function qisu()
{
	alert("Table booked");
}
		
function qifa()
{
	alert("Sorry for inconvenience");
}		
		
function qfa(){
	
}	

/**************************************CITY CENTER************************************/

function fcity(id)
{
    c_nam=$("#ccus_name").val();
	
	
	ct=id.toString();
	
	alert("The name is "+c_nam+" The id is "+ct);
	
	
	var invocationData={
			adapter:'yummy_adapter',
			procedure:'procedure5',
			parameters:[id]
	
	};



	var options={
			onSuccess:csu,
			onFailure:cfa			
	};




	WL.Client.invokeProcedure(invocationData, options);
	
}

function csu(result)
{
	
	
	if(result.invocationResult.resultSet.length>4)
		{
		
			var wait=20*(result.invocationResult.resultSet.length-4);
			alert("Waiting time is "+wait+" minutes");
		
		}
	else
		{
			cins(c_nam,ct);
		}
}
function cins(a,b)
{
	var invocationData={
			adapter:'yummy_adapter',
			procedure:'procedure9',
			parameters:[a,b]
	
	};



	var options={
			onSuccess:cisu,
			onFailure:cifa			
	};




	WL.Client.invokeProcedure(invocationData, options);
}
		
function cisu()
{
	alert("Table booked");
}
		
function cifa()
{
	alert("Sorry for inconvenience");
}		
		
function cfa(){
	
}	

/*******************************WAITING LIST**********************************/












		
		
		
		
		
		
		
		
		
		
		
		


google.maps.event.addDomListener(window, 'load', initialize);
