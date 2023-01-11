// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  flex: auto;
  display: flex;
}

.mode-type {
  color: var(--override-text-highlight-color);
}

.value-types {
  width: 100%;
  display: grid;
  grid-template-columns: auto auto 1fr;
  grid-column-gap: 24px;
  grid-row-gap: 4px;
  min-height: 24px;
  overflow: hidden;
  padding: 2px 12px;
  align-items: baseline;
  justify-content: start;
}

.value-type-cell {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 24px;
}

.value-type-value-with-link {
  display: flex;
  align-items: center;
}

.value-type-cell-no-mode {
  grid-column: 1 / 3;
}

.jump-to-button {
  display: flex;
  width: 20px;
  height: 20px;
  border: none;
  padding: 0;
  outline: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.signed-divider {
  width: 1px;
  height: 15px;
  background-color: var(--color-details-hairline);
  margin: 0 4px;
}

/*# sourceURL=valueInterpreterDisplay.css */
`);
export default styles;