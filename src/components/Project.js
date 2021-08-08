import React, {Component} from 'react';



const Project =({project}) => {
	const { id, index, title, desc, photo} = project;
		return ( 
		<div className="full_slide flex">
			<div className="slide"> 
				<h2>{title} </h2>
				<p> {desc}	</p>
				<div className="links">
					<a href=""> <i class="fab fa-github-square"></i> </a>
					<a className="button" href=""> See live </a>
				</div>
			</div>
			<div className="slide-img">
				<img  src={photo} /> 
			</div>
		</div>
			);
	
}

export default Project;
