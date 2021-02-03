import {usertemplate} from "./usertemplate";

export const header = {
	view: "toolbar",
	id: "header",
	paddingX: 10,
	paddingY: 6,
	cols: [
		{},
		{
			view: "icon",
			icon: "mdi mdi-bell"
		},
		{
			view: "icon",
			icon: "mdi mdi-message",
			badge: 5
		},
		{
			view: "icon",
			icon: "mdi mdi-settings"
		},
		usertemplate
	]
};
