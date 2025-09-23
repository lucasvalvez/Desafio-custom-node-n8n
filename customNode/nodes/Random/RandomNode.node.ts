
import axios from 'axios';
import type { IExecuteFunctions } from 'n8n-workflow';
import {
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';


export class RandomNode implements INodeType {
description: INodeTypeDescription = {
displayName: 'Random',
name: 'random',
icon: 'file:random.svg',
group: ['transform'],
version: 1,
description: 'Gerador de numeros verdadeiramente aleatórios usando Random.org',
defaults: {
name: 'Random',
},
inputs: ['main'],
outputs: ['main'],
properties: [
{
displayName: 'Operation',
name: 'operation',
type: 'options',
noDataExpression: true,
options: [
{
name: 'True Random Number Generator',
value: 'trng',
},
],
default: 'trng',
},
{
displayName: 'Min',
name: 'min',
type: 'number',
default: 1,
required: true,
},
{
displayName: 'Max',
name: 'max',
type: 'number',
default: 60,
required: true,
},
],
};


async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
const items = this.getInputData();
const returnData: INodeExecutionData[] = [];


for (let i = 0; i < items.length; i++) {
const operation = this.getNodeParameter('operation', i) as string;


if (operation === 'trng') {
const min = this.getNodeParameter('min', i) as number;
const max = this.getNodeParameter('max', i) as number;

const response = await axios.get(`https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`, { responseType: 'text' });
const text = (response.data as string).trim();
const value = parseInt(text, 10);


returnData.push({ json: { random: value } });
}
}


return [returnData];
}
}
