import MainContainer from './mainContainer';
import CommonMessageWidget from './commonWidget';
import TextMessageWidget from './textMessageWidget';
import MessageCard from './messageCard';
import CoordsPopup from './coordsPopup';
import VideoMessageWidget from './videoMessageWidget';

export default function mian () {

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      ( data ) => {
        const { latitude, longitude } = data.coords;
        localStorage.setItem('coordinates', JSON.stringify(
          {
            latitude: latitude,
            longitude: longitude
          }
        ));
      },
      () => {},
      { enableHighAccuracy: true }
    )
  }

  const mainContainer = new MainContainer(document.body);
  mainContainer.render();

  const coordsPopup = new CoordsPopup(document.body);
  coordsPopup.render();

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
