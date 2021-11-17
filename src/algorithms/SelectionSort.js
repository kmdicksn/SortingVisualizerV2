/*
Step-by-step sorting using Selection Sort
@param  {Object}   data				 The chart to be randomized
@return [{Object}] chartSortOrder    The step-by-step array of sorting steps to sorted array
 */

const selectionSort = (data) => {
	// The step-by-step sorting data set object
	let chartSortOrder = [];
	let tempArray;

	for (let i = 0; i < data.length; i++) {
		// Finding the smallest number in the subarray
		let min = i;
		for (let j = i + 1; j < data.length; j++) {
			if (data[j] < data[min]) {
				min = j;
			}
		}
		if (min != i) {
			// Swapping the elements
			let temp = data[i];
			data[i] = data[min];
			data[min] = temp;
			// add steps to array
			tempArray = [];
			Object.assign(tempArray, data);
			chartSortOrder.push(tempArray);
		}
	}

	return chartSortOrder;
};

export default selectionSort;
