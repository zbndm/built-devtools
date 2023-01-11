import * as Workspace from '../../models/workspace/workspace.js';
import * as QuickOpen from '../../ui/legacy/components/quick_open/quick_open.js';
export declare class FilteredUISourceCodeListProvider extends QuickOpen.FilteredListWidget.Provider {
    private queryLineNumberAndColumnNumber;
    private defaultScores;
    private scorer;
    private uiSourceCodes;
    private readonly uiSourceCodeUrls;
    private query;
    constructor();
    private projectRemoved;
    private populate;
    private filterUISourceCode;
    uiSourceCodeSelected(_uiSourceCode: Workspace.UISourceCode.UISourceCode | null, _lineNumber?: number, _columnNumber?: number): void;
    filterProject(_project: Workspace.Workspace.Project): boolean;
    itemCount(): number;
    itemKeyAt(itemIndex: number): string;
    setDefaultScores(defaultScores: Map<Workspace.UISourceCode.UISourceCode, number> | null): void;
    itemScoreAt(itemIndex: number, query: string): number;
    renderItem(itemIndex: number, query: string, titleElement: Element, subtitleElement: Element): void;
    private renderSubtitleElement;
    selectItem(itemIndex: number | null, promptValue: string): void;
    rewriteQuery(query: string): string;
    private uiSourceCodeAdded;
    notFoundText(): string;
    attach(): void;
    detach(): void;
}
