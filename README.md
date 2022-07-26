# FullStack-TechnicalTest

Technical interwiew for a job like Full Stack Web Developer.

## In the project directory (/client && /api), you can run:

```
npm start
```

```
.env
#back-end
DB_USER=(usuariodepostgres)
DB_PASSWORD=(passwordDePostgres)
DB_HOST=(localhost)
DB_NAME=(name)
PORT=(3001)
JWT=(?)

#front-end
REACT_APP_API=http://localhost:3001
REACT_APP_AUTH0_DOMAIN=YOUR AUTH0 DOMAIN
REACT_APP_AUTH0_CLIENT_ID=YOUR AUTH0 CLIENT ID
REACT_APP_AUTH0_AUDIENCE=YOUR AUTH0 AUDIENCE

```

Replace postgresuser and postgrespassword with your own credentials to connect to postgres. This file will be ignored when uploading to github, as it contains sensitive information (credentials).

Additionally, it will be necessary to create a database called ecomerce from psql

```
#### Necessary technologies:

- [ ] React
- [ ] Redux Toolkit
- [ ] Express - Axios
- [ ] Sequelize - Postgres
- [ ] AUTH0


#### Frontend

- Home: "/"

- Phone detail path: "/details/:id"

- All products path: "/products"

#### Database

- [ ] Product:

  - ID: \*
  - Name \*
  - Descripction \*
  - Image url \*
  - Brand \*
  - Price \*

- [ ] Brand:

  - ID \*
  - Name \*
  - Logo url \*

#### Backend

- [ ] **GET /products**:

- [ ] **GET /products/:id**:

- [ ] **GET /brands**:

- [ ] **GET /brands/:id**:

- [ ] **GET /customers**:

- [ ] **POST /produts**:

- [ ] **POST /customers**:

- [ ] **POST /brands**:

- [ ] **PUT /produts/:id**:

- [ ] **PUT /brands/:id**:

- [ ] **PUT /customers/:id**:

- [ ] **DELETE /produts/:id**:

- [ ] **DELETE /brands/:id**:

- [ ] **DELETE /customers/:id**:

```

Coding Challenge
In this document you will find a test assignment we expect you to complete successfully.
You’ll find we divided it into front and back end sections - we suggest you read the whole
document and then decide where you’d prefer to start.
The extra assignments we include in each section are optional. We encourage you to
try and complete them if you want, but your submission will still be valid if it does not
include any extra.
In this coding challenge we’ll ask you to build the basics of what could later grow into an
ecommerce website.

# Backend

We’ll task you with building a REST API that can perform all the CRUD operations for the
products of our app.
You will build an endpoint - /products
Products must have at least the following properties:

- id
- name
- description
- image_url
- price
  Products should be stored in a database (you can use any database you prefer)
  Images can be hosted outside the app, it’s ok if the data includes external links so
  you don’t worry about hosting images.
  Your endpoint must be able to respond with a list of all available products in the
  database.

The endpoint must also be able to provide specific products filtering by id (follow
REST best practices for this).
There is no need for your API to use any token or authentication method.
Your app must handle all CRUD operations, so on top of listing products, it should
also allow the creation, updating and deletion of products.
You can build the back end of the app in any of the following frameworks:
● If you want to do Javascript, you can use Express (Typescript is good if you like it!
JS is ok, but if you want to do TS then even better!).
● If you want to go with Ruby, then use Ruby on Rails.

Extras

1. Implement authorization for your API.
   a. Any POST/PUT/DELETE method should require a method to authorize.
   b. GET operations should NOT require authorization.
2. Add a second data model to the app - brands.
   a. Each product must have a brand, so there can be no products without a
   brand.
   b. Brands should include name and logo_url properties.
   c. We recommend using a relational database for the app if you’re going to
   include this extra, using an ORM. Any of these is OK, but if you know a
   different one that’s ok too:
   i. Sequelize or Prisma for Javascript.
   ii. Django’s ORM or SQLAlchemy for Python.
   iii. RoR’s ORM for Ruby.

# Frontend

You will build a React frontend to display the products that your API exposes through the
backend. You can do plain React or use Nextjs, that’s up to your preference.
If you're using Ruby on Rails, you can build the frontend using React too, or using RoR's
tools for rendering HTML, whichever you pick is OK.
Your task will be building a frontend that can:
Display a list of products obtained from the backend, and it should display all of
them. You can do either pagination or infinite scrolling.
When clicking on a product, you should display a detailed view of that product.
You can do either a modal in the same page or a different page.
The list of products should include
The product’s image.
Its name.
The price of the product.
The detailed view should include the previous properties as well as the
description.

Extras

1. Implement an ‘admin’ view where the user can manage products and perform all
   CRUD operations through the UI.
   a. You can also do a bit more here, and implement a login to be able to enter
   the admin view.
2. If you completed Extra 2 in the backend, you can choose to display the brand logo
   in the product view of your frontend app.
   Deployment
   We want to see an app deployed online, both its frontend and backend. You can use
   services like Heroku, Vercel, Netlify or any other that you choose. If you want to show off
   and do it on AWS then great :) But any service is OK.
   Remember to keep it simple and deploy it where you are comfortable, don’t overdo it!
   Deliverables
   We expect the following for a completed assignment:
   ● Code in a public repo, either Github or Gitlab are fine.
   ○ It must include a README.md explaining your solution (briefly): features
   your app has, libraries used, how the API works, available endpoints, etc.
   ○ You can have the front and back end code in the same repo or in different
   ones, any of the two is fine.
   ○ Please include instructions on how to run each of the repos locally.
   ● A link to the project deployed online in any service where you feel comfortable
   deploying.
   ● If for any reason you submit your assignment with any missing requirements,
   please tell us what you couldn’t do and what you would do if you had more time to
   work on the problem.
   We wrote this challenge trying to keep it simple and clear - there’s no hidden pitfalls so
   we want you to keep it simple. Do not hesitate to reach out if you have any questions.
   For questions or delivering the completed challenge, please send an email to
   xxx@xxx.com (Spanish is OK for questions, no need to ask in
   English).
   Good luck!

```

```
