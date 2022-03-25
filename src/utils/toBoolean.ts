export const toBoolean = (value: string) => {
	if (value?.toLowerCase() === 'true') return true;
	else return false;
};
