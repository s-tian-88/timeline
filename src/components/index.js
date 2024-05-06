import MainContainer from './mainContainer';
import CommonMessageWidget from './commonWidget';
import TextMessageWidget from './textMessageWidget';
import MessageCard from './messageCard';
import UserCoordsWidget from './userCoordsWidget';
import VideoMessageWidget from './videoMessageWidget';

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
  const commonWidget = new CommonMessageWidget(commonWidgetContainer);
  commonWidget.render();

  const widgetContainer = document.querySelector('.common-message-widget-main');
  const messageWidget = new TextMessageWidget(widgetContainer);
  messageWidget.render();

  const videoMessageWidget = new VideoMessageWidget(widgetContainer);
  videoMessageWidget.render();

  const cardsContainer = document.querySelector('.cards-container');
  const textMessageCard = new MessageCard(cardsContainer);
  textMessageCard.render();
}
