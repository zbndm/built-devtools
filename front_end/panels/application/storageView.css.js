// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2016 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.report-row {
  display: flex;
  align-items: center;
  white-space: normal;
}

.clear-storage-button .report-row {
  margin: 0 0 0 17px;
  display: flex;
}

.link {
  margin-left: 10px;
  display: none;
}

.report-row:hover .link {
  display: inline;
}

.quota-override-editor-with-button {
  align-items: baseline;
  display: flex;
}

.quota-override-notification-editor {
  border: solid 1px var(--color-background-highlight);
  display: flex;
  flex: auto;
  margin-right: 4px;
  max-width: 200px;
  min-width: 50px;
  min-height: 24px;
  padding-left: 4px;
}

.quota-override-notification-editor:focus {
  border: solid 1px var(--color-primary-variant);
}

.quota-override-error {
  padding-top: 10px;
  color: #f00; /* stylelint-disable-line plugin/use_theme_colors */
  /* See: crbug.com/1152736 for color variable migration. */
}

.usage-breakdown-row {
  min-width: fit-content;
}

.clear-storage-container {
  overflow: auto;
}

.clear-storage-header {
  min-width: 400px;
}

.report-content-box {
  overflow: initial;
}

.include-third-party-cookies {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: 16px;
}

/*# sourceURL=storageView.css */
`);
export default styles;
