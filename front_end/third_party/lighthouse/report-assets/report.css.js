// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const styles = new CSSStyleSheet();
styles.replaceSync(
`/**
 * @license
 * Copyright 2017 The Lighthouse Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
  Naming convention:

  If a variable is used for a specific component: --{component}-{property name}-{modifier}

  Both {component} and {property name} should be kebab-case. If the target is the entire page,
  use 'report' for the component. The property name should not be abbreviated. Use the
  property name the variable is intended for - if it's used for multiple, a common descriptor
  is fine (ex: 'size' for a variable applied to 'width' and 'height'). If a variable is shared
  across multiple components, either create more variables or just drop the "{component}-"
  part of the name. Append any modifiers at the end (ex: 'big', 'dark').

  For colors: --color-{hue}-{intensity}

  {intensity} is the Material Design tag - 700, A700, etc.
*/
.lh-vars {
  /* Palette using Material Design Colors
   * https://www.materialui.co/colors */
  --color-amber-50: #FFF8E1;
  --color-blue-200: #90CAF9;
  --color-blue-900: #0D47A1;
  --color-blue-A700: #2962FF;
  --color-cyan-500: #00BCD4;
  --color-gray-100: #F5F5F5;
  --color-gray-300: #CFCFCF;
  --color-gray-200: #E0E0E0;
  --color-gray-400: #BDBDBD;
  --color-gray-50: #FAFAFA;
  --color-gray-500: #9E9E9E;
  --color-gray-600: #757575;
  --color-gray-700: #616161;
  --color-gray-800: #424242;
  --color-gray-900: #212121;
  --color-gray: #000000;
  --color-green-700: #018642;
  --color-green: #0CCE6B;
  --color-lime-400: #D3E156;
  --color-orange-50: #FFF3E0;
  --color-orange-700: #D04900;
  --color-orange: #FFA400;
  --color-red-700: #EB0F00;
  --color-red: #FF4E42;
  --color-teal-600: #00897B;
  --color-white: #FFFFFF;

  /* Context-specific colors */
  --color-average-secondary: var(--color-orange-700);
  --color-average: var(--color-orange);
  --color-fail-secondary: var(--color-red-700);
  --color-fail: var(--color-red);
  --color-hover: var(--color-gray-50);
  --color-informative: var(--color-blue-900);
  --color-pass-secondary: var(--color-green-700);
  --color-pass: var(--color-green);
  --color-not-applicable: var(--color-gray-600);

  /* Component variables */
  --audit-description-padding-left: calc(var(--score-icon-size) + var(--score-icon-margin-left) + var(--score-icon-margin-right));
  --audit-explanation-line-height: 16px;
  --audit-group-margin-bottom: 40px;
  --audit-group-padding-vertical: 8px;
  --audit-margin-horizontal: 5px;
  --audit-padding-vertical: 8px;
  --category-header-font-size: 20px;
  --category-padding: 40px;
  --chevron-line-stroke: var(--color-gray-600);
  --chevron-size: 12px;
  --default-padding: 12px;
  --env-item-background-color: var(--color-gray-100);
  --env-item-font-size: 28px;
  --env-item-line-height: 36px;
  --env-item-padding: 10px 0px;
  --env-name-min-width: 220px;
  --footer-padding-vertical: 16px;
  --gauge-circle-size-big: 112px;
  --gauge-circle-size: 80px;
  --gauge-label-font-size-big: 28px;
  --gauge-label-font-size: 20px;
  --gauge-label-line-height-big: 36px;
  --gauge-label-line-height: 26px;
  --gauge-percentage-font-size-big: 38px;
  --gauge-percentage-font-size: 28px;
  --gauge-wrapper-width: 148px;
  --header-line-height: 24px;
  --highlighter-background-color: var(--report-text-color);
  --icon-square-size: calc(var(--score-icon-size) * 0.88);
  --image-preview-size: 48px;
  --metric-toggle-lines-fill: #7F7F7F;
  --metrics-toggle-background-color: var(--color-gray-200);
  --screenshot-overlay-background: rgba(0, 0, 0, 0.3);
  --plugin-badge-background-color: var(--color-white);
  --plugin-badge-size-big: calc(var(--gauge-circle-size-big) / 2.7);
  --plugin-badge-size: calc(var(--gauge-circle-size) / 2.7);
  --plugin-icon-size: 65%;
  --pwa-icon-margin: 0 6px 0 -2px;
  --pwa-icon-size: var(--topbar-logo-size);
  --report-background-color: #fff;
  --report-border-color-secondary: #ebebeb;
  --report-font-family-monospace: 'Roboto Mono', 'Menlo', 'dejavu sans mono', 'Consolas', 'Lucida Console', monospace;
  --report-font-family: Roboto, Helvetica, Arial, sans-serif;
  --report-font-size: 16px;
  --report-icon-size: var(--score-icon-background-size);
  --report-line-height: 24px;
  --report-min-width: 400px;
  --report-monospace-font-size: calc(var(--report-font-size) * 0.85);
  --report-text-color-secondary: var(--color-gray-800);
  --report-text-color: var(--color-gray-900);
  --report-width: calc(60 * var(--report-font-size));
  --score-container-padding: 8px;
  --score-icon-background-size: 24px;
  --score-icon-margin-left: 4px;
  --score-icon-margin-right: 12px;
  --score-icon-margin: 0 var(--score-icon-margin-right) 0 var(--score-icon-margin-left);
  --score-icon-size: 12px;
  --scores-container-padding: 20px 0 20px 0;
  --scorescale-height: 6px;
  --scorescale-width: 18px;
  --section-padding-vertical: 12px;
  --snippet-background-color: var(--color-gray-50);
  --snippet-color: #0938C2;
  --sparkline-height: 5px;
  --stackpack-padding-horizontal: 10px;
  --sticky-header-background-color: var(--report-background-color);
  --table-higlight-background-color: hsla(0, 0%, 75%, 0.1);
  --tools-icon-color: var(--color-gray-600);
  --topbar-background-color: var(--color-gray-100);
  --topbar-height: 32px;
  --topbar-logo-size: 24px;
  --topbar-padding: 0 8px;
  --toplevel-warning-background-color: var(--color-orange-50);
  --toplevel-warning-message-text-color: #BD4200;
  --toplevel-warning-padding: 18px;
  --toplevel-warning-text-color: var(--report-text-color);

  /* SVGs */
  --plugin-icon-url-dark: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="%23FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"/></svg>');
  --plugin-icon-url: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="%23757575"><path d="M0 0h24v24H0z" fill="none"/><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"/></svg>');

  --pass-icon-url: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><title>check</title><path fill="%23178239" d="M24 4C12.95 4 4 12.95 4 24c0 11.04 8.95 20 20 20 11.04 0 20-8.96 20-20 0-11.05-8.96-20-20-20zm-4 30L10 24l2.83-2.83L20 28.34l15.17-15.17L38 16 20 34z"/></svg>');
  --average-icon-url: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><title>info</title><path fill="%23E67700" d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm2 30h-4V22h4v12zm0-16h-4v-4h4v4z"/></svg>');
  --fail-icon-url: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><title>warn</title><path fill="%23C7221F" d="M2 42h44L24 4 2 42zm24-6h-4v-4h4v4zm0-8h-4v-8h4v8z"/></svg>');

  --pwa-installable-gray-url: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="nonzero"><circle fill="%23DAE0E3" cx="12" cy="12" r="12"/><path d="M12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm3.5 7.7h-2.8v2.8h-1.4v-2.8H8.5v-1.4h2.8V8.5h1.4v2.8h2.8v1.4z" fill="%23FFF"/></g></svg>');
  --pwa-optimized-gray-url: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><rect fill="%23DAE0E3" width="24" height="24" rx="12"/><path fill="%23FFF" d="M12 15.07l3.6 2.18-.95-4.1 3.18-2.76-4.2-.36L12 6.17l-1.64 3.86-4.2.36 3.2 2.76-.96 4.1z"/><path d="M5 5h14v14H5z"/></g></svg>');

  --pwa-installable-gray-url-dark: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="nonzero"><circle fill="%23424242" cx="12" cy="12" r="12"/><path d="M12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm3.5 7.7h-2.8v2.8h-1.4v-2.8H8.5v-1.4h2.8V8.5h1.4v2.8h2.8v1.4z" fill="%23FFF"/></g></svg>');
  --pwa-optimized-gray-url-dark: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><rect fill="%23424242" width="24" height="24" rx="12"/><path fill="%23FFF" d="M12 15.07l3.6 2.18-.95-4.1 3.18-2.76-4.2-.36L12 6.17l-1.64 3.86-4.2.36 3.2 2.76-.96 4.1z"/><path d="M5 5h14v14H5z"/></g></svg>');

  --pwa-installable-color-url: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><circle fill="%230CCE6B" cx="12" cy="12" r="12"/><path d="M12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm3.5 7.7h-2.8v2.8h-1.4v-2.8H8.5v-1.4h2.8V8.5h1.4v2.8h2.8v1.4z" fill="%23FFF"/></g></svg>');
  --pwa-optimized-color-url: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><rect fill="%230CCE6B" width="24" height="24" rx="12"/><path d="M5 5h14v14H5z"/><path fill="%23FFF" d="M12 15.07l3.6 2.18-.95-4.1 3.18-2.76-4.2-.36L12 6.17l-1.64 3.86-4.2.36 3.2 2.76-.96 4.1z"/></g></svg>');
}

@media not print {
  .lh-vars.dark {
    /* Pallete */
    --color-gray-200: var(--color-gray-800);
    --color-gray-300: #616161;
    --color-gray-400: var(--color-gray-600);
    --color-gray-700: var(--color-gray-400);
    --color-gray-50: #757575;
    --color-gray-600: var(--color-gray-500);
    --color-green-700: var(--color-green);
    --color-orange-700: var(--color-orange);
    --color-red-700: var(--color-red);
    --color-teal-600: var(--color-cyan-500);

    /* Context-specific colors */
    --color-hover: rgba(0, 0, 0, 0.2);
    --color-informative: var(--color-blue-200);

    /* Component variables */
    --env-item-background-color: var(--color-gray);
    --plugin-badge-background-color: var(--color-gray-800);
    --report-background-color: var(--color-gray-900);
    --report-border-color-secondary: var(--color-gray-200);
    --report-text-color-secondary: var(--color-gray-400);
    --report-text-color: var(--color-gray-100);
    --snippet-color: var(--color-cyan-500);
    --topbar-background-color: var(--color-gray);
  	--toplevel-warning-background-color: #544B40;
  	--toplevel-warning-message-text-color: var(--color-orange-700);
	--toplevel-warning-text-color: var(--color-gray-100);

    /* SVGs */
    --plugin-icon-url: var(--plugin-icon-url-dark);
    --pwa-installable-gray-url: var(--pwa-installable-gray-url-dark);
    --pwa-optimized-gray-url: var(--pwa-optimized-gray-url-dark);
  }
}

@media only screen and (max-width: 480px) {
  .lh-vars {
    --audit-group-margin-bottom: 20px;
    --category-padding: 24px;
    --env-name-min-width: 120px;
    --gauge-circle-size-big: 96px;
    --gauge-circle-size: 72px;
    --gauge-label-font-size-big: 22px;
    --gauge-label-font-size: 14px;
    --gauge-label-line-height-big: 26px;
    --gauge-label-line-height: 20px;
    --gauge-percentage-font-size-big: 34px;
    --gauge-percentage-font-size: 26px;
    --gauge-wrapper-width: 112px;
    --header-padding: 16px 0 16px 0;
    --image-preview-size: 24px;
    --plugin-icon-size: 75%;
    --pwa-icon-margin: 0 7px 0 -3px;
    --report-font-size: 14px;
    --report-line-height: 20px;
    --score-icon-margin-left: 2px;
    --score-icon-size: 10px;
    --topbar-height: 28px;
    --topbar-logo-size: 20px;
  }

  /* Not enough space to adequately show the relative savings bars. */
  .lh-sparkline {
    display: none;
  }
}

.lh-vars.lh-devtools {
  --audit-explanation-line-height: 14px;
  --audit-group-margin-bottom: 20px;
  --audit-group-padding-vertical: 12px;
  --audit-padding-vertical: 4px;
  --category-header-font-size: 16px;
  --category-padding: 12px;
  --default-padding: 12px;
  --env-name-min-width: 120px;
  --footer-padding-vertical: 8px;
  --gauge-circle-size-big: 72px;
  --gauge-circle-size: 64px;
  --gauge-label-font-size-big: 22px;
  --gauge-label-font-size: 14px;
  --gauge-label-line-height-big: 26px;
  --gauge-label-line-height: 20px;
  --gauge-percentage-font-size-big: 34px;
  --gauge-percentage-font-size: 26px;
  --gauge-wrapper-width: 97px;
  --header-line-height: 20px;
  --header-padding: 16px 0 16px 0;
  --screenshot-overlay-background: transparent;
  --plugin-icon-size: 75%;
  --pwa-icon-margin: 0 7px 0 -3px;
  --report-font-family-monospace: 'Menlo', 'dejavu sans mono', 'Consolas', 'Lucida Console', monospace;
  --report-font-family: '.SFNSDisplay-Regular', 'Helvetica Neue', 'Lucida Grande', sans-serif;
  --report-font-size: 12px;
  --report-line-height: 20px;
  --score-icon-margin-left: 2px;
  --score-icon-size: 10px;
  --section-padding-vertical: 8px;
}

.lh-devtools.lh-root {
  height: 100%;
}
.lh-devtools.lh-root img {
  /* Override devtools default 'min-width: 0' so svg without size in a flexbox isn't collapsed. */
  min-width: auto;
}
.lh-devtools .lh-container {
  overflow-y: scroll;
  height: calc(100% - var(--topbar-height));
}
@media print {
  .lh-devtools .lh-container {
    overflow: unset;
  }
}
.lh-devtools .lh-sticky-header {
  /* This is normally the height of the topbar, but we want it to stick to the top of our scroll container .lh-container\\' */
  top: 0;
}

@keyframes fadeIn {
  0% { opacity: 0;}
  100% { opacity: 0.6;}
}

.lh-root *, .lh-root *::before, .lh-root *::after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

.lh-root {
  font-family: var(--report-font-family);
  font-size: var(--report-font-size);
  margin: 0;
  line-height: var(--report-line-height);
  background: var(--report-background-color);
  scroll-behavior: smooth;
  color: var(--report-text-color);
}

.lh-root :focus {
    outline: -webkit-focus-ring-color auto 3px;
}
.lh-root summary:focus {
    outline: none;
    box-shadow: 0 0 0 1px hsl(217, 89%, 61%);
}

.lh-root [hidden] {
  display: none !important;
}

.lh-root pre {
  margin: 0;
}

.lh-root details > summary {
  cursor: pointer;
}

.lh-container {
  /*
  Text wrapping in the report is so much FUN!
  We have a \\'word-break: break-word;\\' globally here to prevent a few common scenarios, namely
  long non-breakable text (usually URLs) found in:
    1. The footer
    2. .lh-node (outerHTML)
    3. .lh-code

  With that sorted, the next challenge is appropriate column sizing and text wrapping inside our
  .lh-details tables. Even more fun.
    * We don't want table headers ("Potential Savings (ms)") to wrap or their column values, but
    we'd be happy for the URL column to wrap if the URLs are particularly long.
    * We want the narrow columns to remain narrow, providing the most column width for URL
    * We don't want the table to extend past 100% width.
    * Long URLs in the URL column can wrap. Util.getURLDisplayName maxes them out at 64 characters,
      but they do not get any overflow:ellipsis treatment.
  */
  word-break: break-word;
}

.lh-audit-group a,
.lh-category-header__description a,
.lh-audit__description a,
.lh-warnings a,
.lh-footer a,
.lh-table-column--link a {
  color: var(--color-informative);
}

.lh-audit__description, .lh-audit__stackpack {
  --inner-audit-padding-right: var(--stackpack-padding-horizontal);
  padding-left: var(--audit-description-padding-left);
  padding-right: var(--inner-audit-padding-right);
  padding-top: 8px;
  padding-bottom: 8px;
}

.lh-details {
  font-size: var(--report-font-size);
  margin-top: var(--default-padding);
  margin-bottom: var(--default-padding);
  margin-left: var(--audit-description-padding-left);
  /* whatever the .lh-details side margins are */
  width: 100%;
}

.lh-details.flex .lh-code {
  max-width: 70%;
}

.lh-audit__stackpack {
  display: flex;
  align-items: center;
}

.lh-audit__stackpack__img {
  max-width: 50px;
  margin-right: var(--default-padding)
}

/* Report header */

.report-icon {
  display: flex;
  align-items: center;
  padding: 10px 12px;
  cursor: pointer;
}
.report-icon[disabled] {
  opacity: 0.3;
  pointer-events: none;
}

.report-icon::before {
  content: "";
  margin-right: 5px;
  background-repeat: no-repeat;
  width: var(--report-icon-size);
  height: var(--report-icon-size);
  opacity: 0.7;
}
.report-icon:hover::before {
  opacity: 1;
}
.dark .report-icon::before {
  filter: invert(1);
}
.report-icon--print::before {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/><path fill="none" d="M0 0h24v24H0z"/></svg>');
}
.report-icon--copy::before {
  background-image: url('data:image/svg+xml;utf8,<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>');
}
.report-icon--open::before {
  background-image: url('data:image/svg+xml;utf8,<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"/></svg>');
}
.report-icon--download::before {
  background-image: url('data:image/svg+xml;utf8,<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
}
.report-icon--dark::before {
  background-image:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 100 125"><path d="M50 23.587c-16.27 0-22.799 12.574-22.799 21.417 0 12.917 10.117 22.451 12.436 32.471h20.726c2.32-10.02 12.436-19.554 12.436-32.471 0-8.843-6.528-21.417-22.799-21.417zM39.637 87.161c0 3.001 1.18 4.181 4.181 4.181h.426l.41 1.231C45.278 94.449 46.042 95 48.019 95h3.963c1.978 0 2.74-.551 3.365-2.427l.409-1.231h.427c3.002 0 4.18-1.18 4.18-4.181V80.91H39.637v6.251zM50 18.265c1.26 0 2.072-.814 2.072-2.073v-9.12C52.072 5.813 51.26 5 50 5c-1.259 0-2.072.813-2.072 2.073v9.12c0 1.259.813 2.072 2.072 2.072zM68.313 23.727c.994.774 2.135.634 2.91-.357l5.614-7.187c.776-.992.636-2.135-.356-2.909-.992-.776-2.135-.636-2.91.357l-5.613 7.186c-.778.993-.636 2.135.355 2.91zM91.157 36.373c-.306-1.222-1.291-1.815-2.513-1.51l-8.85 2.207c-1.222.305-1.814 1.29-1.51 2.512.305 1.223 1.291 1.814 2.513 1.51l8.849-2.206c1.223-.305 1.816-1.291 1.511-2.513zM86.757 60.48l-8.331-3.709c-1.15-.512-2.225-.099-2.736 1.052-.512 1.151-.1 2.224 1.051 2.737l8.33 3.707c1.15.514 2.225.101 2.736-1.05.513-1.149.1-2.223-1.05-2.737zM28.779 23.37c.775.992 1.917 1.131 2.909.357.992-.776 1.132-1.917.357-2.91l-5.615-7.186c-.775-.992-1.917-1.132-2.909-.357s-1.131 1.917-.356 2.909l5.614 7.187zM21.715 39.583c.305-1.223-.288-2.208-1.51-2.513l-8.849-2.207c-1.222-.303-2.208.289-2.513 1.511-.303 1.222.288 2.207 1.511 2.512l8.848 2.206c1.222.304 2.208-.287 2.513-1.509zM21.575 56.771l-8.331 3.711c-1.151.511-1.563 1.586-1.05 2.735.511 1.151 1.586 1.563 2.736 1.052l8.331-3.711c1.151-.511 1.563-1.586 1.05-2.735-.512-1.15-1.585-1.562-2.736-1.052z"/></svg>');
}
.report-icon--treemap::before {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="black"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 5v14h19V5H3zm2 2h15v4H5V7zm0 10v-4h4v4H5zm6 0v-4h9v4h-9z"/></svg>');
}

.lh-buttons {
  display: flex;
  flex-wrap: wrap;
}
.lh-button {
  margin: 10px;
  height: 30px;
  border: 1px solid var(--color-gray-600);
  border-radius: 4px;
  font-weight: bold;
  color: rgb(26, 115, 232);
  background-color: var(--report-background-color);
}
.dark .lh-button {
  color: var(--color-blue-200);
}

/* Node */
.lh-node__snippet {
  font-family: var(--report-font-family-monospace);
  color: var(--snippet-color);
  font-size: var(--report-monospace-font-size);
  line-height: 20px;
}

/* Score */

.lh-audit__score-icon {
  width: var(--score-icon-size);
  height: var(--score-icon-size);
  margin: var(--score-icon-margin);
}

.lh-audit--pass .lh-audit__display-text {
  color: var(--color-pass-secondary);
}
.lh-audit--pass .lh-audit__score-icon,
.lh-scorescale-range--pass::before {
  border-radius: 100%;
  background: var(--color-pass);
}

.lh-audit--average .lh-audit__display-text {
  color: var(--color-average-secondary);
}
.lh-audit--average .lh-audit__score-icon,
.lh-scorescale-range--average::before {
  background: var(--color-average);
  width: var(--icon-square-size);
  height: var(--icon-square-size);
}

.lh-audit--fail .lh-audit__display-text {
  color: var(--color-fail-secondary);
}
.lh-audit--fail .lh-audit__score-icon,
.lh-audit--error .lh-audit__score-icon,
.lh-scorescale-range--fail::before {
  border-left: calc(var(--score-icon-size) / 2) solid transparent;
  border-right: calc(var(--score-icon-size) / 2) solid transparent;
  border-bottom: var(--score-icon-size) solid var(--color-fail);
}

.lh-audit--manual .lh-audit__display-text,
.lh-audit--notapplicable .lh-audit__display-text {
  color: var(--color-gray-600);
}
.lh-audit--manual .lh-audit__score-icon,
.lh-audit--notapplicable .lh-audit__score-icon {
  border-radius: 100%;
  background: var(--color-gray-400);
}

.lh-audit--informative .lh-audit__display-text {
  color: var(--color-gray-600);
}

.lh-audit--informative .lh-audit__score-icon {
  border: none;
  border-radius: 100%;
  background: var(--color-gray-400);
}

.lh-audit__description,
.lh-audit__stackpack {
  color: var(--report-text-color-secondary);
}
.lh-audit__adorn {
  border: 1px solid slategray;
  border-radius: 3px;
  margin: 0 3px;
  padding: 0 2px;
  line-height: 1.1;
  display: inline-block;
  font-size: 90%;
}

.lh-category-header__description  {
  font-size: var(--report-font-size);
  text-align: center;
  margin: 0px auto;
  max-width: 400px;
}


.lh-audit__display-text,
.lh-load-opportunity__sparkline,
.lh-chevron-container {
  margin: 0 var(--audit-margin-horizontal);
}
.lh-chevron-container {
  margin-right: 0;
}

.lh-audit__title-and-text {
  flex: 1;
}

.lh-audit__title-and-text code {
  color: var(--snippet-color);
  font-size: var(--report-monospace-font-size);
}

/* Prepend display text with em dash separator. But not in Opportunities. */
.lh-audit__display-text:not(:empty):before {
  content: '—';
  margin-right: var(--audit-margin-horizontal);
}
.lh-audit-group.lh-audit-group--load-opportunities .lh-audit__display-text:not(:empty):before {
  display: none;
}

/* Expandable Details (Audit Groups, Audits) */
.lh-audit__header {
  display: flex;
  align-items: center;
  font-weight: 500;
  padding: var(--audit-padding-vertical) 0;
}

.lh-audit--load-opportunity .lh-audit__header {
  display: block;
}


.lh-metricfilter {
  text-align: right;
  margin-top: var(--default-padding);
}

.lh-metricfilter__radio {
  position: absolute;
  left: -9999px;
}
.lh-metricfilter input[type='radio']:focus-visible + label {
  outline: -webkit-focus-ring-color auto 1px;
}

.lh-metricfilter__label {
  border: solid 1px var(--color-gray-400);
  align-items: center;
  justify-content: center;
  padding: 2px 5px;
  width: 50%;
  height: 28px;
  cursor: pointer;
  font-size: 90%;
}

.lh-metricfilter__label:first-of-type {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  margin-left: 5px;
}
.lh-metricfilter__label:last-of-type {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.lh-metricfilter__label--active {
  background: var(--color-blue-A700);
  color: var(--color-white);
}
/* Give the 'All' choice a more muted display */
.lh-metricfilter__label--active[for="metric-All"] {
  background-color: var(--color-blue-200) !important;
  color: black !important;
}

/* If audits are filtered, hide the itemcount for Passed Audits… */
.lh-category--filtered .lh-audit-group .lh-audit-group__itemcount {
  display: none;
}


.lh-audit__header:hover {
  background-color: var(--color-hover);
}

/* We want to hide the browser's default arrow marker on summary elements. Admittedly, it's complicated. */
.lh-audit-group > summary,
.lh-expandable-details > summary {
  /* Blink 89+ and Firefox will hide the arrow when display is changed from (new) default of \\'list-item\\' to block.  https://chromestatus.com/feature/6730096436051968*/
  display: block;
}
/* Safari and Blink <=88 require using the -webkit-details-marker selector */
.lh-audit-group > summary::-webkit-details-marker,
.lh-expandable-details > summary::-webkit-details-marker {
  display: none;
}

/* Perf Metric */

.lh-metrics-container {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-auto-flow: column;
  grid-column-gap: 24px;
}

.lh-metric {
  border-top: 1px solid var(--report-border-color-secondary);
}

@media screen and (min-width: 640px) {
  .lh-metric:nth-child(3n+3) {
    border-bottom: 1px solid var(--report-border-color-secondary);
  }
}

@media screen and (max-width: 640px) {
  .lh-metrics-container {
    display: block;
  }

  .lh-metric:nth-last-child(-n+1) {
    border-bottom: 1px solid var(--report-border-color-secondary);
  }
}

.lh-metric__innerwrap {
  display: grid;
  grid-template-columns: var(--audit-description-padding-left) 10fr 3fr;
  align-items: center;
  padding: 10px 0;
}

.lh-metric__details {
  order: -1;
}

.lh-metric__title {
  flex: 1;
  font-weight: 500;
}

.lh-metrics__disclaimer {
  color: var(--color-gray-600);
  margin: var(--section-padding-vertical) 0;
}

.lh-calclink {
  padding-left: calc(1ex / 3);
}

.lh-metric__description {
  display: none;
  grid-column-start: 2;
  grid-column-end: 3;
  color: var(--report-text-color-secondary);
}

.lh-metric__value {
  white-space: nowrap; /* No wrapping between metric value and the icon */
  font-weight: 500;
  justify-self: end;
}

/* No-JS toggle switch */
/* Keep this selector sync'd w/ \\'magicSelector\\' in report-ui-features-test.js */
 .lh-metrics-toggle__input:checked ~ .lh-metrics-container .lh-metric__description {
  display: block;
}

.lh-metrics-toggle__input {
  cursor: pointer;
  opacity: 0;
  position: absolute;
  right: 0;
  width: 74px;
  height: 28px;
  top: -3px;
}
.lh-metrics-toggle__label {
  display: flex;
  background-color: #eee;
  border-radius: 20px;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: -3px;
  pointer-events: none;
}
.lh-metrics-toggle__input:focus + label {
  outline: -webkit-focus-ring-color auto 3px;
}
.lh-metrics-toggle__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 5px;
  width: 50%;
  height: 28px;
}
.lh-metrics-toggle__input:not(:checked) + label .lh-metrics-toggle__icon--less,
.lh-metrics-toggle__input:checked + label .lh-metrics-toggle__icon--more {
  background-color: var(--color-blue-A700);
  --metric-toggle-lines-fill: var(--color-white);
}
.lh-metrics-toggle__lines {
  fill: var(--metric-toggle-lines-fill);
}

.lh-metrics-toggle__label  {
  background-color: var(--metrics-toggle-background-color);
}

.lh-metrics-toggle__label .lh-metrics-toggle__icon--less {
  padding-left: 8px;
}
.lh-metrics-toggle__label .lh-metrics-toggle__icon--more {
  padding-right: 8px;
}

/* Pushes the metric description toggle button to the right. */
.lh-audit-group--metrics .lh-audit-group__header {
  display: flex;
}
.lh-audit-group--metrics .lh-audit-group__header span.lh-audit-group__title {
  flex: 1;
}

.lh-metric .lh-metric__innerwrap::before,
.lh-scorescale-range::before {
  content: '';
  width: var(--score-icon-size);
  height: var(--score-icon-size);
  display: inline-block;
  margin: var(--score-icon-margin);
}

.lh-metric--pass .lh-metric__value {
  color: var(--color-pass-secondary);
}
.lh-metric--pass .lh-metric__innerwrap::before {
  border-radius: 100%;
  background: var(--color-pass);
}

.lh-metric--average .lh-metric__value {
  color: var(--color-average-secondary);
}
.lh-metric--average .lh-metric__innerwrap::before {
  background: var(--color-average);
  width: var(--icon-square-size);
  height: var(--icon-square-size);
}

.lh-metric--fail .lh-metric__value {
  color: var(--color-fail-secondary);
}
.lh-metric--fail .lh-metric__innerwrap::before,
.lh-metric--error .lh-metric__innerwrap::before {
  border-left: calc(var(--score-icon-size) / 2) solid transparent;
  border-right: calc(var(--score-icon-size) / 2) solid transparent;
  border-bottom: var(--score-icon-size) solid var(--color-fail);
}

.lh-metric--error .lh-metric__value,
.lh-metric--error .lh-metric__description {
  color: var(--color-fail-secondary);
}

/* Perf load opportunity */

.lh-load-opportunity__cols {
  display: flex;
  align-items: flex-start;
}

.lh-load-opportunity__header .lh-load-opportunity__col {
  color: var(--color-gray-600);
  display: unset;
  line-height: calc(2.3 * var(--report-font-size));
}

.lh-load-opportunity__col {
  display: flex;
}

.lh-load-opportunity__col--one {
  flex: 5;
  align-items: center;
  margin-right: 2px;
}
.lh-load-opportunity__col--two {
  flex: 4;
  text-align: right;
}

.lh-audit--load-opportunity .lh-audit__display-text {
  text-align: right;
  flex: 0 0 calc(3 * var(--report-font-size));
}


/* Sparkline */

.lh-load-opportunity__sparkline {
  flex: 1;
  margin-top: calc((var(--report-line-height) - var(--sparkline-height)) / 2);
}

.lh-sparkline {
  height: var(--sparkline-height);
  width: 100%;
}

.lh-sparkline__bar {
  height: 100%;
  float: right;
}

.lh-audit--pass .lh-sparkline__bar {
  background: var(--color-pass);
}

.lh-audit--average .lh-sparkline__bar {
  background: var(--color-average);
}

.lh-audit--fail .lh-sparkline__bar {
  background: var(--color-fail);
}

/* Filmstrip */

.lh-filmstrip-container {
  /* smaller gap between metrics and filmstrip */
  margin: -8px auto 0 auto;
}

.lh-filmstrip {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: var(--default-padding);
}

.lh-filmstrip__frame {
  text-align: right;
  position: relative;
}

.lh-filmstrip__thumbnail {
  border: 1px solid var(--report-border-color-secondary);
  max-height: 100px;
  max-width: 60px;
}

@media screen and (max-width: 750px) {
  .lh-filmstrip {
    flex-wrap: wrap;
  }
  .lh-filmstrip__frame {
    width: 20%;
    margin-bottom: 5px;
  }
  .lh-filmstrip__thumbnail {
    display: block;
    margin: auto;
  }
}

/* Audit */

.lh-audit {
  border-bottom: 1px solid var(--report-border-color-secondary);
}

/* Apply border-top to just the first audit. */
.lh-audit {
  border-top: 1px solid var(--report-border-color-secondary);
}
.lh-audit ~ .lh-audit {
  border-top: none;
}


.lh-audit--error .lh-audit__display-text {
  color: var(--color-fail);
}

/* Audit Group */

.lh-audit-group {
  margin-bottom: var(--audit-group-margin-bottom);
  position: relative;
}

.lh-audit-group__header::before {
  /* By default, groups don't get an icon */
  content: none;
  width: var(--pwa-icon-size);
  height: var(--pwa-icon-size);
  margin: var(--pwa-icon-margin);
  display: inline-block;
  vertical-align: middle;
}

/* Style the "over budget" columns red. */
.lh-audit-group--budgets #performance-budget tbody tr td:nth-child(4),
.lh-audit-group--budgets #performance-budget tbody tr td:nth-child(5),
.lh-audit-group--budgets #timing-budget tbody tr td:nth-child(3) {
  color: var(--color-red-700);
}

/* Align the "over budget request count" text to be close to the "over budget bytes" column. */
.lh-audit-group--budgets .lh-table tbody tr td:nth-child(4){
  text-align: right;
}

.lh-audit-group--budgets .lh-table {
  width: 100%;
  margin: 16px 0px 16px 0px;
}

.lh-audit-group--pwa-installable .lh-audit-group__header::before {
  content: '';
  background-image: var(--pwa-installable-gray-url);
}
.lh-audit-group--pwa-optimized .lh-audit-group__header::before {
  content: '';
  background-image: var(--pwa-optimized-gray-url);
}
.lh-audit-group--pwa-installable.lh-badged .lh-audit-group__header::before {
  background-image: var(--pwa-installable-color-url);
}
.lh-audit-group--pwa-optimized.lh-badged .lh-audit-group__header::before {
  background-image: var(--pwa-optimized-color-url);
}

.lh-audit-group--metrics .lh-audit-group__summary {
  margin-top: 0;
  margin-bottom: 0;
}

.lh-audit-group__summary {
  display: flex;
  justify-content: space-between;
  margin-top: calc(var(--category-padding) * 1.5);
  margin-bottom: var(--category-padding);
}

.lh-audit-group__itemcount {
  color: var(--color-gray-600);
  font-weight: bold;
}
.lh-audit-group__header .lh-chevron {
  margin-top: calc((var(--report-line-height) - 5px) / 2);
}

.lh-audit-group__header {
  font-size: var(--report-font-size);
  margin: 0 0 var(--audit-group-padding-vertical);
  /* When the header takes 100% width, the chevron becomes small. */
  max-width: calc(100% - var(--chevron-size));
}
/* max-width makes the metric toggle not flush. metrics doesn't have a chevron so unset. */
.lh-audit-group--metrics .lh-audit-group__header {
  max-width: unset;
}

.lh-audit-group__header span.lh-audit-group__title {
  font-weight: bold;
}

.lh-audit-group__header span.lh-audit-group__itemcount {
  font-weight: bold;
  color: var(--color-gray-600);
}

.lh-audit-group__header span.lh-audit-group__description {
  font-weight: 500;
  color: var(--color-gray-600);
}
.lh-audit-group__header span.lh-audit-group__description::before {
  content: '—';
  margin: 0px var(--audit-margin-horizontal);
}

.lh-clump > .lh-audit-group__header,
.lh-audit-group--diagnostics .lh-audit-group__header,
.lh-audit-group--load-opportunities .lh-audit-group__header,
.lh-audit-group--metrics .lh-audit-group__header,
.lh-audit-group--pwa-installable .lh-audit-group__header,
.lh-audit-group--pwa-optimized .lh-audit-group__header {
  margin-top: var(--audit-group-padding-vertical);
}

.lh-audit-explanation {
  margin: var(--audit-padding-vertical) 0 calc(var(--audit-padding-vertical) / 2) var(--audit-margin-horizontal);
  line-height: var(--audit-explanation-line-height);
  display: inline-block;
}

.lh-audit--fail .lh-audit-explanation {
  color: var(--color-fail);
}

/* Report */
.lh-list > div:not(:last-child) {
  padding-bottom: 20px;
}

.lh-header-container {
  display: block;
  margin: 0 auto;
  position: relative;
  word-wrap: break-word;
}

.lh-report {
  min-width: var(--report-min-width);
}

.lh-exception {
  font-size: large;
}

.lh-code {
  white-space: normal;
  margin-top: 0;
  font-size: var(--report-monospace-font-size);
}

.lh-warnings {
  --item-margin: calc(var(--report-line-height) / 6);
  color: var(--color-average);
  margin: var(--audit-padding-vertical) 0;
  padding: calc(var(--audit-padding-vertical) / 2) calc(var(--audit-description-padding-left));
}
.lh-warnings span {
  font-weight: bold;
}

.lh-warnings--toplevel {
  --item-margin: calc(var(--header-line-height) / 4);
  color: var(--toplevel-warning-text-color);
  margin-left: auto;
  margin-right: auto;
  max-width: calc(var(--report-width) - var(--category-padding) * 2);
  background-color: var(--toplevel-warning-background-color);
  padding: var(--toplevel-warning-padding);
  border-radius: 8px;
}

.lh-warnings__msg {
  color: var(--toplevel-warning-message-text-color);
  margin: 0;
}

.lh-warnings ul {
  margin: 0;
}
.lh-warnings li {
  margin: var(--item-margin) 0;
}
.lh-warnings li:last-of-type {
  margin-bottom: 0;
}

.lh-scores-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.lh-scores-header__solo {
  padding: 0;
  border: 0;
}

/* Gauge */

.lh-gauge__wrapper--pass {
  color: var(--color-pass);
  fill: var(--color-pass);
  stroke: var(--color-pass);
}

.lh-gauge__wrapper--average {
  color: var(--color-average);
  fill: var(--color-average);
  stroke: var(--color-average);
}

.lh-gauge__wrapper--fail {
  color: var(--color-fail);
  fill: var(--color-fail);
  stroke: var(--color-fail);
}

.lh-gauge__wrapper--not-applicable {
  color: var(--color-not-applicable);
  fill: var(--color-not-applicable);
  stroke: var(--color-not-applicable);
}

.lh-gauge {
  stroke-linecap: round;
  width: var(--gauge-circle-size);
  height: var(--gauge-circle-size);
}

.lh-category .lh-gauge {
  --gauge-circle-size: var(--gauge-circle-size-big);
}

.lh-gauge-base {
  opacity: 0.1;
}

.lh-gauge-arc {
  fill: none;
  transform-origin: 50% 50%;
  animation: load-gauge var(--transition-length) ease forwards;
  animation-delay: 250ms;
}

.lh-gauge__svg-wrapper {
  position: relative;
  height: var(--gauge-circle-size);
}
.lh-category .lh-gauge__svg-wrapper {
  --gauge-circle-size: var(--gauge-circle-size-big);
}

/* The plugin badge overlay */
.lh-gauge__wrapper--plugin .lh-gauge__svg-wrapper::before {
  width: var(--plugin-badge-size);
  height: var(--plugin-badge-size);
  background-color: var(--plugin-badge-background-color);
  background-image: var(--plugin-icon-url);
  background-repeat: no-repeat;
  background-size: var(--plugin-icon-size);
  background-position: 58% 50%;
  content: "";
  position: absolute;
  right: -6px;
  bottom: 0px;
  display: block;
  z-index: 100;
  box-shadow: 0 0 4px rgba(0,0,0,.2);
  border-radius: 25%;
}
.lh-category .lh-gauge__wrapper--plugin .lh-gauge__svg-wrapper::before {
  width: var(--plugin-badge-size-big);
  height: var(--plugin-badge-size-big);
}

@keyframes load-gauge {
  from { stroke-dasharray: 0 352; }
}

.lh-gauge__percentage {
  width: 100%;
  height: var(--gauge-circle-size);
  position: absolute;
  font-family: var(--report-font-family-monospace);
  font-size: calc(var(--gauge-circle-size) * 0.34 + 1.3px);
  line-height: 0;
  text-align: center;
  top: calc(var(--score-container-padding) + var(--gauge-circle-size) / 2);
}

.lh-category .lh-gauge__percentage {
  --gauge-circle-size: var(--gauge-circle-size-big);
  --gauge-percentage-font-size: var(--gauge-percentage-font-size-big);
}

.lh-gauge__wrapper {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-decoration: none;
  padding: var(--score-container-padding);

  --transition-length: 1s;

  /* Contain the layout style paint & layers during animation*/
  contain: content;
  will-change: opacity; /* Only using for layer promotion */
}

.lh-gauge__label {
  font-size: var(--gauge-label-font-size);
  line-height: var(--gauge-label-line-height);
  margin-top: 10px;
  text-align: center;
  color: var(--report-text-color);
}

/* TODO(#8185) use more BEM (.lh-gauge__label--big) instead of relying on descendant selector */
.lh-category .lh-gauge__label {
  --gauge-label-font-size: var(--gauge-label-font-size-big);
  --gauge-label-line-height: var(--gauge-label-line-height-big);
  margin-top: 14px;
}


.lh-scores-header .lh-gauge__wrapper,
.lh-scores-header .lh-gauge--pwa__wrapper,
.lh-sticky-header .lh-gauge__wrapper,
.lh-sticky-header .lh-gauge--pwa__wrapper {
  width: var(--gauge-wrapper-width);
}

.lh-scorescale {
  display: inline-flex;
  margin: 12px auto 0 auto;
  border: 1px solid var(--color-gray-200);
  border-radius: 20px;
  padding: 8px 8px;
}

.lh-scorescale-range {
  display: flex;
  align-items: center;
  margin: 0 12px;
  font-family: var(--report-font-family-monospace);
  white-space: nowrap;
}

/* Hide category score gauages if it's a single category report */
.lh-header--solo-category .lh-scores-wrapper {
  display: none;
}


.lh-categories {
  width: 100%;
  overflow: hidden;
}

.lh-category {
  padding: var(--category-padding);
  max-width: var(--report-width);
  margin: 0 auto;
}

.lh-category-wrapper {
  border-bottom: 1px solid var(--color-gray-200);
}

.lh-category-wrapper:first-of-type {
  border-top: 1px solid var(--color-gray-200);
}

/* section hash link jump should preserve fixed header
   https://css-tricks.com/hash-tag-links-padding/
*/
.lh-category > .lh-permalink {
  --sticky-header-height: calc(var(--gauge-circle-size) + var(--score-container-padding) * 2);
  --topbar-plus-header: calc(var(--topbar-height) + var(--sticky-header-height));
  margin-top: calc(var(--topbar-plus-header) * -1);
  padding-bottom: var(--topbar-plus-header);
  display: block;
  visibility: hidden;
}

.lh-category-header {
  font-size: var(--category-header-font-size);
  min-height: var(--gauge-circle-size);
  margin-bottom: var(--section-padding-vertical);
}

.lh-category-header .lh-score__gauge {
  max-width: 400px;
  width: auto;
  margin: 0px auto;
}

.lh-category-header .lh-audit__title {
  font-size: var(--category-header-font-size);
  line-height: var(--header-line-height);
}

#lh-log {
  position: fixed;
  background-color: #323232;
  color: #fff;
  min-height: 48px;
  min-width: 288px;
  padding: 16px 24px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  border-radius: 2px;
  margin: 12px;
  font-size: 14px;
  cursor: default;
  transition: transform 0.3s, opacity 0.3s;
  transform: translateY(100px);
  opacity: 0;
  bottom: 0;
  left: 0;
  z-index: 3;
}

#lh-log.show {
  opacity: 1;
  transform: translateY(0);
}

/* 964 fits the min-width of the filmstrip */
@media screen and (max-width: 964px) {
  .lh-report {
    margin-left: 0;
    width: 100%;
  }
}

@media print {
  body {
    -webkit-print-color-adjust: exact; /* print background colors */
  }
  .lh-container {
    display: block;
  }
  .lh-report {
    margin-left: 0;
    padding-top: 0;
  }
  .lh-categories {
    margin-top: 0;
  }
}

.lh-table {
  border-collapse: collapse;
  /* Can't assign padding to table, so shorten the width instead. */
  width: calc(100% - var(--audit-description-padding-left));
}

.lh-table thead th {
  font-weight: normal;
  color: var(--color-gray-600);
  /* See text-wrapping comment on .lh-container. */
  word-break: normal;
}

.lh-row--odd {
  background-color: var(--table-higlight-background-color);
}
.lh-row--hidden {
  display: none;
}

.lh-table th,
.lh-table td {
  padding: 8px 6px;
}
.lh-table th:first-child {
  padding-left: 0;
}
.lh-table th:last-child {
  padding-right: 0;
}

.lh-table tr {
  vertical-align: middle;
}

/* Looks unnecessary, but mostly for keeping the <th>s left-aligned */
.lh-table-column--text,
.lh-table-column--source-location,
.lh-table-column--url,
/* .lh-table-column--thumbnail, */
/* .lh-table-column--empty,*/
.lh-table-column--code,
.lh-table-column--node {
  text-align: left;
}

.lh-table-column--code {
  min-width: 100px;
}

.lh-table-column--bytes,
.lh-table-column--timespanMs,
.lh-table-column--ms,
.lh-table-column--numeric {
  text-align: right;
  word-break: normal;
}



.lh-table .lh-table-column--thumbnail {
  width: var(--image-preview-size);
  padding: 0;
}

.lh-table-column--url {
  min-width: 250px;
}

.lh-table-column--text {
  min-width: 80px;
}

/* Keep columns narrow if they follow the URL column */
/* 12% was determined to be a decent narrow width, but wide enough for column headings */
.lh-table-column--url + th.lh-table-column--bytes,
.lh-table-column--url + .lh-table-column--bytes + th.lh-table-column--bytes,
.lh-table-column--url + .lh-table-column--ms,
.lh-table-column--url + .lh-table-column--ms + th.lh-table-column--bytes,
.lh-table-column--url + .lh-table-column--bytes + th.lh-table-column--timespanMs {
  width: 12%;
}

.lh-text__url-host {
  display: inline;
}

.lh-text__url-host {
  margin-left: calc(var(--report-font-size) / 2);
  opacity: 0.6;
  font-size: 90%
}

.lh-thumbnail {
  object-fit: cover;
  width: var(--image-preview-size);
  height: var(--image-preview-size);
  display: block;
}

.lh-unknown pre {
  overflow: scroll;
  border: solid 1px var(--color-gray-200);
}

.lh-text__url > a {
  color: inherit;
  text-decoration: none;
}

.lh-text__url > a:hover {
  text-decoration: underline dotted #999;
}

.lh-sub-item-row {
  margin-left: 20px;
  margin-bottom: 0;
  color: var(--color-gray-700);
}
.lh-sub-item-row td {
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 20px;
}

/* Chevron
   https://codepen.io/paulirish/pen/LmzEmK
 */
.lh-chevron {
  --chevron-angle: 42deg;
  /* Edge doesn't support transform: rotate(calc(...)), so we define it here */
  --chevron-angle-right: -42deg;
  width: var(--chevron-size);
  height: var(--chevron-size);
  margin-top: calc((var(--report-line-height) - 12px) / 2);
}

.lh-chevron__lines {
  transition: transform 0.4s;
  transform: translateY(var(--report-line-height));
}
.lh-chevron__line {
 stroke: var(--chevron-line-stroke);
 stroke-width: var(--chevron-size);
 stroke-linecap: square;
 transform-origin: 50%;
 transform: rotate(var(--chevron-angle));
 transition: transform 300ms, stroke 300ms;
}

.lh-audit-group > summary > .lh-audit-group__summary > .lh-chevron .lh-chevron__line-right,
.lh-audit-group[open] > summary > .lh-audit-group__summary > .lh-chevron .lh-chevron__line-left,
.lh-audit > .lh-expandable-details .lh-chevron__line-right,
.lh-audit > .lh-expandable-details[open] .lh-chevron__line-left {
 transform: rotate(var(--chevron-angle-right));
}

.lh-audit-group[open] > summary > .lh-audit-group__summary > .lh-chevron .lh-chevron__line-right,
.lh-audit > .lh-expandable-details[open] .lh-chevron__line-right {
  transform: rotate(var(--chevron-angle));
}

.lh-audit-group[open] > summary > .lh-audit-group__summary > .lh-chevron .lh-chevron__lines,
.lh-audit > .lh-expandable-details[open] .lh-chevron__lines {
 transform: translateY(calc(var(--chevron-size) * -1));
}



/* Tooltip */
.tooltip-boundary {
  position: relative;
}

.tooltip {
  position: absolute;
  display: none; /* Don't retain these layers when not needed */
  opacity: 0;
  background: #ffffff;
  min-width: 246px;
  max-width: 275px;
  padding: 15px;
  border-radius: 5px;
  text-align: initial;
}
/* shrink tooltips to not be cutoff on left edge of narrow viewports
   45vw is chosen to be ~= width of the left column of metrics
*/
@media screen and (max-width: 535px) {
  .tooltip {
    min-width: 45vw;
    padding: 3vw;
  }
}

.tooltip-boundary:hover {
  background-color: var(--color-hover);
}

.tooltip-boundary:hover .tooltip {
  display: block;
  animation: fadeInTooltip 250ms;
  animation-fill-mode: forwards;
  animation-delay: 850ms;
  bottom: 100%;
  z-index: 1;
  will-change: opacity;
  right: 0;
  pointer-events: none;
}

.tooltip::before {
  content: "";
  border: solid transparent;
  border-bottom-color: #fff;
  border-width: 10px;
  position: absolute;
  bottom: -20px;
  right: 6px;
  transform: rotate(180deg);
  pointer-events: none;
}

@keyframes fadeInTooltip {
  0% { opacity: 0; }
  75% { opacity: 1; }
  100% { opacity: 1;  filter: drop-shadow(1px 0px 1px #aaa) drop-shadow(0px 2px 4px hsla(206, 6%, 25%, 0.15)); pointer-events: auto; }
}

/* Element screenshot */
.lh-element-screenshot {
  position: relative;
  overflow: hidden;
  float: left;
  margin-right: 20px;
}
.lh-element-screenshot__content {
  overflow: hidden;
}
.lh-element-screenshot__image {
  /* Set by ElementScreenshotRenderer.installFullPageScreenshotCssVariable */
  background-image: var(--element-screenshot-url);
  outline: 2px solid #777;
  background-color: white;
  background-repeat: no-repeat;
}
.lh-element-screenshot__mask {
  position: absolute;
  background: #555;
  opacity: 0.8;
}
.lh-element-screenshot__element-marker {
  position: absolute;
  outline: 2px solid var(--color-lime-400);
}
.lh-element-screenshot__overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2000; /* .lh-topbar is 1000 */
  background: var(--screenshot-overlay-background);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: zoom-out;
}

.lh-element-screenshot__overlay .lh-element-screenshot {
  margin-right: 0; /* clearing margin used in thumbnail case */
  outline: 1px solid var(--color-gray-700);
}

.lh-screenshot-overlay--enabled .lh-element-screenshot {
  cursor: zoom-out;
}
.lh-screenshot-overlay--enabled .lh-node .lh-element-screenshot {
  cursor: zoom-in;
}

/*# sourceURL=report-styles.css */

/*# sourceURL=report-assets/report.css */
`);
export default styles;
