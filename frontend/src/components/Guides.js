import React, { Fragment } from 'react';

const Guides = ({ guide }) => {
	return (
		<Fragment>
			<div className='tour-guide'>
				<img src={`/img/users/${guide.photo}`} alt='Tour Guide' className='tour-guide__img' />
				<div className='tour-guide__details'>
					<h4 className='tour-guide__name'>{guide.name}</h4>
					<p className='tour-guide__desig'>{guide.role}</p>
				</div>
			</div>
		</Fragment>
	);
};

export default Guides;
