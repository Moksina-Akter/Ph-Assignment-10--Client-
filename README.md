# Import-Export Hub 🌍📦

**Live Site:**https://wondrous-pastelito-a54025.netlify.app/

**Description:**  
Import-Export Hub is a modern web platform where users can manage exports, browse global products, and import any product into their personal "My Imports" section with one click. The application features a clean UI, secure user authentication, real-time updates, and responsive design for all devices.

---

## Features

1. **User Authentication:**

   - Register/Login with email & password or Google OAuth.
   - Logged-in user’s image is displayed in the header instead of login/register buttons.
   - Private routes for adding exports, viewing My Exports, My Imports, and Product Details.

2. **Product Management:**

   - Add new export products with name, image URL, price, rating, available quantity, and origin country.
   - Update or delete your own exports.
   - Latest 6 products displayed on home page, sorted by creation date.
   - See all products on “All Products” page with search functionality by product name.

3. **Import Products:**

   - Import any product from All Products or Product Details pages.
   - Quantity validation ensures you cannot import more than available stock.
   - Imported products appear in “My Imports” section, with options to remove or view details.

4. **Responsive & Modern UI:**

   - Consistent headings, buttons, card layouts, and spacing.
   - Grid layout for products with equal image sizes and responsive design for mobile, tablet, and desktop.
   - Banner/slider on home page and two additional sections for extra content.

5. **Additional Functionalities:**
   - Dark mode / light mode toggle.
   - Dynamic page titles.
   - Toast notifications for success/error messages instead of default alerts.

---

## Tech Stack

- **Frontend:** React.js, Tailwind CSS, React Router, React Toastify
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** Firebase Authentication (Email/Password + Google OAuth)
- **Deployment:** Client: Netlify / Firebase / Surge, Server: Vercel
- **Other Tools:** VS Code, GitHub, Postman

---

## Pages & Routes

- **Home Page:**
  - Banner/Slider, Latest 6 Products, additional sections.
- **All Products:**
  - Displays all products with search functionality.
- **Product Details (Private Route):**
  - Full product info + “Import Now” modal with quantity validation.
- **Add Export/Product (Private Route):**
  - Form to add export products, immediately visible on All Products page.
- **My Exports (Private Route):**
  - List of user’s added products with update/delete functionality.
- **My Imports (Private Route):**
  - Imported products with remove & view details functionality.
- **Authentication:**
  - Login, Register, Google OAuth login.

---

## Installation

https://github.com/Moksina-Akter/Ph-Assignment-10-Server
https://github.com/Moksina-Akter/Ph-Assignment-10--Client-
