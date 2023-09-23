**Getting started with the app**

**Technologies used to build the application**

* [Node.js](https://nodejs.org/docs/latest-v19.x/api/)


# Installation

Create a new directory and initialize git in it. Clone this repository by running
```sh
$ git clone https://github.com/BagzieGracious/booking-challenge.git (use http)
$ git clone git@github.com:BagzieGracious/booking-challenge.git (use ssh)
```

Install packages
```sh
$ yarn install
```

Create Prisma Schema
```sh
$ yarn gen:schema
```

Generate Prisma Packages
```sh
$ npx prisma generate
```

Make Migrations
```sh
$ npx prisma migrate dev
```

Run Seeders
```sh
$ yarn seed
```

Run Application
```sh
$ yarn dev
```

Run Tests
```sh
$ yarn tests
```

Test your setup using a client app like postman
