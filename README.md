# 📝 Blog Website

A modern, responsive blog website built with Node.js, Express, and EJS that allows users to create, read, update, and delete blog posts.

## 🌟 Features

- **Create Blog Posts**: Write and publish new blog posts with title and content
- **View All Posts**: Browse through all published blog posts on the homepage
- **Read Individual Posts**: View detailed blog posts on dedicated pages
- **Edit Posts**: Update existing blog posts with new content
- **Delete Posts**: Remove unwanted blog posts
- **Responsive Design**: Mobile-friendly interface using Bootstrap 5
- **Clean UI**: Modern and intuitive user interface
- **Navigation**: Easy navigation between different sections (Home, About, Contact)

## 🛠️ Technologies Used

- **Backend**: Node.js with Express.js
- **Database**: PostgreSQL with node-postgres (pg) driver
- **Template Engine**: EJS (Embedded JavaScript)
- **Frontend**: Bootstrap 5 for responsive design
- **Environment Variables**: dotenv for configuration management
- **Body Parser**: For handling form data
- **Static Files**: Custom CSS for additional styling

## 📦 Dependencies

```json
{
  "body-parser": "^2.2.0",
  "bootstrap": "^5.3.7",
  "dotenv": "^17.2.2",
  "ejs": "^3.1.10",
  "express": "^5.1.0",
  "pg": "^8.16.3"
}
```

## 📁 Project Structure

```
blog-website/
├── index.js                 # Main server file with PostgreSQL integration
├── package.json            # Project dependencies and scripts
├── package-lock.json       # Dependency lock file
├── .env                    # Environment variables (database config)
├── .gitignore             # Git ignore file
├── public/                # Static files
│   └── styles/           # CSS files
│       └── main.css      # Custom styles
├── views/                # EJS templates
│   ├── index.ejs         # Homepage template
│   ├── about.ejs         # About page template
│   ├── contact.ejs       # Contact page template
│   ├── create.ejs        # Create blog post form
│   ├── blog.ejs          # Individual blog post view
│   ├── edit.ejs          # Edit blog post form
│   └── partials/         # Reusable template components
│       ├── header.ejs    # Navigation header
│       └── footer.ejs    # Page footer
└── node_modules/          # Installed dependencies
```

## 🔗 Routes & Endpoints

| Route | Method | Description |
|-------|--------|-------------|
| `/` | GET | Homepage - displays all blog posts |
| `/about` | GET | About page |
| `/contact` | GET | Contact page |
| `/create` | GET | Create new blog post form |
| `/submit` | POST | Submit new blog post |
| `/blog/:id` | GET | View individual blog post |
| `/edit/:id` | GET | Edit blog post form |
| `/edit/:id` | POST | Update existing blog post |
| `/delete/:id` | POST | Delete blog post |

## �️ Database Integration - PostgreSQL

This application uses **PostgreSQL** as its primary database for persistent data storage. All blog posts are stored in a PostgreSQL database with the following setup:

### Database Configuration
- **Database**: PostgreSQL 
- **Driver**: node-postgres (pg) v8.16.3
- **Connection**: Environment variables for secure configuration
- **Features**: Full CRUD operations with async/await support

### Database Schema

The application uses a `blogs` table with the following structure:

```sql
CREATE TABLE blogs (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    date_created DATE NOT NULL,
    date_updated DATE
);
```

**Table Fields:**
- `id`: Auto-incrementing primary key
- `title`: Blog post title (required)
- `content`: Blog post content (required)  
- `date_created`: Timestamp when post was created
- `date_updated`: Timestamp when post was last updated (nullable)

### Environment Variables Setup

Create a `.env` file in your project root with the following variables:

```env
DB_USER=your_postgres_username
DB_HOST=localhost
DB_NAME=blogs
DB_PASSWORD=your_postgres_password
DB_PORT=5432
```

### Setup Instructions

1. **Install PostgreSQL** on your system
2. **Create Database:**
   ```sql
   CREATE DATABASE blogs;
   ```
3. **Create Table:**
   ```sql
   \c blogs;
   CREATE TABLE blogs (
       id SERIAL PRIMARY KEY,
       title TEXT NOT NULL,
       content TEXT NOT NULL,
       date_created DATE NOT NULL,
       date_updated DATE
   );
   ```
4. **Configure Environment:** Create `.env` file with your database credentials
5. **Install Dependencies:** `npm install`
6. **Run Application:** `node index.js`

## 🎨 Features Overview

### Blog Post Management
- **Create**: Users can create new blog posts with title and content
- **Read**: All posts are displayed on the homepage with creation dates
- **Update**: Existing posts can be edited and updated
- **Delete**: Posts can be permanently removed

### Blog Post Structure
Each blog post contains:
- **ID**: Unique identifier
- **Title**: Post headline
- **Content**: Main blog content
- **Date Created**: Timestamp of creation
- **Date Updated**: Timestamp of last modification (if edited)

### User Interface
- **Bootstrap Integration**: Responsive design that works on all devices
- **Navigation Bar**: Easy access to all sections
- **Clean Layout**: Professional and readable design
- **Form Validation**: Basic client-side validation for blog creation

## 🔮 Future Enhancements

- **User Authentication**: Allow multiple users with login/logout
- **Rich Text Editor**: Enable formatted text, images, and links
- **Categories & Tags**: Organize posts by topics
- **Search Functionality**: Find posts by keywords
- **Comments System**: Allow readers to comment on posts
- **Image Upload**: Support for featured images
- **SEO Optimization**: Meta tags and URL optimization
- **RSS Feed**: Enable blog subscriptions
- **Admin Dashboard**: Statistics and management interface
- **Database Indexing**: Optimize query performance
- **Connection Pooling**: Handle multiple concurrent database connections
- **Data Validation**: Add comprehensive input validation and sanitization

**Happy Blogging! 🎉**

