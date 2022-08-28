// opening page that shows up at start
import DownArrow from '../../../components/downArrow';

import { useAppContext } from '../../../lib/appContext';

import './mainPage.scss';

const MainPage = props => {

    const context = useAppContext();

    return (
        <div className="MainPage">

            <div className="MainPageContent">

                <div className="SelfImage">
                    <img src="images/Alex_Marasco.jpg"/>
                </div>

                <div className="WelcomeText">
                    
                    <p className='WelcomeTop'>Welcome to the Personal Site of</p>

                    <p className='WelcomeBottom'>Alexander Marasco</p>
                    
                </div>
                
            </div>

        </div>
    )
}

export default MainPage;