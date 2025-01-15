import logo from '../assets/Logotype_White.svg';

/**
 * Shows the results from the ROI calculation.
 * @param {Object} props
 * @param {Object} props.results - The object containing visits, leads, CPL, etc.
 */
const CalculatorResults = ({ results }) => {
	return (
		<div className='flex-1 bg-[#0a63ed] text-[#d7e7ff] rounded-lg p-4'>
			<div className='flex flex-col items-center gap-4'>
				<img src={logo} alt='logo' className='h-12' />
				<p className='text-lg font-forma-regular mb-4'>
					Based on these numbers, here is what you could expect for return on
					investment*
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
				<p className='text-xl font-bold flex justify-between text-white font-forma-bold'>
					<span>Monthly ROI</span> <span>{results.roi}</span>
				</p>
			</div>
		</div>
	);
};

export default CalculatorResults;
