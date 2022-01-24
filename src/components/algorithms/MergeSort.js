let mainChart;
let chartSortArray = [];

/*
Step-by-step sorting using Merge Sort
@param  {Object}   data				 The chart to be randomized
@return [{Object}] chartSortOrder    The step-by-step array of sorting steps to sorted array
 */
const mergeSort = (chart) => {
	mainChart = chart;
	return mergeSortHelper(chart);
}

const mergeSortHelper = (chart) => {
	if (chart.datasets[0].data.length < 2) return chartSortArray;

	const middle = chart.datasets[0].data.length / 2;

	const left = chart.datasets[0].data.splice(0, middle);
	return merge(mergeSortHelper(left), mergeSortHelper(chart));
}

const merge = (left, right) => {
	let array = [];

	while (left.length && right.length) {
		if (left[0] < right[0]) {
			array.push(left.shift());
		} else {
			array.push(right.shift());
		}
	}
	console.log(array);
	return [ ...array, ...left, ...right ];
}

export default mergeSort;