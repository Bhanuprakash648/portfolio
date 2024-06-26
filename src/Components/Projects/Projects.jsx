import React from 'react'
import './Projects.css'
import projects_data from '../../assets/projects_data';
import theme_pattern from '../../assets/theme_pattern.svg'
const Projects = () => {
  console.log(projects_data)
  return (
    <div id="projects" className='projects'>
      <div className="projects-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="projects-container">
         {projects_data.map((project,index)=>{
          return <a href={project.link} target="blank"><img key= {index} src={project.w_img} alt="" /></a>
         })} 
      </div>
      <div className='projects-showmore'>
        <p>Show More</p>
        <img src="" alt="" />
      </div>
    </div>
  )
}

export default Projects
