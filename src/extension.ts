import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let cmd1 = vscode.commands.registerCommand('day07-context-menu.panelVisible', async () => {
			await vscode.commands.executeCommand('workbench.action.togglePanel');
			vscode.window.showInformationMessage('Execute command when panel is visible');
	});

	let cmd1Alt = vscode.commands.registerCommand('day07-context-menu.panelVisibleAlt', async () => {
		await vscode.commands.executeCommand('workbench.action.toggleDevTools');
		vscode.window.showInformationMessage('Execute command when using alternative menu command');
 });

	let cmd2 = vscode.commands.registerCommand('day07-context-menu.panelInvisible', async () => {
		 await vscode.commands.executeCommand('workbench.action.togglePanel');
	 	vscode.window.showInformationMessage('Execute command when panel is invisible');
	});

	context.subscriptions.push(cmd1, cmd1Alt, cmd2);
}

// this method is called when your extension is deactivated
export function deactivate() {}
