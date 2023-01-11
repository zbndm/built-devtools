// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const styles = new CSSStyleSheet();
styles.replaceSync(
`/**
 * Copyright 2017 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
.metrics {
  padding: 8px;
  font-size: 10px;
  text-align: center;
  white-space: nowrap;
  min-height: var(--metrics-height);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* Colors in the metrics panel need special treatment. The color of the
  various box-model regions (margin, border, padding, content) are set in JS
  by using the ones from the in-page overlay. They, therefore, do not depend on
  the theme.
  To ensure proper contrast between those colors and the 1px borders between
  them, we use these local variables, not theme variables. */
  --override-box-model-separator-color: #000;
  --override-box-model-text-color: #222;
}

:host {
  --metrics-height: 190px;

  height: var(--metrics-height);
  contain: strict;
}

:host(.invisible) {
  visibility: hidden;
  height: 0;
}

:host(.collapsed) {
  visibility: collapse;
  height: 0;
}
/* The font we use on Windows takes up more vertical space, so adjust
 * the height of the metrics sidebar pane accordingly.
 */
:host-context(.platform-windows) {
  --metrics-height: 214px;
}

.metrics .label {
  position: absolute;
  font-size: 10px;
  left: 4px;
}

.metrics .position {
  /* This border is different from the ones displayed between the box-moodel
  regions because it is displayed against the pane background, so needs to be
  visible in both light and dark theme. We therefore use a theme variable. */
  border: 1px var(--color-text-secondary) dotted;
  background-color: var(--color-background);
  display: inline-block;
  text-align: center;
  padding: 3px;
  margin: 3px;
  position: relative;
}

.metrics .margin {
  border: 1px dashed var(--override-box-model-separator-color);
  background-color: var(--color-background);
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  padding: 3px 6px;
  margin: 3px;
  position: relative;
}

.metrics .border {
  border: 1px solid var(--override-box-model-separator-color);
  background-color: var(--color-background);
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  padding: 3px 6px;
  margin: 3px;
  position: relative;
}

.metrics .padding {
  border: 1px dashed var(--override-box-model-separator-color);
  background-color: var(--color-background);
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  padding: 3px 6px;
  margin: 3px;
  position: relative;
  min-width: 120px;
}

.metrics .content {
  position: static;
  border: 1px solid var(--override-box-model-separator-color);
  background-color: var(--color-background);
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  padding: 3px;
  margin: 3px;
  min-width: 80px;
  overflow: visible;
}

.metrics .content span {
  display: inline-block;
}

.metrics .editing {
  position: relative;
  z-index: 100;
  cursor: text;
}

.metrics .left {
  display: inline-block;
  vertical-align: middle;
}

.metrics .right {
  display: inline-block;
  vertical-align: middle;
}

.metrics .top {
  display: inline-block;
}

.metrics .bottom {
  display: inline-block;
}

/* In dark theme, when a specific box-model region is hovered, the other regions
lose their background colors, so we need to give them a lighter border color so
that region separators remain visible against the dark panel background. */
:host-context(.-theme-with-dark-background) .margin:hover,
:host-context(.-theme-with-dark-background) .margin:hover * {
  border-color: var(--color-text-secondary);
}

/* With the exception of the position labels, labels are displayed on top of
the box-model region colors, so need to use the following color to remain
visible. */
.metrics .highlighted:not(.position) > *:not(.border):not(.padding):not(.content) {
  color: var(--override-box-model-text-color);
}

/*# sourceURL=metricsSidebarPane.css */
`);
export default styles;
