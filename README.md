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
- **Template Engine**: EJS (Embedded JavaScript)
- **Frontend**: Bootstrap 5 for responsive design
- **Body Parser**: For handling form data
- **Static Files**: Custom CSS for additional styling

## 📦 Dependencies

```json
{
  "body-parser": "^2.2.0",
  "bootstrap": "^5.3.7",
  "ejs": "^3.1.10",
  "express": "^5.1.0"
}
```

## 📁 Project Structure

```
blog-website/
├── index.js                 # Main server file
├── package.json            # Project dependencies and scripts
├── package-lock.json       # Dependency lock file
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

## 💾 Data Storage

Currently, the application stores blog posts in memory using a JavaScript array. This means:
- ⚠️ **Data is not persistent** - all blog posts will be lost when the server restarts
- 💡 **For production use**, consider implementing a database solution like MongoDB, PostgreSQL, or MySQL

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

- **Database Integration**: Add persistent data storage
- **User Authentication**: Allow multiple users with login/logout
- **Rich Text Editor**: Enable formatted text, images, and links
- **Categories & Tags**: Organize posts by topics
- **Search Functionality**: Find posts by keywords
- **Comments System**: Allow readers to comment on posts
- **Image Upload**: Support for featured images
- **SEO Optimization**: Meta tags and URL optimization
- **RSS Feed**: Enable blog subscriptions
- **Admin Dashboard**: Statistics and management interface

**Happy Blogging! 🎉**

