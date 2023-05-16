import Icon from "./IconBase";

const GithubIcon = (props) => (
  <Icon width="32" height="34" viewBox="0 0 32 34" fill="none" {...props}>
    <rect width="32" height="32" rx="4" fill="white" fill-opacity="0.1" />
    <g filter="url(#filter0_d_1425_1285)">
      <path
        d="M13.5001 21.8334C9.33341 23.0834 9.33341 19.75 7.66675 19.3334M19.3334 24.3334V21.1084C19.3647 20.711 19.311 20.3115 19.1759 19.9365C19.0409 19.5615 18.8275 19.2196 18.5501 18.9334C21.1667 18.6417 23.9167 17.65 23.9167 13.1C23.9165 11.9366 23.469 10.8177 22.6667 9.97503C23.0466 8.95712 23.0198 7.83199 22.5917 6.83336C22.5917 6.83336 21.6084 6.5417 19.3334 8.0667C17.4234 7.54905 15.4101 7.54905 13.5001 8.0667C11.2251 6.5417 10.2417 6.83336 10.2417 6.83336C9.81373 7.83199 9.78687 8.95712 10.1667 9.97503C9.35852 10.8239 8.91052 11.9529 8.91675 13.125C8.91675 17.6417 11.6667 18.6334 14.2834 18.9584C14.0092 19.2417 13.7978 19.5795 13.6628 19.95C13.5279 20.3204 13.4724 20.7151 13.5001 21.1084V24.3334"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        shape-rendering="crispEdges"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_1425_1285"
        x="2.6665"
        y="5.81104"
        width="26.2502"
        height="27.5225"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1425_1285"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1425_1285"
          result="shape"
        />
      </filter>
    </defs>
  </Icon>
);

export default GithubIcon;
