import React from 'react'
import { Link } from 'react-router-dom'
import project1 from '../../src/project1.png'
import './Home.css'


const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)
	let project1Url = "git.generalassemb.ly/sei-ec-remote/sei-27-Schedule"

	return (
		<>
		 	<div class="grid">
				<header>
					<h1>Cristian Desmaras</h1>
					<h2>Software Engineer</h2>
					<img src=""></img>
				</header>
				<main>
					<div class="brand-statement">
					I’ve always been an inquisitive person. In the last decade, I’ve taught myself how to sew, make shoes, and fix cars. What starts small like reading a book turns into moving to Florence, Italy to apprentice as a bespoke shoemaker. It has led to me teaching over 250 people how to sew. Software Engineering produces the same spark and I’m in love with a field that lends itself to what in my eyes feels like infinite curiosity.
					</div>
					<div class="projects">
						<h1></h1>
						<a href="">
							<div class="project">

							</div>
						</a>					
					</div>
				</main>
			</div>
		</>
	)
}

export default Home

/*
			<body style={{height: '2000px'}}>
				
			<header style={{display:'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center', height:'500px'}}>
				<strong><h1 style={{fontSize:'70px'}}>CRISTIAN DESMARAS</h1></strong>
				<strong><h2 style={{fontSize:'40px'}}>SOFTWARE ENGINEER</h2></strong>
				<div style={{height:'200px', width:'200px', borderRadius:'20px', backgroundImage: `url('https://imgur.com/qDXwiew.jpg')`}}></div>
			</header>
			<main>
				<div style={{display:'flex', justifyContent: 'center',marginLeft:'300px', height:'400px', width:'1000px'}}>
					<p style={{fontSize: '24px'}}>
						I’ve always been an inquisitive person. In the last decade, I’ve taught myself how to sew,
						make shoes, and fix cars. What starts small like reading a book turns into moving to Florence,
						Italy to apprentice as a bespoke shoemaker. It has led to me teaching over 250 people how to
						sew. Software Engineering produces the same spark and I’m in love with a field that lends itself 
						to what in my eyes feels like infinite curiosity. 
					</p>
				</div>
				<div style={{display:'flex', justifyContent: 'center',flexWrap:'wrap', alignContent: 'center', alignItems: 'center'}}>
					<Link to='//clds84.github.io/Game-Project-1/'>
					<div style={{ height:'400px', width:'400px',backgroundImage: `url(${project1})`, backgroundSize:'cover'}}>
					</div>
					</Link>

					<Link to='//mememacchina.herokuapp.com/'>
					<div style={{ height:'400px', width:'400px',backgroundImage: `url(${project1})`, backgroundSize:'cover'}}>
					</div>
					</Link>

					<Link to='//clds84.github.io/Game-Project-1/'>
					<div style={{ height:'400px', width:'400px',backgroundImage: `url(${project1})`, backgroundSize:'cover'}}>
					</div>
					</Link>

					<Link to='//clds84.github.io/Game-Project-1/'>
					<div style={{ height:'400px', width:'400px',backgroundImage: `url(${project1})`, backgroundSize:'cover'}}>
					</div>
					</Link>
					
				
				</div>
			</main>
			<footer></footer>
			</body>
			*/