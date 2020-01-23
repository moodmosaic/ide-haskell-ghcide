Haskell language support for Atom, powered by [ghcide](https://github.com/digital-asset/ghcide).

```bash
$ apm install language-haskell atom-ide-ui ide-haskell-ghcide
```

---

## Features

The idea is that *if or when* ghcide exports a feature, and that feature is supported by the Language Server Protocol support for Atom, it should work without having to release a new version of this Atom package.

### Display type and source module of values
![](https://github.com/moodmosaic/ide-haskell-ghcide-media/raw/master/57d79670-20ef-11ea-978f-2e728ce88125.png)

### Display type and source module of values (and pin them also)
![](https://github.com/moodmosaic/ide-haskell-ghcide-media/raw/master/57d79671-20ef-11ea-978f-2e728ce88125.png)

### Display error messages (parse errors, typecheck errors, etc.) and enabled warnings
![](https://github.com/moodmosaic/ide-haskell-ghcide-media/raw/master/57d79672-20ef-11ea-978f-2e728ce88125.png)
![](https://github.com/moodmosaic/ide-haskell-ghcide-media/raw/master/57d79673-20ef-11ea-978f-2e728ce88125.png)

### Replace suggested typos for values and module imports
![](https://github.com/moodmosaic/ide-haskell-ghcide-media/raw/master/57d79674-20ef-11ea-978f-2e728ce88125.png)

## Style Tweaks

If you want to apply styling changes, you can add styles to the `styles.less` file in your `%USERPROFILE%\.atom` directory. You can also open this file inside Atom from the *File > Stylesheet* menu.

### Styles used in the screenshots above
```less
.datatip-marked-container {
  font-size: 114%;
  font-family:inherit;
}

.datatip-marked-container pre code {
  font-size: 124%;
  font-family: inherit;
}

.datatip-marked-container p {
  word-break: break-all;
}

.datatip-marked-container p br {
  display: none;
}

.diagnostics-code-action-button.btn.btn-xs span {
  font-size: 124%;
}

.diagnostics-popup {
  overflow-y: auto;

  .diagnostics-popup-header {
    margin-right: 10px;
    display: inline-block;
  }

  .diagnostics-popup-message {
    display: inline-block;
    font-size: 114%;
  }
}

.diagnostics-ui {
  font-size: 104%;
}
```
