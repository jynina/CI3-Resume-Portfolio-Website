
# 🧾 Resume Website with CMS

This is a personal resume website built with **CodeIgniter 3** featuring an **admin dashboard**, dynamic content management system, and responsive front-end. You can update your information (about, skills, education, experience, and projects) without touching the code. It also features file/image uploads and login-based admin access.

---

## 🌟 Features

- ✅ **Admin Login** – Secure login system using sessions  
- 🧑‍💼 **Manage Personal Info** – Name, title, profile image, and intro  
- 💼 **Project Management** – Add project details and multiple images  
- 🎓 **Education Entries** – Add schools, academic year, and descriptions  
- ⚙️ **Skills Progress** – Circular animated skill indicators  
- 📄 **Resume Upload** – Upload and preview PDF/doc resume files  
- 🕘 **Logs** – Track admin actions like create/edit/delete  
- ✉️ **Contact Messages** – View form submissions in admin  
- 📱 **Responsive Design** – Works on mobile, tablet, and desktop  
- 📂 **Dropzone.js Integration** – Drag-and-drop upload UI with previews  

---

## 🛠️ Tech Stack

| Layer        | Tool/Framework     |
|--------------|--------------------|
| Backend      | PHP (CodeIgniter 3) |
| Frontend     | HTML, Bootstrap 5, jQuery |
| File Upload  | Dropzone.js        |
| Icons        | Font Awesome       |
| Database     | MySQL              |

---

## 📁 Folder Structure
- application/
- controllers/
- models/
- views/
- assets/
- css/
- js/
- uploads/
- system/

---

## 🚀 Setup Instructions

### 1. Clone the Repo
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

```

### 2. Import the Database

    1. Open your MySQL (e.g., phpMyAdmin or MySQL CLI)

    2. Import the provided db_resume.sql

    3. Make sure you have a tbl_users table with login credentials.

### 3. Set Up Database Credentials

    Edit application/config/database.php:

    'username' => 'your_db_user',
    'password' => 'your_db_pass',
    'database' => 'db_resume',

### 4. Login

    Visit: http://localhost/your-folder/admin_dashboard

    Default Login Credentials: (Change this in your database!)
    Username: admin
    Password: admin123

---


## 💡 Development Notes

- Forms are handled via AJAX (with FormData support)

- A single generic AJAX handler was used, but login uses a separate one due to redirect behavior

- Observer is used for triggering skill bar animations only when in view

- Logs are inserted in the tbl_logs table when admin modifies entries

---

## 🔐 Security Tips

- Always hash passwords before storing in the database (e.g., password_hash())

- Escape user input and use CodeIgniter’s built-in helpers

- Protect routes by checking for session (e.g., logged_in)

---

## ✍️ Author

- Yours truly, jynina

