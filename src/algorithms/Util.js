/*
Randomizes chart.js object literal
@param  {Object} chart The chart to be randomized
@param  {int}    count The number of data in chart
@param  {int}    n     The max the data can be
@return {Object} 	   The randomized chart
 */
const randomizeChart = (chart, count, n) => {
	setColor(chart, 'blue');
	//Apply blank labels
	chart.labels = new Array(count).fill('');
	//Apply random variables
	chart.datasets[0].data = Array.from({length: count}, () => Math.floor(Math.random() * n));
	return chart;
};

/*
Resets colour of all chart elements to the default. (blue in this case)
@param 	{Object} chart The chart to be reset
@return	{Object} 	   The reset chart
 */
const setColor = (chart, color) => {
	const count = chart.labels.length;

	chart.datasets[0].backgroundColor = new Array(count).fill(color);

	return chart;
}

/*
Resets colour of chart and sets the two elements to be compared to green.
@param	{Object} chart 		The chart to be coloured
@param  {number} elementOne Index of first element to colour
@param  {number} elementTwo Index of second element to colour
 */
const compareColor = (chart, elementOne, elementTwo) => {
	chart = setColor(chart, 'blue');

	chart.datasets[0].backgroundColor[elementOne] = 'green';
	chart.datasets[0].backgroundColor[elementTwo] = 'green';

	return chart;
}


export { randomizeChart, setColor, compareColor };