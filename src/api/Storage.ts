import vscode from 'vscode';

const PREVIOUS_CUR_LIBS_KEY = `prevCurLibs`;
const LAST_PROFILE_KEY = `currentProfile`;
const SOURCE_LIST_KEY = `sourceList`;
const DEPLOYMENT_KEY = `deployment`;
const DEBUG_KEY = `debug`

export type PathContent = Record<string, string[]>;
export type DeploymentPath = Record<string, string>;
export type DebugCommands = Record<string, string>;

abstract class Storage {
  protected readonly globalState;

  constructor(context: vscode.ExtensionContext) {
    this.globalState = context.globalState;
  }

  protected get<T>(key: string): T | undefined {
    return this.globalState.get(this.getStorageKey(key)) as T | undefined;
  }

  protected async set(key: string, value: any) {
    await this.globalState.update(this.getStorageKey(key), value);
  }

  protected abstract getStorageKey(key: string): string;
}

export type LastConnection = {
  name: string
  timestamp: number
};

export class GlobalStorage extends Storage {
  private static instance: GlobalStorage;

  static initialize(context: vscode.ExtensionContext) {
    if (!this.instance) {
      this.instance = new GlobalStorage(context);
    }
  }

  static get() {
    return this.instance;
  }

  private constructor(context: vscode.ExtensionContext) {
    super(context);
  }

  protected getStorageKey(key: string): string {
    return key;
  }

  getLastConnections() {
    return this.get<LastConnection[]>("lastConnections");
  }

  async setLastConnection(name: string) {
    const lastConnections = this.getLastConnections() || [];
    const connection = lastConnections?.find(c => c.name === name);
    if (connection) {
      connection.timestamp = Date.now();
    }
    else {
      lastConnections?.push({ name, timestamp: Date.now() });
    }
    await this.setLastConnections(lastConnections);
  }

  async setLastConnections(lastConnections: LastConnection[]) {
    await this.set("lastConnections", lastConnections.sort((c1, c2) => c2.timestamp - c1.timestamp));
  }
}

export class ConnectionStorage extends Storage {
  private connectionName: string = "";
  constructor(context: vscode.ExtensionContext) {
    super(context);
  }

  get ready(): boolean {
    if (this.connectionName) {
      return true;
    }
    else {
      return false;
    }
  }

  setConnectionName(connectionName: string) {
    this.connectionName = connectionName;
  }

  protected getStorageKey(key: string): string {
    return `${this.connectionName}.${key}`;
  }

  getSourceList() {
    return this.get<PathContent>(SOURCE_LIST_KEY) || {};
  }

  async setSourceList(sourceList: PathContent) {
    await this.set(SOURCE_LIST_KEY, sourceList);
  }

  getLastProfile() {
    return this.get<string>(LAST_PROFILE_KEY);
  }

  async setLastProfile(lastProfile: string) {
    await this.set(LAST_PROFILE_KEY, lastProfile);
  }

  getPreviousCurLibs() {
    return this.get<string[]>(PREVIOUS_CUR_LIBS_KEY) || [];
  }

  async setPreviousCurLibs(previousCurLibs: string[]) {
    await this.set(PREVIOUS_CUR_LIBS_KEY, previousCurLibs);
  }

  getDeployment() {
    return this.get<DeploymentPath>(DEPLOYMENT_KEY) || {};
  }

  async setDeployment(existingPaths: DeploymentPath) {
    await this.set(DEPLOYMENT_KEY, existingPaths);
  }

  getDebugCommands() {
    return this.get<DebugCommands>(DEBUG_KEY) || {};
  }

  setDebugCommands(existingCommands: DebugCommands) {
    return this.set(DEBUG_KEY, existingCommands);
  }

  getWorkspaceDeployPath(workspaceFolder : vscode.WorkspaceFolder){
    const deployDirs = this.get<DeploymentPath>(DEPLOYMENT_KEY) || {};
    return deployDirs[workspaceFolder.uri.fsPath].toLowerCase();
  }
}
