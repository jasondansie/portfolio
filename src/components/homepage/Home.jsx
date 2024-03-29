import React from 'react';
import Hero from './Hero';
import classes from './Home.module.css'
import ProjectCard from './ProjectCard';
import FontAwesome from '../aboutpage/FontAwesome';
import CareerItem from '../aboutpage/CareerItem';
import CirclingButton from './CirclingButton';

const Home = () => {
    const projects = require('./projectList.json');
    const faIcons = require('../aboutpage/fontawesomeIcons.json');
    const careerList = require('../aboutpage/careerList.json');

    return (
        <div>
            <Hero
                imagePath={'../../images/jason.jpg'}
                imageAlt={'Jason Dansie'}
                heroName={'Jason Dansie'}
                heroTitle={'Fullstack Developer'}
            />
            <div className={classes.greyBlock}>
                <h2>About me</h2>
                <div className={classes.aboutMe}>

                    <p>I am a fullstack developer who has been doing
                        web development with PHP, HTML, CSS, MYSQL, Smarty Template and Bootstrap for over 8 years.

                    </p>
                    <p>
                        I am currently studying at Helsinki Business College in their fullstack developer course.
                        Specifically to update my skills to include Javascript, React, Node.js, Express and Typescript.
                    </p>
                    <p>
                        This site is build with these new technologies I have learned.
                        Please check out my profiles below.
                    </p>
                    <div className={classes.profiles}>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={"https://github.com/jasondansie"}>
                            <FontAwesome
                                index={100}
                                fa_Icon={"fa-brands fa-square-github fa-2xl"}
                                fa_Name={"Github"}
                            />
                        </a>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={"https://www.linkedin.com/in/jason-dansie-%F0%9F%91%BE-05729436/"}>
                            <FontAwesome
                                index={101}
                                fa_Icon={"fa-brands fa-linkedin fa-2xl"}
                                fa_Name={"LinkedIn"}
                            />
                        </a>
                        <CirclingButton
                            toLink={'/contact'}
                            buttonName={'Contact me'}
                        />
                    </div>

                </div>
            </div>
            <div className={classes.whiteBlock} >
                <div className={classes.info}>
                    <h2>Technologies</h2>
                    <div className={classes.tech}>
                        {
                            faIcons.map((fa) => {
                                return (
                                    <div key={fa.name}>
                                        <FontAwesome
                                            index={fa.name}
                                            fa_Icon={fa.icon}
                                            fa_Name={fa.name}
                                        />
                                    </div>

                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={classes.greyBlock} >
                <h2>Projects</h2>
                <div className={classes.projects}>
                    {
                        projects.map((project) => {
                            return (
                                <ProjectCard key={project.title}
                                    porjectTitle={project.title}
                                    imagePath={project.imagePath}
                                    ProjectInfo={project.info}
                                    liveLink={project.livelink}
                                    liveLinkName={project.liveLinkName}
                                    faIcon={project.faIcon}
                                    githubLink={project.githublink}
                                />
                            )
                        })
                    }
                </div>

            </div>
            <div className={classes.whiteBlock} >
                <div className={classes.career}>
                    <div className={classes.careerInfo}>
                        <h2>Career</h2>
                        <hr />
                        {careerList.filter(career =>
                            career.profile.includes("Fullstack")).map((career) => {
                                return (
                                    <CareerItem key={career.id}
                                        id={career.id}
                                        faIcon={"fa-sharp fa-solid fa-file-lines"}
                                        companyAndJobDescription={`${career.company} - ${career.shortJobDescription}`}
                                        companyAndDateAndTitle={`${career.jobTitle} [ ${career.start} - ${career.end} ]`}
                                    />
                                )
                            })
                        }
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;