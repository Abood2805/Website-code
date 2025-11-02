# Complete Image Editing Guide for MIT Computer Lab Website

This guide will help you replace and customize all images on your website.

---

## 📍 Where Images Are Used

Your website uses images in these sections:
1. **MIT Logo** (in header)
2. **Hero Background** (main welcome section)
3. **Faculty Photos** (4 faculty members)
4. **Infrastructure Gallery** (6+ photos of lab)

---

## 🖼️ Image Locations by File

### 1. MIT Logo
**File:** `/components/ModernHeader.tsx`  
**Line:** Around 268-269  
**Current Image:**
```tsx
src="https://github.com/Malpani7/CEP-Project/blob/f057ad587e46ec0d34d4cedd64f2d56c1296762f/MIT%20Logo.jpeg"
```

**How to Change:**
```tsx
// Replace this URL with your logo URL
<img
  src="YOUR_LOGO_URL_HERE"
  alt="Maharashtra Institute Of Technology Logo"
  className="..."
/>
```

---

### 2. Hero Background Image
**File:** `/components/Hero.tsx`  
**Line:** Around 26-29  
**Current Image:** College campus building

**How to Change:**
```tsx
<div
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url('YOUR_BACKGROUND_IMAGE_URL_HERE')`,
  }}
/>
```

**Recommended Image Type:** Wide landscape photo (1920x1080 or larger)

---

### 3. Faculty Photos (4 Images)
**File:** `/components/Faculty.tsx`  
**Lines:** Inside the `facultyMembers` array

**Current Images:**
```tsx
const facultyMembers = [
  {
    name: "Sarika H. Zile",
    image: "https://images.unsplash.com/photo-1551989745-347c28b620e5?..." // Faculty 1
  },
  {
    name: "Mohammed Noman",
    image: "https://images.unsplash.com/photo-1631306006348-f9ed42b1e19a?..." // Faculty 2
  },
  {
    name: "Dr. Anita Patel",
    image: "https://images.unsplash.com/photo-1758685845906-6f705cde4fb7?..." // Faculty 3
  },
  {
    name: "Mr. Suresh Verma",
    image: "https://images.unsplash.com/photo-1660074127797-1c429fbb8cd6?..." // Faculty 4
  }
];
```

**How to Change:**
Simply replace the URL in the `image:` field for each faculty member.

---

### 4. Infrastructure Gallery Photos
**File:** `/components/InfrastructureGallery.tsx`  
**Lines:** Inside the `galleryImages` array (starting around line 125)

**Current Images:** 6 gallery photos

**How to Change:**
```tsx
const galleryImages = [
  {
    src: "YOUR_IMAGE_URL_1",
    title: "Your Image Title",
    description: "Your description",
    category: "students", // or "facilities", "equipment", "activities", "infrastructure"
    tags: ["tag1", "tag2"],
    // ... other fields
  },
  // Add more images...
];
```

---

## 🔧 Methods to Get Image URLs

### Method 1: Use Unsplash (Free Stock Photos)
1. Go to [unsplash.com](https://unsplash.com)
2. Search for your desired image (e.g., "computer lab")
3. Click on the image you like
4. Right-click on the image → "Copy Image Address"
5. Paste this URL in your code

**Example Search Terms:**
- For Hero: "college campus", "modern university", "technology building"
- For Faculty: "professional portrait", "teacher", "professor"
- For Gallery: "computer lab", "students coding", "server room", "workstation"

---

### Method 2: Use Your Own Images (Upload to GitHub)

#### Step 1: Upload Images to GitHub
1. Go to your GitHub repository
2. Click "Add file" → "Upload files"
3. Drag and drop your images
4. Commit the changes

#### Step 2: Get the Image URL
1. Click on the uploaded image in GitHub
2. Click "Download" button
3. Right-click the image → "Copy Image Address"
4. Use this URL in your code

**Example:**
```
https://github.com/YOUR_USERNAME/YOUR_REPO/raw/main/IMAGE_NAME.jpg
```

---

### Method 3: Use Image Hosting Services

Popular free options:
- **Imgur:** imgur.com (Easy, no account needed for simple uploads)
- **Cloudinary:** cloudinary.com (Free tier available)
- **ImgBB:** imgbb.com (Simple and free)

**Steps:**
1. Go to any hosting service
2. Upload your image
3. Copy the direct image URL
4. Paste in your code

---

## 📝 Step-by-Step: Changing Each Image Type

### Changing the MIT Logo

1. Open `/components/ModernHeader.tsx`
2. Find line ~268 with the logo `<img>` tag
3. Replace the `src` attribute:

```tsx
// BEFORE
<img
  src="https://github.com/Malpani7/CEP-Project/blob/f057ad587e46ec0d34d4cedd64f2d56c1296762f/MIT%20Logo.jpeg"
  alt="Maharashtra Institute Of Technology Logo"
  // ... other attributes
