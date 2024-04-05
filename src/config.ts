import * as config from './config';

let responsiveStatus = 'UNKNOWN';

export const determineResponsiveStatus = () => {
	if (window.innerWidth >= 768) {
		config.setResponsiveStatus('computer');
	} else {
		config.setResponsiveStatus('mobile');
	}
};

export const getResponsiveStatus = () => {
	return responsiveStatus;
};

export const setResponsiveStatus = (value:string) => {
	console.log('set', value);
	responsiveStatus = value;
};
