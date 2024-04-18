const API_BASE_URL = 'http://localhost:5050/api/v1/users';

export async function getUser(email: string, password: string) {
    try {
        const encodedEmail = encodeURIComponent(email);
        const encodedPassword = encodeURIComponent(password);

        const url = `${API_BASE_URL}?email=${encodedEmail}&password=${encodedPassword}`;

        const response = await fetch(url.toString(), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            const status = response.status;
            const statusText = response.statusText;
            throw new Error(`Failed to fetch user data. Status: ${status}, StatusText: ${statusText}`);
        }

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            throw new Error('Unexpected response format: Not JSON');
        }


        return await response.json();
    } catch (error) {
        console.error('Error: ', error);
        throw error;
    }
}