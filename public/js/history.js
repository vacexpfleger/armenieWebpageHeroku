function famousNames(data) {
	data.forEach((person)=>{
		console.log(person.name);
		$(".list-group").append(`<button type="button" class="list-group-item list-group-item-action">${person.name}</button>`)
	});

	function personCard(person) {
		let hero = data.find(item => {return item.name === person});

		if(!hero.death){
			$(".person-header").html(`<h3>${hero.name}</h3>
			<h4 class="lead">${hero.birth}</h4>`);
		}
		else {
			$(".person-header").html(`<h3>${hero.name}</h3>
			<h4 class="lead">${hero.birth} – ${hero.death}</h4>`);
		}
	
		$(".person-img").html(`<img class="img-fluid d-block mx-auto" src="img/${hero.photo}" alt="${hero.name}">`);
		$(".person-bio").html(`<p class=" p-2">${hero.bio}</p>`)
		console.log(hero.name);
	}
	
	$(".list-group-item:first").addClass('bg-light');
	personCard(data[0].name);
	
	$(".list-group-item").on("click", function() {
		$(".list-group-item").removeClass('bg-light');
		$(this).addClass('bg-light');
		
		let person = $(this).text();

		$(".person-article").slideUp(1000, function(){
			personCard(person);
		});
		$(".person-article").slideDown(1000);
	});
}

fetch('api/famousNames')
      .then(response => {
         return response.json()
      })
      .then(json => {
         famousNames(json);
      })
      .catch(function (error) {
         console.error(error);
      });