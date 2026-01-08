# Traditional Martial Arts Academy – Curriculum Archive

This repository preserves and presents the **Pyon Moo Do curriculum videos** from the former **Traditional Martial Arts Academy (TMAA)** website.

The original WordPress site is no longer actively maintained. This project converts the curriculum into a **static, structured, React-based archive** that is easier to maintain, browse, and preserve long-term.

---

## Purpose

- Preserve instructional and historical curriculum material
- Convert unstructured WordPress pages into **typed, data-driven content**
- Separate **content** from **presentation**
- Provide a clean, readable interface for former students, staff, and families

This is **not** a commercial project and contains no tracking, ads, or monetization.

---

## Tech Stack

- **React + TypeScript**
- Plain CSS (no runtime dependency on Tailwind)
- Static data files (`.ts`) for curriculum content
- Minimal component abstraction for long-term maintainability

---

## Project Structure

```text
src/
├── siteData/
│   ├── adultCurriculum.ts      # Adult curriculum + archive data
│   ├── kidsCurriculum.ts       # Kids curriculum data (parsed from WP HTML)
│
├── pages/
│   ├── AdultCurriculum.tsx     # Adult curriculum page
│   ├── KidsCurriculum.tsx      # Kids curriculum page
│
├── styles/
│   ├── AdultCurriculum.css     # Shared curriculum styling
│
└── components/
    └── LinkList.tsx            # Reusable list renderer (inline in pages currently)
````

---

## Data Model

All curriculum items use the same basic structure:

```ts
export type LinkItem = {
  label: string;
  url?: string;
  note?: string;
};
```

This allows:

* Items with links
* Items without links (documented as missing)
* Inline notes explaining omissions or context

---

## Curriculum Pages

### Adult Curriculum

* Intro / setup videos
* White belt curriculum (forms, striking, tactile skills, self-defense)
* Color belt forms (yellow → brown)
* Shared self-defense & tactile drill sections
* Pum Dan curriculum
* Archive of extra-curricular material:

  * Hwarangdo classical forms
  * Tukong Moosul
  * Mo Mien Kuen / Tensaijitsu
  * Weapons (sword, nunchaku, staff, miscellaneous)
  * Neigong / Ipsun forms

### Kids Curriculum

* Videos for parents
* Belt tests
* Beginner program (white belt)
* Intermediate belt curriculum
* Blue belt curriculum
* Advanced belt curriculum
* Half black belt curriculum

The Kids curriculum data was **manually extracted and normalized** from legacy WordPress HTML to remove layout artifacts and preserve meaning.

---

## Styling Philosophy

* Typography and spacing loosely match the original WordPress *Inspiro* theme
* Content-first design
* No heavy UI frameworks
* CSS scoped to curriculum pages for safety

---

## Running Locally

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

(or whatever port your setup uses)

---

## Disclaimer

This archive is provided **for educational and historical purposes only**.

All martial arts instruction should be practiced responsibly and, when possible, under qualified supervision.

---

## License

This project is intended as a **private archival and educational resource**.
No license is currently specified.
