# @unicorns/avatars

[![Build Status](https://travis-ci.com/UnicornGlobal/avatars.svg?branch=dev)](https://travis-ci.com/UnicornGlobal/avatars)

## Avatar or Initials

Displays either the initials or the image for an avatar.

## Install

```
npm install @unicorns/avatars --save
```

## Usage

```
import Avatar from '@unicorns/avatars'
```

Include it in the template you'd like to use it in.

Title is the only required property, size, round and image are optional.

Size defaults to 40px.

Round defaults to false (square avatar).

### Basic

This will result in a 40px square avatar with the letter E

```
<avatar class="item-avatar"
        title="Example">
</avatar>
```

### Advanced

This will display an image in a 46px round avatar

```
<avatar class="item-avatar"
        round
        size="46"
        image="https://example.com/example.jpeg"
        title="Example">
</avatar>
```

You can override the default random colours yourself

```
<avatar class="item-avatar"
        round
        colour="red"
        backgroundColour="#fff"
        title="Example">
</avatar>
```

## Custom Palette

You can add a custom palette on the `palette` prop.

This is the default configuration array.

```
[
  '#f44336',
  '#e91e63',
  '#9c27b0',
  '#673ab7',
  '#3f51b5',
  '#2196f3',
  '#03a9f4',
  '#00bcd4',
  '#009688',
  '#4caf50',
  '#8bc34a',
  '#cddc39',
  '#ffeb3b',
  '#ffc107',
  '#ff9800',
  '#ff5722',
  '#795548',
  '#9e9e9e',
  '#607d8b'
]
```

## Details

It uses the hash of the title to derive a number that it uses to select
an entry from an array of colours when there is no image. It does this to consistently provide the same colour for a given title.

It does contrast detection to determine whether or not it should show 
the initial in light or dark font.

# Roadmap

- [ ] - Configure own font
- [ ] - More efficient selection algo (needs md5.js atm, would be nice to not have that dependency)

# Version History

v1.x is now deprecated and no longer supported.

v2.x is the latest version and is not backwards compatible with
applications currently using v1.x.

Ensure you test your application sufficiently before updating the version
from 1.x to 2.x

# Contributors

[Darryn Ten](https://github.com/darrynten)
