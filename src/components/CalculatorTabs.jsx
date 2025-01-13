import { useState } from 'react';
import ServiceROICalculator from './ServiceROICalculator';
import EcommerceROICalculator from './EcommerceROICalculator';

const CalculatorTabs = () => {
	const [activeTab, setActiveTab] = useState('service');

	return (
		<div className='max-w-4xl mx-auto p-6'>
			<h1 className='text-2xl font-bold text-center mb-6'>
				PPC ROI Calculator
			</h1>
			<div className='flex justify-center gap-4 mb-6'>
				<button
					onClick={() => setActiveTab('service')}
					className={`py-2 px-4 rounded-md font-medium text-white ${
						activeTab === 'service'
							? 'bg-blue-600 hover:bg-blue-700'
							: 'bg-gray-300 hover:bg-gray-400 text-gray-700'
					}`}
				>
					Service-Based
				</button>
				<button
					onClick={() => setActiveTab('ecommerce')}
					className={`py-2 px-4 rounded-md font-medium text-white ${
						activeTab === 'ecommerce'
							? 'bg-blue-600 hover:bg-blue-700'
							: 'bg-gray-300 hover:bg-gray-400 text-gray-700'
					}`}
				>
					E-Commerce
				</button>
			</div>
			<div>
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
