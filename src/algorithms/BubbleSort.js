/*
Step-by-step sorting using Bubble Sort
@param  {Object}   data				 The chart to be randomized
@return [{Object}] chartSortOrder    The step-by-step array of sorting steps to sorted array
 */
const bubbleSort = (data) => {
	// The step-by-step sorting data set object
	let chartSortOrder = [];
	let tempArray;

	for (let i = 0; i < data.length; i++) {
		for (let j = 0; j < (data.length - i - 1); j++) {
			if (data[j] > data[j + 1]) {
				let temp = data[j];
				data[j] = data[j + 1];
				data[j + 1] = temp;
				// add steps to array
				tempArray = [];
				Object.assign(tempArray, data);
				chartSortOrder.push(tempArray);
			}
		}
	}

	return chartSortOrder;
};

export default bubbleSort;
