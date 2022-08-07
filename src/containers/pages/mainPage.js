// opening page that shows up at start

import './mainPage.scss';

const MainPage = props => {

    return (
        <div className="MainPage">

            <div className="MainContent">

                <div className="SelfImage">
                    <img src="images/Alex_Marasco-Crop.png"/>
                </div>

                <div className="WelcomText">
                    <h1>Alexander Marasco</h1>
                </div>
                
            </div>

        </div>
    )
}

export default MainPage;