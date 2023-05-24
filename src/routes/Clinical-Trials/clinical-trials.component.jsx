import './clinical-trials.styles.scss';

const ClinicalTrials = () => {
    return (
        <div className='clinical-outer-container'>
            <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='project' className='clinical-main-image'/>
            <div className='clinical-heading-outer-container'>
                <div className='clinical-heading-inner-container'>
                    <p className='clinical-subtitle'>Case Study</p>
                    <h1 className='clinical-title'>Demystifying Clinical Trial Recruitment</h1>
                    <p className='clinical-time'>Oct 1, 2019 &#183; 9 min read</p>
                </div>
            </div>
            <div className='clinical-content-outer-container'>
                <div className='clinical-content-inner-container'>
                    <h3>About This Project:</h3>
                    <p>
                        In this project, I used research methods to gain further insight into the clinical trial recruitment process and designed a solution that improves upon the experience observed at 
                        <a href='https://www.clinicaltrials.gov/?ref=jkb.gg' target='_blank' rel='noreferrer'> ClinicalTrials.gov</a>
                        . At the end of this process, I collaborated with a developer to build an MVP front-end prototype.
                    </p>
                    <p>
                        Organization: (independent project)
                        <br/>My Role: UX Designer
                        <br/>Location: Raleigh, NC
                        <br/>Duration: July 2019 - August 2019 (1 month)
                    </p>
                    <p>
                        Tags: Wireframing, Prototyping, Low-fidelity Design, High-fidelity Design, Ideation & Sketching, SME Interviews, User Interviews, Contextual Inquiry, Sketch, Figma, Maze
                    </p>
                    <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='project'/>
                    <div className='clinical-caption'><span>Caption</span></div>
                    <hr/>
                </div>
                <div className='clinical-content-inner-container'>
                    <h2>The Challenges ⛈</h2>
                    <p>
                        Recruiting participants for clinical trials continues to be a major challenge for researchers. 
                        <strong> Currently, over 80% of clinical trials are delayed due to lack of participants, and roughly two-thirds of clinical trial sites fail to meet their enrollment requirements in time. </strong>
                        Furthermore, according to polls done by CenterWatch, about 75% of the public has little to no knowledge of clinical studies. This is a significant problem because clinical trials allow researchers at pharmaceutical, biotechnology or medical device companies to test the safety and efficacy of new treatments and therapies, and without proper patient recruitment, these developments get delayed or altogether halted.
                    </p>
                    <p>
                        <strong>One underlying factor contributing to poor recruitment is a lack of information transparency in the process that patients go through to join a clinical study.</strong>
                        A patient looking to sign up for a trial through&nbsp; 
                        <a href='https://www.clinicaltrials.gov/?ref=jkb.gg' target='_blank' rel='noreferrer'>ClinicalTrials.gov</a>
                        –the database of privately and publicly funded clinical studies provided by the U.S. National Library of Medicine–faces several obstacles to finding the information they need:
                    </p>
                    <ul className='clinical-list'>
                        <li>
                            <strong>Dense Display</strong>
                            <br/>On the results and trial detail pages, the user is met with a great deal of information, and it is not immediately clear what is most important, where the most essential information is stored, or what the user should do next. This is especially problematic when considering older or less tech-accustomed users who may be more likely to give up their search because of a lack of clarity and information hierarchy.
                        </li>
                    </ul>
                </div>
                <div className='clinical-images-container'>
                    <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='project'/>
                    <div className='clinical-caption'><span>Caption</span></div>
                </div>
                <div className='clinical-content-inner-container'>
                    <ul className='clinical-list'>
                        <li>
                            <strong>Inaccessible Language</strong>
                            <br/>The page that displays the details of an individual study is especially overwhelming for an average user who is not a medical professional. (I spoke with several people with advanced medical degrees and even they were unfamiliar with some of the terms used in the descriptions of clinical trials.) This is problematic because an average patient may not have the ability to recognize if he or she fits within the eligibility criteria for a study, or if a study is relevant to their particular medical condition.
                        </li>
                        <li>
                            <strong>Lack of Clear Path or Endpoint</strong>
                            <br/>Perhaps the greatest impediment to effective patient recruitment through the site is the nature of the user's journey as a whole. Since ClinicalTrials.gov first and foremost provides a means to search a database, users are mostly left to figure out for themselves what information they want to find and it is assumed that they already know what they are looking for. There is also very little emphasis on the few pieces of information that are more important to potential patients–such as the purpose of the study, the time commitment, the participation requirements, and where to participate. Furthermore, there is little direction or emphasis surrounding the contact information of the study's principal investigator–whom the patient must contact in order to join the study.
                        </li>
                    </ul>
                </div>
                <div className='clinical-images-container'>
                    <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='project'/>
                    <div className='clinical-caption'><span>Caption</span></div>
                </div>
                <div className='clinical-content-inner-container'>
                    <hr />
                </div>
                <div className='clinical-content-inner-container'>
                    <h3><strong>"The number one challenge to everyone in the industry is patient recruitment.  As technologists, one way we can immediately combat this problem is by making it easier for patients to join a clinical trial."</strong></h3>
                    <p>–Willie Muehlhausen, Head of Innovation at CRO ICON</p>
                    <h3 className='sub'><strong>"If we can compress the time it takes to enroll a trial, we can get medicines to patients much faster."</strong></h3>
                    <p>–Jeff Kasher, former VP of Clinical Innovation at Eli Lilly</p>
                    <h3 className='sub'><strong>"What if we could put millions of people in the right clinical study at the right place and time?  People who've had long term diseases or pain.  We would save countless lives and reduce untold suffering."</strong></h3>
                    <p>–Stephen Goldner, Founder and CEO of CureLauncher</p>
                    <hr/>
                </div>
                <div className='clinical-content-inner-container'>
                    <h2>The Goals 🎯</h2>
                    <p>
                    Since this project had a time constraint of only a few weeks, it was important to define its main goals and narrow the scope to a manageable MVP. Below are the results of an exercise meant to identify the project's top priorities. The simple calculation used: 
                    <strong> Importance * Severity = Priority</strong>
                    </p>
                </div>
                <div className='clinical-images-container'>
                    <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='project'/>
                    <div className='clinical-caption'><span>Caption</span></div>
                </div>
                <div className='clinical-content-inner-container'>
                    <hr />
                </div>
                <div className='clinical-content-inner-container'>
                    <h2>Discovery 🔭</h2>
                    <p>
                        Before jumping into redesigning the way ClinicalTrials.gov helps people find studies, I first needed to learn more about the space and gather insight into how patients and physicians currently go about the recruiting process. I utilized several discovery research methods to accomplish this.
                    </p>
                    <h3 className='sub'>Identifying Stakeholders, Users, and Solutions</h3>
                    <p>After defining the project's goals and priorities, I enlisted the help of my coworkers to help with brainstorming possible avenues of discovery. We focused on three topics: stakeholders, users, and potential methods of reaching patients. Once ideas were on the board, we voted on those we believed were most promising.</p>
                    <p>
                        <strong>1. Who are the major stakeholders in the clinical trial market? How can we contact them to gain insight?</strong>
                    </p>
                    <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='project'/>
                    <div className='clinical-caption'><span>Caption</span></div>
                    <p>
                        <strong>2. Who are the main users of clinical trial platforms currently? How can we get their feedback?</strong>
                    </p>
                    <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='project'/>
                    <div className='clinical-caption'><span>Caption</span></div>
                    <p>
                        <strong>
                        3. How can we improve the transparency of this process? How can we encourage more involvement?
                        </strong>
                    </p>
                    <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='project'/>
                    <div className='clinical-caption'><span>Caption</span></div>
                    <h3 className='sub'>User & SME Interviews</h3>
                    <p>
                        To research this area, I contacted several principal investigators–the medical professionals conducting the clinical studies–as well as individuals who either participated in clinical trials in the past or who have had close family members participate in trials.
                    </p>
                    <p>
                        <strong>Participants Recruited:</strong>
                    </p>
                    <ol className='clinical-ordered-list'>
                        <li>Principal investigator of clinical trial NCT04055246 regarding prebiotics and cognition at Duke University</li>
                        <li>Principal investigator of clinical trial NCT04023994 regarding the safety of an experimental Alzheimer's intervention at PRA Health Sciences/ Hoffmann-La Roche</li>
                        <li>Principal investigator of clinical trial NCT03983070 regarding blood flow restriction and muscle health at Campbell University</li>
                        <li>Participant in two clinical trials regarding diet and neurological health, doctor of physical therapy working with study participants</li>
                        <li>Father of a patient in a clinical trial studying Duchenne muscular dystrophy</li>
                    </ol>
                    <p>
                        <strong>Methods:</strong>
                        <br/>My strategy for collecting stakeholder and user feedback was to find principal investigators' contact information via the ClinicalTrials.gov database and to utilize my local network as much as possible. I targeted actively recruiting studies within a 50-mile radius and sent emails to the medical teams involved, inquiring as to how patients are recruited. Specifically, I asked about the screening process that patients go through to be considered for participation, how eligibility is determined, and which communication channels were most effective for recruiting participants.
                    </p>
                    <p>In one case, I actually assumed the role of the user fully and went through the entire process of eligibility screening for a particular clinical trial. This allowed me to better understand the patient's journey to join a trial and helped me realize some of the factors that patients have to consider when signing up. It also helped me to pinpoint the information that is most important to the patient when joining a trial, as well as the information that is most important to the principal investigator.</p>
                    <h3 className='sub'>Key Insights:</h3>
                    <ol className='clinical-ordered-list'>
                        <li>There are two types of participants:</li>
                        <ul className='clinical-sublist'>
                            <li><strong>Patients looking to join a clinical study for medical treatment or therapy</strong></li>
                            <li><strong>Healthy volunteers looking to join a clinical study for altruistic, scholarly, or financial purposes</strong></li>
                        </ul>
                        <li>Healthy participants are generally not recruited through ClinicalTrials.gov but rather by in-person or local recruitment methods (flyers, posters, social media posts, local volunteer or employment boards)</li>
                        <li>Patients are often referred to a study by their physician or are directed by a physician to search for a trial</li>
                        <li>Patients reported that the following information was most important to them when considering joining a trial:</li>
                        <ul className='clinical-sublist'>
                            <li><strong>The medical condition being studied or treated</strong></li>
                            <li><strong>Where the study is happening</strong></li>
                            <li><strong>The eligibility requirements</strong></li>
                            <li><strong>Whether or not they could receive a placebo</strong></li>
                            <li><strong>How to join</strong></li>
                        </ul>
                    </ol>
                    <hr />
                </div>
                <div className='clinical-content-inner-container'>
                    <h2>Definition 📝</h2>
                    <p>Using the information learned in the discovery process, I was able to inform the information architecture of a newly designed application, as well as expand my perspective to include new personas and new areas of the user journey that I previously hadn't considered.</p>
                    <h3 className='sub'>Personas</h3>
                    <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='project'/>
                    <div className='clinical-caption'><span>Caption</span></div>
                    <img className='sub-image' src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='project'/>
                    <div className='clinical-caption'><span>Caption</span></div>
                    <h3 className='sub'>User Journeys</h3>
                </div>
            </div>
            <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='project'/>
            <div className='clinical-caption'><span>Caption</span></div>
            <div className='clinical-content-outer-container'>
                <div className='clinical-content-inner-container'>
                    <h2>Design ✍️</h2>
                    <p>After learning more about the space, identifying the user personas, and mapping the user's journey, it was possible to begin designing an improved solution informed by firsthand primary research.</p>
                    <h3 className='sub'>Information Architecture & User Flows</h3>
                    <p>
                        The redesign was based on the principle of 
                        <strong> progressive disclosure</strong>
                        , which states that people find it easier to interact with small chunks of information presented in a logical sequence. Using this idea, it was possible to break the initial search into several manageable steps, as well as separate and emphasize the contact information of the relevant principle investigator.
                    </p>
                </div>
            </div>
            <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='project'/>
            <div className='clinical-caption'><span>Caption</span></div>
            <div className='clinical-content-outer-container'>
                <div className='clinical-content-inner-container'>
                    <h3 className='sub'>Wireframes</h3>
                    <p>
                        Another aspect of the redesign was creating a simpler interface with fewer components on each page. This eased the cognitive requirement of each page and would make the path to the endpoint (joining a clinical trial) much clearer.
                    </p>
                </div>
                <div className='clinical-images-container'>
                    <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='project'/>
                    <div className='clinical-caption'><span>Caption</span></div>
                </div>
                <div className='clinical-content-inner-container'>
                    <h3 className='sub'>High-Fidelity Designs</h3>
                    <p>The high-fidelity designs were created first in Sketch, then migrated to Figma. I used a very simple library of components and a minimalistic approach to type & color. The end result is a very simple flow from initiating a search, narrowing it to fit one's specific needs, selecting a particular clinical trial, then viewing the contact information necessary to join.</p>
                </div>
                <div className='clinical-images-container'>
                    <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='project'/>
                    <div className='clinical-caption'><span>Caption</span></div>
                </div>
                <div className='clinical-content-inner-container'>
                    <h3 className='sub'>Clickable Prototype</h3>
                    <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='project'/>
                    <div className='clinical-caption'><span>Caption</span></div>
                    <p className='sub'>
                        <strong>Building a Front-End Prototype</strong>
                        After I completed the high-fidelity designs and had an interactive prototype, I worked with a front-end developer colleague who was interested enough to build out the designs on a site! Although the ClinicalTrials.gov database is not connected, it is awesome to see what the app would look like if it were really out there. You can check out his 
                    </p>
                </div>
                <div className='clinical-content-inner-container'>
                    <div className='clinical-thanks-for-reading'>
                        <span className='smiley'>🙂</span><span><strong>Thanks for Reading!</strong></span>
                    </div>
                    <h2>References 📑</h2>
                    <ol className='clinical-ordered-list'>
                        <li>
                            (2012, July 18).
                            <strong> Clinical trial delays: America's patient recruitment dilemma. </strong>
                            Retrieved from&nbsp; 
                            <a href='https://www.clinicaltrialsarena.com/analysis/featureclinical-trial-patient-recruitment' target='_blank' rel='noreferrer'>https://www.clinicaltrialsarena.com/analysis/featureclinical-trial-patient-recruitment</a>
                        </li>
                        <li>
                            (2018, September 7). 
                            <strong> Why do Recruitment Efforts Fail to Enroll Enough Participants? </strong>
                            Retrieved from&nbsp; 
                            <a href='https://forteresearch.com/news/recruitment-efforts-fail-enroll-enough-patients' target='_blank' rel='noreferrer'>https://forteresearch.com/news/recruitment-efforts-fail-enroll-enough-patients</a>
                        </li>
                        <li>
                            Institute of Medicine (US) Forum on Drug Discovery, Development, & Translation. (1970, January 1). 
                            <strong> The State of Clinical Research in the United States: An Overview. </strong>
                            Retrieved from&nbsp;
                            <a href='https://www.ncbi.nlm.nih.gov/books/NBK50886/' target='_blank' rel='noreferrer'>https://www.ncbi.nlm.nih.gov/books/NBK50886/</a>
                        </li>
                        <li>
                            Fogel, D. B. (2018, August 7). 
                            <strong> Factors associated with clinical trials that fail and opportunities for improving the likelihood of success. </strong>
                            Retrieved from&nbsp; 
                            <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6092479' target='_blank' rel='noreferrer'>https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6092479</a>
                        </li>
                        <li>
                            (2016, May 5).
                            <strong> How to find a perfect match – Empowering patients to find their way through clinical trials. </strong>
                            Retrieved from&nbsp;
                            <a href='https://www.patientresearchexchange.org/stories/detail/how-to-find-a-perfect-match-empowering-patients' target='_blank' rel='noreferrer'>https://www.patientresearchexchange.org/stories/detail/how-to-find-a-perfect-match-empowering-patients</a>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default ClinicalTrials;