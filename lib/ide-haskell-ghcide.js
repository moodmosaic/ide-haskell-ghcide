'use babel';

import IdeHaskellGhcideView from './ide-haskell-ghcide-view';
import { CompositeDisposable } from 'atom';

export default {

  ideHaskellGhcideView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.ideHaskellGhcideView = new IdeHaskellGhcideView(state.ideHaskellGhcideViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.ideHaskellGhcideView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'ide-haskell-ghcide:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.ideHaskellGhcideView.destroy();
  },

  serialize() {
    return {
      ideHaskellGhcideViewState: this.ideHaskellGhcideView.serialize()
    };
  },

  toggle() {
    console.log('IdeHaskellGhcide was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
