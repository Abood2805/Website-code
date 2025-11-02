# 📸 How to Add Images to Visual Gallery Section

## Quick Start Guide

Your Visual Gallery is located in the **Infrastructure & Visual Showcase** section. You can add, replace, or remove images easily!

---

## 📍 Where to Edit

**File:** `/components/InfrastructureGallery.tsx`  
**Section:** Lines 125-186 (the `galleryImages` array)

---

## 🎯 Step-by-Step: Adding a New Image

### Step 1: Open the File
Open `/components/InfrastructureGallery.tsx` in your code editor.

### Step 2: Find the Gallery Images Array
Look for this section around line 125:
```tsx
const galleryImages = [
  // Images are listed here
];
```

### Step 3: Add Your New Image
Copy this template and paste it inside the array (before the closing `];`):

```tsx
{
  src: "YOUR_IMAGE_URL_HERE",
  title: "Your Image Title",
  description: "Detailed description of what the image shows",
  category: "students", // Choose: students, facilities, equipment, activities, infrastructure
  tags: ["tag1", "tag2", "tag3"],
  photographer: "Your Name or Team Name",
  date: "2024-11-01",
  size: "medium" // Choose: large, medium, small
},
```

### Step 4: Fill in the Details

**Example - Adding a Photo of Students:**
```tsx
{
  src: "https://images.unsplash.com/photo-1234567890?...",
  title: "AI Workshop Session",
  description: "Students participating in hands-on artificial intelligence workshop with real-world projects",
  category: "students",
  tags: ["AI", "workshop", "students", "machine-learning"],
  photographer: "MIT Lab Team",
  date: "2024-11-01",
  size: "large"
},
```

---

## 🔧 Understanding Each Field

### 1. **src** (Required)
The URL of your image.

**How to get URLs:**
- **Option A:** Use Unsplash (see guide below)
- **Option B:** Upload to GitHub and use the raw URL
- **Option C:** Use image hosting (Imgur, Cloudinary)

**Example:**
```tsx
src: "https://images.unsplash.com/photo-1234567890?w=1080"
```

---

### 2. **title** (Required)
A short, descriptive title for the image (appears on hover and in modal).

**Examples:**
- "Advanced Programming Lab"
- "Server Room Infrastructure"
- "Student Hackathon 2024"

```tsx
title: "Advanced Programming Lab"
```

---

### 3. **description** (Required)
A longer description providing context about the image.

**Examples:**
- "Students working on final year projects using cutting-edge technologies"
- "State-of-the-art server room with enterprise-grade equipment"

```tsx
description: "Students working on final year projects using cutting-edge technologies"
```

---

### 4. **category** (Required)
Choose ONE category from these options:

| Category | Use For |
|----------|---------|
| `students` | Photos of students in the lab |
| `facilities` | Lab rooms, classrooms, spaces |
| `equipment` | Computers, monitors, hardware |
| `activities` | Events, workshops, activities |
| `infrastructure` | Servers, networks, backend systems |

**Example:**
```tsx
category: "students"
```

**Important:** This determines which filter button shows the image!

---

### 5. **tags** (Required)
An array of keywords to make your image searchable.

**Tips:**
- Use 3-5 relevant tags
- Use lowercase
- Think about what users might search for

**Examples:**
```tsx
tags: ["programming", "coding", "students", "workshop"]
tags: ["servers", "infrastructure", "data-center"]
tags: ["monitors", "workstation", "dual-screen"]
```

---

### 6. **photographer** (Optional)
Credit the photographer or team.

**Examples:**
```tsx
photographer: "Lab Team"
photographer: "Student Council"
photographer: "IT Department"
photographer: "MIT Media Team"
```

---

### 7. **date** (Optional)
When the photo was taken (format: YYYY-MM-DD).

**Example:**
```tsx
date: "2024-11-01"
```

---

### 8. **size** (Required)
Controls the image size in the masonry layout.

