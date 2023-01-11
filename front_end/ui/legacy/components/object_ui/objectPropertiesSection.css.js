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

.object-properties-section-dimmed {
  opacity: 60%;
}

.object-properties-section {
  padding: 0 0 0 0;
  color: var(--color-text-primary);
  display: flex;
  flex-direction: column;
}

.object-properties-section li {
  user-select: text;
}

.object-properties-section li::before {
  top: -1px;
}

.object-properties-section li.editing-sub-part {
  padding: 3px 12px 8px 6px;
  margin: -1px -6px -8px -6px;
  text-overflow: clip;
}

.object-properties-section li.editing {
  margin-left: 10px;
  text-overflow: clip;
}

.tree-outline ol.title-less-mode {
  padding-left: 0;
}

.object-properties-section .own-property {
  font-weight: bold;
}

.object-properties-section .synthetic-property {
  color: var(--color-text-secondary);
}

.object-properties-section .private-property-hash {
  color: var(--color-text-primary);
}

.object-properties-section-root-element {
  display: flex;
  flex-direction: row;
}

.object-properties-section .editable-div {
  overflow: hidden;
}

.name-and-value {
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 16px;
}

.editing-sub-part .name-and-value {
  overflow: visible;
  display: inline-flex;
}

.property-prompt {
  margin-left: 4px;
}

.tree-outline.hide-selection-when-blurred .selected:focus-visible {
  background: none;
}

.tree-outline.hide-selection-when-blurred .selected:focus-visible ::slotted(*),
.tree-outline.hide-selection-when-blurred .selected:focus-visible .tree-element-title,
.tree-outline.hide-selection-when-blurred .selected:focus-visible .name-and-value,
.tree-outline.hide-selection-when-blurred .selected:focus-visible .gray-info-message {
  background: var(--legacy-focus-bg-color);
  border-radius: 2px;
  box-shadow: 0 0 0 2px var(--legacy-focus-bg-color);
}

@media (forced-colors: active) {
  .object-properties-section-dimmed {
    opacity: 100%;
  }

  .tree-outline.hide-selection-when-blurred .selected:focus-visible {
    background: Highlight;
  }

  .tree-outline li:hover .tree-element-title,
  .tree-outline li.selected .tree-element-title {
    color: ButtonText;
  }

  .tree-outline.hide-selection-when-blurred .selected:focus-visible .tree-element-title,
  .tree-outline.hide-selection-when-blurred .selected:focus-visible .name-and-value {
    background: transparent;
    box-shadow: none;
  }

  .tree-outline.hide-selection-when-blurred .selected:focus-visible span,
  .tree-outline.hide-selection-when-blurred .selected:focus-visible .gray-info-message {
    color: HighlightText;
  }

  .tree-outline-disclosure:hover li.parent::before {
    background-color: ButtonText;
  }
}

/*# sourceURL=objectPropertiesSection.css */
`);
export default styles;
