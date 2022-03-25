const sleep = ms => new Promise(r => setTimeout(r, ms));

async function changeTasksDate(day){
	let list = document.getElementsByClassName("due-date");
	let counter = 2;
	for(var i = 0; i < list.length; i++)
	{
		if (list[i].classList.contains("overdue"))
		{
		list[i].click();
		await sleep(100);
		//let dropDownItems = document.getElementsByClassName("podio-dropdown-item");
		let dropDownItems = document.getElementsByClassName("podio-dropdown-dropcontainer")[i];
		//console.log(dropDownItems[counter-i]);
		await sleep(100);
		let querySelectorIndex = '[index="1"]';
		if(day.toLowerCase() == "tomorrow"){
			querySelectorIndex = '[index="2"]'
		}
		console.log(dropDownItems.querySelectorAll(querySelectorIndex));
		let button = dropDownItems.querySelectorAll(querySelectorIndex)[0];
		await sleep(100);
		button.click();
		//dropDownItems[counter-i].childNodes[1].click();
		counter += 7;
		await sleep(300);
		}
	}
}