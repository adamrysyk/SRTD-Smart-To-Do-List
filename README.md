# Node Skeleton


## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information

* DB_HOST=" YOUR POSTGRES HOST "
* DB_USER=" YOUR POSTGRES USER "
* DB_PASS=" YOUR POSTGRES PASSWORD"
* DB_NAME=" YOUR DATABASE NAME "
* DB_SSL=true
* DB_PORT= YOUR PORT
* userkey=" YOUR ZOMATO API KEY "


3. Install dependencies: `npm install`
5. Run migrations: `npm run knex migrate:latest`
  - Check the migrations folder to see what gets created in the DB
6. Run the seed: `npm run knex seed:run`
  - Check the seeds file to see what gets seeded in the DB
7. Run the server: `npm run local`
8. Visit `http://localhost:8080/`

