// navigation bar sticks to top of screen when scrolling down 
window.onscroll = function(){myFunction()};
		let navBar = document.getElementById("navBar");
		let sticky = navBar.offsetTop;
		
		function myFunction(){
			if(window.pageYOffset >= sticky){
				navBar.classList.add("sticky")
			} else {
				navBar.classList.remove("sticky")
			}
		}
		window.addEventListener("DOMContentLoaded", function() {
			let boxes = document.querySelectorAll(".Container-projectTab");
		
			Array.from(boxes, function(box) {
				box.addEventListener("click", function() {
					alert(this.classList[1]);
				});
			});
		});