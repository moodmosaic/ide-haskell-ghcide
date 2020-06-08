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
          atom.config.get("ide-haskell-ghcide.exec")
        , atom.config.get("ide-haskell-ghcide.args").split(",").map(a => a.trim())
        , { "cwd" : projectPath });

    return proc;
  }
}

module.exports =
  new GhcideAutoLanguageClient();
