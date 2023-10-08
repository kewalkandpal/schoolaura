import About from "./About";
import Achive from "./Achive";
import Client from "./Client";
import Education from "./Education";
import Hero from "./Hero";

function Home() {
    return (
        <div className="w-full h-[100%]">
            <Hero />
            <Achive />
            <Education />
            <Client />
            <About />
        </div>
    )
}

export default Home;
