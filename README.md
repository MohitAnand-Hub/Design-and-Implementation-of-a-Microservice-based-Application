# Design-and-Implementation-of-a-Microservice-based-Application

1. Backend (NestJS Microservices)
Architecture
Two independent NestJS microservices:
product-service → manages product CRUD operations
order-service → manages orders and communicates with product service
Services communicate via HTTP REST.
Each service runs on a separate port (e.g., 3001 and 3002)

Backend Technologies
Technology	            Purpose
NestJS	                Node.js framework for structured backend development
TypeScript	            Type safety and cleaner code
Express (built-in)	    HTTP server
ts-node-dev	            Hot-reloading for development
Class Validator         Input validation
Axios	                  Inter-service HTTP communication

Backend Features
CRUD for products (POST, GET, PUT, DELETE)
CRUD for orders
Order creation references product data
Inter-service communication: Order service fetches product details before creating order

2. Frontend (Next.js + TypeScript + MUI)
Architecture
Built using Next.js (React framework) with TypeScript.
Dynamic form rendering based on JSON configuration.
All fields mandatory with strong validation.
Beautiful, responsive Material UI layout.
Data persisted using localStorage (simulating persistence).

Frontend Technologies
Technology	             Purpose
Next.js	                 React framework for SSR and routing
React Hook Form	         Form handling and validation
TypeScript	             Strong typing and maintainability
Material UI (MUI)	       Beautiful UI components
LocalStorage	           Data persistence between reloads
JSON-driven rendering    Dynamic form based on JSON schema

Frontend Features
Dynamic field rendering (TEXT, LIST, RADIO)
Form persistence (auto-saves and reloads)
All fields mandatory
Inline error messages
Centralized, responsive layout
Alert on incomplete submission
Clean professional UI design

JSON Schema
{
  "data": [
    {
      "id": 1,
      "name": "Full Name",
      "fieldType": "TEXT",
      "minLength": 1,
      "maxLength": 100,
      "defaultValue": "John Doe",
      "required": true
    },
    {
      "id": 2,
      "name": "Email",
      "fieldType": "TEXT",
      "minLength": 1,
      "maxLength": 50,
      "defaultValue": "hello@mail.com",
      "required": true
    },
    {
      "id": 6,
      "name": "Gender",
      "fieldType": "LIST",
      "defaultValue": "1",
      "required": true,
      "listOfValues1": ["Male", "Female", "Others"]
    },
    {
      "id": 7,
      "name": "Love React?",
      "fieldType": "RADIO",
      "defaultValue": "1",
      "required": true,
      "listOfValues1": ["Yes", "No"]
    }
  ]
}

Communication Flow
Step 1:
Frontend sends requests to product/order microservices using REST API (via Postman or frontend integration).
<img width="1569" height="884" alt="image" src="https://github.com/user-attachments/assets/ef8aa4ad-d163-43d5-8c14-342ac163424a" />
<img width="1528" height="896" alt="image" src="https://github.com/user-attachments/assets/90247465-6bb9-4626-9c75-43d4f7833913" />
Step 2:
Order service fetches product details from Product service before creating the order.
Step 3:
Frontend uses JSON to dynamically render signup form and stores user data locally.
<img width="1484" height="962" alt="image" src="https://github.com/user-attachments/assets/1d4b89ef-f523-49da-893a-db32dd72036a" />

Backend
# In backend/product-service
npm install
npm run start:dev
# In backend/order-service
npm install
npm run start:dev
Product Service → http://localhost:3001/api/products
Order Service → http://localhost:3002/api/orders
Frontend
npm install
npm run dev
App → http://localhost:3000

Usage Flow
Start both microservices (product-service, order-service)
Start the frontend
Open http://localhost:3000
Fill the form
Try submitting without all fields → see validation
Submit with all fields → success popup

<img width="1347" height="962" alt="image" src="https://github.com/user-attachments/assets/242ede97-feeb-4513-9a84-4a8f32ef91a5" />




