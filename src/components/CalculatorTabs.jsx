import { useState } from 'react';

import EcommerceROICalculator from './EcommerceROICalculator';
import ServiceROICalculator from './ServiceROICalculator';

const CalculatorTabs = () => {
	const [activeTab, setActiveTab] = useState('service');

	return (
		<div className='w-full max-w-[95%] xs:max-w-[85%] mx-auto bg-slate-100 shadow-md'>
			<div className='flex justify-center m-4'>
				<button
					className={`rounded-md px-3 py-2 font-semibold ${
						activeTab === 'service'
							? 'bg-[#0a63ed] text-white'
							: 'text-[#001738]'
					}`}
					onClick={() => setActiveTab('service')}
				>
					Service-Based
				</button>
				<button
					className={`rounded-md px-3 py-2 font-semibold ${
						activeTab === 'ecommerce'
							? 'bg-[#0a63ed] text-white'
							: 'text-[#001738]'
					}`}
					onClick={() => setActiveTab('ecommerce')}
				>
					E-Commerce
				</button>
			</div>
			<div className='p-6'>
				{activeTab === 'service' ? (
					<ServiceROICalculator />
				) : (
					<EcommerceROICalculator />
				)}
			</div>
		</div>
	);
};

export default CalculatorTabs;
