import React, { useRef, useEffect, useState } from 'react';
import { Chart } from 'chart.js';

const VisualizerChart = ({data, options}) => {
	const chartRef = useRef(null);
	const [ myChart, setMyChart ] = useState(null);

	useEffect(() => {
		const ctx = chartRef.current.getContext('2d');
		const myChart = new Chart(ctx, {
			options: {...options},
			type: 'bar',
			data: {...data},
		});
		setMyChart(myChart);
		return (() => myChart.destroy());
	}, [ chartRef, data, options ]);

	return (
		<canvas ref={chartRef} id="myChart"/>
	);
};

export default VisualizerChart;
