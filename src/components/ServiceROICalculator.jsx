import { useState } from 'react';
import { calculateROI } from '../utils/calculateROI';

const ServiceROICalculator = () => {
	const [inputs, setInputs] = useState({
		cpc: 0.1, // Cost per click
		adSpend: 1000, // Total ad spend
		conversionRate: 0.5, // Conversion rate (as percentage)
		closeRate: 1, // Close rate (as percentage)
		avgCustomerValue: 100, // Average customer value
		avgProfitMargin: 1, // Average profit margin (as percentage)
	});

	const [showProfit, setShowProfit] = useState(false); // Toggle for profit calculations

	const [results, setResults] = useState({
		visits: 0,
		leads: 0,
		costPerLead: 0,
		sales: 0,
		revenue: 0,
		profit: 0,
		roi: '0%',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;

		const updatedInputs = {
			...inputs,
			[name]: parseFloat(value) || 0,
		};

		setInputs(updatedInputs);

		// Recalculate with updated inputs
		setResults(
			calculateROI({
				...updatedInputs,
				avgProfitMargin: showProfit ? updatedInputs.avgProfitMargin : 0, // Include or exclude profit margin
			})
		);
	};

	const handleToggleProfit = () => {
		const updatedShowProfit = !showProfit;
		setShowProfit(updatedShowProfit);

		// Recalculate when toggling profit margin
		setResults(
			calculateROI({
				...inputs,
				avgProfitMargin: updatedShowProfit ? inputs.avgProfitMargin : 0,
			})
		);
	};

	return (
		<div className='max-w-4xl mx-auto p-6'>
			<h1 className='text-2xl font-bold text-center mb-6'>
				ROI for Service-Based Businesses
			</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
				{/* Left: Inputs */}
				<div className='bg-white p-6 shadow-lg rounded-md'>
					<h2 className='text-xl font-semibold mb-4'>Inputs</h2>
					<div className='space-y-4'>
						<div>
							<label className='block text-sm font-medium text-gray-700 mb-1'>
								What is the average cost per click for keywords relating to your
								business?
							</label>
							<div className='flex items-center'>
								<input
									type='range'
									name='cpc'
									min='0.10'
									max='400'
									step='0.01'
									value={inputs.cpc}
									onChange={handleChange}
									className='w-full'
								/>
								<span className='ml-4 text-sm text-gray-700'>
									${inputs.cpc.toFixed(2)}
								</span>
							</div>
						</div>
						<div>
							<label className='block text-sm font-medium text-gray-700 mb-1'>
								How much do you intend to spend on your ad campaign?
							</label>
							<div className='flex items-center'>
								<input
									type='range'
									name='adSpend'
									min='100'
									max='100000'
									step='10'
									value={inputs.adSpend}
									onChange={handleChange}
									className='w-full'
								/>
								<span className='ml-4 text-sm text-gray-700'>
									${inputs.adSpend}
								</span>
							</div>
						</div>
						<div>
							<label className='block text-sm font-medium text-gray-700 mb-1'>
								What is the conversion rate (CVR) of visitors to your website
								that become new leads?
							</label>
							<div className='flex items-center'>
								<input
									type='range'
									name='conversionRate'
									min='0.5'
									max='100'
									step='0.5'
									value={inputs.conversionRate}
									onChange={handleChange}
									className='w-full'
								/>
								<span className='ml-4 text-sm text-gray-700'>
									{inputs.conversionRate}%
								</span>
							</div>
						</div>
						<div>
							<label className='block text-sm font-medium text-gray-700 mb-1'>
								How many of your leads turn into customers?
							</label>
							<div className='flex items-center'>
								<input
									type='range'
									name='closeRate'
									min='1'
									max='100'
									step='1'
									value={inputs.closeRate}
									onChange={handleChange}
									className='w-full'
								/>
								<span className='ml-4 text-sm text-gray-700'>
									{inputs.closeRate}%
								</span>
							</div>
						</div>
						<div>
							<label className='block text-sm font-medium text-gray-700 mb-1'>
								On average, how much is each customer worth to your business?
							</label>
							<div className='flex items-center'>
								<input
									type='range'
									name='avgCustomerValue'
									min='100'
									max='500000'
									step='10'
									value={inputs.avgCustomerValue}
									onChange={handleChange}
									className='w-full'
								/>
								<span className='ml-4 text-sm text-gray-700'>
									${inputs.avgCustomerValue}
								</span>
							</div>
						</div>
						<div>
							<label className='flex items-center space-x-2'>
								<input
									type='checkbox'
									checked={showProfit}
									onChange={handleToggleProfit}
									className='form-checkbox text-blue-600'
								/>
								<span className='text-sm font-medium text-gray-700'>
									Show Profit Margin Calculations
								</span>
							</label>
						</div>
						{showProfit && (
							<div>
								<label className='block text-sm font-medium text-gray-700 mb-1'>
									What percentage of each sale is profit?
								</label>
								<div className='flex items-center'>
									<input
										type='range'
										name='avgProfitMargin'
										min='1'
										max='99'
										step='1'
										value={inputs.avgProfitMargin}
										onChange={handleChange}
										className='w-full'
									/>
									<span className='ml-4 text-sm text-gray-700'>
										{inputs.avgProfitMargin}%
									</span>
								</div>
							</div>
						)}
					</div>
				</div>
				{/* Right: Results */}
				<div className='bg-blue-50 p-6 shadow-lg rounded-md'>
					<h2 className='text-xl font-semibold text-blue-800 mb-4'>Results</h2>
					<div className='space-y-4'>
						<p className='text-lg'>
							<span className='font-medium text-blue-800'>Visits:</span>{' '}
							{results.visits}
						</p>
						<p className='text-lg'>
							<span className='font-medium text-blue-800'>Leads:</span>{' '}
							{results.leads}
						</p>
						<p className='text-lg'>
							<span className='font-medium text-blue-800'>CPL:</span> $
							{results.costPerLead}
						</p>
						<p className='text-lg'>
							<span className='font-medium text-blue-800'>Sales:</span>{' '}
							{results.sales}
						</p>
						<p className='text-lg'>
							<span className='font-medium text-blue-800'>Revenue:</span> $
							{results.revenue}
						</p>
						<p className='text-lg'>
							<span className='font-medium text-blue-800'>Monthly ROI:</span>{' '}
							<span
								className={`${
									parseFloat(results.roi) >= 0
										? 'text-green-600'
										: 'text-red-600'
								} font-bold`}
							>
								{results.roi}
							</span>
						</p>
						{showProfit && (
							<p className='text-lg'>
								<span className='font-medium text-blue-800'>Profit:</span> $
								{results.profit}
							</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceROICalculator;