/>

// AFTER
<img
  src="https://YOUR-IMAGE-URL-HERE.jpg"
  alt="Maharashtra Institute Of Technology Logo"
  // ... other attributes
/>
```

**Logo Specifications:**
- Recommended size: 200x200 pixels (square)
- Format: PNG with transparent background (preferred) or JPG
- Should be clear and high-quality

---

### Changing the Hero Background

1. Open `/components/Hero.tsx`
2. Find the background div (around line 25-30)
3. Replace the URL in `backgroundImage`:

```tsx
// BEFORE
style={{
  backgroundImage: `url('https://images.unsplash.com/photo-1724436781032-c1645c5783ef?...')`,
}}

// AFTER
style={{
  backgroundImage: `url('YOUR_BACKGROUND_URL_HERE')`,
}}
```

**Background Specifications:**
- Recommended size: 1920x1080 or larger
- Format: JPG (for photos)
- Should be high-quality and relevant to education/technology

---

### Changing Faculty Photos

1. Open `/components/Faculty.tsx`
2. Find the `facultyMembers` array (around line 8)
3. Replace the `image` URL for each member:

```tsx
const facultyMembers = [
  {
    name: "Sarika H. Zile",
    designation: "Lab In-charge & Associate Professor",
    specialization: "Data Structures, Algorithms, Machine Learning",
    experience: "12 years",
    email: "sarika.zile@mit.asia",
    phone: "+91 98765 43210",
    image: "REPLACE_THIS_URL" // ← Change this
  },
  // ... repeat for other faculty members
];
```

**Faculty Photo Specifications:**
- Recommended size: 400x400 or 600x600 pixels
- Format: JPG
- Should be professional headshots or portrait photos
- Good lighting and clear face visibility

---

### Changing Gallery Photos

1. Open `/components/InfrastructureGallery.tsx`
2. Find the `galleryImages` array (around line 125)
3. Modify existing images or add new ones:

```tsx
const galleryImages = [
  {
    src: "YOUR_IMAGE_URL",
    title: "Your Image Title",
    description: "Detailed description of the image",
    category: "students", // Choose: students, facilities, equipment, activities, infrastructure
    tags: ["programming", "coding", "students"],
    photographer: "Your Name",
    date: "2024-03-15",
    size: "large" // Choose: large, medium, small
  },
  // Add more images by copying this structure
];
```

**Gallery Photo Specifications:**
- Recommended size: 800x600 or larger
- Format: JPG
- Should showcase your actual computer lab, students, equipment
- Use descriptive titles and tags

---

## 🎨 Adding New Gallery Images

To add more photos to the gallery:

1. Open `/components/InfrastructureGallery.tsx`
2. Find the `galleryImages` array
3. Add a new object at the end:

```tsx
const galleryImages = [
  // ... existing images ...
  
  // NEW IMAGE - Copy this template
  {
    src: "YOUR_NEW_IMAGE_URL",
    title: "Advanced Programming Lab",
    description: "Students working on cutting-edge projects",
    category: "students", // Pick the right category
    tags: ["programming", "students", "workspace"],
    photographer: "Lab Team",
    date: "2024-03-20",
    size: "medium"
  }
];
```

**Categories:**
- `students` - Photos of students in the lab
- `facilities` - Lab rooms and facilities
- `equipment` - Computers, servers, hardware
- `activities` - Events, workshops, activities
- `infrastructure` - Server rooms, network equipment

**Sizes:**
- `large` - Takes up more space in the masonry grid
- `medium` - Standard size
- `small` - Smaller tiles

---

## 🔍 Finding Good Images

### For Hero Background:
Search terms on Unsplash:
- "modern university campus"
- "college building exterior"
- "technology center"
- "educational institution"

### For Faculty:
Search terms on Unsplash:
- "professional portrait"
- "business professional"
- "teacher portrait"
- "corporate headshot"

### For Gallery:
Search terms on Unsplash:
- "computer lab students"
- "programming workspace"
- "server room"
- "coding classroom"
- "technology education"
- "modern office workspace"

---

## ⚡ Quick Replace Template

Copy this template to quickly replace all images:

```tsx
// 1. LOGO (ModernHeader.tsx, line ~268)
src="YOUR_LOGO_URL"

