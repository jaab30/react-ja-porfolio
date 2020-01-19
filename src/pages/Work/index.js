import React from "react";
import { Parallax } from 'react-parallax';
import "./style.css"
import jobs from "../../work.json"
import WorkCard from "../../components/WorkCard"

class Work extends React.Component {

        state = {
            jobs: jobs
        }

    render(){

        return(
            <Parallax
            blur={5}
            bgImage={require('./images/code.jpg')}
            bgImageAlt="background"
            strength={100}
            className="aboutParallax"
        >
        <div id="work" className="container-fluid">
            <header className="row workHeaderRow">
                <div className="col-md-12">
                    <h2>Work</h2>
                </div>  
            </header>
            <section className="row mx-auto rowDiv">
                {this.state.jobs.map(item=>(
                    <WorkCard 
                    image={item.image}
                    title={item.employer}
                    subTitle={item.employer_sub}
                    position={item.position}
                    description={item.description}
                    />
                ))}
                <div className="col-md-offset-3"></div>
            </section>
        </div>
            </Parallax>

        )
    }
}

export default Work