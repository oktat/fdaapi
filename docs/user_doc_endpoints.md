# Endpoints

## Path of endpoints

* /api/categories
* /api/invoices
* /api/orders
* /api/partners
* /api/positions
* /api/products
* /api/workers

## Categories

| Endpoint | Method | Auth | CRUD |
|---|---|---|---|
| /categories | GET | no | read |
| /categories/:id | GET | no | read |
| /categories | POST | no | create |
| /categories/:id | PUT | no | update |
| /categories/:id | DELETE | no | delete |

| Column | Type |
|---|---|
| id | integer |
| name | string |

## Invoices

| Endpoint | Method | Auth | CRUD |
|---|---|---|---|
| /invoices | GET | no | read |
| /invoices/:id | GET | no | read |
| /invoices | POST | no | create |
| /invoices/:id | PUT | no | update |
| /invoices/:id | DELETE | no | delete |

| Column | Type |
|---|---|
| id | integer |
| accountNumber | string |
| paymentDeadline | date |
| partnerId | integer |
| amount | decimal |

## Orders

| Endpoint | Method | Auth | CRUD |
|---|---|---|---|
| /orders | GET | no | read |
| /orders/:id | GET | no | read |
| /orders | POST | no | create |
| /orders/:id | PUT | no | update |
| /orders/:id | DELETE | no | delete |

Columns:

| Column | Type |
|---|---|
| id | integer |
| date | date |
| partnerId | integer |
| workerId | integer |
| status | string |

## Partners

| Endpoint | Method | Auth | CRUD |
|---|---|---|---|
| /partners | GET | no | read |
| /partners/:id | GET | no | read |
| /partners | POST | no | create |
| /partners/:id | PUT | no | update |
| /partners/:id | DELETE | no | delete |

| Column | Type |
|---|---|
| id | integer |
| name | string |
| taxNumber | string |
| contactPerson | string |
| type | string |

## Positions

| Endpoint | Method | Auth | CRUD |
|---|---|---|---|
| /positions | GET | no | read |
| /positions/:id | GET | no | read |
| /positions | POST | no | create |
| /positions/:id | PUT | no | update |
| /positions/:id | DELETE | no | delete |

| Column | Type |
|---|---|
| id | integer |
| name | string |

## Products

| Endpoint | Method | Auth | CRUD |
|---|---|---|---|
| /products | GET | no | read |
| /products/:id | GET | no | read |
| /products | POST | no | create |
| /products/:id | PUT | no | update |
| /products/:id | DELETE | no | delete |

| Column | Type |
|---|---|
| id | integer |
| articleNumber | string |
| name | string |
| unitPrice | decimal |
| categoryId | integer |

## Workers

| Endpoint | Method | Auth | CRUD |
|---|---|---|---|
| /workers | GET | no | read |
| /workers/:id | GET | no | read |
| /workers | POST | no | create |
| /workers/:id | PUT | no | update |
| /workers/:id | DELETE | no | delete |

| Column | Type |
|---|---|
| id | integer |
| name | string |
| email | string |
| enryDate | date |
| positionId | integer |