// 2. HERO BACKGROUND (Hero.tsx, line ~28)
backgroundImage: `url('YOUR_HERO_BG_URL')`

// 3. FACULTY PHOTOS (Faculty.tsx, inside facultyMembers array)
{
  name: "Faculty Name",
  image: "FACULTY_PHOTO_URL",
  // ... other details
}

// 4. GALLERY IMAGES (InfrastructureGallery.tsx, inside galleryImages array)
{
  src: "GALLERY_IMAGE_URL",
  title: "Image Title",
  category: "students",
  // ... other details
}
```

---

## 🚨 Common Issues & Solutions

### Issue 1: Image Doesn't Load
**Solutions:**
- Make sure the URL is a direct image link (ends with .jpg, .png, etc.)
- Check if the URL is publicly accessible
- Try opening the URL in a new browser tab to verify
- Use `https://` not `http://`

### Issue 2: Image Looks Distorted
**Solutions:**
- Use images with proper aspect ratios
- For faculty photos: Use square or portrait images (3:4 ratio)
- For hero background: Use wide landscape images (16:9 ratio)
- For gallery: Various sizes work due to masonry layout

### Issue 3: Logo Doesn't Show or Looks Bad
**Solutions:**
- Logo should be square (1:1 ratio)
- Use PNG format with transparent background
- Minimum 200x200 pixels
- Make sure the logo has good contrast

### Issue 4: Images Load Slowly
**Solutions:**
- Optimize image file sizes (use tools like TinyPNG)
- Use JPG for photos, PNG for logos
- Don't use images larger than 2MB
- Recommended sizes: Hero (1920x1080), Faculty (600x600), Gallery (1200x800)

---

## 📋 Image Checklist

Before finalizing your images:

**Logo:**
- [ ] Square format (200x200+ pixels)
- [ ] Clear and recognizable
- [ ] PNG with transparent background (preferred)
- [ ] Properly displays in header

**Hero Background:**
- [ ] High resolution (1920x1080+)
- [ ] Relevant to education/technology
- [ ] Text is readable over the image
- [ ] Landscape orientation

**Faculty Photos:**
- [ ] Professional quality
- [ ] Clear face visibility
- [ ] Consistent style across all photos
- [ ] Proper names and titles

**Gallery Images:**
- [ ] At least 6 photos
- [ ] Showcase actual lab facilities
- [ ] Variety of categories
- [ ] High quality and well-lit
- [ ] Descriptive titles and tags

---

## 💡 Pro Tips

1. **Consistent Style:** Use images with similar lighting and color tones
2. **Real Photos:** Use actual photos of your lab when possible
3. **High Quality:** Always use high-resolution images
4. **Optimize:** Compress images before uploading
5. **Backup:** Keep original image files saved locally
6. **Test:** Always check how images look on mobile and desktop
7. **Alt Text:** The `alt` attributes are already set - keep them descriptive

---

## 🎯 Recommended Image Dimensions

| Image Type | Recommended Size | Aspect Ratio | Format |
|------------|-----------------|--------------|--------|
| Logo | 200x200 - 400x400 px | 1:1 (Square) | PNG |
| Hero Background | 1920x1080 - 2560x1440 px | 16:9 (Wide) | JPG |
| Faculty Photos | 400x400 - 600x600 px | 1:1 (Square) | JPG |
| Gallery Photos | 800x600 - 1200x900 px | 4:3 or 16:9 | JPG |

---

## 🆘 Need Help?

If you're stuck:
1. Check that your image URL works by pasting it in a browser
2. Make sure you're editing the correct file
3. Save the file after making changes
4. Refresh your browser to see updates
5. Check the browser console for error messages

---

**Your images are now ready to be customized!** 🎉

For the logo specifically, see also: `LOGO_REPLACEMENT_GUIDE.md`
