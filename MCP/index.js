import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

import { z } from "zod";

const server = new McpServer({
  name: "Weather Data Featcher",
  version: "1.0.0",
});

async function getWeatherByCity(city = "") {
  if (city.toLocaleLowerCase() == "gilgit") {
    return { tem: "30c", forcast: "change to heave raining" };
  }

  if (city.toLocaleLowerCase() == "hunza") {
    return { tem: "20c", forcast: "change to heave winds" };
  }
  if (city.toLocaleLowerCase() == "nalter") {
    return { tem: "10c", forcast: "change to heave cloudy" };
  }

  return { tem: null, error: "unable to get data" };
}

server.tool(
  "getWeatherDataByCityName",
  {
    city: z.string(),
  },
  async ({ city }) => {
    return {
      content: [
        { type: "text", text: JSON.stringify(await getWeatherByCity(city)) },
      ],
    };
  }
);

async function init() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

init();
