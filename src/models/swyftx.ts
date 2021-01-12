export interface Balance {
    assetId: number;
    assetCode: string;
    availableBalance: string;
}

export interface OrderResponse {
    orders: {
        secondary_asset: string;
    }[];
    id: number;
}
