import Icon from "./IconBase";

const GithubIcon = (props) => (
  <Icon width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
    <g filter="url(#filter0_d_1135_439)">
      <path
        d="M5.99992 12.6668C2.66659 13.6668 2.66659 11.0001 1.33325 10.6668M10.6666 14.6668V12.0868C10.6916 11.7689 10.6486 11.4493 10.5406 11.1493C10.4325 10.8493 10.2619 10.5757 10.0399 10.3468C12.1333 10.1135 14.3333 9.32012 14.3333 5.68012C14.3331 4.74934 13.975 3.85425 13.3333 3.18012C13.6372 2.36579 13.6157 1.46569 13.2733 0.666788C13.2733 0.666788 12.4866 0.433454 10.6666 1.65345C9.13859 1.23934 7.52791 1.23934 5.99992 1.65345C4.17992 0.433454 3.39325 0.666788 3.39325 0.666788C3.05084 1.46569 3.02935 2.36579 3.33325 3.18012C2.68667 3.85925 2.32827 4.76243 2.33325 5.70012C2.33325 9.31346 4.53325 10.1068 6.62659 10.3668C6.40725 10.5934 6.23809 10.8637 6.13012 11.1601C6.02215 11.4564 5.97779 11.7722 5.99992 12.0868V14.6668"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        shapeRendering="crispEdges"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_1135_439"
        x="-3.41699"
        y="-0.101074"
        width="22.5002"
        height="23.5178"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
          result="effect1_dropShadow_1135_439"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1135_439"
          result="shape"
        />
      </filter>
    </defs>
  </Icon>
);

export default GithubIcon;
