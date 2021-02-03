import {dataTable, colorSet} from "../data/dataTable";
import {tableToolbar} from "./tableToolbar";

webix.type(webix.ui.kanbanlist, {
	name: "cards",
	template(obj, common) {
		let kanban = webix.$$(common.master);
		let color = kanban.getColors().exists(obj.color) ?
			kanban.getColors().getItem(obj.color).color : obj.color;
		let body = `
			<div class='webix_kanban_body cardBody flex'>
				${common.templateBody(obj, common, kanban)}
				<span class='cardCost'>${webix.i18n.priceFormat(obj.cost ? obj.cost : 0)}</span>
			</div>`;
		let footer = `
			<div class='webix_kanban_footer'>
				${common.templateFooter(obj, common, kanban)} 
				<span class="cardStatus" style="background-color: ${color}">${obj.status}<span/>
			</div>`;
		let style = color ? ` style='border-left-color:${color}'` : "";
		return `
			<div class='webix_kanban_list_content'  ${style}>
				${body}
				${footer}
			</div>`;
	},
	templateFooter(obj) {
		let defaultDate = new Date();
		let formatDate = webix.Date.dateToStr("%d/%m/%Y");
		let footerLeft = `<div class="cardFooterLeft flex">
			<span class="cardOwner">${obj.owner ? obj.owner : "Elina Rollins"}</span>
			<span class="cardDate">${formatDate(obj.date ? obj.date : defaultDate)}</span>
		</div>`;
		return footerLeft;
	},
	templateBody(obj) {
		let body = `${obj.text ? obj.text : "New Card"}`;
		return body;
	}
});

let setColor = (obj, list) => {
	const status = list.config.status;
	const colors = list.getKanban().getColors();
	const color = colors.find(c => c.value === status);
	obj.color = color[0].id;
};

let dynamicSetColor = (ctx) => {
	const obj = ctx.from.getItem(ctx.start);
	setColor(obj, ctx.to);
};

export const table = {
	margin: 1,
	rows: [
		tableToolbar,
		{
			id: "kanban",
			view: "kanban",
			css: "tableKanban",
			borderless: true,
			padding: {top: 10, left: 0, right: 0, bottom: 0},
			cols: [
				{rows: [
					{view: "kanbanheader",
						label: "Approved",
						link: "approved",
						on: {
							onBeforeCardAdd: setColor
						}},
					{id: "approved",
						view: "kanbanlist",
						status: "approved",
						color: 1,
						type: "cards",
						on: {
							onBeforeDrop: dynamicSetColor
						}
					}
				]},
				{rows: [
					{view: "kanbanheader",
						label: "To Submit",
						link: "to_submit",
						on: {
							onBeforeCardAdd: setColor
						}},
					{id: "to_submit",
						view: "kanbanlist",
						status: "to submit",
						type: "cards",
						on: {
							onBeforeDrop: dynamicSetColor
						}
					}
				]},
				{rows: [
					{view: "kanbanheader",
						label: "Refused",
						link: "refused",
						on: {
							onBeforeCardAdd: setColor
						}},
					{id: "refused",
						view: "kanbanlist",
						status: "refused",
						type: "cards",
						on: {
							onBeforeDrop: dynamicSetColor
						}
					}
				]},
				{rows: [
					{view: "kanbanheader",
						label: "Submitted",
						link: "submitted",
						on: {
							onBeforeCardAdd: setColor
						}},
					{id: "submitted",
						view: "kanbanlist",
						status: "submitted",
						type: "cards",
						on: {
							onBeforeDrop: dynamicSetColor
						}
					}
				]}
			],
			data: dataTable,
			colors: colorSet,
			editor: {
				elements: [
					{view: "text", name: "text", label: "Title"},
					{view: "text", name: "owner", label: "Owner"},
					{cols: [
						{view: "text", name: "cost", label: "Cost"},
						{view: "datepicker", name: "date", label: "Date", format: webix.Date.dateToStr("%d/%m/%y")},
						{
							view: "richselect",
							label: webix.i18n.kanban.editor.color,
							name: "color",
							$hide: true,
							options: {
								body: {
									data: colorSet,
									css: "webix_kanban_colorpicker",
									template: "<span class='webix_kanban_color_item' style='background-color: #color#'></span>#value#"
								}
							}
						}
					]
					}
				]
			}
		}
	]
};
