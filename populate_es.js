const { Client } = require("@elastic/elasticsearch");
const client = new Client({ node: "http://localhost:9200" });

async function run() {
  try {
    console.log("Deleting the index if it exists...");
    const deleteResponse = await client.indices.delete(
      { index: "jobboard" },
      { ignore: [404] }
    );
    console.log("Delete response:", deleteResponse);

    console.log("Creating the index with mappings...");
    const createResponse = await client.indices.create({
      index: "jobboard",
      body: {
        mappings: {
          properties: {
            jobTitle: { type: "text" },
            location: { type: "text" },
            company: { type: "text" },
            description: { type: "text" },
          },
        },
      },
    });
    console.log("Create response:", createResponse);

    const jobs = [
      {
        jobTitle: "Software Engineer",
        location: "Austin, TX",
        company: "Google",
        description: "Lorem Ipsum",
      },
      {
        jobTitle: "Truck Driver",
        location: "Dallas, TX",
        company: "Trucking Company",
        description: "Lorem Ipsum",
      },
      {
        jobTitle: "Nurse",
        location: "New York, NY",
        company: "Hospital",
        description: "Lorem Ipsum",
      },
    ];

    console.log("Indexing job documents...");
    for (const job of jobs) {
      const indexResponse = await client.index({
        index: "jobboard",
        body: job,
      });
      console.log("Index response:", indexResponse);
    }

    console.log("Refreshing the index...");
    const refreshResponse = await client.indices.refresh({ index: "jobboard" });
    console.log("Refresh response:", refreshResponse);

    console.log("Indexing completed.");
  } catch (error) {
    console.error("Error during indexing:", error.meta.body.error);
  }
}

run().catch(console.log);
