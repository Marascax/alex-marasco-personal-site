// opening page that shows up at start
import DownArrow from '../../components/downArrow';

import { useAppContext } from '../../lib/appContext';

import './mainPage.scss';

const MainPage = props => {

    const context = useAppContext();

    return (
        <div className="MainPage">

            <div className="MainContent">

                <div className="SelfImage">
                    <img src="images/Alex_Marasco.jpg"/>
                </div>

                <div className="WelcomeText">
                    <p>Welcome to the Personal Site of</p>
                    <h1>Alexander Marasco</h1>
                    
                    <div className='DownArrow' onClick={() => context.scrollDown()}>
                        <DownArrow width="100"/>
                    </div>
                    
                </div>
                
            </div>

        </div>
    )
}

export default MainPage;