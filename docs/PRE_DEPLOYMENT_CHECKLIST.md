# Pre-Deployment Checklist - AccessAble Build Packet

## 1. TypeScript Compilation
- [ ] Run `npm run build` - No TypeScript errors
- [ ] Run `npm run type-check` (if available) - All types valid
- [ ] No unused imports or variables
- [ ] All required props provided to components

## 2. Runtime Errors
- [ ] Open browser console - No errors on page load
- [ ] Navigate all routes - No console errors
- [ ] Test all interactive features - No runtime exceptions
- [ ] Check Network tab - All API requests successful (200/201)

## 3. Shopify Integration
- [ ] Products load from Shopify Storefront API
- [ ] Add to cart functionality works
- [ ] Cart persists in localStorage
- [ ] Checkout redirects to Shopify with `channel=online_store`
- [ ] Checkout opens in new tab (`_blank`)

## 4. Schema Markup Validation
- [ ] Test all pages with Google Rich Results Test
- [ ] Validate JSON-LD syntax (no parse errors)
- [ ] Product schema includes all required fields
- [ ] FAQ schema includes all questions/answers
- [ ] Organization schema has correct business info

## 5. Accessibility Testing
- [ ] Run Lighthouse Accessibility audit (score 95+)
- [ ] Run axe DevTools scan (0 violations)
- [ ] Test keyboard navigation on all pages
- [ ] Test with NVDA screen reader (Windows)
- [ ] Test with VoiceOver (macOS/iOS)

## 6. Performance
- [ ] Lighthouse Performance score 90+
- [ ] First Contentful Paint < 1.8s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Total Blocking Time < 200ms

## 7. Deployment
- [ ] Environment variables configured (.env)
- [ ] Shopify credentials valid
- [ ] Build output size acceptable (< 5MB)
- [ ] Deploy to staging environment
- [ ] Smoke test on staging
- [ ] Deploy to production

## Sign-Off
- [ ] Reviewed by: [Name] on [Date]
- [ ] Approved for deployment: [Name] on [Date]
