# Kickoff Color Palettes (by sammy) 🎨

basic, simple, responsive crud app that allows you to manage your color palettes

a color palette is an object with 5 colors. you can create different palettes based off of different things (i.e. the seasons, ur mood, etc.)

here is a video of me going through the flow things:

[https://youtu.be/5d1FAvvABe0](https://youtu.be/5d1FAvvABe0)

## notes

### sqlite

to access sqlite CLI: `sqlite3`

to access sqlite db: `.open database.sqlite` (`database.sqlite` is name of sqlite file)

to see all tables: `.tables`

to drop table: `DROP TABLE [table-name];`

## next steps

- better database schema (using `colors` table instead of five different color columns)

- using tailwind css instead of `style` property

- cleaner ui

- fix backend

- add search to frontend query params

---

# Instructions

## Exercise

### Phase 1 -- Picker

Build a simple web-based color picker. The picker should:

1. Take input for RGB values
2. Display the current color

### Phase 2 -- Palettes

Build a form to create a palette of 5 colors.

### Phase 3 -- Persistence

Persist palettes to the database.

1. Add the ability to save multiple palettes.
2. Don't worry about palette owners. They're global.
3. Display all the persisted palettes in the UI.
4. Enable deleting of palettes.
5. Enable editing of palettes.

### Phase 4 -- Search

Build a search for the persisted palettes.

1. Add the ability to search your saved palettes by name.
2. Do search logic on the backend using SQL. **do not filter using javascript on the frontend or backend**

## Details

Feel free to look up syntax while working. Just don't copy any code verbatim. Come up with your own UI.

This codebase contains a [Next.js](https://nextjs.org/) React app. The scaffold is in place to allow you to focus on the exercise instead of the setup. However, if you're more comfortable with your own tools, feel free to replace any or all of it.

This is designed to take between 2-4 hours.

There's a lot to do. Don't sweat the details. If you do finish early, take your pick of refactoring, styling, or adding features.

## Setup

### In this codebase, you'll find:

- An example component that makes API calls ([/components/welcome](/components/welcome/index.js))
- API endpoints connecting to a SQLite DB with [Knex](https://knexjs.org/) ([/pages/api/greeting](/pages/api/greeting.js))

### To start the app

- yarn install
- yarn run-migrations
- yarn dev
- open [http://localhost:3000](http://localhost:3000)

### To add a database migration

- yarn create-migration -- {{migration_name}}
- yarn run-migrations
- note: you can drop the database and start over by deleting database.sqlite
