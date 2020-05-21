import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  const message = 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!';
  return {
    statusCode: 200,
    body: JSON.stringify({
      message,
      input: event,
    }, null, 2),
  };
};
