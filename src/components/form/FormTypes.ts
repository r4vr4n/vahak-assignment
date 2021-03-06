export type JourneyDetailsTypes = {
	source: string;
	destination: string;
	travellers: string;
	carType: string;
};

export type BidDetailsTypes = {
	price: string;
	mobile: string;
	name: string;
	remarks: string;
	isRateNegotiable: boolean;
	getUpdates: boolean;
};

export type OtpTypes = {
	firstDigit: string;
	secondDigit: string;
	thirdDigit: string;
	fourthDigit: string;
};
