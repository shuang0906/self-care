
class sidenote extends Paged.Handler {
	constructor(chunker, polisher, caller) {
		super(chunker, polisher, caller);
	}

	// before pagedjs
	beforePageLayout(content){

		

	}

	// after pagedjs
	afterRendered(pages) {
		let area = document.getElementsByClassName('pagedjs_area');

		let classPage = "pagedjs_page";
		let classPageLeft = "pagedjs_left_page";
		let classPageRight = "pagedjs_right_page";

		for (let a = 0; a < area.length; a++) {

			let el = area[a];
			let sidenote = area[a].getElementsByClassName('sidenote');



			/* Add sidenotes area */
			do {
				el = el.parentElement;
				if (el.classList.contains(classPageLeft) == true) {
					/* add sidenote area to the left*/
					let target = area[a].children[0];
					let areaSidenoteLeft = document.createElement("div");
					areaSidenoteLeft.className = 'area-sidenote-right';
					target.parentNode.insertBefore(areaSidenoteLeft, target);
				} else if (el.classList.contains(classPageRight) == true) {
					/* add sidenote area to the right*/
					let target = area[a].children[0];
					let areaSidenoteRight = document.createElement("div");
					areaSidenoteRight.className = 'area-sidenote-right';
					target.parentNode.insertBefore(areaSidenoteRight, target);
				}

			} while (!el.classList.contains(classPage));


			/* Move sidenotes in sidenotes area */
			for (let i = 0; i < sidenote.length; i++) {

				let elside = sidenote[i];


				do {
					elside = elside.parentElement;
					if (elside.classList.contains(classPageLeft) == true) {
						let areaLeft = elside.getElementsByClassName('area-sidenote-right')[0];
						areaLeft.appendChild(sidenote[i]);


					} else if (elside.classList.contains(classPageRight) == true) {
						let areaRight = elside.getElementsByClassName('area-sidenote-right')[0];
						areaRight.appendChild(sidenote[i]);
					}

				} while (!elside.classList.contains(classPage));

				sidenote[i].style.position = "relative";


			}


		}
	}
}
Paged.registerHandlers(sidenote);



