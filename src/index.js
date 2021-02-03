import {header} from "./js/header";
import {sidebar} from "./js/sidebar";
import {table} from "./js/table";
import {usermenu} from "./js/usermenu";

// SCSS
import "./styles/main.scss";

webix.ready(() => {
	if (!webix.env.touch && webix.env.scrollSize) {
		webix.CustomScroll.init();
	}

	webix.ui({
		rows: [
			header,
			{
				cols: [
					sidebar,
					{
						type: "space",
						cols: [
							table
						]
					}
				]
			}
		]
	});

	webix.ui(usermenu);

	webix.$$("sidebar").select("expenses");
});
