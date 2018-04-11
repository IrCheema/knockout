var viewModel = function(name) {
    var self = this;
    self.id = 1;
    self.cities = ['Stockholm', 'Gothenburg', 'Orebro'];
    self.name = name;
    self.isNew = function() {
        return self.id == 0;
    };
    self.getName = function() {
        return self.name;
    };
    self.books = ['Rapid Application Development With CakePHP',
        '20 Recipes for Programming MVC 3: Faster, Smarter Web Development',
        '20 Recipes for Programming PhoneGap:Cross-Platform Mobile Development for Android and iPhone'
    ];
    self.bookObjects = [{
            title: 'Rapid Application Development With CakePHP',
            isbn: 654646,
            publishedDate: '2011-02-27',
            image: 'http://ecx.images-amazon.com/images/I/41JC54HEroL._AA160_.jpg'

        },
        {
            title: '20 Recipes for Programming MVC 3: Faster, Smarter Web Development',
            isbn: 236985,
            publishedDate: '2014-01-16',
            image: 'http://ecx.images-amazon.com/images/I/51LpqnDq8-L._AA160_.jpg',

        },
        {
            title: '20 Recipes for Programming PhoneGap:Cross-Platform Mobile Development for Android and iPhone',
            isbn: 546546,
            publishedDate: '2013-05-23',
            image: 'http://ecx.images-amazon.com/images/I/51AkFkNeUxL._AA160_.jpg'
        }
    ];
    self.loadImage = function(element, data) {
        $('#image_' + data.isbn).attr({ 'src': data.image });
        $('#image_' + data.isbn).css({ 'width': '80px', 'height': '80px' });
    };
    self.formatDate = function(dateToFormat) {
        var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
        var d = new Date(dateToFormat);
        return months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
    }
    self.getWeather = function(data) {
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + data + "&apikey=8b0f370147417ff546aafb792fde9abe",
            data: {

            },
            type: "GET",
            dataType: "json",
        }).done(function(result) {
            console.log(result)
                /* var selectedVal = $('#ddown option:selected').text();*/
            $("<h1 id='" + result.name + "'>").text(result.name).appendTo("#city_" + result.name);
            $("<div class='content'>").html(result.id).appendTo("#city_" + result.name);

        }).fail(function(xhr, status, errorThrown) {
            alert("Sorry, there was a problem!");
            console.log("Error: " + errorThrown);
            console.log("Status: " + status);
            console.dir(xhr);
        }).always(function(xhr, status) {
            console.log();
        });

    }
    self.getGitHUbData = function(owner,repo,file){
        $.ajax({
            url:"https://api.github.com/repos/"+owner+"/"+repo+"/contents/images/"+"bg.jpg"+"?ref=gh-pages",
            data:{},
            type:"Get",
            dataType:"json",
        }).done(function(results){
            console.log(results)
            $("<img style='width:200px;height:200px' src='"+results.download_url+"'>").appendTo("#gitContent");
        }).fail(function(xhr,status,errorThrown){
            console.log("Error: " + errorThrown);
            console.log("Status: " + status);
            console.dir(xhr);
        }).always(function(){
            console.log();
        });
    }


};
var vieWModelWithParam = new viewModel("Maliha");
ko.applyBindings(vieWModelWithParam);
