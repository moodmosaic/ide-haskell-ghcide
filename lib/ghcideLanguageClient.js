const { AutoLanguageClient } =
  require("atom-languageclient");

class GhcideAutoLanguageClient
    extends AutoLanguageClient {

  getLanguageName() {
    return "Haskell";
  }

  getGrammarScopes() {
    return [
        "source.haskell"
      , "text.tex.latex.haskell"
    ];
  }

  getServerName() {
    return "GHCide";
  }

  startServerProcess(projectPath) {
    let proc =
      (require("child_process")).spawn(
        "ghcide", ["--lsp"],  { "cwd" : projectPath });

    return proc;
  }
}

module.exports =
  new GhcideAutoLanguageClient();
