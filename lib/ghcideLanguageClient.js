const { AutoLanguageClient } = require("atom-languageclient");

class GhcideAutoLanguageClient extends AutoLanguageClient
{
  getLanguageName() {
    return "Haskell";
  }

  getGrammarScopes()
  {
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

    let diag = {
        description:
            "It looks like the ghcide executable file was not found in %PATH%."
          + " Add ghcide to your %PATH%, then restart Atom or just reload Atom"
          + " window via View > Developer > Reload Window."
      , buttons: [
          { text: "Get online Help on ghcide"
          , onDidClick: () => shell
              .openExternal(
                "https://github.com/digital-asset/ghcide#install-ghcide")
          }
        ]
      , dismissable: true
    };
    proc
      .on(
        "error", () => atom.notifications
      .addError(
        "GHCide language server for Haskell unable to start", diag));

    return proc;
  }
}

module.exports =
  new GhcideAutoLanguageClient();
