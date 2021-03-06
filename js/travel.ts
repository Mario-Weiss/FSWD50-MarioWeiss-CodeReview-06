class Locations {
	constructor(
		public name: string,
		public city: string,
		public zip: string,
		public adress: string,
		public img: string,
		public vdate : Date = new Date(), 
	){}

	render(){
		return `<div class="col-12 col-md-6 col-lg-4 col-xl-3 p-3 d-block d-md-flex">
					<div class="card text-center">
						<img class="card-img-top d-none d-sm-block" src="img/${this.img}" alt="${this.name}">
						<div class="card-body">
							<h5 class="card-title">${this.name}</h5>
						<p class="card-text">${this.adress}, <span class="text-nowrap">${this.zip} ${this.city} <a href="https://www.google.com/maps/place/${this.zip} ${this.city}, ${this.adress}" title="show location on google maps"><i class="fas fa-map-marker-alt"></i></a></span></p>
					</div>
					<div class="card-footer text-muted">
						<small>Created: ${days[this.vdate.getDay()]}, ${String(this.vdate.getDate()).padStart(2, '0')}.${String(this.vdate.getMonth()+1).padStart(2, '0')}.${this.vdate.getFullYear()} - ${this.vdate.getHours()}:${String(this.vdate.getMinutes()).padStart(2, '0')}</small>
					</div>
				</div>`
	} 
}

class Restaurants extends Locations {
	public tel: string;
	public type: string;
	public web: string;
	constructor(name: string, city: string, zip: string, adress: string, img: string, tel: string, type: string, web: string){
		super(name, city, zip, adress, img);
		this.tel = tel;
		this.type = type;
		this.web = web;
	}
	render (){
		return `<div class="col-12 col-md-6 col-lg-4 col-xl-3 p-3 d-block d-md-flex">
					<div class="card text-center">
  						<img class="card-img-top d-none d-sm-block" src="img/${this.img}" alt="${this.name}">
  						<div class="card-body">
    						<h5 class="card-title">${this.name}</h5>
    						<p class="lead">${this.type}</p>
    						<p class="card-text">${this.adress}, <span class="text-nowrap">${this.zip} ${this.city} <a href="https://www.google.com/maps/place/${this.zip} ${this.city}, ${this.adress}" title="show location on google maps"><i class="fas fa-map-marker-alt"></i></a></span></p>
    						<a href="${this.web}"><i class="fas fa-globe"></i> ${this.web.slice(7,)}</a>
    						<p><i class="fas fa-phone"></i> ${this.tel}
    					</div>
					</div>
				</div>`
	}
}

class Events extends Locations {
	public web: string;
	public date: Date;
	public time: Date;
	public price: number;
	constructor(name: string, city: string, zip: string, adress: string, img: string, web: string, date: Date, time: Date, price: number){
		super(name, city, zip, adress, img)
		this.web = web;
		this.date = date;
		this.time = time;
		this.price = price;
	}
	render() {
		return `<div class="col-12 col-md-6 col-lg-4 col-xl-3 p-3 d-block d-md-flex">
					<div class="card text-center">
  						<img class="card-img-top d-none d-sm-block" src="img/${this.img}" alt="${this.name}">
  						<div class="card-body">
    						<h5 class="card-title">${this.name}</h5>
    						<p class="card-text">${this.adress}, <span class="text-nowrap">${this.zip} ${this.city} <a href="https://www.google.com/maps/place/${this.zip} ${this.city}, ${this.adress}" title="show location on google maps"><i class="fas fa-map-marker-alt"></i></a></span></p>
    						<a href="${this.web}"><i class="fas fa-globe"></i> ${this.web.slice(7,)}</a>
    						<p><i class="far fa-calendar-alt"></i> ${days[this.date.getDay()]}, ${String(this.date.getDate()).padStart(2, '0')}.${String(this.date.getMonth()+1).padStart(2, '0')}.${this.date.getFullYear()} - ${this.time.getHours()}:${String(this.time.getMinutes()).padStart(2, '0')}<br>
							<i class="far fa-money-bill-alt"></i> ${this.priceOut()}</p>
    					</div>
					</div>
				</div>`
	}
	priceOut (){
		if (this.price == 0) {
			return `free entry`
		} 
		return `&euro; ${(this.price).toFixed(2)}`
	}
}

var travel:Array<any>=[];
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var days = ["Sun.","Mon.","Tues.","Wed.","Thurs.","Fr.","Sat."];

travel.push(new Locations ("Marineland", "Antibes", "06600", "306 Avenue Mozart","marineland.jpg", new Date(2015,7,15,16)));
travel.push(new Locations ("Familypark", "St. Margarethen", "7062", "Märchenparkweg 1","familypark.jpg", new Date(2014,8,20,10,30)));
travel.push(new Locations ("Gardaland", "Castelnuovo del Garda", "37014", "Via Derna 4","gardaland.jpg", new Date(2015,7,8,8,15)));
travel.push(new Locations ("Pyramidenkogel", "Linden", "9074", "Linden 62","pyramidenkogel.jpg", new Date(2016,6,27,14)));
travel.push(new Locations ("Schneeberg", "Puchberg", "2734", "Bahnhofpl. 1","schneeberg.jpg", new Date(2018,4,20,11)));
travel.push(new Locations ("Aqualandia", "Lido di Jesolo", "30016", "Via Michelangelo Buonarroti 15","aqualandia.jpg", new Date(2013,6,22,9)));
travel.push(new Locations ("Zoo Vienna", "Vienna", "1130", "Maxingstraße 13b","zooVienna.jpg", new Date(2013,3,6,10,45)));
travel.push(new Locations ("Amethyst Welt", "Maissau", "3712", "Horner Straße 36","amethystwelt.jpg", new Date(2015,9,10,13)));

