# My Blog App

## Description

In this project, I aimed to create My Blog App.

## Project Skeleton


```
Milestone Blog App (folder for redux)

|----readme.md         # Given to the students (Definition of the project)
SOLUTION
├── src
|    ├── index.css
|    ├── index.js
|    ├── App.css
|    ├── App.js
|    ├── app
|    │   └── store.jsx
|    ├── assets
|    │   ├── about.png
|    ├── components
|    │   ├── auth
|    │   │   ├── LoginFom.jsx
|    │   │   └── RegisterForm.jsx
|    │   ├── blog
|    │   │   ├── Card.jsx
|    │   │   ├── CommentCard.jsx
|    │   │   ├── CommentForm.jsx
|    │   │   ├── DeleteModal.jsx
|    │   │   └── UpdateModal.jsx
|    │   ├── FooTer.jsx
|    │   ├── NavBar.jsx
|    ├── features
|    │   ├── authSlice.jsx
|    │   └── blogSlice.jsx
|    ├── helper
|    │   └── ToastNotify.jsx
|    ├── hooks
|    │   ├── useAuthCalls.jsx
|    │   ├── useAxios.jsx
|    │   └── useBlogCalls.jsx
|    ├── pages
|    │   ├── About.jsx
|    │   ├── Dashboard.jsx
|    │   ├── Detail.jsx
|    │   ├── Login.jsx
|    │   ├── NewBlog.jsx
|    │   ├── NotFound.jsx
|    │   ├── Profile.jsx
|    │   └── Register.jsx
|    └── router
|        ├── AppRouter.jsx
|        └── PrivateRouter.jsx
```

## Expected Outcome

![Blog App](blogapp1.gif)

## Objective

Build a Milestone Blog App using ReactJS.

### At the end of the project, I will learn the following topics;

- HTML

- CSS

- JS

- ReactJS

- DATA


## Steps to Solution

- Step 1: I created React App using "npx create-react-app my-blog-app"

- Step 2: I used Django backend for authentication and CRUD operations.

- Step 3 : I used css frameworks like Bootstrap, Tailwind Css, Material UI.

- Step 4 : I added the project gif to the project and my README.md file


## API

```
  login => users/auth/login/
  register => users/register/
  logout => users/auth/logout/
```
- Post Read/List

```javascript
  endpoints => api/blogs/
  method: GET
  no authentication
  comments, post_view ve likes ...
```

- Post Create

```javascript
  endpoints => api/blogs/
  method: POST
  headers: {"Authorization":`Token ${yourtoken}`}

  body: {
      "title": "string",
      "content": "string",
      "image": "http://example.com",
      "category": 0,// category endpointinden gelen verilerden seçmelisiniz
      "status": "d",// backende d olarak giderse ana ekranda gözükmez, My Blogs sayfasında gözükür. "d" valuesunu taslak gibi düşünebiliriz. Hazırladığınız selectboxlarda valua attiributelerine "d" ve "p" değerlerini girmelisiniz.
    }
    // yukarıdaki verileri göndermöeniz yeterli olacaktır
.
    category endpoints => "api/categories"
    status => {
      "d":"draft",
      "p":"published"
    }

```

- Post Update

```javascript
  endpoints => api/blogs/{post_id}/
  method: PUT
  headers: {"Authorization":`Token ${yourtoken}`}

  body: {
      "title": "string",
      "content": "string",
      "image": "http://example.com",
      "category": 0,
      "status": "d",
    }

    category endpoints => "api/categories"
    status => {
      "d":"draft",
      "p":"published"
    }
```

- Post Delete

```javascript
  endpoints => api/blogs/{post_id}/
  method: DELETE
  headers: {"Authorization":`Token ${yourtoken}`}
```

- Comments Create

```javascript
  endpoints => api/comments/{post_id}/
  method: POST
  headers: {"Authorization":`Token ${yourtoken}`}

  body:{
    "post":post_id,
    "content": ""
  }

```

- Likes Create

```javascript
  endpoints => api/likes/{post_id}/
  method: POST
  headers: {"Authorization":`Token ${yourtoken}`}
```

- Get Post Detail
```
  endpoints => api/blogs/${post.id}/
  method: GET
  headers: {"Authorization":`Token ${yourtoken}`}
```

- User Blogs
```
  endpoints => api/blogs/?author=${user.id}
  method: GET
  headers: {"Authorization":`Token ${yourtoken}`}
```

- Sample Get Response
```json
 

```