| Size | Effect | Best For |
|------|--------|----------|
| `large` | Takes up more space (tall) | Hero shots, important photos |
| `medium` | Standard size | Most photos |
| `small` | Smaller tile | Detail shots, portraits |

**Example:**
```tsx
size: "medium"
```

---

## 🎨 Complete Example: Adding 3 New Images

Here's how to add 3 new images to your gallery:

```tsx
const galleryImages = [
  // ... existing images ...

  // NEW IMAGE 1 - Large student photo
  {
    src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1080",
    title: "Machine Learning Workshop 2024",
    description: "Students exploring neural networks and deep learning algorithms in our specialized AI lab",
    category: "activities",
    tags: ["machine-learning", "AI", "workshop", "students", "training"],
    photographer: "MIT Lab Team",
    date: "2024-10-25",
    size: "large"
  },

  // NEW IMAGE 2 - Medium facility photo
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1080",
    title: "Collaborative Learning Space",
    description: "Open lab area designed for team projects and peer-to-peer learning",
    category: "facilities",
    tags: ["collaboration", "teamwork", "workspace", "modern"],
    photographer: "Architecture Team",
    date: "2024-10-20",
    size: "medium"
  },

  // NEW IMAGE 3 - Small equipment photo
  {
    src: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1080",
    title: "Workstation Setup",
    description: "Individual workstation with dual 4K monitors and mechanical keyboard",
    category: "equipment",
    tags: ["workstation", "monitors", "setup", "hardware"],
    photographer: "Technical Team",
    date: "2024-10-18",
    size: "small"
  }
];
```

---

## 🔍 How to Get Image URLs from Unsplash

