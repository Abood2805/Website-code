# Logo Replacement Guide

## How to Replace the MIT Logo

The logo is currently using a base64-encoded placeholder. Follow these steps to replace it with your actual Maharashtra Institute Of Technology logo:

### Option 1: Using a Base64 Encoded Image (Recommended)

1. **Convert Your Logo to Base64:**
   - Visit: https://www.base64-image.de/
   - Upload your MIT logo image (PNG or JPG recommended)
   - Copy the generated base64 string

2. **Replace in ModernHeader.tsx:**
   - Open `/components/ModernHeader.tsx`
   - Find line 268 (the `src` attribute of the logo `<img>` tag)
   - Replace the entire base64 string after `data:image/png;base64,` with your new base64 string

   ```tsx
   src = "data:image/png;base64,YOUR_BASE64_STRING_HERE";
   ```

### Option 2: Using a Direct URL

If you have your logo hosted somewhere (e.g., on your server or CDN):

1. Open `/components/ModernHeader.tsx`
2. Replace the `src` attribute on line 268:
   ```tsx
   src = "https://your-domain.com/path-to-logo.png";
   ```

### Option 3: Using a Local File

If you want to import a local image file:

1. Place your logo file in the `/public` directory (create it if it doesn't exist)
2. Open `/components/ModernHeader.tsx`
3. Replace the `src` attribute:
   ```tsx
   src = "/your-logo-filename.png";
   ```

## Current Logo Location

The logo appears in **two locations**:

1. **ModernHeader.tsx** (Line 267-279) - Currently being used
2. **Header.tsx** (Line 55-68) - Backup component

Since your website uses `ModernHeader`, you only need to update that file.

## Logo Specifications

For best results, your logo should be:

- **Format:** PNG with transparent background (recommended) or JPG
- **Size:** 200x200 pixels or larger (square format works best)
- **File size:** Under 500KB for optimal loading
- **Background:** Transparent or white background

## After Replacing

Once you've replaced the logo:

1. Save the file
2. Refresh your browser
3. The new logo should appear immediately with all the enhanced effects:
   - Drop shadow with blue glow
   - Hover scale and rotation effects
   - Animated gradient border on hover
   - Responsive sizing (larger on desktop, smaller when scrolled)

## Current Logo Styling

The logo has been enhanced with:

- **Size:** 80x80px (desktop), 56x56px (scrolled), 14x14px (mobile scrolled)
- **Border:** 4px white border with rounded corners
- **Shadow:** Blue drop shadow with 3D effect
- **Hover Effects:**
  - 110% scale
  - 3-degree rotation
  - Multi-layer animated glow (blue/purple/pink gradient)
  - Slow rotating border effect
- **Background:** White with padding for maximum visibility

## Troubleshooting

### Logo not appearing?

- Check that your base64 string starts with `data:image/png;base64,` or `data:image/jpeg;base64,`
- Ensure there are no spaces or line breaks in the base64 string
- Try a smaller image if the base64 string is very long

### Logo looks distorted?

- Use `object-contain` (already set) instead of `object-cover`
- Ensure your source image is square or has proper aspect ratio

### Logo is too small/large?

- Adjust the `h-20 w-20` classes on line 272 (desktop size)
- Adjust the `h-14 w-14` classes on line 272 (scrolled size)
- Values are in Tailwind units (1 unit = 4px, so h-20 = 80px)

## Need Help?

The logo image element is located at:

- **File:** `/components/ModernHeader.tsx`
- **Lines:** 267-279
- **Component:** Inside the "LEFT SIDE: Logo & Branding" section

---

**Note:** If you provided a Google Images URL, those URLs don't work directly in img tags. You need to download the image first and then convert it to base64 or host it on your server.