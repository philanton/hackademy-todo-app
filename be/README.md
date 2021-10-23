# Todo App Backend

Backend for this service is fully in-memory, so there are no need in providing data to external connetions.
Backend exposed on port `8080`.

## Public endpoints

### POST /user/signup

JSON params: `{"email":"em@il.com","password":"drowssap"}`
Response: `201 - "registered"`

### POST /user/signin

JSON params: `{"email":"em@il.com","password":"drowsapp"}`
Response: `200 - "$JWT"`

## Private endpoints

### GET /user/me

Headers: `Authorization: Bearer $JWT`
Response: `200 - {"email":"em@il.com"}`

## TodoList endpoints

### POST /todo/lists

Headers: `Authorization: Bearer $JWT`
JSON params: `{"name":"tasks"}`
Response: `201 - {"id":0,"name":"tasks"}`

### GET /todo/lists/:list_id

Headers: `Authorization: Bearer $JWT`
Response: `200 - {"id":0,"name":"tasks"}`

### GET /todo/lists

Headers: `Authorization: Bearer $JWT`
Response: `200 - [{"id":0,"name":"tasks"}]`

### PUT /todo/lists/:list_id

Headers: `Authorization: Bearer $JWT`
JSON params: `{"name":"new tasks"}`
Response: `200 - {"id":0,"name":"new tasks"}`

### DELETE /todo/lists/:list_id

Headers: `Authorization: Bearer $JWT`
Response: `204 - ""`

## List tasks endpoints

### POST /todo/lists/:list_id/tasks

Headers: `Authorization: Bearer $JWT`
JSON params: `{"task_name":"taska","description":"no matter"}`
Response: `201 - {"id":0,"name":"taska","description":"no matter","status":false}`

### GET /todo/lists/:list_id/tasks/:task_id

Headers: `Authorization: Bearer $JWT`
Response: `200 - {"id":0,"name":"taska","description":"no matter","status":false}`

### GET /todo/lists/:list_id/tasks

Headers: `Authorization: Bearer $JWT`
Response: `200 - [{"id":0,"name":"taska","description":"no matter","status":false}]`

### PUT /todo/lists/:list_id/tasks/:task_id

Headers: `Authorization: Bearer $JWT`
JSON params: `{"name":"new taska","description":"now matter","status":true}`
Response: `200 - {"id":0,"name":"new taska","description":"now matter","status":true}`

### DELETE /todo/lists/:list_id/tasks/:task_id

Headers: `Authorization: Bearer $JWT`
Response: `204 - ""`
