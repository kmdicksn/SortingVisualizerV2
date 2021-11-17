/*
Randomizes chart.js object literal
@param  {Object} chart The chart to be randomized
@param  {int}    count The number of data in chart
@param  {int}    n     The max the data can be
@return {Object} 	   The randomized chart
 */
const randomize = (chart, count, n) => {
	//Apply blank labels
	chart.labels = new Array(count).fill('');
	//Apply random variables
	chart.datasets[0].data = Array.from({length: count}, () => Math.floor(Math.random() * n));
	return chart;
};

export default randomize;