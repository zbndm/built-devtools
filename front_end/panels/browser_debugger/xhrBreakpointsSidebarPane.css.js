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

.breakpoint-list {
  padding-bottom: 3px;
}

.breakpoint-list .editing.being-edited {
  overflow: hidden;
  white-space: nowrap;
}

.breakpoint-condition {
  display: block;
  margin-top: 4px;
  margin-bottom: 4px;
  margin-left: 23px;
  margin-right: 8px;
}

.breakpoint-condition-input {
  display: block;
  margin-left: 0;
  margin-right: 0;
  outline: none !important; /* stylelint-disable-line declaration-no-important */
  border: 1px solid var(--color-background-elevation-2);
}

.breakpoint-entry {
  white-space: nowrap;
  padding: 2px 0;
}

.breakpoint-list .breakpoint-entry:hover {
  background-color: var(--color-background-elevation-1);
}

.breakpoint-list .breakpoint-entry:focus-visible {
  background-color: var(--legacy-focus-bg-color);
}

.breakpoint-entry [is=dt-checkbox] {
  max-width: 100%;
}

.breakpoint-hit {
  --override-breakpoint-hit-background-color: rgb(255 255 194);
  --override-breakpoint-hit-border-color: rgb(107 97 48);

  background-color: var(--override-breakpoint-hit-background-color);
  border-right: 3px solid var(--override-breakpoint-hit-border-color);
}

.-theme-with-dark-background .breakpoint-hit,
:host-context(.-theme-with-dark-background) .breakpoint-hit {
  --override-breakpoint-hit-background-color: hsl(46deg 98% 22%);
  --override-breakpoint-hit-border-color: #ccc;
}

@media (forced-colors: active) {
  .breakpoint-list .breakpoint-entry:hover,
  .breakpoint-list .breakpoint-entry:focus-visible {
    forced-color-adjust: none;
    background-color: Highlight;
  }

  .breakpoint-list .breakpoint-entry:hover *,
  .breakpoint-list .breakpoint-entry:focus-visible * {
    color: HighlightText;
  }
}

/*# sourceURL=xhrBreakpointsSidebarPane.css */
`);
export default styles;
