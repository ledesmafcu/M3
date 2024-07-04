import Biog from "../../components/Biog/Biog";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import styles from "./Home.module.css";
import Location from "../../components/Location/Location"
const { container } = styles;

function Home() {
    return(
        <div className={container}>
            <Biog />
            <Location />
            <SocialMedia />
            <footer>
                Draferra | Atención online y presencial
            </footer>
        </div>
        
    )
}

export default Home;