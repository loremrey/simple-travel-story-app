import ADD_STORY_IMG from '../assets/images/add-story.svg';
import NO_SEARCH_DATA_IMG from '../assets/images/no-search-data.svg';
import NO_FILTER_DATA_IMG from '../assets/images/no-filter-data.svg';

export const validateEmail = (email) => {
	const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return regex.test(String(email).toLowerCase());
};

export const getInitials = (name) => {
	if (!name) return '';
	const words = name.split(' ');
	let initials = '';

	for (let i = 0; i < Math.min(words.length, 2); i++) {
		initials += words[i][0];
	}
	return initials.toUpperCase();
};

export const getEmptyCardMessaege = (filterType) => {
	switch (filterType) {
		case 'search':
			return `Oops! No stories found matching your search.`;
		case 'date':
			return `No stories found in the given date range.`;
		default:
			return `Start creating your first Travel Story! Click the 'Add' button to jot down yout thoughts, ideas, adn memories. Let's get started!`;
	}
};

export const getEmptyCardImg = (filterType) => {
	switch (filterType) {
		case 'search':
			return NO_SEARCH_DATA_IMG;
		case 'date':
			return NO_FILTER_DATA_IMG;
		default:
			return ADD_STORY_IMG;
	}
};
