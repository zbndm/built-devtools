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

.hide-issues-menu-btn {
  position: relative;
  display: flex;
  background-color: transparent;
  flex: none;
  align-items: center;
  justify-content: center;
  padding: 1px 4px;
  overflow: hidden;
  border-radius: 0;
  cursor: pointer;
  border: none;
}

/*# sourceURL=./hideIssuesMenu.css */
`);
export default styles;
