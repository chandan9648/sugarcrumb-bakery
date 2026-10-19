# Sugar & Crumb Bakery — Next.js starter

A warm, editorial-style bakery storefront built with Next.js App Router, TypeScript, Tailwind CSS v4, Framer Motion, Lucide icons, shadcn-inspired UI primitives, and Firebase Firestore.

## Features
- Responsive landing page with bakery story, menu filters, product cards, testimonials and visit section
- Animated transitions and mobile navigation
- Shopping bag with quantity controls and subtotal
- Delivery form with validation
- Saves order requests to Firestore `orders` collection when Firebase env vars are configured
- WhatsApp order-message fallback if Firebase isn't configured
- Basic metadata, SEO keywords and Open Graph tags

## Run locally
1. Install Node.js 20.9+.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and fill in your Firebase web app config and WhatsApp number.
4. Run `npm run dev` and open `http://localhost:3000`.

## Firebase setup
1. Create a Firebase project and register a Web App.
2. Enable Cloud Firestore.
3. Add the web config values to `.env.local`.
4. Create an `orders` collection (Firestore creates it automatically on first order).
5. Before going live, add Firestore security rules, spam protection, server-side validation, order status management and an admin dashboard. Do not rely on open public write rules in production.

Example starting rules for testing only (do not ship these as production rules):
```text
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /orders/{orderId} {
      allow create: if request.resource.data.keys().hasAll(['customerName','phone','address','items','total','status','createdAt']);
      allow read, update, delete: if false;
    }
  }
}
```

## Customise before client handoff
- Replace Sugar & Crumb name, logo treatment, address, opening hours, phone and Instagram handle.
- Replace sample menu items/prices/photos with the client's real product list and photos.
- Update delivery zones, delivery charges, minimum order and custom-cake lead time.
- Confirm WhatsApp number in international format without `+`.
- Add a privacy policy and terms, and configure real domain metadata/social preview image.
- Confirm payment flow with the client. This starter intentionally does not collect online payments.

## Notes
- Product photos are remote Unsplash images used as placeholders; replace with client-owned images for production.
- The WhatsApp fallback opens a pre-filled message. The user must press Send in WhatsApp.
