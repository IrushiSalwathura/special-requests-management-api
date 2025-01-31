# NestJS Backend API

## Getting Started
This guide walks you through setting up a NestJS backend API project.

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
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

3. Set up environment variables:
   Create a `.env` file in the root directory and configure necessary values:
   ```env
   PORT=3000
   DATABASE_URL=mongodb://localhost:27017/requestmgtdb
   ```

### Running the Application

```bash
npm run build
npm run start
```

### Database Authentication
Basic authentication is implemented for user access control.
Users are authenticated using a MongoDB-based authentication system.


### Contributing
Feel free to submit issues or pull requests if you find bugs or want to enhance features.

### License
This project is licensed under the MIT License.
