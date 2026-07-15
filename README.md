# 🎮 GameBlog

A small, personal blog about video games — built while learning React, Redux, and Appwrite along the way.

No editorial team, no sponsored posts, just one person writing about the games they've been playing (and occasionally ranting about a boss fight that ruined their week).

🔗 **Live site:** [game-blog-777.vercel.app](https://straffed.vercel.app/)

---

## ✨ What it does

- 📝 Create, edit, and delete blog posts with a rich text editor
- 🖼️ Upload a featured image for each post
- 🔐 User authentication — sign up, log in, log out
- 🔒 Only the author of a post can edit or delete it
- 📚 Browse all posts, or just the latest ones on the home page
- 📱 Responsive layout that works on mobile and desktop

---

## 🛠️ Built with

| Layer | Tech |
|---|---|
| Frontend | React 19 + Vite |
| Styling | Tailwind CSS 4 |
| State management | Redux Toolkit |
| Routing | React Router |
| Forms | React Hook Form |
| Rich text editor | TinyMCE |
| Backend / database / storage | Appwrite |
| Hosting | Vercel |

---

## 🚀 Running it locally

1. Clone the repo
   ```bash
   git clone https://github.com/KrishPatel8008/straffed.git
   cd straffed
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up your environment variables — copy `.env.sample` to `.env` and fill in your own Appwrite project details:
   ```
   VITE_APPWRITE_URL=
   VITE_PROJECT_ID=
   VITE_DATABASE_ID=
   VITE_COLLECTION_ID=
   VITE_BUCKET_ID=
   ```

4. Start the dev server
   ```bash
   npm run dev
   ```

---

## 📌 Notes

This project is still evolving — if something looks a little rough around the edges, that's just part of learning as I go. Feedback and suggestions are always welcome.
