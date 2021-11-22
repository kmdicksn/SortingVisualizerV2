import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import React, { useEffect, useRef, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Layout, Menu, Slider, Button } from 'antd';
import { randomizeChart, setColor, compareColor } from './algorithms/Util';
import bubbleSort from './algorithms/BubbleSort';
import selectionSort from './algorithms/SelectionSort';
import VisualizerChart from './components/VisualizerChart';
import styled from 'styled-components';
import { clearCanvas } from 'chart.js/helpers';

const {Header, Footer, Sider, Content} = Layout;
const {SubMenu} = Menu;

const MenuItem = styled.div`
  margin: 15px 20px;
  background-color: white;
`;

let genData = {
	labels: [ '', '', '', '', '', '', '', '', '', '' ],
	datasets: [
		{
			backgroundColor: ['blue','blue','blue','blue','blue','blue','blue','blue','blue','blue'],
			label: '',
			data: [ 12, 19, 3, 5, 2, 3, 20, 13, 20, 5 ],
			borderWidth: 1,
		},
	],
};

const options = {
	plugins: {
		legend: {
			display: false,
		},
		tooltip: {
			enabled: false
		},
	},
	animation: {
		duration: 0,
	},
};

function App() {
	const [ delay, setDelay ] = useState(600);
	const [ loading, setLoading ] = useState(false);
	const [ sorting, setSorting ] = useState('0');
	const [ n, setN ] = useState(30);
	const [ count, setCount ] = useState(10);
	const [ data, setData ] = useState(genData);
	const visualizerRef = useRef();

	const algorithms = [
		bubbleSort,
		selectionSort,
	];

	const countSliderUpdate = (value) => {
		setCount(value);
		setData(Object.assign({}, randomizeChart(genData, count, n)));
	};

	const maxValueSliderUpdate = (value) => {
		setN(value + 1);
		setData(Object.assign({}, randomizeChart(genData, count, n)));
	};

	const speedSliderUpdate = (value) => {
		setDelay(1100 - value);
	}

	async function sortingAndDisplay() {
		let sortingSteps = algorithms[sorting](genData);
		while (sortingSteps.length > 0) {
			genData = sortingSteps.shift();
			await new Promise(r => setTimeout(r, delay));
			setData(Object.assign({}, genData));
		}
	}

	return (
		<div>
			<Layout>
				<Header className="header">
					<div className="logo"/>
					<Menu theme="dark" mode="horizontal" defaultSelectedKeys={[ '0' ]}>
						<Menu.Item key={'0'} onClick={(key) => {setSorting(key.key);}}>Bubble Sort</Menu.Item>
						<Menu.Item key={'1'} onClick={(key) => {setSorting(key.key);}}>Selection Sort</Menu.Item>
						{/*<Menu.Item key="3">nav 3</Menu.Item>*/}
					</Menu>
				</Header>
				<Layout>
					<Sider width={200} className="site-layout-background">
						<Menu
							mode="inline"
							defaultSelectedKeys={[ '1' ]}
							defaultOpenKeys={[ 'sub1' ]}
							style={{height: '100vh', borderRight: 0}}
						>
							<MenuItem>
								<h4>Size:</h4>
								<Slider disabled={loading} min={1} defaultValue={10} onChange={countSliderUpdate}
										onAfterChange={countSliderUpdate}/>
							</MenuItem>
							<MenuItem>
								<h4>Max Value:</h4>
								<Slider disabled={loading} min={1} defaultValue={10} onChange={maxValueSliderUpdate}
										onAfterChange={maxValueSliderUpdate}/>
							</MenuItem>
							<MenuItem>
								<h4>Speed:</h4>
								<Slider disabled={loading} min={100} max={5000} defaultValue={500} step={100}
										onChange={speedSliderUpdate} onAfterChange={speedSliderUpdate}/>
							</MenuItem>
							{/*<MenuItem>*/}
							{/*	<h4>Speed:</h4>*/}
							{/*	<Slider/>*/}
							{/*</MenuItem>*/}
							<MenuItem>
								<Button loading={loading} onClick={()=>{
									setLoading(true);
									sortingAndDisplay().then(r => setLoading(false));
								}}>Sort</Button>
							</MenuItem>
							<MenuItem>
								<Button loading={loading} onClick={() => {
									setData(Object.assign({}, randomizeChart(genData, count, n)));
								}}>Randomize</Button>
							</MenuItem>
						</Menu>
					</Sider>
					<Layout style={{padding: '0 24px 24px'}}>
						<Content
							className="site-layout-background"
							style={{
								padding: 24,
								margin: 0,
								minHeight: 280,
							}}
						>
							<VisualizerChart data={data} options={options} ref={visualizerRef}/>
						</Content>
						<Footer>Created by Dickson Ngan</Footer>
					</Layout>
				</Layout>
			</Layout>,
		</div>
	);
}

export default App;
