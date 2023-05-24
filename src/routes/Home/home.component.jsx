import './home.styles.scss';
import Header from '../../components/Header/header.component';
import Card from '../../components/Card/card.component';
import { data } from '../../Data/data';

const Home = () => {
    return (
        <>
            <Header />
            <div className='home-container'>
            {data.map(project => (
                <Card key={project.id} subtitle={project.subtitle} title={project.title} description={project.description} date={project.date} time={project.time} org={project.org}/>
            ))}
            </div>
        </>
    )
}

export default Home;