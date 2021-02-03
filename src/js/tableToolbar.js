export const tableToolbar = {
	view: "toolbar",
	css: "tableToolbar",
	paddingX: 10,
	height: 44,
	cols: [
		{
			view: "label",
			label: "My expenses",
			width: 104
		},
		{
			view: "multicombo",
			value: "1",
			css: "headerMulticombo",
			width: 260,
			height: 32,
			options: [
				{id: 1, value: "Status"}
			]
		},
		{},
		{
			view: "richselect",
			css: "tableToolbarSelect",
			label: "<span class='mdi mdi-24px mdi-filter-variant'></span>",
			labelWidth: 24,
			width: 120,
			icon: "mdi mdi-menu-down",
			placeholder: "Filters",
			options: {
				view: "suggest",
				fitMaster: false,
				width: 120,
				body: {
					view: "list",
					data: [
						{id: 0, value: ""},
						{id: 1, value: "Food"},
						{id: 2, value: "Travels"},
						{id: 3, value: "Sport"}
					]
				}
			}
		},
		{
			view: "spacer",
			width: 30
		},
		{
			view: "richselect",
			css: "tableToolbarSelect",
			label: "<span class='mdi mdi-24px mdi-group'></span>",
			labelWidth: 24,
			width: 112,
			icon: "mdi mdi-menu-down",
			placeholder: "Group by",
			options: {
				view: "suggest",
				fitMaster: false,
				width: 120,
				body: {
					view: "list",
					data: [
						{id: 0, value: ""},
						{id: 1, value: "Food"},
						{id: 2, value: "Activities"},
						{id: 3, value: "Flights"},
						{id: 4, value: "Technics"}
					]
				}
			}
		},
		{
			view: "spacer",
			width: 30
		},
		{
			view: "richselect",
			css: "tableToolbarSelect",
			label: "<span class='mdi mdi-24px mdi-star'></span>",
			labelWidth: 24,
			width: 112,
			icon: "mdi mdi-menu-down",
			placeholder: "Group by",
			options: {
				view: "suggest",
				fitMaster: false,
				width: 120,
				body: {
					view: "list",
					data: [
						{id: 0, value: ""},
						{id: 1, value: "Food"},
						{id: 2, value: "Car"},
						{id: 3, value: "Sport"}
					]
				}
			}
		},
		{},
		{
			view: "button",
			css: "webix_primary",
			value: "Create",
			width: 80
		},
		{
			view: "button",
			css: "webix_secondary",
			value: "Import",
			width: 80
		}
	]
};
