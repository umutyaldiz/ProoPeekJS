const PopupTemplate = `
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
`;

export default PopupTemplate;