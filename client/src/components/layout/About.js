import React from 'react';

const About = () => {
	return (
		<section className='about'>
			<div className='about__content'>
				<h2 className='heading-2'>About Us</h2>
				<p className='about__desc'>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismody tincidunt ut laoreet
					dolore magna aliquam erat volutpat. Ut wisi enim adi minim veniam, qu nostrud exerci tation dolore magna
					aliquam erat volutpat.
				</p>
				<p className='about__desc'>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismody tincidunt ut laoreet
					dolore magna aliquam erat volutpat. Ut wisi enim adi minim veniam, qu nostrud exerci tation dolore magna
					aliquam erat volutpat.
				</p>

				<div className='about__features'>
					<h3 className='about__features--heading'>Made with</h3>
					<div className='about__feature'>
						<svg className='about__feature--icon'>
							<use xlinkHref='img/sprite.svg#icon-node-dot-js' />
						</svg>
						<h4 className='about__feature--title'>Node.js</h4>
					</div>

					<div className='about__feature'>
						<svg className='about__feature--icon'>
							<use xlinkHref='img/sprite.svg#icon-react' />
						</svg>
						<h4 className='about__feature--title'>React js</h4>
					</div>

					<div className='about__feature'>
						<svg className='about__feature--icon'>
							<use xlinkHref='img/sprite.svg#icon-mongodb' />
						</svg>
						<h4 className='about__feature--title'>Mongo DB</h4>
					</div>

					<div className='about__feature'>
						<svg className='about__feature--icon'>
							<use xlinkHref='img/sprite.svg#icon-javascript' />
						</svg>
						<h4 className='about__feature--title'>JavaScript</h4>
					</div>
				</div>

				{/* <a href='#!' className='btn about__link mt-2'>
						More About Us &rarr;
					</a> */}
			</div>
			<img src='./img/about-img.jpg' alt='About Natours' className='about__image' />
		</section>
	);
};

export default About;
