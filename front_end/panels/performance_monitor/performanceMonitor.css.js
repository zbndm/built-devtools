// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2017 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.perfmon-pane {
  overflow: hidden;
}

.perfmon-pane.suspended {
  opacity: 40%;
  pointer-events: none;
}

.perfmon-pane .perfmon-chart-suspend-overlay {
  display: none;
  font-size: 26px;
  align-items: center;
  justify-content: center;
}

.perfmon-pane.suspended .perfmon-chart-suspend-overlay {
  display: flex;
}

.perfmon-control-pane {
  display: flex;
  flex-direction: column;
  padding: 6px 0;
  overflow-x: hidden;
  overflow-y: auto;
}

.perfmon-chart-container {
  display: flex;
  flex: 1 1;
  border-left: 1px solid var(--color-details-hairline);
  overflow-y: auto;
}

.perfmon-chart-container canvas {
  width: 100%;
}

.perfmon-indicator {
  padding: 6px 12px;
  margin: -1px 0;
  display: flex;
  flex-shrink: 0;
  width: 210px;
}

.perfmon-indicator:hover {
  background-color: var(--color-background-elevation-0);
}

.perfmon-indicator:focus-visible {
  background-color: var(--color-background-elevation-1);
}

.perfmon-indicator-swatch {
  margin-right: 6px;
}

.perfmon-indicator:not(.active) .perfmon-indicator-swatch {
  background-color: var(--color-background-elevation-2) !important; /* stylelint-disable-line declaration-no-important */
}

.perfmon-indicator-title {
  flex: 0 0 115px;
}

.perfmon-indicator:not(.active) .perfmon-indicator-title {
  color: var(--color-text-secondary);
}

.perfmon-indicator-value {
  flex: 0 0 55px;
  text-align: right;
  overflow: visible;
}

.perfmon-indicator:not(.active) .perfmon-indicator-value {
  opacity: 0%;
}

/*# sourceURL=performanceMonitor.css */
`);
export default styles;