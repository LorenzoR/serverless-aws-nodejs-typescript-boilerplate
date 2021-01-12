import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import Portfolio from '../services/portfolio';

export const getProfit: APIGatewayProxyHandler = async (event, _context) => {
    const profit = await Portfolio.getProfit();

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: profit,
            input: event,
        }, null, 2),
    };
};

export const getOrders: APIGatewayProxyHandler = async (event, _context) => {
    const orders = await Portfolio.getOrders(event.pathParameters.id);

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: orders,
        }, null, 2),
    };
};

export const getRates: APIGatewayProxyHandler = async (event, _context) => {
    const rates = await Portfolio.getLiveRates('');

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: rates,
        }, null, 2),
    };
};