travel.push(new Restaurants ("Wok & Tea", "Traiskirchen", "2514", "Arkadiaweg 1", "wokntea.jpg", "+43 2252 50 87 77", "asian food","https://www.firmenabc.at/wok-tea-restaurant_HxGJ"));
travel.push(new Restaurants ("Klostergasthaus Thallern", "Gumpoldskirchen", "2352", "Thallern 1", "thallern.jpg", "+43 2236 53477", "regional spezialities","https://www.klostergasthaus-thallern.at"));
travel.push(new Restaurants ("Graselwirtin", "Mörtersdorf", "3580", "Mörtersdorf 43", "graselwirtin.jpg", "+43 2982 8235", "regional spezialities","http://www.graselwirtin.at"));
travel.push(new Restaurants ("Werkstatt Eat & Drink", "Wiener Neustadt", "2700", "Zehnergürtel 12-24", "werkstatt.jpg", "+43 664 / 380 15 75", "exquisite specialities","https://www.mittag.at/r/werkstatt-fischapark"));
travel.push(new Restaurants ("Camping-Gasthof Maltschacher Seewirt", "Feldkirchen", "9560", "Maltschach 2", "seewirt.jpg", "+43 4277 2637", "regional specialities","http://www.seewirt-spiess.com"));
travel.push(new Restaurants ("Thermenrestaurant", "Baden", "2500", "Brusattiplatz 4", "thermenrestaurant.jpg", "+43 664 / 56 29 108", "traditional & vegan food","http://www.thermenrestaurant.at"));
travel.push(new Restaurants ("Bento", "Vösendorf", "2334", "SCS Shopping City Süd", "bento.jpg", "+43 2236 64515", "asian food","https://www.scs.at/en/restaurant/bento"));
travel.push(new Restaurants ("Tsatsiki", "Sooß", "2500", "Bezirksstrasse 1", "tsatsiki.jpg", "+43 2252 22870", "greek food","https://www.tsatsiki.at"));

travel.push(new Events("electric love", "Plainfeld", "5325", "SALZBURGRING - Salzburgring 1", "electriclove.jpg", "https://www.electriclove.at", new Date(2019,5,4), new Date(0,0,0,12,0),149));
travel.push(new Events("Donauinselfest", "Vienna", "1210", "Vienna - Donauinsel", "donauinsel.jpg", "https://donauinselfest.at", new Date(2019,5,21), new Date(0,0,0,13,0),0));
travel.push(new Events("medieval pageant", "Eggenburg", "3730", "Wienerstraße 13", "eggenburg.jpg", "https://www.mittelalter.co.at", new Date(2019,8,7), new Date(0,0,0,10,0),7));
travel.push(new Events("Ritterfest", "Laxenburg", "2361", "Schlossplatz 1", "ritterfest.jpg", "https://www.schloss-laxenburg.at", new Date(2019,8,21), new Date(0,0,0,10,0),16.6));
travel.push(new Events("Die Fantastischen Vier", "Vienna", "1150", "Stadthalle Wien, Vogelweidplatz 14", "fanta4.jpg", "http://www.diefantastischenvier.de", new Date(2019,0,9), new Date(0,0,0,20,0),66.5));
travel.push(new Events("Glow in the Dark - Circusshow", "Vösendorf", "2331", "Kultursaal Vösendorf, Kindbergstrasse 12", "glow.jpg", "http://www.zirkusstoffl.at", new Date(2018,9,27), new Date(0,0,0,17,0),13));
travel.push(new Events("Paul Pizzera & Otto Jaus - Unerhört Solide", "Salzburg", "5020", "Republic - Anton-Neumayr-Platz 2", "paul.jpg", "http://www.paulpizzera.at/pizzera-jaus", new Date(2019,1,9), new Date(0,0,0,20,0),41));
travel.push(new Events("Elton John", "Graz", "8010", "Messe Graz - Messeplatz 1", "elton.jpg", "https://www.eltonjohn.com", new Date(2019,7,3), new Date(0,0,0,20,0),149.9));



//-----display the objects in the browser-----//
for (let i in travel) {
	document.getElementById(travel[i].constructor.name).insertAdjacentHTML('beforeend', travel[i].render())
}
//-----add Eventhandler to hide menu on click-----//
$(".nav-link").click(function(){$(".collapse").collapse("hide");});

function fadeImage() {
	var x = 11; //number of images
	for (var i = 1; i <= x; ++i) {
		new Image().src = "img/bg"+i+".jpg";
	}
    // caches images, avoiding white flash between background replacements
	var i = Math.ceil(Math.random()*x);
	document.getElementById("header").style.background = "url(img/bg"+i+".jpg) no-repeat center center";
	document.getElementById("header").style.backgroundSize ="cover";
	setTimeout(function(){fadeImage()}, 5000);
}

fadeImage()



