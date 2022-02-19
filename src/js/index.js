import CollectItems from "./components/CollectItems";
import CollectData from "./components/CollectData";
import LayerTemplate from "./components/LayerTemplate";
import PopupTemplate from "./components/PopupTemplate";
import BindEvents from "./components/BindEvents";

export default class ProoPeekJS {
  constructor(container, options) {
    const defaults = {
      collectedItem: [],
      collectApiData: [],
      api: null,
      data: [],
      enterThreshold: 300,//millisecond
      countdown: 3,//second
      size: 1.5,
      layerTemplate: LayerTemplate,
      popupTemplate: PopupTemplate,
      mobile: {
        init: true,//boolean
        position: "bottom-left",// top-right, top-left, bottom-left, bottom-right, center-left, center-right
      }
    };
    this.container = container;
    this.options = Object.assign({}, defaults, options);

    this.init();
  }
  async init() {
    this.options.collectedItem = CollectItems(this.container); //collect items => peek-id
    this.options.collectApiData = this.options.data.length ? this.options.data : await CollectData(this.options.api);

    new BindEvents(this.container, this.options);

  }
}

window.ProoPeekJS = ProoPeekJS;