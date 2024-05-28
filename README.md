README.md

# Job Search Application

This project demonstrates how to set up Elasticsearch with Docker, populate it with sample job data, and create a React application to search and display jobs using Reactivesearch.

## Prerequisites

- Docker
- Node.js and npm

## Setup and Run Elasticsearch

1. **Clone the repository** (if applicable):

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   Start Elasticsearch with Docker:
   ```

docker-compose up -d

Populate Elasticsearch with Sample Data

Install dependencies:

```bash
npm install
```

Run the script to populate data:
```bash
node populate_es.js
```

Run the React Application
Navigate to the React application directory:

```bash
cd job-search-app
```

Install React dependencies:
```bash
npm install
```

Start the React application:
```bash
npm start
```

Your job search application should now be running locally at http://localhost:3000, connected to your Elasticsearch instance.


That's it! You should now have a fully functional job search application running locally.
