import { Link } from 'react-router-dom';
import './Navigation.css';
import Discover from '../../assets/img/Discover.svg';
import Home from '../../assets/img/Home.svg';
import Leaderboard from '../../assets/img/Leaderboard.svg';
import Profile from '../../assets/img/Profile.svg';

const Navigation = () => {
    return (
        <div className='navigation'>
            <nav>
                <ul>
                    <Link to="/">
                        <img src={Home} alt="Home"></img>
                    </Link>
                    <Link>
                        <img src={Discover} alt="Discover"></img>
                    </Link>
                    <Link>
                        <img src={Leaderboard} alt="Leaderboard"></img>
                    </Link>
                    <Link>
                        <img src={Profile} alt="Profile"></img>
                    </Link>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;