import {ReactComponent as GithubIcon} from 'assects/img/github.svg';
import './styles.css';

function Navbar() {

    return (

        <header>
            <nav className="container">
                <div className="dsmovies-navs-contents">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/marcos1970moreirasantos" target="_blank" rel="noreferrer">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/Marcos M dos Santos</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}
export default Navbar;