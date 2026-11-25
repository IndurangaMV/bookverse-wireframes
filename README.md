# BookVerse interactive wireframe

A colourful navy, lavender, aqua and peach presentation prototype based on the supplied Software Requirements Specification and Reader Dashboard documents. Built with plain HTML, CSS and JavaScript; no React or npm installation required for this version.

## Open the prototype

1. Extract the ZIP.
2. Open the BookVerse folder in VS Code.
3. Open index.html with Live Server (recommended) or double-click it.
4. Select Reader, Author or Admin. Enter your demo name/email and open the workspace.

Separate entry points: reader.html, author.html and admin.html. They share styles.css, app.js and enhancements.js; keep the files in the same folder. index.html is the workspace selection page. Sign out to switch demo identities. Data is saved in this browser's local storage, scoped by email for personal features. A role choice is a presentation control, not secure authentication.

සිංහල: ZIP එක Extract කරලා index.html එක open කරන්න. Reader / Author / Admin panel එක තෝරන්න. Story Studio එකේ Generate animated story button එකෙන් loading screen එක සහ sample animated story එක පෙන්නන්න පුළුවන්. AI සහ payments මෙහි demo ලෙස ක්‍රියාකරයි.

## Presentation walkthrough

### Reader

- Dashboard: colourful hero, reading overview, continue reading, recommendations, goals and token balance.
- Browse Books: search title/author/genre from the top bar, or use the genre dropdown.
- My Library: save books from the reading room. All catalogue books currently use the same original three-chapter sample.
- Reading room: chapter dropdown, previous/next chapter, font size, light/sepia/dark themes, bookmarks and automatic chapter persistence.
- Narration: play/pause, sentence forward/back, speed 0.5–2×, volume and all available device voices. Current sentences highlight during speech. Sentence bookmarks restore the marked sentence; ordinary progress is chapter-level.
- Dictionary: select a word in the page, enter its definition or translation, save it under the current book. Example words such as luminous and tranquil have prepared meanings. Other words accept a manual definition. Dictionary entries can be removed and filtered by book.
- Nova companion: always available in the reading-room sidebar. On other Reader pages open the floating Ask Nova button; the AI Assistant page has a full panel. Prepared answers support chapter summaries, Mira and sample word explanations. Five demo questions per local day per email. Clearing history does not reset this quota.
- Story Studio: choose current page or chapter, storybook/cinematic/watercolour style, device narrator and subtitles. Generate animated story → simulated preparation stages → illustrated scene player. Previous/next, timeline selection, narration and automatic scene playback are included. Current page uses the first three sample passages.
- Wallet and subscriptions: local sample plans, demo token top-ups and ledger, saved masked card metadata.
- Notifications and Profile Settings: sample notifications and editable display name.

### Author

- Dashboard and analytics with clearly illustrative sample statistics.
- Publications panel with Published, Draft, Pending Review, Rejected and Archived filters.
- Sample publications plus your submitted drafts; manage a publication, save edits as a draft, and preview the sample excerpt.
- Upload Books: title, genre, synopsis, access class and manuscript file selection; validates extension and size up to 50 MB. Only file metadata is saved. Manuscripts are not uploaded or persisted.
- Submitted drafts appear in Admin Book Approval when switching roles in the same browser.
- Free Access Quota, Reviews, Earnings, Notifications and Profile Settings presentation panels.

### Admin

- Platform overview, sample reports and community chart.
- User Management: reader and author directory, name/email search, profile preview, suspend/reactivate sample accounts.
- Author Management: author directory, publication counts and sample author application decisions.
- Book Approval: review submitted local drafts; approve or reject with a reason. Decisions appear in author publication records.
- Review Moderation: save a sample moderation note.
- Subscription Plans, Token Management and System Settings: editable configuration previews; they do not enforce billing or quota logic.
- Activity Logs: local admin decisions and configuration events.

## What Generate Story means in this wireframe

This is an interactive demonstration of the future AI experience, not a live AI system. A short preparation sequence leads to a sample animated SVG scene player. The source chapter supplies the scene captions; a custom illustrated garden, girl, fox and doorway are reused across scenes. Visual styles change the scene treatment. The browser provides narration. This is not newly generated video, artwork or story text. No external AI service, API key or backend is required to present it.

To build the production feature, request chapter-derived scene descriptions, consistent character assets and narration from a backend job service; return job progress, scene URLs and speech timings. Render those assets using the same options/loading/preview flow. Keep model keys server-side, check book access, respect copyright and enforce usage limits on the server.

## Male and female voices

The dropdown lists the voices the browser actually exposes. The number and gender availability depend on the operating system, installed speech languages and browser. Gender is not reliably provided by the Web Speech API, so the prototype shows actual names and locales instead of guessing labels.

Install extra speech voices in your Windows language/speech settings, restart the browser, and choose suitable male/female voices if available. Some voices may require network access. A production backend TTS service with two configured licensed narrators is needed to guarantee the same male/female choices on every device. Replace SpeechSynthesisUtterance with audio playback and use returned sentence timestamps for highlighting.

## Card details and production boundaries

The payment preview accepts only a nickname and four demo digits. It never requests or saves full card numbers, expiry or CVV. Real payments require gateway-hosted card collection; save only the gateway payment-method token plus masked metadata server-side. No real money moves here.

All login, authorization, AI answers, approvals, account suspension, subscriptions, quota and financial actions are local presentation states. They are editable by the browser user and must not be trusted in production. Backend role checks, ownership checks, verified payment webhooks, real token ledgers and immutable audit records are required. Chart values and sample account/publication records are illustrative, not live analytics. Seed publication edits create new drafts; they do not modify the read-only seed record. Admin author profiles use illustrative publication names.

## React migration

Suggested components: WorkspaceLanding, AppShell, Sidebar, Dashboard, BookCard, ReadingRoom, NarrationControls, DictionaryPanel, NovaCompanion, StoryOptions, GenerationProgress, StoryPlayer, Publications, MemberDirectory, BookReviewQueue and Wallet.

Use React state/router for pages and reader context, authenticated backend services for data, and shared components across the three role workspaces. Suggested backend resources: /auth, /me, /books, /chapters, /progress, /dictionary, /chat, /story-jobs, /wallet, /author/books and /admin. These are proposals; adapt them to your existing API. Real files should use private storage and access-checked short-lived URLs.

## Design and accessibility

Responsive layout for mobile and desktop, SVG outline icons, text labels, visible keyboard focus, semantic forms, reduced-motion styling and modal focus trapping. Fonts are optional Google Fonts with local Georgia/Arial fallbacks. No other external assets are required.

## Verification

JavaScript syntax checks passed. All role view render functions, the three story states, publications and author management passed a DOM-mock smoke check. Separate role HTML entry points and local asset references were checked. This is not a real-browser interaction or screenshot check: Chromium execution was restricted in this environment. Please verify layout and actual speech on your own browser before presenting; available device voices cannot be validated here.
