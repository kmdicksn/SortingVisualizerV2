const mergeSort = (chart) => {
	return mergeSortHelper(chart.datasets[0].data.length, 0, chart.datasets[0].data.length - 1)
}

const mergeSortHelper = (chart, left, right) => {
	if (left >= right) {
		return;
	}
	const middle = left + ((left + right) / 2);
	mergeSortHelper(chart, left, middle);
	mergeSortHelper(chart, middle + 1, right);
	merge(chart, left, middle, right);
}

const merge = (chart, left, middle, right) => {
	const n1 = middle - left + 1;
	const n2 = right - middle;
	let leftArray = new Array(n1);
	let rightArray = new Array(n2);

	for (let i = 0; i < n1; i++)
		leftArray[i] = chart[left + i];
	for (let j = 0; j < n2; j++)
		rightArray[j] = chart[middle + 1 + j];

	let i = 0;
	let j = 0;
	let k = left;

	while (i < n1 && j < n2) {
		if (leftArray[i] <= rightArray[j]) {
			chart[k] = leftArray[i];
			i++;
		}
		else {
			chart[k] = rightArray[j];
			j++;
		}
		k++;
	}

	while (i < n1) {
		chart[k] = leftArray[i];
		i++;
		k++;
	}

	while (j < n2) {
		chart[k] = rightArray[j];
		j++;
		k++;
	}
}

export default mergeSort;