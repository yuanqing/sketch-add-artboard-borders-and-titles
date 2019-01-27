# sketch-add-artboard-borders-and-titles

> A Sketch plugin to automatically add borders and titles to Artboards

- Useful for preparing UX specifications for documentation or for print

## Usage

### Add Artboard Borders

<kbd>⌘</kbd> <kbd>Ctrl</kbd> <kbd>Option</kbd> <kbd>B</kbd>

- Draws borders around the selected Artboards, or all Artboards on the current Page if no Artboard was selected
- Border layers are placed in a locked Group named `@ArtboardBorders`

#### Settings

Setting | Default
:--|:--
Border color (hex code) | `#000000`
Border width (pixels) | `2`

### Add Artboard Titles

<kbd>⌘</kbd> <kbd>Ctrl</kbd> <kbd>Option</kbd> <kbd>T</kbd>

- Adds titles above the selected Artboards, or all Artboards on the current Page if no Artboard was selected
- Title layers are placed in a locked Group named `@ArtboardTitles`

#### Settings

Setting | Default
:--|:--
Font | `Helvetica`
Font size (pixels) | `24`
Line height (pixels) | `32`
Vertical offset (pixels) | `16`

## Installation

1. [Download and unzip the latest release.](https://github.com/yuanqing/sketch-add-artboard-borders-and-titles/releases)
2. Double-click `Add Artboard Borders and Titles.sketchplugin` to install.

## Related plugins

- [Draw Slice Over Selection](https://github.com/yuanqing/sketch-draw-slice-over-selection)

## License

[MIT](LICENSE.md)