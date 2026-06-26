cd backend
npm install
cp .env.example .env
# Configure your .env file
npm run migrate
npm run seed
npm run dev
