import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
	return (
		<Fragment>
			<img src={spinner} alt='Loading..' style={{ width: '400px', gridColumn: '1 / -1', justifySelf: 'center' }} />
		</Fragment>
	);
};

export default Spinner;
