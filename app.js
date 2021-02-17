window.onload = function () {
	console.log("print");
	
	
	const res = document.querySelector("#nmb");
	console.log(res);
	
	res.addEventListener("onclick", function() { 
		console.log("a");})

	
}

const arr = [];


 



// helper func for mapping arr[] (twice), insert delimiter '=' and newline
function helper(arr) { 
	return arr.map(i => i.map( j => j).join('=')).join('\n');
}

// getValue func for grab input values and proceedings job for return name=value
function getValue() {
	str = document.getElementById('input').value;
	
	if (/^[0-9a-zA-Zа-яА-Я]+\s*\=\s*[0-9a-zA-Zа-яА-Я]+$/.test(str)) {
		// extract two substring and remove white space
		arrSplit = str.replace(/\s+/g, '').split('=');
		// add new array to arr[]
		arr.push(arrSplit);
		// using helper func for mapping arr and return name=value to index.html
		document.getElementById('list').innerHTML = helper(arr);
	}
}

// Delete func for erase arr[]
function deleteAll() {
	arr.length = 0;
	document.getElementById('list').innerHTML = arr;
}

// sortByName func for ascending/descendin sort by name's field 
function sortByName() {
	arr.sort((a, b) => a[0].localeCompare(b[0]));
	document.getElementById('list').innerHTML = helper(arr);
}

// sortByValue func for ascending/descenfing sort by value's field
function sortByValue() {
	arr.sort((a, b) => a[1].localeCompare(b[1]));
	document.getElementById('list').innerHTML = helper(arr);
}

// Show Array as XML as is
function showXML() {
	var jsonObj = JSON.parse(JSON.stringify(arr));
	alert(json2xml(jsonObj));
}