"use client";
import React from "react";
import { useSpring, animated } from "@react-spring/web";

const AnimatedSVG = () => {
  // Create a spring for the cx attribute

  return (
    <svg
      width='387'
      height='377'
      viewBox='0 0 387 377'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M121.992 88.7466C121.05 90.6997 117.073 90.9915 116.294 88.9677C111.99 77.7766 103.812 59.2272 94.3456 51.3777C92.7805 50.0799 93.1727 47.1512 95.2056 47.185C100.351 47.2708 107.89 48.5396 116.64 53.5624C117.959 54.3196 119.718 53.4996 119.96 51.9979C121.528 42.2478 128.373 13.7806 155.708 2.69067C157.685 1.88843 159.43 4.78889 158.118 6.47163C152.832 13.2499 146.032 25.2846 146.147 42.2528C146.158 43.8483 148.022 44.7595 149.379 43.9199C157.154 39.109 179.228 27.6411 211.738 28.5907C214.031 28.6577 214.287 32.1399 212.089 32.7994C203.662 35.3282 192.776 39.5008 184.824 45.7701C183.43 46.8686 184.247 49.0542 186.014 49.2114C198.573 50.3279 233.364 56.0123 258.28 84.9474C259.62 86.5026 257.894 88.8261 255.958 88.146C242.96 83.5814 214.737 75.8964 195.382 86.7646C194.278 87.3849 192.236 87.5796 191.068 87.0883C180.323 82.5679 133.692 64.4784 121.992 88.7466Z'
        fill='#FF009F'
      />
      <path
        d='M120.49 93.1133C120.49 93.1133 118.59 70.3133 147.49 73.1133C147.49 73.1133 233.49 78.7133 318.19 211.413C318.19 211.413 352.19 262.013 346.39 296.913C335.09 365.013 243.59 339.213 243.59 339.213C221.59 369.313 192.89 376.613 162.79 372.213C107.89 364.113 104.89 317.613 104.89 317.613C72.7897 337.913 34.2897 324.813 34.2897 324.813C-12.2103 306.213 12.6897 284.013 12.6897 284.013C34.6897 267.713 71.0897 226.913 71.0897 226.913C71.0897 226.913 121.19 155.913 120.49 93.1133Z'
        fill='#FF71AD'
      />
      <path
        d='M303.99 301.617C303.99 301.617 333.89 304.717 345.79 299.617C345.79 299.617 340.39 361.417 243.49 339.217C243.49 339.217 192.89 406.717 120.29 351.417C120.29 351.417 179.59 389.817 237.19 319.317C237.19 319.417 294.29 330.317 303.99 301.617Z'
        fill='#CA00EB'
      />
      <path
        d='M353.986 269.955C353.986 269.955 376.377 267.105 376.072 281.049C376.072 281.049 379.023 307.206 320.806 295.909'
        fill='#FF71AD'
      />
      <path
        d='M346.352 301.811C338.821 301.811 330.068 300.895 320.195 298.961C318.567 298.656 317.447 297.027 317.753 295.399C318.058 293.77 319.686 292.651 321.315 292.956C351.34 298.757 363.858 294.381 369.151 289.699C373.324 285.933 373.018 281.557 373.018 281.353C373.018 281.251 373.018 281.15 373.018 280.946C373.018 278.809 372.408 277.18 370.983 275.959C366.912 272.295 357.548 272.498 354.291 273.007C352.561 273.211 351.136 271.99 350.831 270.361C350.627 268.733 351.848 267.206 353.477 266.901C354.902 266.697 368.031 265.272 374.952 271.379C377.599 273.822 379.023 277.079 379.023 280.946C379.125 282.269 379.125 288.58 373.324 293.974C367.828 299.165 358.769 301.811 346.352 301.811Z'
        fill='black'
      />
      <path
        d='M354.393 233.008C354.393 233.008 389.609 211.94 383.197 236.571C381.67 242.27 378.922 247.563 375.258 252.143C369.558 259.369 356.734 277.995 316.226 277.995'
        fill='#FF71AD'
      />
      <path
        d='M316.226 281.05C314.496 281.05 313.173 279.727 313.173 277.997C313.173 276.267 314.496 274.944 316.226 274.944C353.477 274.944 365.996 258.964 372.103 251.229L372.917 250.211C376.479 245.835 378.922 240.95 380.245 235.759C381.263 231.891 381.161 229.143 379.94 228.329C376.581 225.784 363.859 230.975 355.92 235.657C354.495 236.573 352.561 236.064 351.747 234.639C350.831 233.214 351.34 231.281 352.765 230.466C352.968 230.365 358.159 227.209 364.266 224.767C373.426 221.103 379.736 220.594 383.502 223.545C386.962 226.09 387.777 230.772 386.046 237.489C384.52 243.494 381.67 249.092 377.599 254.181L376.785 255.199C373.731 259.168 368.54 265.784 359.075 271.28C347.879 277.794 333.427 281.05 316.226 281.05Z'
        fill='black'
      />
      <path
        d='M269 246.75C269 246.75 310.119 241.56 346.556 190.263C346.556 190.263 366.606 161.968 366.708 187.719C366.708 187.719 373.018 255.198 299.127 264.46'
        fill='#FF71AD'
      />
      <path
        d='M299.127 267.515C297.6 267.515 296.277 266.395 296.074 264.868C295.87 263.24 297.091 261.713 298.72 261.51C328.134 257.846 347.981 244.411 357.65 221.714C364.978 204.615 363.553 188.229 363.553 188.127C363.553 188.025 363.553 187.924 363.553 187.822C363.553 181.003 362.026 180.087 362.026 180.087C360.398 179.578 354.189 184.768 348.999 192.097C312.155 243.902 271.138 249.602 269.306 249.805C267.677 250.009 266.151 248.787 265.947 247.159C265.744 245.53 266.965 244.004 268.593 243.8C269.102 243.698 308.898 237.999 344.012 188.636C346.861 184.667 356.53 171.944 363.858 174.285C369.558 176.117 369.66 184.667 369.66 187.72C369.863 189.552 370.881 206.142 363.35 223.953C356.021 241.154 339.024 262.629 299.432 267.616C299.331 267.515 299.229 267.515 299.127 267.515Z'
        fill='black'
      />
      <path
        d='M287.178 133.891C286.037 133.891 284.895 133.239 284.242 132.097C284.242 131.934 278.044 120.027 270.378 114.644C269.073 113.829 268.584 112.035 269.237 110.73C269.726 109.588 271.031 108.772 272.172 108.772C272.336 108.772 272.662 108.772 272.825 108.936C272.825 108.936 279.839 110.567 288.157 110.567C295.008 110.567 304.305 109.425 309.687 104.205C310.34 103.553 311.155 103.227 311.971 103.227C312.623 103.227 313.113 103.39 313.765 103.716C315.07 104.532 315.559 106 315.07 107.468C314.744 108.446 307.404 130.303 287.505 133.891C287.668 133.891 287.342 133.891 287.178 133.891Z'
        fill='black'
      />
      <path
        d='M312.297 106.321C312.297 106.321 305.447 127.362 287.179 130.624C287.179 130.624 280.654 117.902 272.336 112.03C272.336 112.03 279.676 113.661 288.483 113.661C296.639 113.661 306.262 112.193 312.297 106.321ZM312.297 99.7969H312.134C310.666 99.7969 309.524 100.286 308.383 101.102C308.219 101.265 307.893 101.428 307.73 101.591C303.163 106.158 294.682 107.137 288.483 107.137C280.491 107.137 273.967 105.669 273.804 105.669C273.314 105.506 272.825 105.506 272.336 105.506C269.726 105.506 267.442 106.974 266.301 109.42C264.996 112.193 265.974 115.618 268.584 117.413C274.293 121.49 279.839 130.461 281.47 133.723C282.612 135.844 284.895 137.312 287.342 137.312C287.668 137.312 288.157 137.312 288.483 137.149C309.198 133.397 317.354 111.867 318.495 108.768C318.822 108.115 318.985 107.3 318.985 106.484C318.821 102.733 315.886 99.7969 312.297 99.7969Z'
        fill='black'
      />
      <path
        d='M233.842 218.055C266.992 218.055 293.866 191.182 293.866 158.032C293.866 124.881 266.992 98.0078 233.842 98.0078C200.692 98.0078 173.818 124.881 173.818 158.032C173.818 191.182 200.692 218.055 233.842 218.055Z'
        fill='white'
      />
      <path
        d='M233.842 222.947C198.121 222.947 168.925 193.751 168.925 158.03C168.925 122.31 198.121 93.1133 233.842 93.1133C269.563 93.1133 298.759 122.31 298.759 158.03C298.759 193.751 269.563 222.947 233.842 222.947ZM233.842 102.9C203.504 102.9 178.711 127.692 178.711 158.03C178.711 188.368 203.504 213.161 233.842 213.161C264.18 213.161 288.973 188.368 288.973 158.03C288.973 127.692 264.18 102.9 233.842 102.9Z'
        fill='black'
      />
      <animated.circle cx='208.613' cy='150.66' r='15.5541' fill='black' />
      <animated.ellipse
        cx='200.447'
        cy='150.662'
        rx='3.49968'
        ry='3.88853'
        fill='white'
      />
      <path
        d='M299.741 143.886C299.741 143.886 299.741 143.886 299.741 143.886C300.805 144.225 301.966 144.035 302.867 143.376C303.769 142.717 304.301 141.667 304.301 140.551C304.301 125.892 296.816 112.074 283.931 102.044C271.067 92.0302 253.769 86.5 235.863 86.5C217.957 86.5 200.659 92.0302 187.795 102.044C174.91 112.074 167.425 125.892 167.425 140.551C167.425 141.667 167.957 142.717 168.859 143.376C169.76 144.035 170.922 144.225 171.986 143.886L171.986 143.886L171.99 143.885L172.009 143.879L172.088 143.854C172.16 143.831 172.268 143.797 172.41 143.753C172.696 143.664 173.121 143.533 173.673 143.365C174.777 143.03 176.388 142.549 178.404 141.971C182.438 140.815 188.083 139.274 194.525 137.733C207.486 134.633 223.386 131.608 235.863 131.608C248.34 131.608 264.24 134.633 277.201 137.733C283.643 139.274 289.288 140.815 293.322 141.971C295.338 142.549 296.949 143.03 298.053 143.365C298.605 143.533 299.03 143.664 299.316 143.753C299.458 143.797 299.566 143.831 299.638 143.854L299.717 143.879L299.736 143.885L299.74 143.886L299.741 143.886Z'
        fill='#FFC7F6'
        stroke='black'
        strokeWidth='7'
        strokeLinejoin='round'
      />
      <path
        d='M172.48 167.38C170.547 167.38 168.98 168.947 168.98 170.88C168.98 184.953 176.334 198.182 188.925 207.761C201.497 217.324 218.388 222.598 235.863 222.598C253.338 222.598 270.229 217.324 282.801 207.761C295.392 198.182 302.746 184.953 302.746 170.88C302.746 169.952 302.377 169.061 301.721 168.405C301.064 167.749 300.174 167.38 299.246 167.38L235.863 167.38H172.48Z'
        fill='#FFC7F6'
        stroke='black'
        strokeWidth='7'
        strokeLinejoin='round'
      />
      <path
        d='M120.148 136.376C119.306 136.376 118.463 135.894 117.982 135.052C117.982 134.932 113.411 126.149 107.756 122.179C106.794 121.578 106.433 120.254 106.914 119.292C107.275 118.45 108.237 117.848 109.08 117.848C109.2 117.848 109.44 117.848 109.561 117.969C109.561 117.969 114.734 119.172 120.87 119.172C125.923 119.172 132.78 118.329 136.75 114.48C137.231 113.998 137.833 113.758 138.434 113.758C138.916 113.758 139.277 113.878 139.758 114.119C140.72 114.72 141.081 115.803 140.72 116.886C140.48 117.608 135.066 133.729 120.388 136.376C120.509 136.376 120.268 136.376 120.148 136.376Z'
        fill='black'
      />
      <path
        d='M138.675 116.047C138.675 116.047 133.623 131.566 120.148 133.972C120.148 133.972 115.336 124.588 109.2 120.257C109.2 120.257 114.614 121.46 121.111 121.46C127.126 121.46 134.224 120.378 138.675 116.047ZM138.675 111.234H138.555C137.472 111.234 136.63 111.595 135.788 112.197C135.668 112.317 135.427 112.437 135.307 112.558C131.938 115.926 125.682 116.648 121.111 116.648C115.216 116.648 110.403 115.565 110.283 115.565C109.922 115.445 109.561 115.445 109.2 115.445C107.275 115.445 105.591 116.528 104.749 118.333C103.786 120.378 104.508 122.904 106.433 124.228C110.644 127.235 114.734 133.852 115.937 136.258C116.78 137.822 118.464 138.905 120.268 138.905C120.509 138.905 120.87 138.905 121.111 138.785C136.39 136.018 142.405 120.137 143.247 117.851C143.488 117.37 143.608 116.769 143.608 116.167C143.488 113.4 141.322 111.234 138.675 111.234Z'
        fill='black'
      />
      <path
        d='M80.8071 198.452C105.258 198.452 125.08 178.631 125.08 154.179C125.08 129.728 105.258 109.906 80.8071 109.906C56.3558 109.906 36.5341 129.728 36.5341 154.179C36.5341 178.631 56.3558 198.452 80.8071 198.452Z'
        fill='white'
      />
      <path
        d='M80.8072 202.061C54.4599 202.061 32.9249 180.526 32.9249 154.179C32.9249 127.832 54.4599 106.297 80.8072 106.297C107.154 106.297 128.689 127.832 128.689 154.179C128.689 180.526 107.154 202.061 80.8072 202.061ZM80.8072 113.515C58.43 113.515 40.1434 131.802 40.1434 154.179C40.1434 176.556 58.43 194.843 80.8072 194.843C103.184 194.843 121.471 176.556 121.471 154.179C121.471 131.802 103.184 113.515 80.8072 113.515Z'
        fill='black'
      />
      <animated.circle cx='62.1981' cy='148.742' r='11.4726' fill='black' />
      <animated.ellipse
        cx='56.1752'
        cy='148.743'
        rx='2.58133'
        ry='2.86815'
        fill='white'
      />
      <path
        d='M129.135 144.621C129.135 144.621 129.135 144.621 129.135 144.621C130.199 144.96 131.361 144.77 132.262 144.111C133.163 143.452 133.696 142.402 133.696 141.286C133.696 130.145 128.006 119.701 118.317 112.159L116.167 114.921L118.317 112.159C108.648 104.633 95.6846 100.5 82.2978 100.5C68.911 100.5 55.9473 104.633 46.2789 112.159C36.59 119.701 30.8998 130.145 30.8998 141.286C30.8998 142.402 31.4325 143.452 32.3338 144.111C33.2351 144.77 34.3967 144.96 35.4608 144.621L35.4608 144.621L35.4635 144.62L35.4767 144.616L35.5339 144.598C35.5856 144.582 35.6643 144.557 35.7686 144.525C35.9774 144.46 36.289 144.363 36.6941 144.24C37.5043 143.994 38.688 143.641 40.1698 143.216C43.1349 142.367 47.2854 141.233 52.0208 140.101C61.5686 137.817 73.2087 135.608 82.2978 135.608C91.387 135.608 103.027 137.817 112.575 140.101C117.31 141.233 121.461 142.367 124.426 143.216C125.908 143.641 127.091 143.994 127.902 144.24C128.307 144.363 128.618 144.46 128.827 144.525C128.931 144.557 129.01 144.582 129.062 144.598L129.119 144.616L129.132 144.62L129.135 144.621L129.135 144.621Z'
        fill='#FFC7F6'
        stroke='black'
        strokeWidth='7'
        strokeLinejoin='round'
      />
      <path
        d='M35.5471 160.154C33.6141 160.154 32.0471 161.721 32.0471 163.654C32.0471 174.371 37.6487 184.382 47.121 191.588C56.5735 198.778 69.2343 202.719 82.2979 202.719C95.3615 202.719 108.022 198.778 117.475 191.588C126.947 184.382 132.549 174.371 132.549 163.654C132.549 162.725 132.18 161.835 131.524 161.179C130.867 160.522 129.977 160.154 129.049 160.154L82.2979 160.154H35.5471Z'
        fill='#FFC7F6'
        stroke='black'
        strokeWidth='7'
        strokeLinejoin='round'
      />
      <path
        d='M129.479 208.528C113.627 208.167 89.7045 198.845 77.482 193.231C76.2087 192.647 74.7348 193.497 74.616 194.893L66.1387 294.489C66.0294 295.772 67.1407 296.823 68.399 296.546C84.7021 292.966 104.768 277.379 122.528 264.431C145.864 247.417 172.676 247.903 169.697 228.458C166.718 209.014 150.829 209.014 129.479 208.528Z'
        fill='#BB34A6'
        stroke='black'
        strokeWidth='5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M54.8804 301.198C72.3662 302.941 85.0484 296.813 93.2478 285.867C101.349 275.051 104.873 259.812 104.873 243.585C104.873 226.879 96.7758 210.161 85.4985 197.668C74.2605 185.219 59.4299 176.5 45.5373 176.5C30.9977 176.5 20.3379 183.729 13.4323 195.025C6.596 206.208 3.42493 221.352 3.42493 237.557C3.42493 254.256 11.3 270.104 21.4827 281.725C26.5873 287.55 32.3314 292.385 38.0765 295.779C43.7449 299.127 49.5761 301.165 54.8804 301.198Z'
        fill='url(#paint0_linear_2305_66)'
        stroke='black'
        strokeWidth='5'
      />
      <path
        d='M88.5942 244.428C88.5942 267.622 79.9995 284.574 54.8756 282.096C34.5339 282.096 17.9808 257.292 17.9808 234.098C17.9808 210.904 26.7798 196.223 47.1215 196.223C67.4633 196.223 88.5942 221.234 88.5942 244.428Z'
        fill='#DA80CC'
        stroke='black'
        strokeWidth='3'
      />
      <path
        d='M79.9829 244.428C79.9829 267.622 72.4362 284.574 50.3763 282.096C32.5152 282.096 17.9808 257.292 17.9808 234.098C17.9808 210.904 25.7067 196.223 43.5678 196.223C61.4288 196.223 79.9829 221.234 79.9829 244.428Z'
        fill='#C042AC'
        stroke='black'
        strokeWidth='3'
      />
      <path
        d='M79.1217 243.587C79.1217 260.287 77.1386 272.755 58.7553 270.97C49.843 270.97 33.4813 249.953 33.4813 233.254C33.4813 216.554 37.5422 204.836 52.4264 204.836C67.3106 204.836 79.1217 226.888 79.1217 243.587Z'
        fill='black'
        stroke='black'
        strokeWidth='3'
      />
      <defs>
        <linearGradient
          id='paint0_linear_2305_66'
          x1='54.1487'
          y1='179'
          x2='54.1487'
          y2='298.992'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FFC7F6' />
          <stop offset='1' stopColor='#D98DCD' />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default AnimatedSVG;
