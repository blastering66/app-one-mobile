# Assets Folder

Place your static assets here:

- `images/` - PNG, JPG, SVG images
- `fonts/` - Custom font files (TTF, OTF)

## Usage

Import assets using the alias:

```typescript
import {logo} from '@assets';
// or
import logo from '@assets/images/logo.png';
```

## Adding Custom Fonts

1. Place font files in `fonts/` folder
2. Run `npx react-native-asset` to link fonts
3. Reference fonts by family name in styles
