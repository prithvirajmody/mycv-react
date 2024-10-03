import Education from "./Education";
import Profile from "./Profile";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Hobbies from './Hobbies';
import Footer from './Footer';
import Header from "./Header";

function Home() {
    return (
        <div className="App">
            <Header />
            <main>
                {/* Main route rendering resume content */}
                <Profile />
                <Education />
                <Skills />
                <Experience />
                <Projects />
                <Hobbies />
            </main>
            <Footer />
        </div>
    )
}

export default Home;