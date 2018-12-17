# @unicorn/avatars

## Avatar or Initials

Displays either the initials or the image for an avatar.

## Install

```
npm install @unicorn/avatars --save
```

## Usage

```
import Avatar from '@unicorn/avatars'
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

## Details

It uses the hash of the title to derive a number that it uses to select
an entry from an array of colours when there is no image. It does this to consistently provide the same colour for a given title.

It does contrast detection to determine whether or not it should show 
the initial in light or dark font.

# Roadmap

- [ ] - Configuree own font
- [ ] - More efficient selection algo (needs md5.js atm, would be nice to not have that dependency)
