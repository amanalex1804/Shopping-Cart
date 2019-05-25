var mongoose = require('mongoose');
var Product = require('../models/product');


mongoose.connect('mongodb://localhost:27017/shopping');




var products = [
    new Product({
	imagePath : "https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
	title : 'Gothic Video Game',
	description : 'Awesome!!',
	price : 10
    }),
      new Product({
	imagePath : "https://cdn.images.express.co.uk/img/dynamic/143/590x/Call-of-Duty-Modern-Warfare-Remastered-811975.jpg",
	title : '2nd number wla',
	description : 'Awesome!!',
	price : 10
    }),
         new Product({
	imagePath : "https://www.callofduty.com//content/dam/atvi/callofduty/wwii/home/Stronghold_Metadata_Image.jpg",
	title : '3rd number wala',
	description : 'Awesome!!',
	price : 10
    }),
            new Product({
	imagePath : "https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
	title : '4th number wal ',
	description : 'Awesome!!',
	price : 10
    })
    ];


 	var done = 0;
    for(var i=0;i<products.length;++i){
    	products[i].save(function(err,result){
    		++done;
    		if(done === products.length){
    			exit();
    		}
    	});
    }

    function exit(){
    	mongoose.disconnect();
    }
