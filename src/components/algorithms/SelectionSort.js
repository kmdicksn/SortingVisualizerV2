import { compareColor, setColor } from '../utility/Util';
import { COMPLETED_GRAPH_COLOUR } from '../utility/constants';

/*
Step-by-step sorting using Selection Sort
@param  {Object}   data				 The chart to be randomized
@return [{Object}] chartSortOrder    The step-by-step array of sorting steps to sorted array
 */
const selectionSort = (chart) => {
	// The step-by-step sorting data set object
	let chartSortOrder = [];
	let tempArray;

	for (let i = 0; i < chart.datasets[0].data.length; i++) {
		// Finding the smallest number in the subarray
		let min = i;
		for (let j = i + 1; j < chart.datasets[0].data.length; j++) {
			compareColor(chart, j, min);
			chartSortOrder.push(JSON.parse(JSON.stringify(chart)))
			if (chart.datasets[0].data[j] < chart.datasets[0].data[min]) {
				min = j;
			}
		}
		if (min !== i) {
			// Swapping the elements
			let temp = chart.datasets[0].data[i];
			chart.datasets[0].data[i] = chart.datasets[0].data[min];
			chart.datasets[0].data[min] = temp;
			// add steps to array
			tempArray = [];
			chartSortOrder.push(JSON.parse(JSON.stringify(chart)));
		}
	}

	//one last all green step
	setColor(chart, COMPLETED_GRAPH_COLOUR);
	chartSortOrder.push(JSON.parse(JSON.stringify(chart)))

	return chartSortOrder;
};

export default selectionSort;
