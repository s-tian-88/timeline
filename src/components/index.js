import MainContainer from './mainContainer';
import CommonWidgetHtml from './commonWidget';
import MessageWidget from './messageWidget';
import TextMessageCard from './textMessageCard';
import UserCoordsWidget from './userCoordsWidget';

export default function mian () {

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(

      // callback
      (data) => {
        const { latitude, longitude } = data.coords;
        localStorage.setItem('userCoordinates', JSON.stringify(
          {
            lat: latitude,
            lon: longitude
          }
        ));
      },

      // error callback
      () => {
        const coordWidget = new UserCoordsWidget(document.body);
        coordWidget.render();
      },

      // options
      { enableHighAccuracy: true }
    );
  } else {
    const coordWidget = new UserCoordsWidget(document.body);
    coordWidget.render();
  }

  const mainContainer = new MainContainer(document.body);
  mainContainer.render();

  const commonWidgetContainer = document.querySelector('.widget-container');
  const commonWidget = new CommonWidgetHtml(commonWidgetContainer);
  commonWidget.render();

  const widgetrContainer = document.querySelector('.widget-main');
  const messageWidget = new MessageWidget(widgetrContainer);
  messageWidget.render();

  const cardsContainer = document.querySelector('.cards-container');
  const textMessageCard = new TextMessageCard(cardsContainer);
  textMessageCard.render();
}
