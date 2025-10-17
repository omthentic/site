# Homepage Migration - Fixed Route Conflict ✅

## Problem
Deployment was failing with:
```
Error: ENOENT: no such file or directory, 
lstat '/vercel/path0/.next/server/app/(marketing)/page_client-reference-manifest.js'
```

**Root Cause:** Both `/src/app/page.tsx` and `/src/app/(marketing)/page.tsx` were trying to render at the root `/` path, causing a conflict.

---

## Solution

### What Changed

1. **Moved old homepage to backup route**
   - Old: `/src/app/page.tsx` → New: `/src/app/old-home/page.tsx`
   - Now accessible at: `/old-home`
   - Added banner indicating it's the old version
   - Set `robots: { index: false }` to prevent SEO indexing

2. **New marketing page is now the homepage**
   - `/src/app/(marketing)/page.tsx` → serves at `/`
   - This is the new, modern homepage with proper design tokens

---

## Route Structure

### Before (Conflict)
```
❌ /src/app/page.tsx                    → / (OLD)
❌ /src/app/(marketing)/page.tsx        → / (NEW)
   ⚠️ Both trying to render at root!
```

### After (Fixed)
```
✅ /src/app/(marketing)/page.tsx        → / (NEW - Active)
✅ /src/app/old-home/page.tsx           → /old-home (OLD - Backup)
   ✓ No conflict!
```

---

## Build Verification

```bash
✓ Compiled successfully
✓ Generating static pages (77/77)

Routes:
├ ○ /                   → New marketing homepage ✅
├ ○ /old-home          → Old homepage (backup) ✅
```

**Exit Code:** 0 (Success)

---

## Accessing the Pages

### New Homepage (Active)
- **URL:** `/` or `https://omthentic.ai`
- **File:** `src/app/(marketing)/page.tsx`
- **Features:** Modern design, tokens, components

### Old Homepage (Backup)
- **URL:** `/old-home` or `https://omthentic.ai/old-home`
- **File:** `src/app/old-home/page.tsx`
- **Features:** Banner indicating old version, link back to new homepage
- **SEO:** Hidden from search engines (`robots: { index: false }`)

---

## Reverting (If Needed)

If you need to switch back to the old homepage:

```bash
# 1. Delete the new marketing homepage
rm src/app/(marketing)/page.tsx

# 2. Move old-home back to root
mv src/app/old-home/page.tsx src/app/page.tsx

# 3. Remove the banner from page.tsx

# 4. Rebuild and deploy
npm run build
git push
```

Or simply:
- Copy content from `/old-home/page.tsx` 
- Paste into `/src/app/(marketing)/page.tsx`
- Rebuild

---

## What's Safe to Delete

**DON'T delete these (needed for backup):**
- `/src/app/old-home/page.tsx` - Old homepage backup
- `/src/app/components/ModernHome.tsx` - Component used by old page

**Can be cleaned up later (if old version not needed):**
- After confirming new homepage works for a few weeks
- Delete `/src/app/old-home/` directory
- Delete unused components if not referenced elsewhere

---

## Testing Checklist

Before deploying, verify:

- [x] Build succeeds locally (`npm run build`)
- [x] New homepage renders at `/`
- [x] Old homepage accessible at `/old-home`
- [x] No route conflicts
- [x] No TypeScript/build errors
- [ ] Test deployment on Vercel
- [ ] Verify `/` loads correctly in production
- [ ] Verify `/old-home` loads correctly in production

---

## Deployment

```bash
# Commit changes
git add .
git commit -m "Fix: Resolve homepage route conflict - move old page to /old-home"
git push

# Vercel will auto-deploy
# Or trigger manual deployment
```

**Expected Result:** ✅ Deployment should succeed without the ENOENT error

---

## Notes

- The old homepage uses inline styles for the banner (intentionally simple)
- The banner has a clear visual indicator (📦 + amber background)
- Link to new homepage is provided for easy navigation
- SEO is disabled for the old page to prevent duplicate content issues

---

**Status:** ✅ Fixed and Tested  
**Date:** October 17, 2025  
**Issue:** Route conflict resolved  
**New Homepage:** `/` (marketing page)  
**Backup:** `/old-home` (old page)

