# Project Name

Weather-app

## Overview

Weather-app is a forecase website that shows information about any city you want. It provides hourly info also.

## Features

- Feature 1: search for ant city in the world
- Feature 2: 5 days weather info
- Feature 3: store 5 last searches

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16.x or higher)
- npm (v6.x or higher) or Yarn (v1.x or higher)

### 4. Project Structure

myproject/
├── public/ # Static assets
├── src/
│ ├── components/ # Reusable components
│ ├── app/ # Next.js pages
│ ├── styles/ # CSS/Sass files
│ ├── utils/ # Utility functions
│ ├── services/ # API service files
│ └── store/ # State management
│ └── constants/ # Constant variables
│ └── hooks/ # Custom hooks
├── .env # Environment variables
├── next.config.js # Next.js configuration
├── package.json # Project metadata and scripts
└── README.md # Project documentation

### 5. Usage

When you enter to the Home page there is a search bar to search any city weather
By clicking the card you can get Hourly forecast of the city
By clicking 5 last searched cards you will be navigate to the city information page

```markdown
## Usage

### Navigating the Application

- Home Page: The home page provides an overview of 5 days weather info with each day hourly forecast.
- Search Functionality: Users can search for any city weather they want
- User Profiles: In the future I'm planing to make profile page for each user

### Components

- `Header`: The header component is used for search bar and profile info and others...
- `History component`: The history component is used for saving your last searches and you can check the searches at any time
```
