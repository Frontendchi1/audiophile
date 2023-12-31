import React from 'react'
import { CartCTX } from '../../context'
import { ProductSanityType } from '../../lib/queryTypes'
import NumberInput from '../NumberInput'

export const ProductDetails = ({
	qty,
	setQty,
	product,
}: {
	qty: number
	setQty: React.Dispatch<React.SetStateAction<number>>
	product: ProductSanityType
}) => {
	const { cart, setCart, toggleCartVisible } = React.useContext(CartCTX)

	const addToCart: React.MouseEventHandler<HTMLButtonElement> = (event) => {
		const target = event.target as HTMLButtonElement
		const item = target.value
		const filtered = cart.filter((temp) => temp.item.slug.current !== item)
		const repeated = cart.filter((temp) => temp.item.slug.current === item)
		toggleCartVisible(true)
		const newCart = [
			...filtered,
			{
				item: {
					cartImage: product.cartImage,
					cartName: product.cartName,
					slug: product.slug,
					price: product.price,
					name: product.name,
				},
				// adding to the total if it was already there
				qty: (repeated[0]?.qty || 0) + qty,
			},
		]
		setCart(newCart)
		localStorage.setItem('audiophile-cart', JSON.stringify(newCart))
		return
	}
	console.log(product)

	return (
		<div className='content-container'>
			<div className='flex flex-col items-center md:flex-row md:space-x-20 lg:space-x-32 '>
				<div className='max-w-[540px] md:w-[281px] lg:w-auto mb-8 rounded-xl overflow-hidden flex-shrink-0'>
					<picture>
						<source media='(min-width: 1110px)' srcSet={product.mainImageDesktop.asset.url} />
						<source media='(min-width: 768px)' srcSet={product.mainImageTablet.asset.url} />
						<img src={product.mainImageMobile.asset.url} alt='' />
					</picture>
				</div>
				<div className='text-left'>
					{product.new && (
						<span className='overline-text text-orange-600 mb-6 inline-block'>New product</span>
					)}
					<h2 className='h4 md:h3 lg:h2 mb-6'>{product.name}</h2>
					<p className='mb-6'>{product.description}</p>
					<span className='h6 mb-8 inline-block'>${product.price.toLocaleString()}</span>
					<div className='flex flex-row space-x-4'>
						<div className='w-[120px]'>
							<NumberInput
								controlledQty={qty}
								incFunc={() => setQty((prevState) => prevState + 1)}
								decFunc={() => setQty((prevState) => prevState - 1)}
							></NumberInput>
						</div>

						<button
							className='button-one'
							onClick={addToCart}
							value={product.slug.current}
							disabled={qty === 0}
						>
							Add To Cart
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
