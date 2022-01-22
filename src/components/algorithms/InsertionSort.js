import { setColor, compareColor } from '../utility/Util';
import { COMPLETED_GRAPH_COLOUR } from '../utility/constants';

/*
Step-by-step sorting using Insertion Sort
@param  {Object}   data				 The chart to be randomized
@return [{Object}] chartSortOrder    The step-by-step array of sorting steps to sorted array
 */
const insertionSort = (chart) => {
	// The step-by-step sorting data set object
	let chartSortOrder = [];
	let i, key, j;

	for (i = 1; i < chart.datasets[0].data.length; i++) {
		key = chart.datasets[0].data[i];
		j = i - 1;
		compareColor(chart, key, j);
		chartSortOrder.push(JSON.parse(JSON.stringify(chart)));

		/* Move elements of arr[0..i-1], that are
		greater than key, to one position ahead
		of their current position */
		while (j >= 0 && chart.datasets[0].data[j] > key)
		{
			chart.datasets[0].data[j + 1] = chart.datasets[0].data[j];
			// add steps to array
			chartSortOrder.push(JSON.parse(JSON.stringify(chart)))
			j = j - 1;
			compareColor(chart, key, j);
			chartSortOrder.push(JSON.parse(JSON.stringify(chart)));
		}
		chart.datasets[0].data[j + 1] = key;
		chartSortOrder.push(JSON.parse(JSON.stringify(chart)))
	}

	//one last all green step
	setColor(chart, COMPLETED_GRAPH_COLOUR);
	chartSortOrder.push(JSON.parse(JSON.stringify(chart)))

	return chartSortOrder;
};

export default insertionSort;
