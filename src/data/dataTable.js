const dataTable = [
	{id: 1, owner: "Elina Rollins", date: new Date(2020, 11, 10), status: "approved", text: "Hotel expenses", color: 1, cost: "2000"},
	{id: 2, owner: "Elina Rollins", date: new Date(2020, 11, 10), status: "approved", text: "Lunch", color: 1, cost: "56.8"},
	{id: 3, owner: "Elina Rollins", date: new Date(2020, 11, 10), status: "approved", text: "Lunch with customer", color: 1, cost: "152.8"},
	{id: 4, owner: "Elina Rollins", date: new Date(2020, 11, 10), status: "approved", text: "Travel by air", color: 1, cost: "700"},
	{id: 5, owner: "Elina Rollins", date: new Date(2020, 11, 10), status: "to submit", text: "Flight to Seattle", color: 2, cost: "650"},
	{id: 6, owner: "Elina Rollins", date: new Date(2020, 11, 17), status: "to submit", text: "Laptop", color: 2, cost: "990"},
	{id: 7, owner: "Elina Rollins", date: new Date(2020, 10, 17), status: "to submit", text: "Screen", color: 2, cost: "250"},
	{id: 8, owner: "Elina Rollins", date: new Date(2020, 10, 17), status: "to submit", text: "Car tyres", color: 2, cost: "250"},
	{id: 9, owner: "Elina Rollins", date: new Date(2020, 11, 5), status: "refused", text: "Paintboll", color: 3, cost: "200"},
	{id: 10, owner: "Elina Rollins", date: new Date(2020, 11, 5), status: "refused", text: "Drinks", color: 3, cost: "52.5"},
	{id: 11, owner: "Elina Rollins", date: new Date(2020, 11, 5), status: "refused", text: "Pizzas", color: 3, cost: "75.5"},
	{id: 12, owner: "Elina Rollins", date: new Date(2020, 11, 10), status: "submitted", text: "Lamp", color: 4, cost: "25.8"},
	{id: 13, owner: "Elina Rollins", date: new Date(2020, 11, 8), status: "submitted", text: "Chairs", color: 4, cost: "335.2"},
	{id: 14, owner: "Elina Rollins", date: new Date(2020, 11, 5), status: "submitted", text: "Lunch with customer", color: 4, cost: "79.3"}
];

const colorSet = [
	{id: 1, value: "approved", color: "#55cd97"},
	{id: 2, value: "to submit", color: "#fdbf4c"},
	{id: 3, value: "refused", color: "#ff5c4c"},
	{id: 4, value: "submitted", color: "#1ca1c1"}
];

export {dataTable, colorSet};
