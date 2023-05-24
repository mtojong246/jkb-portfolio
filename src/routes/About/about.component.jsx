import './about.styles.scss';

const About = () => {
    return (
        <div className='about-outer-container'>
            <div className='about-inner-container'>
                <h1>About</h1>
                <div className='headshot-container'>
                    <img src='https://cdn-icons-png.flaticon.com/512/773/773379.png' alt='headshot' />
                </div>
                <div className='about-text-container'>
                    <h2>Hey! I'm Jacob 👋</h2>
                    <p>I'm a Florida-based product designer from North Carolina. For the past 5 years, I have created human-centered experiences for organizations large and small, for-profit and non-profit. 
                    I've designed digital products and services for users in healthcare, social assistance, construction, legal, and travel, among others.</p>
                    <p>I am currently pursuing a Master of Science in Applied Psychology at the University of Southern California, where I aim to develop a deeper understanding of user psychology and hone my skills as an effective researcher and leader.</p>
                </div>
                <div className='about-text-container'>
                    <h2>My Passion 💡</h2>
                    <p>I believe a human-centered perspective will be instrumental in creating the experiences of the future. One of my main motivations is to help others through the application of this user-centric philosophy, especially those who may be overlooked. 
                    This includes neuro-atypical individuals and individuals who require design considerations beyond those of the general population. 
                    Having worked as the director of UX research at an organization that focuses on providing a safe online space for survivors of sexual assault and domestic violence, I am keenly aware of the power technology has for doing good.</p>
                    <p>I aim to use my technology expertise and understanding of user psychology to create more engaging, effective, and fun digital experiences for people of all ages and cognitive requirements. 
                    I want to help shape the vision and strategy of disruptive products that are transforming the tech landscape, integrate user-centeredness into these products, and satisfy the diverse needs of future generations.</p>
                </div>
            </div>
        </div>
    )
}

export default About;