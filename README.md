# 🌟 Nuxt.js Project: A Test of My Skills 🌟

Welcome to this **Nuxt.js** project! 🚀 This project was created as a test of my skills in **Nuxt.js**, **Pinia**, **Tailwind CSS**, **Daisy UI**, and integrating with external APIs like **JSONPlaceholder** and **Supabase**. It showcases my ability to build a **full-stack application** with **authentication**, **routing**, and **reusable components**. Let me walk you through it! 😊

---

## 🚨 **Important Note**

To run this project, you need to provide your own **Supabase credentials** or use the ones I have shared here. Without the credentials, the authentication and Supabase functionalities will not work. 🔑

```txt
SUPABASE_URL="https://frmviyhtjjoqpstcaiqa.supabase.co"
SUPABASE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZybXZpeWh0ampvcXBzdGNhaXFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY4NjMyOTMsImV4cCI6MjA1MjQzOTI5M30.UdkxorlkAKb_RYQU3OlzWlf4U0dmjJCWpE75LzR0GAA"
```

---

## 🛠️ **Technologies Used**

- **Nuxt.js**: The core framework for building this app.
- **Pinia**: State management made simple and efficient.
- **Tailwind CSS**: Utility-first CSS framework for beautiful, responsive designs.
- **Daisy UI**: A Tailwind CSS plugin for pre-built, customizable components.
- **JSONPlaceholder API**: Used to fetch dummy data for posts and users.
- **Supabase**: Handles authentication (login, logout, signup) and provides a backend for posts and users.


---

## 🎨 **Features**

### 1. **Authentication** 🔐

- **Login**: Users can log in using their email and password.
- **Signup**: New users can create an account.
- **Logout**: Users can securely log out of their accounts.

### 2. **Routes** 🗺️

- **`/`**: Home page (displays posts or users).
- **`/users`**: Displays a list of users.
- **`/users/{id}`**: Shows detailed information about a specific user and their posts.
- **`/posts`**: Displays a list of posts.
- **`/posts/{id}`**: Shows detailed information about a specific post and its comments.
- **`/login`**: Login page.
- **`/signup`**: Signup page.

### 3. **Reusable Components** ♻️

- **`BaseCard`**: A highly customizable card component used throughout the app.
- **`PostItem`**: Displays a post with a title, truncated body, and a "Read More" button.
- **`UserItem`**: Displays a user's name, email, and address in a clean card layout.
- **`BaseLoading`**: A loading spinner for async operations.

### 4. **Theming** 🌈

Thanks to **Daisy UI**, the app's theme can be changed dynamically with just a few lines of code. Whether you want a **light theme**, **dark theme**, or something custom, it's super easy to switch! 🎨

---

## 🚀 **How to Run the Project**

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

## 🚀 **How to Run the Project**

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Set Up Supabase**:
   1- Create a .env file in the root directory.
   2- Add your Supabase credentials:
   
   ```bash
   SUPABASE_URL=your-supabase-url
   SUPABASE_KEY=your-supabase-key
   ```