var left_div = document.getElementById('firstSectionID');
	var right_div = document.getElementById('secondSectionID');
	var bottom_div = document.getElementById('foot');

	window.addEventListener('scroll', animation);

	function animation (e){


		var left_div_pos = left_div.offsetTop;
		var right_div_pos = right_div.offsetTop;
		var bottom_div_pos = bottom_div.offsetTop;


		var window_pos = window.pageYOffset;
	
		if (window_pos> left_div_pos-500){

			left_div.classList.add('animation-left');
		}
		if(window_pos> right_div_pos-500){

			right_div.classList.add('animation-right');
		} 
		if(window_pos >bottom_div_pos -500) {
			bottom_div.classList.add('animation-top');
		}
  }