import { Metadata } from 'next'
import React from 'react'


export const metadata: Metadata = {
    title: 'About page',
    description: 'About page description',
  }

const About = () => {
    return (
        <section id="about" className="about-mf sect-pt4 route">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="box-shadow-full">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-5">
                                            <div className="about-img">
                                                <img src="../images/logo.png" className="img-fluid rounded b-shadow-a" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-7">
                                            <div className="about-info mt-5">
                                                <p><span className="title-s">Name: </span> <span>Kiet Dev</span></p>
                                                <p><span className="title-s">Profile: </span> <span>Fullstack Developer</span></p>
                                                <p><span className="title-s">Email: </span> <span>kiet080797@gmail.com</span></p>
                                                <p><span className="title-s">Phone: </span> <span>0347551122</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="skill-mf">
                                        <p className="title-s">Skill</p>
                                        <span>HTML</span> <span className="pull-right">85%</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{ "width": "85%" }} ></div>
                                        </div>
                                        <span>CSS3</span> <span className="pull-right">75%</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{ "width": "75%" }} ></div>
                                        </div>
                                        <span>NODEJS</span> <span className="pull-right">85%</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{ "width": "85%" }}></div>
                                        </div>
                                        <span>JAVASCRIPT</span> <span className="pull-right">90%</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{ "width": "90%" }} ></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="about-me pt-4 pt-md-0">
                                        <div className="title-box-2">
                                            <h5 className="title-left">
                                                About me
                                            </h5>
                                        </div>
                                        <p className="lead">
                                            Student at University of Information Technology - Vietnam National University, HCMC (UIT).
                                        </p>
                                        <p className="lead">
                                            Major: Computer Science.
                                        </p>
                                        <p className="lead">
                                            As a Front-end Developer who wants to apply his knowledge of the field of Front-end Javascript into practice.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About