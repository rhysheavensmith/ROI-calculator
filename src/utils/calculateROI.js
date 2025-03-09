export const calculateROI = ({
	cpc,
	adSpend,
	conversionRate,
	closeRate = 1,
	avgCustomerValue,
	avgProfitMargin,
}) => {
	// Guard against invalid inputs that would cause division by zero.
	if (cpc <= 0 || adSpend <= 0) {
		return {
			visits: 0,
			leads: 0,
			costPerLead: 0,
			sales: 0,
			revenue: 0,
			profit: 0,
			roi: '0%',
		};
	}

	const conversionRateDecimal = conversionRate / 100;
	const closeRateDecimal = closeRate / 100;
	const avgProfitMarginDecimal = avgProfitMargin / 100;

	const visits = Math.floor(adSpend / cpc);
	const leads = Math.floor(visits * conversionRateDecimal);
	const costPerLead = leads > 0 ? Math.floor(adSpend / leads) : 0;
	const sales = Math.floor(leads * closeRateDecimal);
	const revenue = Math.floor(sales * avgCustomerValue);
	const profit = Math.round(revenue * avgProfitMarginDecimal);
	const roi = ((revenue - adSpend) / adSpend) * 100;

	return {
		visits,
		leads,
		costPerLead,
		sales,
		revenue,
		profit,
		roi: `${roi.toFixed(2)}%`,
	};
};
