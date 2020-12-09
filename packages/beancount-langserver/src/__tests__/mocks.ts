import * as lsp from 'vscode-languageserver'
import { FixtureFolder } from './fixtures'
import BeancountLspServer from '../lsp-server'
import { TextDocument } from 'vscode-languageserver-textdocument'

export async function initializeLspServer(rootBeanFile: string) {

    const connection = getMockConnection()

    const server = await BeancountLspServer.initialize(connection, {
        rootPath: FixtureFolder,
        rootUri: null,
        processId: 42,
        capabilities: {},
        workspaceFolders: null,
        initializationOptions: {
            rootBeancountFile: rootBeanFile.replace("file://", "")
        }
    })

    return {
        connection,
        console,
        server,
    }
}

export function getMockConnection(): jest.Mocked<lsp.Connection> {
    const console: any = {
        error: jest.fn(),
        warn: jest.fn(),
        info: jest.fn(),
        log: jest.fn(),
    }

    return {
        client: {} as any,
        console,
        dispose: jest.fn(),
        languages: {} as any,
        listen: jest.fn(),
        onCodeAction: jest.fn(),
        onCodeLens: jest.fn(),
        onCodeLensResolve: jest.fn(),
        onColorPresentation: jest.fn(),
        onCompletion: jest.fn(),
        onCompletionResolve: jest.fn(),
        onDeclaration: jest.fn(),
        onDefinition: jest.fn(),
        onDidChangeConfiguration: jest.fn(),
        onDidChangeTextDocument: jest.fn(),
        onDidChangeWatchedFiles: jest.fn(),
        onDidCloseTextDocument: jest.fn(),
        onDidOpenTextDocument: jest.fn(),
        onDidSaveTextDocument: jest.fn(),
        onDocumentColor: jest.fn(),
        onDocumentFormatting: jest.fn(),
        onDocumentHighlight: jest.fn(),
        onDocumentLinkResolve: jest.fn(),
        onDocumentLinks: jest.fn(),
        onDocumentOnTypeFormatting: jest.fn(),
        onDocumentRangeFormatting: jest.fn(),
        onDocumentSymbol: jest.fn(),
        onExecuteCommand: jest.fn(),
        onExit: jest.fn(),
        onFoldingRanges: jest.fn(),
        onHover: jest.fn(),
        onImplementation: jest.fn(),
        onInitialize: jest.fn(),
        onInitialized: jest.fn(),
        onNotification: jest.fn(),
        onPrepareRename: jest.fn(),
        onProgress: jest.fn(),
        onReferences: jest.fn(),
        onRenameRequest: jest.fn(),
        onRequest: jest.fn(),
        onSelectionRanges: jest.fn(),
        onShutdown: jest.fn(),
        onSignatureHelp: jest.fn(),
        onTypeDefinition: jest.fn(),
        onWillSaveTextDocument: jest.fn(),
        onWillSaveTextDocumentWaitUntil: jest.fn(),
        onWorkspaceSymbol: jest.fn(),
        sendDiagnostics: jest.fn(),
        sendNotification: jest.fn(),
        sendProgress: jest.fn(),
        sendRequest: jest.fn(),
        telemetry: {} as any,
        tracer: {} as any,
        window: {
            attachWorkDoneProgress: jest.fn(),
            connection: {} as any,
            createWorkDoneProgress: jest.fn(),
            showErrorMessage: jest.fn(),
            showInformationMessage: jest.fn(),
            showWarningMessage: jest.fn(),
        },
        workspace: {} as any,
    }
}
