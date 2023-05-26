import './summit.styles.scss';
import Main from '../../media/summit-main-min.png';

import FsLightbox from 'fslightbox-react';
import { useState } from 'react';

import { imgArray, galleryOne, galleryTwo, galleryThree } from '../../Data/data';

const Summit = () => {
    const [ sourceIndex, setSourceIndex ] = useState(0);
    const [ toggle, setToggle ] = useState(false);

    return (
        <div className='summit-outer-container'>
            <div className='summit-heading-outer-container'>
                <div className='summit-heading-inner-container'>
                    <p className='summit-subtitle'>Case Study</p>
                    <h1 className='summit-title'>Modernizing Construction</h1>
                    <p className='summit-time'>Feb 28, 2022 &#183; 7 min read</p>
                </div>
            </div>
            <img src={Main} alt='project' className='summit-main-image' loading='lazy'/>
            <div className='summit-content-outer-container'>
                <div className='summit-content-inner-container'>
                    <h3>About This Project</h3>
                    <p>
                        This case study describes the process by which I helped Summit Contracting Group research and design a unified construction management platform. 
                        For the sake of simplicity, this case study will focus on Preconstruction – the portion of the organization that uses construction drawings to execute the subcontractor bidding process.
                    </p>
                    <p>
                        Organization: <a href='https://www.summit-contracting.com/?ref=jkb.gg' target='_blank' rel='noreferrer'>Summit Contracting Group</a>
                        <br/>My Role: Product Designer
                        <br/>Location: Jacksonville, FL
                        <br />Duration: April 2021 - April 2022 (1 year)
                    </p>
                    <p>
                        Tags: Competitor Analysis, Contextual Inquiry, Field Studies, Observation, Research Repository, SME Interviews, Stakeholder Interviews, User Interviews, 
                        Wireframing, Prototyping, Low-fidelity Design, High-fidelity Design, Ideation & Sketching, Design System, Miro, Figma, Notion, Dovetail
                    </p>
                    <hr />
                </div>
                <div className='summit-content-inner-container'>
                    <h2>The Challenges</h2>
                    <p>
                        <strong>Construction ranks almost dead last in terms of industry digitization. </strong>
                        According to a study performed by management consulting firm McKinsey & Company, the construction industry scored the lowest possible marks in the digitization of work, business processes, transactions, interactions, and asset stock.
                    </p>
                    <img src={imgArray[0]} alt='project' onClick={() => {setToggle(!toggle); setSourceIndex(0)}}/>
                    <div className='summit-caption'><span>Construction is one of the least digitized sectors</span></div>
                </div>
                <div className='summit-content-inner-container'>
                    <p>
                        <strong>Even relative to the construction industry, Summit Contracting Group (SCG) is decidedly old-school. </strong>
                        Despite its status as the largest multifamily general contractor in the nation, the company still relies primarily on pen and paper in many areas of the business. The processes that 
                        <em> have </em>
                        been digitized use technologies that are relatively antiquated and much of the resulting data remains siloed. Through generative and evaluative research (further described below), I was able to quantify the organization's most prevalent challenges and design an improved solution.
                    </p>
                    <hr />
                </div>
                <div className='summit-content-inner-container'>
                    <h2>Discovery</h2>
                    <p>
                        Because I was new to the construction industry as well as SCG, it was necessary for me to gain an understanding of the way the company operated and how it used (or didn't use) technology to build homes. 
                        Since I was operating as a one-person team, I was responsible for all aspects of the research process including planning, scheduling, facilitating, note-taking, transcribing, organizing, coding, and synthesizing data.
                    </p>
                    <h3 className='sub'>Interviews, Field Research, & Competitor Analysis</h3>
                    <p>
                        My approach to gaining this knowledge was to speak to employees in the Preconstruction, Project Management, and Project Administration departments, as well as visit active project sites and meetings as often as possible. 
                        My goal in doing so was to learn about the portion of the company responsible for production.
                    </p>
                </div>
                <div className='summit-images-container'>
                    <div className='summit-image-grid-1'>
                    {galleryOne.map(img => (
                        <img src={img.src} alt='proj' onClick={() => {setToggle(!toggle); setSourceIndex(imgArray.indexOf(img.src))}}/>
                    ))}
                    </div>
                    <div className='summit-caption'><span>Photos from the field</span></div>
                </div>
                <div className='summit-content-inner-container'>
                    <h3 className='sub'>Research Repo</h3>
                    <p>
                        Simultaneously conducting interviews and taking notes was challenging. In the beginning, I relied on 
                        <a href='https://dovetail.com/' target='_blank' rel='noreferrer'> Dovetail </a>
                        for transcription and organization of insights, however, it soon became too time-consuming to parse every recording. I ultimately adopted a leaner approach that involved quick note-taking and building a simplified research repository in
                        <a href='https://www.notion.so/?ref=jkb.gg' target='_blank' rel='noreferrer'> Notion.</a>
                    </p>
                </div>
                <div className='summit-images-container'>
                    <div className='summit-image-grid-2'>
                    {galleryTwo.map(img => (
                        <img src={img.src} alt='proj' onClick={() => {setToggle(!toggle); setSourceIndex(imgArray.indexOf(img.src))}} style={{gridArea: `${img.gridArea}`}}/>
                    ))}
                    </div>
                    <div className='summit-caption'><span>Screenshots of the research repository in Notion</span></div>
                </div>
                <div className='summit-content-inner-container'>
                    <h3 className='sub'>Key Findings</h3>
                    <p>
                        The discovery process yielded insight into the organization's most prevalent challenges:
                    </p>
                    <ul className='summit-list'>
                        <li><strong>Lack of data transparency</strong></li>
                        <ul className='summit-sublist'>
                            <li>Employees face difficulty keeping all documents accurately updated and current after someone makes a change</li>
                            <li>Many business processes require multiple, disconnected software tools</li>
                        </ul>
                    </ul>
                    <ul className='summit-list'>
                        <li><strong>Communication Gap</strong></li>
                        <ul className='summit-sublist'>
                            <li>Between employees in the same department</li>
                            <ul className='summit-sub-sublist'>
                                <li>Employees often receive conflicting information from multiple persons</li>
                                <li>Standards, policies, and best practices are unknown to many</li>
                            </ul>
                        </ul>
                        <ul className='summit-sublist'>
                            <li>Between departments</li>
                            <ul className='summit-sub-sublist'>
                                <li>It is difficult to stay in the loop as project materials are sent & received by different members of the project team</li>
                            </ul>
                        </ul>
                        <ul className='summit-sublist'>
                            <li>Between the project team and clients</li>
                            <ul className='summit-sub-sublist'>
                                <li>There is no single record of communications, updates, or requests from clients</li>
                            </ul>
                        </ul>
                    </ul>
                    <hr />
                </div>
                <div className='summit-content-inner-container'>
                    <h2>Definition</h2>
                    <p>
                        Transforming the information gathered through research into tangible deliverables was by far the most difficult and time-consuming phase of the project. The challenge lay in dealing with the sheer scope of the company's existing processes, issues, and potential solutions. 
                        My approach to tackling this obstacle was to break the process down into manageable tasks*, expanded upon below:
                    </p>
                    <ol className='summit-ordered-list'>
                        <li> <strong>Define existing procedures</strong></li>
                        <li> <strong>Map each task for each user</strong></li>
                        <li> <strong>Create a sitemap/information architecture</strong></li>
                        <li> <strong>Determine design specifications</strong></li>
                    </ol>
                    <p>*these were completed in a varied order</p>
                    <h3 className='sub'>1. Existing Procedures</h3>
                    <p>
                        Using the information and knowledge gained in discovery, I was able to create a visual representation of the procedures followed by employees in Preconstruction, Project Administration, and Project Management. 
                        For the sake of simplicity, this case study focuses on Preconstruction.
                    </p>
                </div>
            </div>
            <img src={imgArray[12]} alt='project' onClick={() => {setToggle(!toggle); setSourceIndex(12)}}/>
            <div className='summit-caption'><span>Caption</span></div>
            <div className='summit-content-outer-container'>
                <div className='summit-content-inner-container'>
                    <p>
                        The Preconstruction department is responsible for initiating the build, getting subcontractors to bid on work, determining the project's scope of work, communicating with subcontractors, and creating the contracts needed to get everyone working. The following diagram lays out these tasks from start to finish:
                    </p>
                </div>
            </div>
            <img src={imgArray[13]} alt='project' onClick={() => {setToggle(!toggle); setSourceIndex(13)}}/>
            <div className='summit-caption'><span>Caption</span></div>
            <div className='summit-content-outer-container'>
                <div className='summit-content-inner-container'>
                    <h3>2. User Workflows</h3>
                    <p>
                        The next step involved determining what each user did during the processes shown above. This was completed for every type of major task in the company, but we'll be focusing on the areas within Preconstruction: 
                        construction drawings and the bidding process
                    </p>
                </div>
            </div>
            <img src={imgArray[14]} alt='project' onClick={() => {setToggle(!toggle); setSourceIndex(14)}}/>
            <p className='spacer'></p>
            <img src={imgArray[15]} alt='project' onClick={() => {setToggle(!toggle); setSourceIndex(15)}}/>
            <div className='summit-caption'><span>Caption</span></div>
            <div className='summit-content-outer-container'>
                <div className='summit-content-inner-container'>
                    <h3>3. Site Map</h3>
                    <p>
                        I mapped the various areas of the company and translated them to a logical architecture that most similarly reflected how employees perceived them.
                    </p>
                </div>
            </div>
            <img src={imgArray[16]} alt='project' onClick={() => {setToggle(!toggle); setSourceIndex(16)}}/>
            <div className='summit-caption'><span>Caption</span></div>
            <div className='summit-content-outer-container'>
                <div className='summit-content-inner-container'>
                    <h3>4. Design Specifications</h3>
                    <p>
                        The final deliverable was a set of design specifications that could be directly translated into UI elements. These specs were relied upon heavily in the following design process.
                    </p>
                </div>
            </div>
            <img src={imgArray[16]} alt='project' onClick={() => {setToggle(!toggle); setSourceIndex(17)}}/>
            <div className='summit-caption'><span>Caption</span></div>
            <hr />
            <div className='summit-content-outer-container'>
                <div className='summit-content-inner-container'>
                    <h2>Design ✍️</h2>
                    <p>
                        This is where tech specs turned into tangible concepts!
                    </p>
                </div>
                <div className='summit-images-container'>
                    <div className='summit-image-grid-3'>
                    {galleryThree.map(img => (
                        <img src={img.src} alt='proj' onClick={() => {setToggle(!toggle); setSourceIndex(imgArray.indexOf(img.src))}} style={{gridArea: `${img.gridArea}`}}/>
                    ))}
                    </div>
                    <div className='summit-caption'><span>Caption</span></div>
                </div>
                <div className='summit-content-inner-container'>
                    <h3 className='sub'>Wireframing in Miro</h3>
                </div>
                <div className='summit-images-container'>
                    <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='project'/>
                    <div className='summit-caption'><span>Caption</span></div>
                    <img className='sub-image' src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='project'/>
                    <div className='summit-caption'><span>Caption</span></div>
                    <img className='sub-image' src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='project'/>
                    <div className='summit-caption'><span>Caption</span></div>
                </div>
                <div className='summit-content-inner-container'>
                    <h3 className='sub'>Design System & Styleguide</h3>
                    <p>
                        To quickly spin up a robust-yet-flexible design system, I started with the 
                        <span> Polaris </span>
                        Figma UI library and customized it to create a minimal design system. I also created a simple set of guidelines concerning branding, typography, color, and iconography.
                    </p>
                </div>
                <div className='summit-images-container'>
                    <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='project'/>
                    <div className='summit-caption'><span>Caption</span></div>
                </div>
                <div className='summit-content-inner-container'>
                    <h3 className='sub'>High-Fidelity Design in Figma</h3>
                </div>
                <div className='summit-images-container'>
                    <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='project'/>
                    <div className='summit-caption'><span>Caption</span></div>
                    <img className='sub-image' src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='project'/>
                    <div className='summit-caption'><span>Caption</span></div>
                    <img className='sub-image' src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='project'/>
                    <div className='summit-caption'><span>Caption</span></div>
                </div>
                <div className='summit-content-inner-container'>
                    <div className='summit-thanks-for-reading'>
                        <span className='smiley'>🙂</span><span><strong>Thanks for Reading!</strong></span>
                    </div>
                    <h2>References 📑</h2>
                    <ol className='summit-references-list'>
                        <li>
                            Agarwal, R., Chandrasekaran, S., & Sridhar, M. (2020, October 20). 
                            <strong> Imagining construction's digital future. </strong>
                            McKinsey & Company. Retrieved from 
                            <a href='https://www.mckinsey.com/business-functions/operations/our-insights/imagining-constructions-digital-future?ref=jkb.gg' target='_blank' rel='noreferrer'>https://www.mckinsey.com/business-functions/operations/our-insights/imagining-constructions-digital-future?ref=jkb.gg</a>
                        </li>
                        <li>
                            Barbosa, F., Woetzel, J., Mischke, J., Ribeirinho, M. J., Sridhar, M., Parsons, M., Bertram, N., & Brown, S. (2020, October 20). 
                            <strong> Reinventing construction through a Productivity Revolution. </strong>
                            McKinsey & Company. Retrieved from 
                            <a href='https://www.mckinsey.com/business-functions/operations/our-insights/reinventing-construction-through-a-productivity-revolution?ref=jkb.gg' target='_blank' rel='noreferrer'>https://www.mckinsey.com/business-functions/operations/our-insights/reinventing-construction-through-a-productivity-revolution?ref=jkb.gg</a>
                        </li>
                    </ol>
                </div>
                <FsLightbox toggler={toggle} sources={[imgArray[sourceIndex]]} />
            </div>
        </div>
    )
}

export default Summit; 