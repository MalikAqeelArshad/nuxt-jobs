export function useApiFetch(url, options = {}) {
	const defaultHeaders = {
		'x-database': 'NUXT'
	};
	
	return $fetch(url, {
		...options,
		headers: {
			...defaultHeaders,
			...options?.headers
		}
	});
}