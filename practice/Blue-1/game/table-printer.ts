'use strict';
// Create a function that prints the ingredient list of dictionaries to the console in the following format:
//
// +--------------------+---------------+----------+
// | Ingredient         | Needs cooling | In stock |
// +--------------------+---------------+----------+
// | vodka              | Yes           | 1        |
// | coffee_liqueur     | Yes           | -        |
// | fresh_cream        | Yes           | 1        |
// | captain_morgan_rum | Yes           | 2        |
// | mint_leaves        | No            | -        |
// +--------------------+---------------+----------+
//
// OPTIONAL
// The frist columns should be automatically as wide as the longest key

const ingredients: any[] = [
	{ name: 'vodka', inStock: 1, needsCooling: true },
	{ name: 'coffee_liqueur', inStock: 0, needsCooling: true },
	{ name: 'fresh_cream', inStock: 1, needsCooling: true },
	{ name: 'captain_morgan_rum', inStock: 2, needsCooling: true },
	{ name: 'mint_leaves', inStock: 0, needsCooling: false },
	{ name: 'sugar', inStock: 0, needsCooling: false },
	{ name: 'lime juice', inStock: 0, needsCooling: true },
	{ name: 'soda', inStock: 0, needsCooling: true }
];

function table() {
	let line = '+--------------------+---------------+----------+';
	let head = '| Ingredient         | Needs cooling | In stock |';
	let firstBox = 18;
	let secoundBox = 13;
	let lastBox = 8;
	let space = ' ';

	let result = line + '\n';
	result += head + '\n';
	result += line + '\n';

	for (let item of ingredients) {

		item.needsCooling ? item.needsCooling = 'Yes' : item.needsCooling = 'NO';
		if (item.inStock <= 0) { item.inStock = '-' }

		let lengthName = space.repeat(firstBox - item.name.length)
		let lengthNeedColing = space.repeat(secoundBox - item.needsCooling.length)
		let lengthInStock = space.repeat(lastBox - item.inStock.toString().length)

		result += `| ${item.name}${lengthName} | ${item.needsCooling}${lengthNeedColing} | ${item.inStock}${lengthInStock} | \n`;
	}
	result += line;
	return result
}
console.log(table())





