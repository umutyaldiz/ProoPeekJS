ProoPeekJS | a quick glance at the content you want

# Get Started
[NPM ProoPeekJS](https://www.npmjs.com/package/proopeekjs)


```javascript
npm install proopeekjs
```

## Installation
```javascript
import ProoPeekJS from 'proopeekjs';

const peeks = new ProoPeekJS(".proo-peek-item", {//for default theme: "proo-peek-item"
  api: "data.json", //default:null, for dynamic data
  data: [ //for static data
            {
                "id": 1,
                "title": "1 Lorem ipsum dolar sit amet",
                "content": "html content",
                "image": "https://umutyaldiz.com/fearchi/temp/news16x9.jpg",
                "url": "https://umutyaldiz.com/"
            },
            {
                "id": 2,
                "title": "2 Lorem ipsum dolar sit amet, Lorem ipsum dolar sit amet",
                "content": "html content",
                "image": "https://umutyaldiz.com/fearchi/temp/news16x9.jpg",
                "url": "https://umutyaldiz.com/"
            }
        ],
  enterThreshold: 300, //default 600 millisecond
  countdown: 1,//default 3 second
  size: 1.5, // default 1.5
  layerTemplate: ` //default. You can delete it.
  <div class="layer">
    <span class="countdown">
      ${svgLoader()} //default loader .svg. you need to change
    </span>
  </div>
  `,
  popupTemplate: ` //default. You can delete it.
  <div class="proo-peek-popup" style="width:{WIDTH}px; min-height:{MINHEIGHT}px; top:{TOP}px; left:{LEFT}px;">
      <div class="head">
          <img src="{IMG}" alt="{TITLE}" />
          <h2 class="title">{TITLE}</h2>
      </div>
      <div class="body">
          <div class="cms">{CONTENT}</div>
      </div>
      <div class="button">
          <a href="{URL}">Detail</a>
      </div>
  </div>
  `,
  mobile: {  //development is underway. not working :)
    init: true,//boolean. default:true
    position: "bottom-left",// top-right, top-left, bottom-left, bottom-right, center-left, center-right. default:bottom-left
  }
});
```

## Style Installation
You can also add your own style file.

```html
@import "../node_modules/proopeekjs/dist/proopeek.min.css";
```

## HTML Installation
```html
<div class="... proo-peek-item" peek-id="1"></div>
<div class="... proo-peek-item" peek-id="2"></div>
...


<div class="proo-peek-popup-wrapper"></div>
```
