import './our-wave.styles.scss';

const OurWave = () => {
    return (
        <div className='wave-outer-container'>
            <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='project' className='wave-main-image'/>
            <div className='wave-heading-outer-container'>
                <div className='wave-heading-inner-container'>
                    <p className='wave-subtitle'>Case Study</p>
                    <h1 className='wave-title'>Creating a Safe Online Space for a Vulnerable Demographic</h1>
                    <p className='wave-time'>Jul 1, 2020 &#183; 10 min read</p>
                </div>
            </div>
            <div className='wave-content-outer-container'>
                <div className='wave-content-inner-container'>
                    <h3>About This Project</h3>
                    <p>
                        This case study describes the process by which I helped Our Wave create a safe online space for survivors of sexual assault and domestic violence through primary and secondary research, as well as concept design and development.
                    </p>
                    <p>
                        Organization: <a href='' target='_blank' rel='noreferrer'>Our Wave</a>
                        <br/>My Role: Director of UX Research
                        <br/>Location: Raleigh, NC
                        <br />Duration: June 2018 - June 2020 (2 years)
                    </p>
                    <p>
                        Tags: SME Interviews, User Interviews, Surveys, Styleguide, Wireframing, Low-fidelity Design, User Testing, Sketch, InVision, Hotjar, Google Forms, Figma
                    </p>
                    <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='project'/>
                    <div className='wave-caption'><span>Caption</span></div>
                    <hr />
                </div>
                <div className='wave-content-inner-container'>
                    <h2>What is Our Wave? 🌊</h2>
                    <p>
                        Our Wave is a 501c3 nonprofit dedicated to building an online platform where survivors of sexual assault can safely and anonymously share stories.
                    </p>
                    <h3 className='sub'>Vision - What we do</h3>
                    <ol className='wave-ordered-list'>
                        <li>Collect stories and build an empathetic community where survivors can be heard, believed, and supported</li>
                        <li>Build a centralized story base to proactively deduce patterns between narratives</li>
                        <li>Create plans of action with public and private partners to improve prevention strategies and create a wave of change</li>
                    </ol>
                    <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='project'/>
                    <div className='wave-caption'><span>Caption</span></div>
                    <h3 className='sub'>Mission - Why we do it</h3>
                    <p>
                        The organization was started in 2018 with the goal of providing individuals with a space where they might find common ground with others, and where they could speak about traumatic past experiences rather than internalize the associated negative emotions.
                    </p>
                    <p>
                        We help survivors find hope and connection on the path to healing:
                    </p>
                </div>
            </div>
            <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='project'/>
            <div className='wave-caption'><span>Caption</span></div>
        </div>
    )
}

export default OurWave;