// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.tree-outline {
  padding: 0;
}

.tree-outline li {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2px 5px;
  overflow: hidden;
  margin: 2px 0;
  border-top: 1px solid transparent;
  white-space: nowrap;
}

.tree-outline .lock-icon,
.tree-outline .security-property {
  margin-right: 4px;
  flex: none;
}

.tree-outline li.selected:focus .lock-icon,
.tree-outline .security-sidebar-tree-item.selected:focus .icon {
  background-color: var(--legacy-selection-fg-color);
}

@media (forced-colors: active) {
  .tree-outline .lock-icon,
  .tree-outline .security-property {
    forced-color-adjust: none;
  }

  .tree-outline li.selected:focus .lock-icon,
  .tree-outline .security-sidebar-tree-item.selected:focus .icon {
    background-color: HighlightText;
  }
}

.tree-outline .security-main-view-sidebar-tree-item {
  border-bottom: 1px solid var(--color-background-elevation-2);
  padding: 16px 0;
}

.tree-outline li.security-sidebar-origins {
  padding: 1px 8px 1px 13px;
  margin-top: 1em;
  margin-bottom: 0.5em;
  color: var(--color-text-secondary);
  border-top: none;
  line-height: 16px;
  text-shadow: var(--color-background-opacity-80) 0 1px 0;
}

.tree-outline ol {
  padding-left: 0;
}

.tree-outline li::before {
  content: none;
}

.tree-outline .security-main-view-sidebar-tree-item,
.tree-outline .security-sidebar-origins,
.tree-outline li.security-sidebar-origins + .children > li {
  padding-left: 16px;
}

.security-sidebar-tree-item {
  padding: 2px 0;
}

.security-sidebar-tree-item .title {
  overflow: hidden;
  margin-right: 5px;
}

.security-main-view-reload-message .tree-element-title {
  color: var(--color-text-secondary);
  padding-left: 8px;
}

/*# sourceURL=sidebar.css */
`);
export default styles;