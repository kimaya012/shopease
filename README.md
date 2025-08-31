# shopease
ShopEase is a voice-enabled shopping assistant that allows users to create, manage, and organize their shopping lists through natural voice commands. The app uses speech recognition, NLP, and smart suggestions to provide a seamless shopping experience.

It was built as part of a technical assessment project with a focus on clean code, scalability, and real-world usability.

✨ Features

🎙 Voice Input

- Add/remove items using voice (e.g., "Add milk", "Remove bread").

- Natural language understanding ("I need 2 bottles of water").

- Multilingual support for wider accessibility.

💡 Smart Suggestions

- Personalized product recommendations based on past items.

- Seasonal suggestions (fruits, festivals, etc.).

- Substitutes when an item is unavailable (e.g., almond milk instead of regular milk).

📝 Shopping List Management

- Add, update, or delete items.

- Auto-categorization (dairy, produce, snacks, etc.).

- Quantity and unit recognition ("5 oranges", "2 packets of chips").

🔍 Voice-Activated Search

- Search items by brand, price range, or type.

Example: “Find toothpaste under ₹100”.

🎨 UI/UX

- Minimalist, mobile-friendly interface.

- Real-time visual feedback of recognized commands.

- Smooth interaction for both voice-only and visual users.

☁️ Hosting & Deployment

- Deployed on Vercel for reliability and scalability.

🛠️ Tech Stack

1. Frontend: React + Next.js

2. Styling: Tailwind CSS

3. Voice Recognition: Web Speech API (or any speech-to-text service you integrated)

4. State Management: React hooks / Context API

5. Deployment: Vercel

🚀 Getting Started
1. Clone the Repository
git clone https://github.com/kimaya012/shopease.git
cd shopease

2. Install Dependencies
npm install

3. Run Locally
npm run dev


Visit http://localhost:3000

4. Build for Production
npm run build
npm start

🧠 Approach

The approach was structured around three key aspects:

1. Voice-first Interaction – Implemented using Web Speech API for real-time speech-to-text conversion. NLP logic maps user phrases into structured actions (add, remove, search, quantity).

2. Smart Recommendations – Designed a lightweight rule-based engine that checks previous items, seasonal patterns, and availability to suggest substitutes or frequently bought products.

3. User-Centric Design – Focused on simplicity with a minimalist UI, real-time feedback, and smooth list management. The application was made responsive and mobile-first, ensuring it works well in day-to-day shopping scenarios.

📌 Deliverables

✅ Working deployed application (Vercel link)

✅ GitHub repository with source code

✅ Documentation (README + Approach)
