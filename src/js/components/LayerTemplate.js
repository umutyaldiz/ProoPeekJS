import svgLoader from "./svgLoader";

const LayerTemplate = `
<div class="layer">
  <span class="countdown">
    ${svgLoader()}
  </span>
</div>
`;
export default LayerTemplate;