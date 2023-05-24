import './lexis-nexis.styles.scss';
import Main from '../../media/lexisnexis-main-min.png';

const LexisNexis = () => {
    return (
        <div className='lexnex-outer-container'>
            <div className='lexnex-heading-outer-container'>
                <div className='lexnex-heading-inner-container'>
                    <p className='lexnex-subtitle'>Case Study</p>
                    <h1 className='lexnex-title'>Simplifying Legal Case Management</h1>
                    <p className='lexnex-time'>May 1, 2021 &#183; 7 min read</p>
                </div>
            </div>
            <img src={Main} alt='project' className='lexnex-main-image' loading='lazy'/>
            <div className='lexnex-content-outer-container'>
                <div className='lexnex-content-inner-container'>
                    <h3>About this project</h3>
                    <p>
                        This case study describes the process by which I helped LexisNexis redesign and successfully re-launch its flagship legal case management software.
                    </p>
                    <p>
                        Organization: <a href='https://www.lexisnexis.com/en-us/home.page?ref=jkb.gg' target='_blank' rel='noreferrer'>LexisNexis</a>
                        <br/>Product: <a href='https://www.lexisnexis.com/en-us/products/casemap.page?ref=jkb.gg' target='_blank' rel='noreferrer'>CaseMap Cloud</a>
                        <br/>My Role: UX Designer
                        <br/>Location: Raleigh, NC  
                        <br/>Duration: October 2019 - October 2020 (1 year)
                    </p>
                    <p>
                        Tags: Wireframing, Prototyping, Low-fidelity Design, High-fidelity Design, Ideation & Sketching, SME Interviews, User Interviews, User Testing, Design System, Adobe XD, Sketch, Mural, Zeplin, Tetra Insights
                    </p>
                    <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='project'/>
                    <div className='lexnex-caption'><span>Caption</span></div>
                    <hr />
                </div>
                <div className='lexnex-content-inner-container'>
                    <h2>The Challenges</h2>
                    <p>
                        CaseMap is a LexisNexis (LN) product that allows legal professionals (attorneys, paralegals, etc.) to manage their open cases. 
                        <strong> Before this project, CaseMap existed only as an installed Windows desktop application for 20+ years.</strong>
                    </p>
                </div>
                <div className='lexnex-images-container'>
                    <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='project'/>
                    <div className='lexnex-caption'><span>Caption</span></div>
                </div>
                <div className='lexnex-content-inner-container'>
                    <p>
                        Beyond providing a cloud-based solution to our customers, our team set out to solve these problems with the legacy product:
                    </p>
                    <ol className='lexnex-ordered-list'>
                        <li><strong>Steep learning curve</strong></li>
                        <ul className='lexnex-sublist'>
                            <li>CaseMap users often had to go through a 6-week training course just to learn how to use the software</li>
                        </ul>
                        <li><strong>Poor navigability & lack of visual hierarchy (outdated design)</strong></li>
                        <ul className='lexnex-sublist'>
                            <li>As you can see in the screenshots below, the legacy product used a Microsoft UI and combined the top ribbon menu with a vertical navigation menu on the left. This combination was confusing according to most users.</li>
                        </ul>
                        <li><strong>Lack of consistency with other LexisNexis products</strong></li>
                        <ul className='lexnex-sublist'>
                            <li>
                                At the time of this project (2019-2020), LexisNexis was unveiling a redesign of a major product,&nbsp;  
                                <a href='https://www.lexisnexis.com/en-us/professional/research/nexis.page' target='_blank' rel='noreferrer'>Nexis</a>
                                , as well as launching a new flagship product
                                <a href='https://www.lexisnexis.com/en-us/products/lexis-plus.page?ref=jkb.gg' target='_blank' rel='noreferrer'> Lexis+</a>
                                . The company was also testing a new subscription model wherein users could gain access to more products. Consequently, the goal was to present a unified, cohesive suite of beautiful, user-friendly products that shared the same design language.
                            </li>
                        </ul>
                    </ol>
                    <hr/>
                </div>
                <div className='lexnex-content-inner-container'>
                    <h2>The Goals 🎯</h2>
                    <p>
                        Our team had many aims for the redesign but our foremost objective was to address the following:
                    </p>
                    <ol className='lexnex-ordered-list'>
                        <li><strong>Flatten the learning curve</strong></li>
                        <ul className='lexnex-sublist'>
                            <li>It shouldn't take six weeks to learn how to use a piece of software! In fact, users should be able to understand and use it almost immediately.</li>
                        </ul>
                        <li><strong>Reduce the time required to complete common tasks (implement modern design patterns)</strong></li>
                        <ul className='lexnex-sublist'>
                            <li>In line with the first goal, users should be able to complete tasks with greater speed and efficiency than before.</li>
                        </ul>
                        <li><strong>Ensure cohesion within the larger suite of LexisNexis cloud products</strong></li>
                        <ul className='lexnex-sublist'>
                            <li>As mentioned above, the company wanted to present subscription packages to customers, not disparate products. As such, our goal was to implement a shared visual language and a single design system.</li>
                        </ul>
                    </ol>
                    <hr/>
                </div>
                <div className='lexnex-content-inner-container'>
                    <h2>The Process 🛫</h2>
                    <p>
                        Although the project did not always follow a linear path, the sequence below roughly reflects the overall progression from problem to solution. Each stage will be explored further in this case study.
                    </p>
                </div>
            </div>
            <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='project'/>
            <div className='lexnex-caption'><span>Caption</span></div>
            <div className='lexnex-content-outer-container'>
                <div className='lexnex-content-inner-container'>
                    <hr/>
                </div>
                <div className='lexnex-content-inner-container'>
                    <h2>① Discovery 🔭</h2>
                    <p>
                        Before jumping into brainstorming potential solutions, our team needed to understand the current product, its strengths and weaknesses, and the constraints that limited the new product technically. We used the following methods to gather this information:
                    </p>
                    <ol className='lexnex-ordered-list'>
                        <li><strong>Interviews with users and Subject Matter Experts (SMEs)</strong></li>
                        <ul className='lexnex-sublist'>
                            <li>these groups often overlapped</li>
                            <li>we spoke with our Product Lead extensively-- he was called the "Product Historian" because he had been involved with the development of CaseMap since its initial inception (over 20 years)</li>
                        </ul>
                        <li><strong>Competitor analysis of comparable products on the market</strong></li>
                        <li><strong>Heuristic evaluation of the legacy product</strong></li>
                        <li><strong>Information architecture</strong></li>
                        <ul className='lexnex-sublist'>
                            <li>Our team mapped the IA of the legacy product as well as started to define the user flows of our updated version. One such flow is shown below:</li>
                        </ul>
                    </ol>
                </div>
            </div>
            <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='project'/>
            <div className='lexnex-caption'><span>Caption</span></div>
            <div className='lexnex-content-outer-container'>
                <div className='lexnex-content-inner-container'>
                    <hr/>
                </div>
                <div className='lexnex-content-inner-container'>
                    <h2>② Concept Development 💡</h2>
                    <p>
                        Whether it be brainstorming new UI patterns or diagramming relationships between data, it all started on the whiteboard! This was personally my favorite part of the project because it brought together the team and encouraged us to be creatively divergent. Once our ideas were on the board, we narrowed them down and made the concepts real through simple grayscale wireframes.
                    </p>
                </div>
                <div className='lexnex-images-container'>
                    <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='project'/>
                    <div className='lexnex-caption'><span>Caption</span></div>
                    <img className='sub-image' src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='project'/>
                    <div className='lexnex-caption'><span>Caption</span></div>
                </div>
                <div className='lexnex-content-inner-container'>
                    <hr/>
                </div>
                <div className='lexnex-content-inner-container'>
                    <h2>③ Concept Testing 💬</h2>
                    <p>
                        The purpose of concept testing was to gauge the user reaction to new design patterns and validate or invalidate our decisions and assumptions. Because we interacted with users early and often, we were able to quickly verify which ideas to keep and which to scrap. The following are three early studies conducted by the team.
                    </p>
                    <h3 className='sub'>Study #1: User Response to Foundational Design Concepts</h3>
                    <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='project'/>
                    <div className='lexnex-caption'><span>Caption</span></div>
                    <hr />
                    <h3 className='sub'>Study #2: User Response to Case-building Tools</h3>
                    <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='project'/>
                    <div className='lexnex-caption'><span>Caption</span></div>
                    <hr />
                    <h3 className='sub'>Study #3: User Response to Data Tables & Navigation</h3>
                    <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='project'/>
                    <div className='lexnex-caption'><span>Caption</span></div>
                    <hr />
                </div>
                <div className='lexnex-content-inner-container'>
                    <h2>④ Prototype Development 🖥</h2>
                    <p>
                        Developing and refining the clickable prototype was by far the most time-intensive and demanding task required of the design team. Because of the sheer scope of the project (more than 200 screens), it was necessary to build a robust library of design components. For each UI component, different states and interactions were defined so that repetitive work could be kept at a minimum.
                    </p>
                    <h3 className='sub'>
                        The Component Library
                    </h3>
                </div>
            </div>
            <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='project'/>
            <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='project'/>
            <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='project'/>
            <div className='lexnex-caption'><span>Caption</span></div>
            <div className='lexnex-content-outer-container'>
                <div className='lexnex-content-inner-container'>
                    <h3>The Canvas</h3>
                </div>
            </div>
            <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='project'/>
            <div className='lexnex-caption'><span>Caption</span></div>
            <div className='lexnex-content-outer-container'>
                <div className='lexnex-content-inner-container'>
                    <hr />
                </div>
                <div className='lexnex-content-inner-container'>
                    <h2>⑤ Usability Testing 💁‍♀️</h2>
                    <p>
                        After our team built a working clickable prototype, we tested it with 14 users over the course of several weeks on weekly "User Fridays."
                    </p>
                    <h3 className='sub'>About this Research</h3>
                    <p>Participants: 14 legal professionals</p>
                    <ul className='lexnex-list'>
                        <li>4 users had greater than 5 years of CaseMap experience</li>
                        <li>7 had less than 5 years</li>
                        <li>3 were non-users</li>
                    </ul>
                    <p>
                        We recorded, transcribed, and coded the data using Tetra Insights. We focused on three types of data:
                    </p>
                    <ol className='lexnex-ordered-list'>
                        <li>
                            <strong>General feedback </strong>
                            about their experience using the new product
                        </li>
                        <li>
                            <strong>UI-specific feedback </strong>
                             — the user’s experience with newly designed components and interactions that were not familiar to the legacy product
                        </li>
                        <li>
                            <strong>User actions</strong>
                             — nonverbal usage observations
                        </li>
                    </ol>
                    <h3 className='sub'>Findings & Results</h3>
                    <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='project'/>
                    <div className='lexnex-caption'><span>Caption</span></div>
                    <hr/>
                </div>
                <div className='lexnex-content-inner-container'>
                    <h2>⑥ Refinement & Handoff 📐</h2>
                    <p>
                        This stage didn't occur at any particular time, but rather throughout the project. As the design and research team finished iterating on an area of the product, we would publish the live prototype with Adobe Xd's "Design Specs" mode, which allowed our developer counterparts to easily inspect all details and assets.
                    </p>
                </div>
                <div className='lexnex-images-container'>
                    <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='project'/>
                    <div className='lexnex-caption'><span>Caption</span></div>
                </div>
                <div className='lexnex-content-inner-container'>
                    <h3>The Clickable Prototype</h3>
                    <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='project'/>
                    <div className='lexnex-caption'><span>Caption</span></div>
                    <hr />
                </div>
                <div className='lexnex-content-inner-container'>
                    <h2>Results 📈</h2>
                    <p>
                        CaseMap Cloud was launched in late 2021 and was a resounding success! It was received very well by both existing LexisNexis customers and subscribers to the new cloud-based suite of products. Along with the simplified interface, the ability for legal professionals to collaborate with team members anywhere was especially useful as many people continued working remotely in the wake of the pandemic.
                    </p>
                    <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='project'/>
                    <div className='lexnex-caption'><span>Caption</span></div>
                    <img className='sub-image' src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='project'/>
                    <div className='lexnex-caption'><span>Caption</span></div>
                    <hr />
                </div>
                <div className='lexnex-content-inner-container'>
                    <h2>Reflection & Learnings💡</h2>
                    <h3>What we did well:</h3>
                    <ul className='lexnex-list'>
                        <li>Great communication and collaboration among the entire team</li>
                        <li>UX, Visual Design, Product, and Engineering team members stayed in close contact and always responded quickly</li>
                    </ul>
                    <h3>What we could've done better:</h3>
                    <ul className='lexnex-list'>
                        <li>We relied too heavily on superusers and one SME</li>
                        <ul className='lexnex-sublist'>
                            <li>Didn’t include many non-users in testing</li>
                        </ul>
                        <li>We didn't wireframe in low fidelity</li>
                        <ul className='lexnex-sublist'>
                            <li>We used Adobe XD to create wireframes that were too detailed and took too much time to modify</li>
                            <li>Led to time-consuming double-work that could have been avoided</li>
                        </ul>
                        <li>We should have tested some assumptions from the start</li>
                        <ul className='lexnex-sublist'>
                            <li>Some problems that emerged from concept testing were not addressed</li>
                        </ul>
                        <li>The iPad & mobile use cases should have been considered from the beginning</li>
                        <li>We could have been more thorough with the design specifications handed off to the engineering team</li>
                        <ul className='lexnex-sublist'>
                            <li>Didn't include detailed notes and often had to reactively respond to development miscommunications</li>
                        </ul>
                    </ul>
                </div>
                <div className='lexnex-content-inner-container'>
                    <div className='lexnex-thanks-for-reading'>
                        <span className='smiley'>🙂</span><span><strong>Thanks for Reading!</strong></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LexisNexis;