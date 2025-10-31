## Huy Đoàn – Marketing Portfolio

Single-page portfolio site for Trần Đoàn Huy, a junior digital marketer focused on social campaigns, SEO, and UI/UX inspired activations.

### Tech Stack
- React 19 + TypeScript
- Vite 7 build tooling
- Responsive layout with handcrafted CSS

### Available Scripts
- `npm install` – install dependencies
- `npm run dev` – start local dev server
- `npm run build` – create production build in `dist/`
- `npm run preview` – preview the production build

### Content Management
All personal information, skills, experience, and certificates are stored directly in `src/App.tsx` for easy updates. Replace or extend the TypeScript data arrays to keep the content current.

#### Avatar Photo
1. Add your portrait image to `src/assets/` (or keep it under `public/` if you prefer).
2. Import the file in `src/App.tsx` and assign it to the `profileImage` constant near the top of the file, e.g.:
   ```ts
   import avatar from './assets/huy-doan.jpg'
   const profileImage = avatar
   ```
3. The hero avatar will automatically switch from the initials badge to your photo.
