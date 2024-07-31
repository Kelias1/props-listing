export interface MainImage {
	url_570xN: string;
}

export interface Item {
	listing_id: number;
	url: string;
	MainImage?: MainImage;
	title?: string;
	currency_code: string;
	price: string;
	quantity: number;
}