import dotenv from "dotenv";

dotenv.config();

const verifyId = (id) => {
	if (id.match(/^[0-9a-fA-F]{24}$/)) {
		return true;
	}
	return false;
};

const findProductInCardsArray = (cards, pId) => {
	cards.find((id) => {
		return id.toString() === pId;
	});

	return -1;
};

const getIndexOfProduct = (cards, pId) => {
	let index = cards.indexOf(pId);
	return index;
};

export { verifyId, findProductInCardsArray, getIndexOfProduct };
