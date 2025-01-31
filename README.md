# NestJS Backend API

## Getting Started
This guide walks you through setting up a NestJS backend API project.

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/)
- [NestJS CLI](https://docs.nestjs.com/cli): `npm install -g @nestjs/cli`

### Installation
1. Clone the repository:
```bash
   git clone https://github.com/IrushiSalwathura/special-requests-management-api.git
   cd special-requests-management-api
```

2. Install dependencies:
```bash
   npm install
```

### Set up MongoDB locally

   1. Open MongoDB Compass

      * Launch MongoDB Compass on your system.
      * Click "Connect" and enter your MongoDB connection string:

```bash
   mongodb://localhost:27017
``` 

   2. Create a New Database (if not already created)

      * Click on "Create Database" in the left sidebar.
      * Enter a Database Name (e.g., myDatabase).
      * Add a Collection Name (e.g., users).
      * Click "Create Database".

   3. Create the users Collection

      * Open the database (requestmgtdb).
      * Click "Add Collection".
      * Enter Collection Name: users.
      * Click "Create Collection".

   4. Insert a Sample User Document

      * Open the users collection.
      * Click "Insert Document".
      * Replace the existing document with:
```bash      
         {
         "name": "John Doe",
         "email": "john@example.com",
         "password": "password",
         "role": "user",
         "createdAt": { "$date": "2025-01-31T00:00:00Z" }
         }
```
      * Click "Insert".

### Running the Application

```bash
npm run build
npm run start
```

### API Documentation
Please refer to the API documentation via below link.
https://docs.google.com/document/d/1-ZLpLmFIURDlTWe6Ut7XgsGCQqyCEHR4kZGPGUYl1_s/edit?usp=sharing

### Contributing
Feel free to submit issues or pull requests if you find bugs or want to enhance features.

### License
This project is licensed under the MIT License.
