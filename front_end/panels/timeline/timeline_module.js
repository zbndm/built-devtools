import*as RootModule from'../../core/root/root.js';RootModule.Runtime.cachedResources.set("panels/timeline/historyToolbarButton.css","/*\n * Copyright 2017 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.content {\n  margin-left: 5px;\n}\n\n.history-dropdown-button {\n  width: 160px;\n  height: 26px;\n  text-align: left;\n  display: flex;\n  border: 1px solid transparent;\n}\n\n.history-dropdown-button[disabled] {\n  opacity: 50%;\n  border: 1px solid transparent;\n}\n\n.history-dropdown-button > .content {\n  padding-right: 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  flex: 1 1;\n  min-width: 35px;\n}\n\n.history-dropdown-button:focus-visible::before {\n  content: \"\";\n  position: absolute;\n  top: 2px;\n  left: 0;\n  right: 0;\n  bottom: 2px;\n  border-radius: 2px;\n  background: var(--divider-line);\n}\n\n@media (forced-colors: active) {\n  .history-dropdown-button[disabled] {\n    opacity: 100%;\n  }\n\n  .history-dropdown-button[disabled] [is=ui-icon].icon-mask {\n    background-color: GrayText;\n  }\n}\n\n/*# sourceURL=panels/timeline/historyToolbarButton.css */");RootModule.Runtime.cachedResources.set("panels/timeline/invalidationsTree.css","/*\n * Copyright 2015 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.header,\n.children,\n.content {\n  min-height: initial;\n  line-height: initial;\n}\n/* This TreeElement is always expanded and has no arrow.   */\n/* FIXME(crbug.com/475618): Implement this in TreeElement. */\n\n.children li::before {\n  display: none;\n}\n\n.content {\n  margin-bottom: 4px;\n}\n\n.content .stack-preview-container {\n  margin-left: 8px;\n}\n\n.content .node-list {\n  margin-left: 10px;\n}\n\n/* The .node-list's can be very long. So we override the tree item's default nowrap. */\n.tree-outline li {\n  white-space: normal;\n}\n\n/*# sourceURL=panels/timeline/invalidationsTree.css */");RootModule.Runtime.cachedResources.set("panels/timeline/timelineFlamechartPopover.css","/*\n * Copyright (c) 2015 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.timeline-flamechart-popover {\n  overflow: hidden;\n}\n\n.timeline-flamechart-popover span {\n  margin-right: 5px;\n}\n\n.timeline-flamechart-popover span.timeline-info-network-time {\n  color: var(--color-primary);\n}\n\n.timeline-flamechart-popover span.timeline-info-time {\n  color: var(--color-accent-green);\n}\n\n.timeline-flamechart-popover span.timeline-info-warning {\n  color: var(--color-accent-red);\n}\n\n.timeline-flamechart-popover span.timeline-info-warning * {\n  color: inherit;\n}\n\n/*# sourceURL=panels/timeline/timelineFlamechartPopover.css */");RootModule.Runtime.cachedResources.set("panels/timeline/timelineHistoryManager.css","/*\n * Copyright 2017 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.drop-down {\n  padding: 1px;\n  box-shadow: var(--drop-shadow);\n  background: var(--color-background);\n}\n\n.preview-item {\n  border-color: transparent;\n  border-style: solid;\n  border-width: 1px 5px;\n  padding: 2px 0;\n  margin: 2px 1px;\n}\n\n.preview-item.selected {\n  border-color: var(--legacy-selection-bg-color);\n}\n\n.preview-item canvas {\n  width: 100%;\n  height: 100%;\n}\n\n.text-details {\n  font-size: 11px;\n  padding: 3px;\n}\n\n.text-details span {\n  flex: 1 0;\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n.text-details .name {\n  font-weight: bold;\n}\n\n.text-details span.time {\n  color: var(--color-text-secondary);\n  text-align: right;\n}\n\n.screenshot-thumb {\n  display: flex;\n  border: 1px solid var(--color-background-elevation-2);\n  margin: 2px 4px;\n}\n\n.screenshot-thumb img {\n  margin: auto;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n/*# sourceURL=panels/timeline/timelineHistoryManager.css */");RootModule.Runtime.cachedResources.set("panels/timeline/timelinePanel.css","/*\n * Copyright (C) 2006, 2007, 2008 Apple Inc.  All rights reserved.\n * Copyright (C) 2009 Anthony Ricaud <rik@webkit.org>\n *\n * Redistribution and use in source and binary forms, with or without\n * modification, are permitted provided that the following conditions\n * are met:\n *\n * 1.  Redistributions of source code must retain the above copyright\n *     notice, this list of conditions and the following disclaimer.\n * 2.  Redistributions in binary form must reproduce the above copyright\n *     notice, this list of conditions and the following disclaimer in the\n *     documentation and/or other materials provided with the distribution.\n * 3.  Neither the name of Apple Computer, Inc. (\"Apple\") nor the names of\n *     its contributors may be used to endorse or promote products derived\n *     from this software without specific prior written permission.\n *\n * THIS SOFTWARE IS PROVIDED BY APPLE AND ITS CONTRIBUTORS \"AS IS\" AND ANY\n * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED\n * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE\n * DISCLAIMED. IN NO EVENT SHALL APPLE OR ITS CONTRIBUTORS BE LIABLE FOR ANY\n * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES\n * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;\n * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND\n * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF\n * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n.timeline-toolbar-container {\n  display: flex;\n  flex: none;\n}\n\n.timeline-toolbar-container > .toolbar {\n  background-color: var(--color-background-elevation-1);\n  border-bottom: var(--legacy-divider-border);\n}\n\n.timeline-main-toolbar {\n  flex: 1 1 auto;\n}\n\n.timeline-settings-pane {\n  flex: none;\n  background-color: var(--color-background-elevation-1);\n  border-bottom: var(--legacy-divider-border);\n}\n\n#timeline-overview-panel {\n  flex: none;\n  position: relative;\n  border-bottom: 1px solid var(--color-details-hairline);\n}\n\n#timeline-overview-grid {\n  background-color: var(--color-background);\n}\n\n#timeline-overview-grid .timeline-grid-header {\n  height: 12px;\n}\n\n#timeline-overview-grid .resources-dividers-label-bar {\n  pointer-events: auto;\n  height: 12px;\n}\n\n#timeline-overview-grid .resources-divider-label {\n  top: 1px;\n}\n\n.timeline-details-split {\n  flex: auto;\n}\n\n.timeline.panel .status-pane-container {\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  pointer-events: none;\n}\n\n.timeline.panel .status-pane-container.tinted {\n  background-color: var(--color-background-elevation-2);\n  pointer-events: auto;\n}\n\n#timeline-overview-panel .overview-strip {\n  margin-top: 2px;\n  justify-content: center;\n}\n\n#timeline-overview-panel .overview-strip .timeline-overview-strip-title {\n  color: var(--color-text-secondary);\n  font-size: 10px;\n  font-weight: bold;\n  z-index: 100;\n  background-color: var(--color-background-opacity-80);\n  padding: 0 4px;\n  position: absolute;\n  top: -2px;\n  right: 0;\n}\n\n#timeline-overview-cpu-activity {\n  flex-basis: 20px;\n}\n\n#timeline-overview-network {\n  flex-basis: 8px;\n}\n\n#timeline-overview-framerate {\n  flex-basis: 16px;\n  margin-top: 0 !important; /* stylelint-disable-line declaration-no-important */\n}\n\n#timeline-overview-filmstrip {\n  flex-basis: 30px;\n}\n\n#timeline-overview-memory {\n  flex-basis: 20px;\n}\n\n#timeline-overview-framerate::before,\n#timeline-overview-network::before,\n#timeline-overview-cpu-activity::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border-bottom: 1px solid var(--divider-line);\n  z-index: -200;\n}\n\n.overview-strip .background {\n  z-index: -10;\n}\n\n#timeline-overview-responsiveness {\n  flex-basis: 5px;\n  margin-top: 0 !important; /* stylelint-disable-line declaration-no-important */\n}\n\n#timeline-overview-input {\n  flex-basis: 6px;\n}\n\n#timeline-overview-pane {\n  flex: auto;\n  position: relative;\n  overflow: hidden;\n}\n\n#timeline-overview-container {\n  display: flex;\n  flex-direction: column;\n  flex: none;\n  position: relative;\n  overflow: hidden;\n}\n\n#timeline-overview-container canvas {\n  width: 100%;\n  height: 100%;\n}\n\n.popover ul {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\n.memory-graph-label {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  font-size: 9px;\n  color: var(--color-text-secondary);\n  white-space: nowrap;\n  padding: 0 4px;\n  background-color: var(--color-background-opacity-80);\n}\n\n#memory-graphs-canvas-container {\n  overflow: hidden;\n  flex: auto;\n  position: relative;\n}\n\n#memory-counters-graph {\n  flex: auto;\n}\n\n#memory-graphs-canvas-container .memory-counter-marker {\n  position: absolute;\n  border-radius: 3px;\n  width: 5px;\n  height: 5px;\n  margin-left: -3px;\n  margin-top: -2px;\n}\n\n#memory-graphs-container .timeline-memory-header {\n  flex: 0 0 26px;\n  background-color: var(--color-background-elevation-1);\n  border-bottom: 1px solid var(--color-details-hairline);\n  justify-content: space-between;\n}\n\n#memory-graphs-container .timeline-memory-header::after {\n  content: \"\";\n  background-image: var(--image-file-toolbarResizerVertical);\n  background-repeat: no-repeat;\n  background-position: right center, center;\n  flex: 20px 0 0;\n  margin: 0 4px;\n}\n\n.timeline-memory-toolbar {\n  flex-shrink: 1;\n}\n\n.memory-counter-value {\n  margin: 8px;\n}\n\n#counter-values-bar {\n  flex: 0 0 20px;\n  border-top: solid 1px var(--color-details-hairline);\n  width: 100%;\n  overflow: hidden;\n  line-height: 18px;\n}\n\n#timeline-overview-coverage {\n  flex-basis: 20px;\n}\n\n.timeline-overview-coverage-label {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  font-size: 9px;\n  color: var(--color-text-secondary);\n  white-space: nowrap;\n  padding: 0 4px;\n  background-color: var(--color-background-opacity-80);\n}\n\n.timeline-details {\n  vertical-align: top;\n}\n\n.timeline-details-view {\n  color: var(--color-text-secondary);\n  overflow: hidden;\n}\n\n.timeline-details-view-body {\n  flex: auto;\n  overflow: auto;\n  position: relative;\n  background-color: var(--color-background-elevation-1);\n  user-select: text;\n}\n\n.timeline-details-view-block {\n  flex: none;\n  display: flex;\n  background-color: var(--color-background);\n  flex-direction: column;\n  padding-bottom: 5px;\n  border-bottom: var(--legacy-divider-border);\n}\n\n.timeline-details-view-row {\n  padding-left: 10px;\n  line-height: 20px;\n}\n\n.timeline-details-view-block .timeline-details-stack-values {\n  flex-direction: column !important; /* stylelint-disable-line declaration-no-important */\n}\n\n.timeline-details-chip-title {\n  font-size: 13px;\n  padding: 8px;\n  display: flex;\n  align-items: center;\n}\n\n.timeline-details-view-row-title:not(:empty) {\n  color: var(--color-text-secondary);\n  overflow: hidden;\n  padding-right: 10px;\n  display: inline-block;\n}\n\n.timeline-details-warning {\n  --override-details-warning-background-color: rgb(250 209 209 / 48%);\n\n  background-color: var(--override-details-warning-background-color);\n}\n\n.-theme-with-dark-background .timeline-details-warning,\n:host-context(.-theme-with-dark-background) .timeline-details-warning {\n  --override-details-warning-background-color: rgb(87 10 10 / 48%);\n}\n\n.timeline-details-warning .timeline-details-view-row-title {\n  color: var(--color-red);\n}\n\n.timeline-details-view-row-value {\n  display: inline-block;\n  user-select: text;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.timeline-details-warning .timeline-details-view-row-value {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.timeline-details-view-row-value .stack-preview-container {\n  line-height: 11px;\n}\n\n.timeline-details-view-pie-chart-wrapper {\n  margin: 4px 0;\n}\n\n.timeline-details-view-pie-chart {\n  margin-top: 5px;\n}\n\n.timeline-details-view-row-stack-trace {\n  padding: 4px 0;\n  line-height: inherit;\n}\n\n.timeline-flamechart {\n  overflow: hidden;\n}\n\n.timeline-flamechart-resizer {\n  flex: 8px 0 0;\n  background-color: var(--color-background-elevation-1);\n  border: 1px var(--color-details-hairline);\n  border-style: solid none;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  justify-content: center;\n}\n\n.timeline-network-resizer-disabled > .timeline-flamechart-resizer {\n  display: none;\n}\n\n.timeline-flamechart-resizer::after {\n  content: \"...\";\n  font-size: 14px;\n  margin-bottom: -1px;\n}\n\n.timeline-layers-view-properties table {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.timeline-layers-view-properties td {\n  border: 1px solid var(--color-details-hairline);\n  line-height: 22px;\n}\n\n.timeline-filmstrip-preview > img {\n  margin-top: 5px;\n  max-width: 500px;\n  max-height: 300px;\n  cursor: pointer;\n  border: 1px solid var(--color-details-hairline);\n}\n\n.timeline-tree-view {\n  display: flex;\n  overflow: hidden;\n}\n\n.timeline-tree-view .toolbar {\n  background-color: var(--color-background-elevation-1);\n  border-bottom: var(--legacy-divider-border);\n}\n\n.timeline-tree-view .data-grid {\n  border: none;\n  flex: auto;\n}\n\n.timeline-tree-view .data-grid .data-container {\n  overflow-y: scroll;\n  top: 21px;\n}\n\n.timeline-tree-view .data-grid.data-grid-fits-viewport .corner {\n  display: table-cell;\n}\n\n.timeline-tree-view .data-grid table.data {\n  background: var(--color-background);\n}\n\n.timeline-tree-view .data-grid tr:hover td:not(.bottom-filler-td) {\n  background-color: var(--color-background-hover-overlay);\n}\n\n.timeline-tree-view .data-grid td.numeric-column {\n  text-align: right;\n  position: relative;\n}\n\n.timeline-tree-view .data-grid div.background-percent-bar {\n  float: right;\n}\n\n.timeline-tree-view .data-grid span.percent-column {\n  color: var(--color-text-secondary);\n  width: 45px;\n  display: inline-block;\n}\n\n.timeline-tree-view .data-grid tr.selected span {\n  color: inherit;\n}\n\n.timeline-tree-view .data-grid .name-container {\n  display: flex;\n  align-items: center;\n  padding-left: 2px;\n}\n\n.timeline-tree-view .data-grid .name-container .activity-icon {\n  width: 12px;\n  height: 12px;\n  border: 1px solid var(--divider-line);\n  margin: 3px 0;\n}\n\n.timeline-tree-view .data-grid .name-container .activity-icon-container {\n  margin-right: 3px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  width: 18px;\n  height: 18px;\n  overflow: hidden;\n}\n\n.timeline-tree-view .data-grid .name-container .activity-warning::after {\n  content: \"[deopt]\";\n  margin: 0 4px;\n  line-height: 12px;\n  font-size: 10px;\n  color: var(--color-text-disabled);\n}\n\n.timeline-tree-view .data-grid tr.selected .name-container .activity-warning::after {\n  color: var(--color-text-secondary-selected);\n}\n\n.timeline-tree-view .data-grid .name-container .activity-link {\n  flex: auto;\n  text-align: right;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-left: 5px;\n}\n\n.timeline-tree-view .data-grid .background-bar-container {\n  position: absolute;\n  left: 3px;\n  right: 0;\n}\n\n.timeline-tree-view .data-grid .background-bar {\n  --override-background-bar-background-color: hsl(43deg 84% 64% / 20%);\n  --override-background-bar-border-color: hsl(43deg 84% 64%);\n\n  float: right;\n  height: 18px;\n  background-color: var(--override-background-bar-background-color);\n  border-bottom: 1px solid var(--override-background-bar-border-color);\n}\n\n.timeline-tree-view .data-grid .selected .background-bar {\n  background-color: var(--color-background-opacity-50);\n  border-bottom: 1px solid var(--color-background-opacity-80);\n}\n\n.-theme-with-dark-background .timeline-tree-view .data-grid .background-bar,\n:host-context(.-theme-with-dark-background) .timeline-tree-view .data-grid .background-bar {\n  --override-background-bar-background-color: rgb(169 126 15 / 20%);\n  --override-background-bar-border-color: rgb(169 126 15);\n}\n\n.timeline-tree-view .timeline-details-view-body .full-widget-dimmed-banner {\n  background-color: inherit;\n}\n\n.timeline-details .filter-input-field {\n  width: 120px;\n}\n\n.timeline-tree-view .data-grid .header-container {\n  height: 21px;\n}\n\n.timeline-stack-view-header {\n  height: 27px;\n  background-color: var(--color-background-elevation-1);\n  padding: 6px 10px;\n  color: var(--color-text-secondary);\n  white-space: nowrap;\n  border-bottom: var(--legacy-divider-border);\n}\n\n.timeline-landing-page {\n  position: absolute;\n  background-color: var(--color-background);\n  justify-content: center;\n  align-items: center;\n  overflow: auto;\n  font-size: 13px;\n  color: var(--color-text-secondary);\n}\n\n@media (forced-colors: active) {\n  .timeline-tree-view .data-grid .name-container .activity-icon {\n    forced-color-adjust: none;\n  }\n\n  .timeline-tree-view .data-grid tr.selected span.percent-column,\n  .timeline-tree-view .data-grid tr.selected div.background-percent-bar span,\n  .timeline-tree-view .data-grid tr.selected .name-container .activity-link .devtools-link {\n    color: HighlightText;\n  }\n\n  .timeline-tree-view .data-grid .background-bar,\n  .timeline-tree-view .data-grid tr:hover td:not(.bottom-filler-td) {\n    background-color: transparent;\n  }\n\n  .timeline-tree-view .data-grid tr.selected .background-bar {\n    background-color: transparent;\n    border-bottom-color: HighlightText;\n  }\n}\n\n.timeline-additional-metrics {\n  display: flex;\n  flex: 0 0 27px;\n  background-color: var(--color-background-elevation-1);\n  border-top: var(--legacy-divider-border);\n  overflow: hidden;\n  z-index: 100;\n}\n\n.timeline-details-view-row-stack-trace div {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  line-height: 12px;\n}\n\n.timeline-details-view-body > div {\n  overflow-y: hidden;\n  overflow-x: auto;\n}\n\n.timeline-landing-page > div {\n  max-width: 450px;\n  margin: 10px;\n}\n\n.timeline-details-chip-title > div {\n  width: 12px;\n  height: 12px;\n  border: 1px solid var(--color-details-hairline);\n  display: inline-block;\n  margin-right: 4px;\n  content: \" \";\n}\n\n.timeline-paint-profiler-log-split > div:last-child {\n  background-color: var(--color-background-elevation-1);\n  z-index: 0;\n}\n\n.timeline-layers-view > div:last-child,\n.timeline-layers-view-properties > div:last-child {\n  background-color: var(--color-background-elevation-1);\n}\n\n.timeline.panel .status-pane-container > div {\n  pointer-events: auto;\n}\n\n.timeline-landing-page > div > p {\n  flex: none;\n  white-space: pre-line;\n}\n\n.timeline-tree-view .data-grid .name-container div {\n  flex: none;\n}\n\n.status-pane-container > .small-dialog {\n  width: 100%;\n  height: 100%;\n}\n\n/*# sourceURL=panels/timeline/timelinePanel.css */");RootModule.Runtime.cachedResources.set("panels/timeline/timelinePaintProfiler.css","/*\n * Copyright 2016 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.paint-profiler-image-view {\n  overflow: hidden;\n}\n\n.paint-profiler-image-view .paint-profiler-image-container {\n  transform-origin: 0 0;\n}\n\n.paint-profiler-image-view .paint-profiler-image-container div {\n  border-color: var(--color-details-hairline);\n  border-style: solid;\n  z-index: 100;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.paint-profiler-image-view img {\n  border: solid 1px var(--color-background-inverted);\n}\n\n/*# sourceURL=panels/timeline/timelinePaintProfiler.css */");RootModule.Runtime.cachedResources.set("panels/timeline/timelineStatusDialog.css","/*\n * Copyright (c) 2015 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.timeline-status-dialog {\n  display: flex;\n  flex-direction: column;\n  padding: 16px 16px 12px 16px;\n  align-self: center;\n  background-color: var(--color-background);\n  box-shadow: var(--drop-shadow);\n}\n\n.status-dialog-line {\n  margin: 2px;\n  height: 14px;\n  display: flex;\n  align-items: baseline;\n}\n\n.status-dialog-line .label {\n  display: inline-block;\n  width: 80px;\n  text-align: right;\n  color: var(--color-text-primary);\n  margin-right: 10px;\n}\n\n.timeline-status-dialog .progress .indicator-container {\n  display: inline-block;\n  width: 200px;\n  height: 8px;\n  background-color: var(--color-background-elevation-2);\n}\n\n.timeline-status-dialog .progress .indicator {\n  background-color: var(--color-primary-variant);\n  height: 100%;\n  width: 0;\n  margin: 0;\n}\n\n.timeline-status-dialog .stop-button {\n  margin-top: 8px;\n  height: 100%;\n  align-self: flex-end;\n}\n\n.timeline-status-dialog .stop-button button {\n  min-width: 80px;\n}\n\n.timeline-status-dialog.small-dialog {\n  width: inherit;\n  justify-content: center;\n}\n\n.small-dialog > .stop-button {\n  align-self: center;\n  margin-top: 20px;\n  height: initial;\n}\n\n@media (forced-colors: active) {\n  .timeline-status-dialog {\n    border: 1px solid canvastext;\n  }\n\n  .timeline-status-dialog .progress .indicator-container {\n    border: 1px solid ButtonText;\n    background-color: ButtonFace;\n  }\n\n  .timeline-status-dialog .progress .indicator {\n    forced-color-adjust: none;\n    background-color: ButtonText;\n  }\n}\n\n/*# sourceURL=panels/timeline/timelineStatusDialog.css */");