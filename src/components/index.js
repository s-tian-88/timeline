import MainContainer from './mainContainer';
import CommonWidgetHtml from './commonWidget';

const mainContainer = new MainContainer(document.body);
mainContainer.render();

const widgetContainer = document.querySelector('.widget-container');
const commonWidget = new CommonWidgetHtml(widgetContainer);
commonWidget.render();
