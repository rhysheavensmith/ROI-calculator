/**
 * Renders a list of input fields based on the provided config.
 * @param {Object}   props
 * @param {Array}    props.fields - Each field config object.
 * @param {Function} props.handleChange - onChange handler for form inputs.
 * @param {Object}   props.inputs - The current state of all input values.
 */
const CalculatorInputs = ({ fields, handleChange, inputs }) => {
	return (
		<div className='flex flex-col gap-2 w-full'>
			{fields.map((field) => (
				<div
					key={field.name}
					className='
              flex flex-col md:flex-row 
              gap-3 border-b border-slate-200 pb-3 
              /* items-center is removed to allow the child elements to stretch */
            '
				>
					{/* Question/Prompt (hidden on mobile) */}
					<p className='hidden md:block w-1/3 text-sm font-light text-slate-500'>
						{field.question}
					</p>

					{/* Range Slider container: full width on mobile, 1/3 on md+ */}
					<div className='flex flex-col gap-1 w-full md:w-1/3'>
						<label
							htmlFor={field.name}
							className='font-semibold text-sm text-slate-500'
						>
							{field.label}
						</label>
						<input
							type='range'
							name={field.name}
							min={field.min}
							max={field.max}
							step={field.step}
							value={inputs[field.name]}
							onChange={handleChange}
							className='w-full'
						/>
					</div>

					{/* Text Input container: full width on mobile, shrink to content (fit) on md+ */}
					<div
						className='
                flex border items-center rounded px-2 
                w-full md:w-fit
                bg-white
              '
					>
						{field.prefix && (
							<span className='text-xl font-bold text-[#0a63ed]'>
								{field.prefix}
							</span>
						)}
						<input
							type='text'
							name={field.name}
							onChange={handleChange}
							value={inputs[field.name]}
							className='
                  w-full md:w-20 /* On small screens, fill available width */
                  text-center text-[#0a63ed] font-bold text-xl focus:outline-none
                '
						/>
						{field.suffix && (
							<span className='text-xl font-bold text-[#0a63ed]'>
								{field.suffix}
							</span>
						)}
					</div>
				</div>
			))}
		</div>
	);
};

export default CalculatorInputs;
