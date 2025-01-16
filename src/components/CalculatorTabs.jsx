import { useState } from 'react';
import EcommerceROICalculator from './EcommerceROICalculator';
import ServiceROICalculator from './ServiceROICalculator';

// 1. Define a tabs configuration object
const TABS = {
	service: {
		label: 'Service-Based',
		component: ServiceROICalculator,
	},
	ecommerce: {
		label: 'E-Commerce',
		component: EcommerceROICalculator,
	},
};

const CalculatorTabs = () => {
	const [activeTab, setActiveTab] = useState('service');

	// 2. Get the appropriate component for the active tab
	const ActiveTabComponent = TABS[activeTab].component;

	return (
		<div className='w-full max-w-[95%] mx-auto bg-slate-100 shadow-md p-8'>
			{/* Toggle container (relative) */}
			<div className='relative w-[300px] mx-auto mb-6'>
				{/* Sliding background highlight */}
				<span
					className={`
            absolute top-0 left-0 h-full w-1/2 bg-[#0a63ed] rounded-md
            transform transition-transform duration-300 ease-in-out
            ${activeTab === 'ecommerce' ? 'translate-x-full' : 'translate-x-0'}
          `}
				/>

				{/* Button wrapper (z-10 so it sits above the slider) */}
				<div className='relative z-10 flex text-sm font-semibold text-[#001738]'>
					{/* Service Tab */}
					<button
						onClick={() => setActiveTab('service')}
						className={`
              flex-1 py-2 rounded-md text-center
              ${activeTab === 'service' ? 'text-white' : 'text-[#001738]'}
            `}
					>
						{TABS.service.label}
					</button>

					{/* E-Commerce Tab */}
					<button
						onClick={() => setActiveTab('ecommerce')}
						className={`
              flex-1 py-2 rounded-md text-center
              ${activeTab === 'ecommerce' ? 'text-white' : 'text-[#001738]'}
            `}
					>
						{TABS.ecommerce.label}
					</button>
				</div>
			</div>

			{/* 4. Render the active tab's component */}

			<ActiveTabComponent />
		</div>
	);
};

export default CalculatorTabs;
