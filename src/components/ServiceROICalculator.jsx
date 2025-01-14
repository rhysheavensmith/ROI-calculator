import { useState } from 'react';
import { calculateROI } from '../utils/calculateROI';
import logo from '../assets/Logotype_White.svg';

const ServiceROICalculator = () => {
	const [inputs, setInputs] = useState({
		cpc: 0.1, // Cost per click
		adSpend: 1000, // Total ad spend
		conversionRate: 0.5, // Conversion rate (as percentage)
		closeRate: 1, // Close rate (as percentage)
		avgCustomerValue: 100, // Average customer value
		avgProfitMargin: 1, // Average profit margin (as percentage)
	});

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

		let parsedValue = parseFloat(value);

		// Constrain parsedValue for specific inputs
		const constraints = {
			cpc: { min: 0.1, max: 400 },
			adSpend: { min: 100, max: 100000 },
			conversionRate: { min: 0.5, max: 100 },
			closeRate: { min: 1, max: 100 },
			avgCustomerValue: { min: 100, max: 500000 },
			avgProfitMargin: { min: 1, max: 99 },
		};

		if (constraints[name]) {
			const { min, max } = constraints[name];
			parsedValue = Math.min(Math.max(parsedValue || 0, min), max);
		}

		const updatedInputs = {
			...inputs,
			[name]: parsedValue,
		};

		setInputs(updatedInputs);

		// Recalculate with updated inputs
		setResults(
			calculateROI({
				...updatedInputs,
			})
		);
	};

	return (
		<div className='mx-auto py-4 px-8 bg-white rounded-lg shadow-md'>
			<h1 className='text-4xl my-8 font-bold text-center text-[#001738]'>
				ROI for Service-Based Businesses
			</h1>
			<div className='flex flex-col lg:flex-row gap-6 justify-center items-center'>
				{/* Left: Inputs */}
				<div className='flex-1'>
					<div className='flex flex-col gap-2'>
						<div className='items-center flex gap-3 border-b border-slate-200 pb-3 justify-between'>
							<p className='w-1/3 text-sm font-light text-slate-500'>
								What is the average cost per click for keywords relating to your
								business?
							</p>

							<div className='flex flex-col gap-1 w-1/3'>
								<label
									htmlFor='cpc'
									className='font-semibold text-sm text-slate-500'
								>
									CPC
								</label>
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
							</div>

							<div className='flex items-center'>
								<span className='text-xs mr-1'>$</span>
								<input
									type='text'
									name='cpc'
									onChange={handleChange}
									value={inputs.cpc}
									className='border rounded px-2 w-16 text-sm text-center'
								/>
							</div>
						</div>

						<div className='items-center flex gap-3 border-b border-slate-200 pb-3 justify-between'>
							<p className='w-1/3 text-sm font-light text-slate-500'>
								How much do you intend to spend on your ad campaign?
							</p>

							<div className='flex flex-col gap-2 w-1/3'>
								<label
									htmlFor='adSpend'
									className='font-semibold text-sm text-slate-500'
								>
									Ad Spend
								</label>
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
							</div>

							<div className='flex items-center'>
								<span className='text-xs mr-1'>$</span>
								<input
									type='text'
									name='adSpend'
									onChange={handleChange}
									value={inputs.adSpend}
									className='border rounded px-2 w-16 text-sm text-center'
								/>
							</div>
						</div>

						<div className='items-center flex gap-3 border-b border-slate-200 pb-3 justify-between'>
							<p className='w-1/3 text-sm font-light text-slate-500'>
								What is the conversion rate (CVR) of visitors to your website
								that become new leads?
							</p>

							<div className='flex flex-col gap-2 w-1/3'>
								<label
									htmlFor='conversionRate'
									className='font-semibold text-sm text-slate-500'
								>
									Conversion Rate
								</label>
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
							</div>

							<div className='flex items-center'>
								<input
									type='text'
									name='conversionRate'
									onChange={handleChange}
									value={inputs.conversionRate}
									className='border rounded px-2 w-16 text-sm text-center'
								/>
								<span className='text-xs ml-1'>%</span>
							</div>
						</div>

						<div className='items-center flex gap-3 border-b border-slate-200 pb-3 justify-between'>
							<p className='w-1/3 text-sm font-light text-slate-500'>
								How many of your leads turn into customers?
							</p>
							<div className='flex flex-col gap-2 w-1/3'>
								<label
									htmlFor='closeRate'
									className='font-semibold text-sm text-slate-500'
								>
									Close Rate
								</label>
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
							</div>

							<div className='flex items-center'>
								<input
									type='text'
									name='closeRate'
									onChange={handleChange}
									value={inputs.closeRate}
									className='border rounded px-2 w-16 text-sm text-center'
								/>
								<span className='text-xs ml-1'>%</span>
							</div>
						</div>

						<div className='flex items-center gap-3 border-b border-slate-200 pb-3 justify-between'>
							<p className='w-1/3 text-sm font-light text-slate-500'>
								On average, how much is each customer worth to your business?
							</p>
							<div className='flex flex-col gap-2 w-1/3'>
								<label
									htmlFor='avgCustomerValue'
									className='font-semibold text-sm text-slate-500'
								>
									Avg Customer Value
								</label>
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
							</div>

							<div className='flex items-center'>
								<span className='text-xs mr-1'>$</span>
								<input
									type='text'
									name='avgCustomerValue'
									onChange={handleChange}
									value={inputs.avgCustomerValue}
									className='border rounded px-2 w-16 text-sm text-center'
								/>
							</div>
						</div>

						<div className='flex items-center gap-3 justify-between'>
							<p className='w-1/3 text-sm font-light text-slate-500'>
								What percentage of each sale is profit?
							</p>
							<div className='flex flex-col gap-2 w-1/3'>
								<label
									htmlFor='avgProfitMargin'
									className='font-semibold text-sm text-slate-500'
								>
									Avg Profit Margin
								</label>
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
							</div>

							<div className='flex items-center'>
								<input
									type='text'
									name='avgProfitMargin'
									onChange={handleChange}
									value={inputs.avgProfitMargin}
									className='border rounded px-2 w-16 text-sm text-center'
								/>
								<span className='text-xs ml-1'>%</span>
							</div>
						</div>
					</div>
				</div>

				{/* Right: Results */}
				<div className='flex-1 bg-[#0a63ed] text-white rounded-lg p-4'>
					<div className='flex flex-col items-center gap-4'>
						<img src={logo} alt='yikes logo' className='h-12' />
						<p className='text-lg font-semibold mb-4'>
							Based on these numbers, here is what you could expect for return
							on investment*
						</p>
					</div>

					<div className='flex flex-col gap-4'>
						<p className='text-md flex justify-between border-b border-white pb-2'>
							<span>Visits:</span> <span>{results.visits}</span>
						</p>
						<p className='text-md flex justify-between border-b border-white pb-2'>
							<span>Leads:</span> <span>{results.leads}</span>
						</p>
						<p className='text-md flex justify-between border-b border-white pb-2'>
							<span>CPL:</span> <span>${results.costPerLead}</span>
						</p>
						<p className='text-md flex justify-between border-b border-white pb-2'>
							<span>Sales:</span> <span>{results.sales}</span>
						</p>
						<p className='text-md flex justify-between border-b border-white pb-2'>
							<span>Revenue:</span> <span>${results.revenue}</span>
						</p>

						<p className='text-md flex justify-between border-b border-white pb-2'>
							<span>Profit:</span> <span>${results.profit}</span>
						</p>
						<p className='text-xl font-bold flex justify-between'>
							<span>Monthly ROI</span> <span>{results.roi}</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceROICalculator;