### Method 1: Direct Search
1. Go to [unsplash.com](https://unsplash.com)
2. Search for: "computer lab students", "server room", "programming workspace"
3. Click on an image you like
4. Right-click the image → "Copy Image Address"
5. Paste the URL in your code

### Method 2: Recommended Search Terms

For **students** category:
- "students coding together"
- "computer science classroom"
- "programming students"
- "tech workshop students"

For **facilities** category:
- "modern computer lab"
- "classroom technology"
- "university lab interior"
- "learning space"

For **equipment** category:
- "workstation setup"
- "dual monitor desk"
- "computer hardware"
- "programming setup"

For **infrastructure** category:
- "server room"
- "data center"
- "network infrastructure"
- "server racks"

For **activities** category:
- "hackathon event"
- "coding workshop"
- "tech meetup"
- "students collaborating"

---

## 🔄 How to Replace an Existing Image

### Current Images in Your Gallery:
1. **Advanced Programming Session** (students, large)
2. **Next-Gen Classroom Technology** (facilities, medium)
3. **Premium Development Workstation** (equipment, small)
4. **Modern Lab Interior Design** (facilities, large)
5. **Collaborative Innovation Hub** (activities, medium)
6. **Enterprise Server Infrastructure** (infrastructure, small)

### To Replace Image #1:
Find this section in the code:
```tsx
{
  src: "https://images.unsplash.com/photo-1689236673934-66f8e9d9279b?...",
  title: "Advanced Programming Session",
  // ... rest of the fields
},
```

Simply change the `src` URL:
```tsx
{
  src: "YOUR_NEW_IMAGE_URL_HERE", // ← Changed!
  title: "Advanced Programming Session",
  // ... keep everything else the same
},
```

---

## ❌ How to Remove an Image

Simply delete the entire image object (including the opening `{` and closing `},`).

**Before:**
```tsx
const galleryImages = [
  {
    src: "...",
    title: "Image 1",
    // ...
  },
  {
    src: "...",
    title: "Image 2", // ← Let's delete this one
    // ...
  },
  {
    src: "...",
    title: "Image 3",
    // ...
  }
];
```

**After:**
```tsx
const galleryImages = [
  {
    src: "...",
    title: "Image 1",
    // ...
  },
  // Image 2 deleted!
  {
    src: "...",
    title: "Image 3",
    // ...
  }
];
```

---

## 🎯 Pro Tips

### 1. **Category Distribution**
Try to have images in multiple categories for a balanced gallery:
- 2-3 images in "students"
- 2-3 images in "facilities"
- 1-2 images in "equipment"
- 1-2 images in "activities"
- 1-2 images in "infrastructure"

### 2. **Size Distribution**
Mix different sizes for visual interest:
- 2-3 large images (hero shots)
- 3-4 medium images (most common)
- 2-3 small images (detail shots)

### 3. **Use Good Tags**
Add relevant tags so users can search effectively:
```tsx
// Good tags
tags: ["programming", "students", "coding", "workshop"]

// Not as useful
tags: ["photo", "image", "lab"]
```

### 4. **Write Descriptive Titles**
```tsx
// Good title
title: "Advanced AI Workshop 2024"

// Not as descriptive
title: "Lab Photo"
```

### 5. **High-Quality Images**
- Use images at least 1080px wide
- Ensure good lighting and clarity
- Avoid blurry or pixelated photos

---

## 🚀 Quick Template for Copy-Paste

Copy this, fill in the details, and add to your gallery:

```tsx
{
  src: "YOUR_IMAGE_URL",
  title: "YOUR_TITLE",
  description: "YOUR_DESCRIPTION",
  category: "students", // students, facilities, equipment, activities, infrastructure
  tags: ["tag1", "tag2", "tag3"],
  photographer: "YOUR_NAME",
  date: "2024-11-01",
  size: "medium" // large, medium, small
},
```

---

## 📊 Current Gallery Structure

Your gallery currently has **6 images**:

| # | Title | Category | Size |
|---|-------|----------|------|
| 1 | Advanced Programming Session | students | large |
| 2 | Next-Gen Classroom Technology | facilities | medium |
| 3 | Premium Development Workstation | equipment | small |
| 4 | Modern Lab Interior Design | facilities | large |
| 5 | Collaborative Innovation Hub | activities | medium |
| 6 | Enterprise Server Infrastructure | infrastructure | small |

### Category Count:
- **All Photos:** 6
- **Students:** 1
- **Facilities:** 2
- **Equipment:** 1
- **Activities:** 1
- **Infrastructure:** 1

---

## 🎨 Gallery Features (Already Built-In)

Your gallery has these awesome features automatically:

✅ **Search Bar** - Users can search by title, description, or tags  
✅ **Category Filters** - Filter by students, facilities, equipment, etc.  
✅ **View Modes** - Grid view or Masonry view  
✅ **Lightbox Modal** - Click any image for full-screen view  
✅ **Slideshow Mode** - Auto-play through images  
✅ **Like/Favorite** - Users can heart their favorite images  
✅ **Image Details** - Shows photographer, date, tags  
✅ **Responsive Design** - Works on mobile and desktop  

All you need to do is add the images!

---

## 🆘 Common Issues & Solutions

### Issue 1: Image Doesn't Show
**Solution:** Check that your URL is:
- A direct image link (ends with .jpg, .png, etc.)
- Publicly accessible
- Uses `https://` (not `http://`)

### Issue 2: Wrong Category Filter
**Solution:** Make sure the `category` value matches exactly:
```tsx
category: "students" // ✅ Correct
category: "Students" // ❌ Wrong (capital S)
category: "student"  // ❌ Wrong (singular)
```

### Issue 3: Syntax Error
**Solution:** Make sure:
- Each image object ends with a comma: `},`
- Strings are in quotes: `"text"`
- Tags are in square brackets: `["tag1", "tag2"]`

### Issue 4: Image Order
**Solution:** Images appear in the order you list them. To reorder, just move the entire image object up or down in the array.

---

## 📋 Checklist Before Adding

Before you add a new image, verify:

- [ ] Image URL is valid and accessible
- [ ] Title is descriptive and clear
- [ ] Description provides useful context
- [ ] Category is one of the 5 valid options
- [ ] Tags are relevant (3-5 tags recommended)
- [ ] Size is set (large, medium, or small)
- [ ] Photographer credit is added (optional)
- [ ] Date is in YYYY-MM-DD format (optional)
- [ ] Syntax is correct (no missing commas or quotes)

---

## 🎓 Full Example: Complete Gallery Array

Here's a complete example with 10 images covering all categories:

```tsx
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1080",
    title: "Machine Learning Lab Session",
    description: "Students working on AI and machine learning projects",
    category: "students",
    tags: ["AI", "machine-learning", "students", "programming"],
    photographer: "Lab Team",
    date: "2024-11-01",
    size: "large"
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1080",
    title: "Modern Computer Laboratory",
    description: "Spacious lab with state-of-the-art equipment and ergonomic design",
    category: "facilities",
    tags: ["lab", "modern", "facility", "workspace"],
    photographer: "Architecture Team",
    date: "2024-10-28",
    size: "large"
  },
  {
    src: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1080",
    title: "Professional Workstation",
    description: "High-performance workstation with dual monitors and ergonomic setup",
    category: "equipment",
    tags: ["workstation", "monitors", "hardware", "setup"],
    photographer: "Technical Team",
    date: "2024-10-25",
    size: "medium"
  },
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1080",
    title: "Team Collaboration Space",
    description: "Students collaborating on group projects in open learning area",
    category: "students",
    tags: ["collaboration", "teamwork", "students", "projects"],
    photographer: "Student Council",
    date: "2024-10-22",
    size: "medium"
  },
  {
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1080",
    title: "Server Infrastructure",
    description: "Enterprise-grade server room supporting lab operations",
    category: "infrastructure",
    tags: ["servers", "infrastructure", "data-center", "backend"],
    photographer: "IT Department",
    date: "2024-10-20",
    size: "small"
  },
  {
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1080",
    title: "Coding Workshop 2024",
    description: "Annual coding workshop with industry experts and hands-on training",
    category: "activities",
    tags: ["workshop", "coding", "training", "event"],
    photographer: "Events Team",
    date: "2024-10-15",
    size: "large"
  },
  {
    src: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=1080",
    title: "High-Performance Computers",
    description: "Latest generation computers with powerful specifications",
    category: "equipment",
    tags: ["computers", "hardware", "high-performance", "technology"],
    photographer: "Technical Team",
    date: "2024-10-12",
    size: "small"
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1080",
    title: "Interactive Smart Classroom",
    description: "Classroom equipped with interactive displays and modern teaching tools",
    category: "facilities",
    tags: ["classroom", "smart", "interactive", "education"],
    photographer: "MIT Media Team",
    date: "2024-10-10",
    size: "medium"
  },
  {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1080",
    title: "Hackathon Event",
    description: "Students participating in 24-hour hackathon competition",
    category: "activities",
    tags: ["hackathon", "competition", "coding", "students"],
    photographer: "Events Team",
    date: "2024-10-05",
    size: "medium"
  },
  {
    src: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=1080",
    title: "Network Operations Center",
    description: "24/7 network monitoring and management center",
    category: "infrastructure",
    tags: ["network", "monitoring", "operations", "infrastructure"],
    photographer: "IT Department",
    date: "2024-10-01",
    size: "small"
  }
];
```

---

## 🎯 Next Steps

1. **Open** `/components/InfrastructureGallery.tsx`
2. **Find** the `galleryImages` array (line 125)
3. **Add** your images using the template above
4. **Save** the file
5. **Check** your website to see the new images!

---

## 📌 Remember

- You can have as many images as you want (no limit!)
- Images appear in the order you list them
- Use the search feature to find specific images
- Filter buttons automatically update based on your categories
- Users can click images for full-screen view

**Happy customizing your gallery! 🎉**
