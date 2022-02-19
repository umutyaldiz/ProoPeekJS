
export default class BindEvents {
    constructor(container, options) {

        this.container = container;
        this.options = options;
        this.timeout, this.xInterval;

        this.init();
    }
    init() {
        let self = this;
        for (let i = 0, length = this.options.collectedItem.length; i < length; i++) {
            const element = this.options.collectedItem[i].el;
            const ID = parseInt(this.options.collectedItem[i].ID);

            element.addEventListener("mouseenter", (event) => {
                let counter = self.options.countdown;
                if (self.timeout != null) { clearTimeout(self.timeout); }
                self.timeout = setTimeout(function () {

                    //enter screen
                    element.insertAdjacentHTML('beforeend', self.options.layerTemplate);

                    self.xInterval = setInterval(async () => {
                        counter--;
                        if (counter === 0) {

                            const getBound = {
                                'width': element.offsetWidth,
                                'height': element.offsetHeight,
                                'x': element.offsetLeft,
                                'y': element.offsetTop
                            };
                            const data = self.options.collectApiData.filter(item => { return (item.id === ID) })[0];

                            const popupWidthCalc = getBound.width * self.options.size;
                            const popupNegativeLeftCalc = getBound.x - ((popupWidthCalc - getBound.width) / 2);

                            const popupReform = self.options.popupTemplate.replace(/{WIDTH}/g, popupWidthCalc)
                                .replace(/{MINHEIGHT}/g, (getBound.height + 20))
                                .replace(/{TOP}/g, (getBound.y - 10))
                                .replace(/{LEFT}/g, popupNegativeLeftCalc)
                                .replace(/{IMG}/g, data.image)
                                .replace(/{TITLE}/g, data.title)
                                .replace(/{CONTENT}/g, data.content)
                                .replace(/{URL}/g, data.url);

                            const popupWrapperEl = document.querySelector('.proo-peek-popup-wrapper');

                            if (popupWrapperEl) {
                                popupWrapperEl.insertAdjacentHTML('beforeend', popupReform);
                                setTimeout(() => {
                                    popupWrapperEl.querySelector('.proo-peek-popup').classList.add('active');
                                }, 150);

                                popupWrapperEl.querySelector('.proo-peek-popup').addEventListener("mouseleave", (event) => {
                                    setTimeout(() => {
                                        popupWrapperEl.querySelector('.proo-peek-popup').classList.remove('active');
                                        setTimeout(() => {
                                            popupWrapperEl.innerHTML = "";
                                        }, 150);
                                    }, 150);
                                });
                            }
                            clearInterval(self.xInterval);
                            return false;

                        }
                    }, 1000);
                    //enter screen

                }, self.options.enterThreshold);
            });

            element.addEventListener("mouseleave", (event) => {
                if (self.timeout != null) {
                    clearTimeout(self.timeout);
                    clearInterval(self.xInterval);

                    //leave screen
                    if (element.querySelector('.layer')) {
                        element.querySelector('.layer').remove();
                    }
                    //leave screen

                    self.timeout = null;
                }
            });

        }
    }
}