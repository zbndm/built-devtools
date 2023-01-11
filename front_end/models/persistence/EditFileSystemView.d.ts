import * as UI from '../../ui/legacy/legacy.js';
export declare class EditFileSystemView extends UI.Widget.VBox implements UI.ListWidget.Delegate<string> {
    private readonly fileSystemPath;
    private excludedFolders;
    private readonly eventListeners;
    private readonly excludedFoldersList;
    private muteUpdate?;
    private excludedFolderEditor?;
    constructor(fileSystemPath: string);
    dispose(): void;
    private getFileSystem;
    private update;
    private addExcludedFolderButtonClicked;
    renderItem(item: string, editable: boolean): Element;
    removeItemRequested(_item: string, index: number): void;
    commitEdit(item: string, editor: UI.ListWidget.Editor<string>, isNew: boolean): void;
    beginEdit(item: string): UI.ListWidget.Editor<string>;
    private createExcludedFolderEditor;
    private normalizePrefix;
    wasShown(): void;
}
