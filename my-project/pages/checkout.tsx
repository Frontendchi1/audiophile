import React from 'react'

import { FormikForm } from '../components/Checkout/FormikForm'
import { OrderSummary } from '../components/Checkout/OrderSummary'
import { SuccessWindow } from '../components/Checkout/SuccessWindow'
import Layout from '../components/Layout'
import { OrderCTX } from '../context'

const checkout = () => {
	const { order } = React.useContext(OrderCTX)
	return (
		<Layout goBackButton>
			{/* SUCCESS OVERLAY */}
			{order && (
				<div className='fixed z-20 w-screen h-screen top-0 bg-black-900 bg-opacity-20 flex items-center justify-center'>
					<SuccessWindow></SuccessWindow>
				</div>
			)}

			<div className='flex flex-col lg:flex-row lg:items-start lg:space-x-8 lg:mb-[140px] content-container'>
				<FormikForm></FormikForm>
				<div className='lg:w-[350px] lg:flex-shrink-0'>
					<OrderSummary />
				</div>
			</div>
		</Layout>
	)
}

export default checkout
