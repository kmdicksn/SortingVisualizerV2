import { setColor, compareColor } from './Util';

/*
Step-by-step sorting using Bubble Sort
@param  {Object}   data				 The chart to be randomized
@return [{Object}] chartSortOrder    The step-by-step array of sorting steps to sorted array
 */
const bubbleSort = (chart) => {
	// The step-by-step sorting data set object
	let chartSortOrder = [];

	for (let i = 0; i < chart.datasets[0].data.length; i++) {
		for (let j = 0; j < (chart.datasets[0].data.length - i - 1); j++) {
			compareColor(chart, j, j + 1);
			chartSortOrder.push(JSON.parse(JSON.stringify(chart)))
			if (chart.datasets[0].data[j] > chart.datasets[0].data[j + 1]) {
				let temp = chart.datasets[0].data[j];
				chart.datasets[0].data[j] = chart.datasets[0].data[j + 1];
				chart.datasets[0].data[j + 1] = temp;
				// add steps to array
				chartSortOrder.push(JSON.parse(JSON.stringify(chart)))
			}
		}
	}

	//one last all green step
	setColor(chart, 'green');
	chartSortOrder.push(JSON.parse(JSON.stringify(chart)))

	return chartSortOrder;
};

export default bubbleSort;
