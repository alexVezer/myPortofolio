import React from 'react';

const Project =({project}) => {
	const { id, index, title, desc, photo, ghlink, live} = project;
		return ( 
		<div className="full_slide">
			<div className="slide"> 
				<h2>{title} </h2>
				<p> {desc}	</p>
				<div className="links">
					<a href={ghlink} target="_blank" rel="noopener noreferrer"> <i class="fab fa-github-square"></i> </a>
					<a className="button" href={live} target="_blank" rel="noopener noreferrer"> See live </a>
				</div>
			</div>
			<div className="slide-img">
				<img  src={process.env.PUBLIC_URL + photo} alt={title}/> 
			</div>
		</div>
			);
}

export default Project;
