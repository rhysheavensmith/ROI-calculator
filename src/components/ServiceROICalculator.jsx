import ROICalculatorBase from '../components/ROICalculatorBase';

/**
 * Service-based business calculators often include a "Close Rate" field that
 * isn't always used in e-commerce contexts.
 */
const ServiceROICalculator = () => {
	const fieldConfig = [
		{
			name: 'cpc',
			label: 'CPC',
			min: '0.10',
			max: '400',
			step: '0.01',
			prefix: '$',
			suffix: '',
			question:
				'What is the average cost per click for keywords relating to your business?',
		},
		{
			name: 'adSpend',
			label: 'Ad Spend',
			min: '100',
			max: '100000',
			step: '10',
			prefix: '$',
			suffix: '',
			question: 'How much do you intend to spend on your ad campaign?',
		},
		{
			name: 'conversionRate',
			label: 'Conversion Rate',
			min: '0.5',
			max: '100',
			step: '0.5',
			prefix: '%',
			suffix: '',
			question:
				'What is the conversion rate (CVR) of visitors to your website that become leads?',
		},
		{
			name: 'closeRate',
			label: 'Close Rate',
			min: '1',
			max: '100',
			step: '1',
			prefix: '%',
			suffix: '',
			question: 'How many of your leads turn into customers?',
		},
		{
			name: 'avgCustomerValue',
			label: 'Avg Customer Value',
			min: '100',
			max: '500000',
			step: '10',
			prefix: '$',
			suffix: '',
			question: 'On average, how much is each customer worth to your business?',
		},
		{
			name: 'avgProfitMargin',
			label: 'Avg Profit Margin',
			min: '1',
			max: '99',
			step: '1',
			prefix: '%',
			suffix: '',
			question: 'What percentage of each sale is profit?',
		},
	];

	const initialInputs = {
		cpc: 0,
		adSpend: 0,
		conversionRate: 0,
		closeRate: 0,
		avgCustomerValue: 0,
		avgProfitMargin: 0,
	};

	return (
		<ROICalculatorBase
			title='ROI for Service-Based Businesses'
			fieldConfig={fieldConfig}
			initialInputs={initialInputs}
		/>
	);
};

export default ServiceROICalculator;
