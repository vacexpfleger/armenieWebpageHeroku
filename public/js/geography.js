$(function(){
    let regions = [];
    fetch('api/geography')
    .then(response => { 
        return response.json() 
    })
    .then(json => { 
        regions = json;
        console.log(regions);
    })
    .catch(function (error) {
       console.error('Chyba: \n', error);
    });

    let cities = [];
    fetch('api/cities')
    .then(response => { 
        return response.json() 
    })
    .then(json => { 
        cities = json;
        console.log(cities);
    })
    .catch(function (error) {
       console.error('Chyba: \n', error);
    });

    $("rect").hide();
    $("#cities").on('change', function(){
        $("rect").slideToggle(500);
    });

    let defaultColorPath = '';
    let defaultColorRect = '';
    let infoBox = $("info-box")

    $("path").on('mouseover', function(){
            defaultColorPath = $(this).css('fill');
            $(this).css('fill','gray');     
    });

    $("path").on('mouseout', function(){
        $(this).css('fill', defaultColorPath);
    });

    $("rect").on('mouseover', function(){
        defaultColorRect = $(this).css('fill');
        $(this).css('fill','gray');     
    });

    $("rect").on('mouseout', function(){
        $(this).css('fill', defaultColorRect);
    });

    $("path").on('click', function(){
        let id = $(this).attr('id');
        console.log(id);
        $(this).css('fill','gray');
        let region = regions.find(item => {return item.name == id});
        console.log(region.name);
        $('#geo-info').slideUp(500, function() {$('#geo-info').html(`<div class="row"><div class="col-sm-4"><img src="img/${region.photo}" alt="${region.name}" class="img-fluid"></div><div class="col-sm-8"><h1>${region.name}</h1><p>${region.description}</p></div></div>`)});
        $('#geo-info').slideDown(500);
    });

    $("rect").on('click', function(){
        let id = $(this).attr('id');
        console.log(id);
        $(this).css('fill','blue');
        let city = cities.find(item => {return item.name == id});
        console.log(city.name);
        $('#geo-info').slideUp(500, function() {$('#geo-info').html(`<div class="row"><div class="col-sm-4"><img src="img/${city.photo}" alt="${city.name}" class="img-fluid mt-2"></div><div class="col-sm-8"><h1>${city.name}</h1><p>${city.description}</p></div></div>`)});
        $('#geo-info').slideDown(500);
    });
});