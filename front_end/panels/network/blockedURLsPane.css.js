// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright (c) 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.list {
  border: none !important; /* stylelint-disable-line declaration-no-important */
  border-top: 1px solid var(--color-details-hairline) !important; /* stylelint-disable-line declaration-no-important */
}

.blocking-disabled {
  pointer-events: none;
  opacity: 80%;
}

.editor-container {
  padding: 0 4px;
}

.no-blocked-urls,
.blocked-urls {
  overflow-x: hidden;
  overflow-y: auto;
}

.no-blocked-urls {
  display: flex;
  justify-content: center;
  padding: 10px;
}

.no-blocked-urls > span {
  white-space: pre;
}

.blocked-url {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: auto;
}

.blocked-url-count {
  flex: none;
  padding-right: 9px;
}

.blocked-url-checkbox {
  margin-left: 8px;
  flex: none;
}

.blocked-url-checkbox:focus {
  outline: auto 5px -webkit-focus-ring-color;
}

.blocked-url-label {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  flex: auto;
  padding: 0 3px;
}

.blocked-url-edit-row {
  flex: none;
  display: flex;
  flex-direction: row;
  margin: 7px 5px 0 5px;
  align-items: center;
}

.blocked-url-edit-value {
  user-select: none;
  flex: 1 1 0;
}

.blocked-url-edit-row input {
  width: 100%;
  text-align: inherit;
  height: 22px;
}

/*# sourceURL=blockedURLsPane.css */
`);
export default styles;
