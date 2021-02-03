export const usermenu = {
	view: "popup",
	id: "user_menu",
	width: 150,
	body: {
		view: "list",
		data: [
			{id: "1", value: "Profile"},
			{id: "2", value: "Settings"},
			{id: "3", value: "Log Out"}
		],
		autoheight: true,
		select: true
	}
};
