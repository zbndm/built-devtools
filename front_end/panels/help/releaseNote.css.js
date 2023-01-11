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

.hbox {
  overflow-y: auto;
  overflow-x: hidden;
}

.release-note-top-section {
  height: 27px;
  line-height: 27px;
  padding: 0 15px;
  flex: none;
  color: var(--color-text-primary);
  background-color: var(--color-background-elevation-1);
  border-bottom: var(--legacy-divider-border);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.release-note-container {
  display: flex;
  flex-direction: column;
}

.release-note-container ul {
  display: flex;
  padding: 10px 16px;
  flex-direction: column;
  flex: none;
  margin: 4px 12px 0 2px;
  max-width: 600px;
}

.release-note-container li {
  display: flex;
  flex-direction: column;
  flex: none;
  line-height: 24px;
  font-size: 14px;
}

.release-note-container .release-note-link {
  border: 1px solid var(--color-details-hairline);
  padding-left: 8px;
  padding-right: 8px;
  margin-bottom: 4px;
  text-decoration: none;
}

.release-note-container .release-note-link:hover {
  box-shadow: 0 0 0 1px var(--box-shadow-outline-color) inset;
}

.release-note-title,
.release-note-subtitle {
  color: inherit;
  text-decoration: none;
}

.release-note-subtitle {
  font-size: 13px;
  line-height: 13px;
  padding-bottom: 8px;
}

.release-note-container li:not(:hover) .release-note-subtitle {
  color: var(--color-text-secondary);
}

.release-note-action-container > button {
  margin: 10px 0 20px 20px;
  color: var(--color-text-secondary);
}

.release-note-action-container {
  flex: none;
}

.release-note-image {
  flex-shrink: 2;
}

img {
  margin: 20px;
  width: 260px;
  height: 200px;
  flex: none;
  box-shadow: var(--drop-shadow-depth-1);
}

img:hover {
  box-shadow: var(--drop-shadow-depth-4);
}

@media (forced-colors: active) {
  .release-note-container .release-note-link {
    border-color: ButtonText;
  }

  .release-note-container .release-note-link:hover {
    forced-color-adjust: none;
    border-color: Highlight;
  }

  .release-note-container li .release-note-title,
  .release-note-container li:not(:hover) .release-note-subtitle {
    forced-color-adjust: none;
    color: linktext;
  }
}

/*# sourceURL=releaseNote.css */
`);
export default styles;