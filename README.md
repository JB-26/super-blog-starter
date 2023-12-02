# Super Blog Starter
_Like any other starter, only super!_

Super Blog Starter is a template designed for you to get up and running with a blog that has plenty of features out of the box.

The current version is __v0.1.0__

This blog is built using [NextJS](https://nextjs.org/).

And also with the following dependencies:
- @vercel/analytics
- date-fns
- gray-matter
- next
- react
- react-dom
- remark
- remark-html
- rss

Click [here](https://super-blog-starter.vercel.app/) to see a demo of this template.

# Getting started...

To get started with this (after cloning the repo), run the following to install all the packages and dependencies:
`npm install`

To run this application locally:
`npm run dev`

# What's included in Super Blog Starter?

This repo will allow you to build your own website/blog with the following pages/features:
- Homepage
- About page
- Blog page
    - Pagination included (and customisable)
    - Pinned Post feature
    - Links to blog posts
    - Ordered by newest post first
    - Tag your posts with a category that readers can find related posts
    - Search bar (NEW!)
- Blog posts
    - Signature at the bottom (that you can customise!)
    - Code formatting
    - Quote formatting
- Responsive design
- Header and Footer (that you can customise!)
- Customisable 404 page
    - Search bar (NEW!)
- RSS feed (update the siteMetadata.js file with your changes)
- ESLint

## If deploying to Vercel...
- Analytics included (this will only work on if deploying to Vercel)

If you don't want to use Analytics, remove the `Analytics` tag located in `pages/_app.js`

# Configuration
## Index
You'll need to open the `index.js` file to begin making changes, including:
- Adding your name
- Changing the photo
- Subtitle
- Introduction text
- Changing email at the bottom to a valid email

The photo to be changed is located at `../public/images/new_2023.webp`

## About
You'll need to open the `about.js` file to begin making changes, including:
- Adding a title
- Adding paragraph text
- Adding a photo

The photo to be changed is located at `../public/images/me.webp`

## Blog
You'll need to open the `blog.js` file to begin making changes, including:
- Changing the number of posts per page. You'll need to change the value on the constant called `postsPerPage`. This will have a value of 5 to start with. This will affect the number of pages your blog will have.
- The pinned post. You'll need to change the value on the constant called `specificPostName`. The value is the name of the file you want pinned, __without the .md file extension__.

## Blog posts
All posts are stored in the `posts` directory, which contains __markdown__ files.

Simply add a new markdown file to the `posts` directory and the new post will appear on the blog! Make sure that your file ends with the `.md` file extension (posts that end with the `.markdown` file extension won't work)

Each blog post must have the following configuration:

```
---
title: "A post"
date: "2023-08-04" #YYYY-MM-DD
tags: ["Test"]
---
```

## Signature
The signature is displayed at the end of each blog post. You'll need to open the `components/signature.js` file to begin making changes, including:
- The text
- The photo

The photo to be changed is located at `../public/images/profile.webp`

# Header
You'll need to open the `components/header.js` to begin making changes, including:
- Changing the icon used in the middle, the image to be changed is `../public/icon.webp` (the icon used here is 32 x 32 pixels)

# Footer
You'll need to open the `components/footer.js` to begin making changes, including:
- Adding new links
- Updating existing links

# Favicon
You'll notice that the favicon is a blue square (also used in the header). Feel free to change this.
You can use something like [Favicon Generator](https://favicon.io/favicon-generator/) to create your own.

You'll need to update the following files under the `public` directory:
- public/android-chrome-192x192.png
- public/android-chrome-512x512.png
- public/apple-touch-icon.png
- public/favicon-16x16.png
- public/favicon-32x32.png
- public/favicon.ico

# RSS
To make changes to the metadata for the RSS feed, you'll need to open the `components/siteMetadata.js` file to begin making changes.
You'll need to change:
- title
- description
- siteUrl
- author
- language

If you want to take a look at how the RSS feed is generated, take a look at the RSS file located at `pages/api/rss.js`

# Site title
To update the site title, you'll need to open the `components/layout.js` file to begin making changes.

To update the title, update the constant called `siteTitle`.