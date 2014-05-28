$(document).ready(function() {
	$("").sidr({
		displace: false
	});
	$.sidr("open");

	$('#sidr a[href="#"]').click(function() {
		var target = $(this).attr("data-target");
		if(target in menu.actions) {
			$('#sidr li').removeClass('active');
			$(this).parent().addClass('active');

			if(menu.current != null && "destruct" in menu.actions[menu.current]) {
				menu.actions[menu.current].destruct();
			}
			menu.current = target;
			menu.actions[target].construct();
		}
	});
});

var menu = Object();
menu.current = null;
menu.actions = {
	logout: {
		construct: function() {
			$.post('php/user-logout.php', function(data, status) {
				if(status == 'success') {
					location.reload();
				}
			});
		}
	},
	country: {
		construct: function() {
			$("#main").table({
				source: 'php/country-view.php',
				editTarget: 'php/country-edit.php',
				removeTarget: 'php/country-delete.php',
				addTarget: 'php/country-add.php',
				editable: user.power == 1 ? {
					Name: $('<input type="text" pattern="^.*\\S.*$" title="Cannot contain only spaces.">'),
					Abbreviation: $('<input type="text" pattern="^\\S{1,3}$" title="An Abbreviation with no more than three characters.">')
				} : false,
				add: {
					Name: "edit",
					Abbreviation: "edit"
				}
			});
			changeTitle("Countrys");
		},
		destruct: function() {
			$("#main").table("destroy");
		}
	},
	city: {
		construct: function() {
			$("#main").table({
				source: 'php/city-view.php',
				editTarget: 'php/city-edit.php',
				removeTarget: 'php/city-delete.php',
				addTarget: 'php/city-add.php',
				editable: user.power == 1 ? {
					Name: $('<input type="text" pattern="^.*\\S.*$" title="Cannot contain only spaces.">'),
					Country: $('<select>').html(function(index, old) {
						var countrys;
						$.ajax({
							dataType: 'json',
							url: 'php/country-all.php',
							async: false,
							success: function(data) {
								countrys = data;
							}
						});

						return '<option value=""></option><option>' + countrys.join('</option><option>') + '</option>';
					}).each(function() {
						$(this).find("option").each(function() {
							$(this).attr("value", $(this).text());
						})
					})
				} : false,
				add: {
					Name: "edit",
					Country: "edit"
				}
			});
			changeTitle("Citys");
		},
		destruct: function() {
			$("#main").table("destroy");
		}
	},
	airport: {
		construct: function() {
			$("#main").table_airport({
				source: 'php/airport-view.php',
				editTarget: 'php/airport-edit.php',
				removeTarget: 'php/airport-delete.php',
				addTarget: 'php/airport-add.php',
				editable: user.power == 1 ? {
					IATA: $('<input type="text" pattern="^[A-Z]{3}$" title="Please reference the rule of IATA">'),
					Name: $('<input type="text" pattern="^.*\\S.*$" title="Canoot contain only spaces.">'),
					longitude: $('<input type="number" min="-180" max="180" step="0.000001">'),
					latitude: $('<input type="number" min="-90" max="90" step="0.000001">'),
					Timezone: $('<input type="text" pattern="^(\\+|-)[0-9]{2}:[0-9]{2}$" title="Ex. +08:00">'),
					City: $('<select>').html(function(index, old) {
						var citys;
						$.ajax({
							dataType: 'json',
							url: 'php/city-all.php',
							async: false,
							success: function(data) {
								citys = data;
							}
						});

						var countryGrp = "";
						var optionStr = "";
						for(var c in citys) {
							if(citys[c].Country != countryGrp) {
								if(countryGrp != "") {
									optionStr += '</optgroup>';
								}
								countryGrp = citys[c].Country;
								optionStr += '<optgroup label="' + countryGrp + '">';
							}
							optionStr += '<option value="' + citys[c].Name + '">' + citys[c].Name + '</option>';
						}

						return '<option value=""></option>' + optionStr;
					}),
					Country: null
				} : false,
				add: {
					IATA: "edit",
					Name: "edit",
					longitude: "edit",
					latitude: "edit",
					Timezone: "edit",
					City: "edit"
				}
			});
			changeTitle("Airports");
		},
		destruct: function() {
			$("#main").table_airport("destroy");
		}
	},
	flight: {
		construct: function() {
			$("#main").table_flight({
				source: 'php/flight-view.php',
				editTarget: 'php/flight-edit.php',
				removeTarget: 'php/flight-delete.php',
				addTarget: 'php/flight-add.php',
				editable: user.power == 1 ? {
					"Flight number": $('<input type="text" pattern="^\\S+$" title="Cannot contain space.">'),
					Departure: $('<select>').html(function(index, old) {
						var airports;
						$.ajax({
							dataType: 'json',
							url: 'php/airport-all.php',
							async: false,
							success: function(data) {
								airports = data;
							}
						});

						var countryGrp = "";
						var optionStr = "";
						for(var ap in airports) {
							if(airports[ap].Country != countryGrp) {
								if(countryGrp != "") {
									optionStr += '</optgroup>';
								}
								countryGrp = airports[ap].Country;
								optionStr += '<optgroup label="' + countryGrp + '">';
							}
							optionStr += '<option value="' + airports[ap].IATA + '">' + airports[ap].IATA + ' (' + airports[ap].Name + ')</option>';
						}

						return '<option value=""></option>' + optionStr;
					}),
					dep_name: null,
					dep_country: null,
					dep_city: null,
					dep_long: null,
					dep_lat: null,
					"Departure time": $('<input type="datetime-local">'),
					Destination: $('<select>').html(function(index, old) {
						var airports;
						$.ajax({
							dataType: 'json',
							url: 'php/airport-all.php',
							async: false,
							success: function(data) {
								airports = data;
							}
						});

						var countryGrp = "";
						var optionStr = "";
						for(var ap in airports) {
							if(airports[ap].Country != countryGrp) {
								if(countryGrp != "") {
									optionStr += '</optgroup>';
								}
								countryGrp = airports[ap].Country;
								optionStr += '<optgroup label="' + countryGrp + '">';
							}
							optionStr += '<option value="' + airports[ap].IATA + '">' + airports[ap].IATA + ' (' + airports[ap].Name + ')</option>';
						}

						return '<option value=""></option>' + optionStr;
					}),
					des_name: null,
					des_country: null,
					des_city: null,
					des_long: null,
					des_lat: null,
					"Arrival time": $('<input type="datetime-local">'),
					Price: $('<input type="number" max="999999.99" min="0" step="0.01">')
				} : false,
				add: {
					"Flight number": "edit",
					Departure: "edit",
					"Departure time": "edit",
					Destination: "edit",
					"Arrival time": "edit",
					Price: "edit"
				}
			});
			changeTitle("Flights");
		},
		destruct: function() {
			$("#main").table_flight("destroy");
		}
	}
};

function changeTitle(title) {
	$("title").text("Flight-managing System - " + title);
	$(".funct").text(title);
}
