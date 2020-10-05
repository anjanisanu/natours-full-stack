import React from 'react';

const SearchBox = () => {
	return (
		<section className='search'>
			<h2 className='search__heading'>
				Find your <span>package</span>
				<svg className='search__heading--icon'>
					<use xlinkHref='img/sprite.svg#icon-paper-plane' />
				</svg>
			</h2>
			<form className='search__form'>
				<div className='search__group'>
					<input type='text' name='name' className='search__group--input' placeholder='Name' required />
					<label htmlFor='name' className='search__group--label'>
						Type1
					</label>
				</div>

				<div className='search__group'>
					<input type='text' name='phone' className='search__group--input' placeholder='phone' />
					<label htmlFor='phone' className='search__group--label'>
						Type1
					</label>
				</div>

				<div className='search__group'>
					<input type='range' name='price' step='10' id='' />
					<label htmlFor='price'>Price</label>
				</div>

				<div className='search__group'>
					<input type='text' name='email' className='search__group--input' placeholder='email' />
					<label htmlFor='email' className='search__group--label'>
						Type1
					</label>
				</div>

				<div className='search__group'>
					<input type='text' name='service' id='service' className='search__group--input' placeholder='service' />
					<label htmlFor='service' className='search__group--label'>
						Type1
					</label>
				</div>

				<div className='search__group search__button'>
					<input type='submit' className='btn search__group--submit' value='Search' />
				</div>
			</form>
		</section>
	);
};

export default SearchBox;
