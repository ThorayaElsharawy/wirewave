export const useAuth = () => {
    const signIn = async (email: string, password: string) => {
        if (!email || !password) {
            console.error('Email or password is missing');
            return;
        }
        try {
            const response = await fetch('http://127.0.0.1:8090/api/collections/users/auth-with-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ identity: email, password }), // Change to 'identity'
            });

            const data = await response.json();

            if (!response.ok) {
                console.error('Error:', data);
                alert(`Error: ${data.message || 'Failed to authenticate'}`);
                return;
            }
            
            if (data.token) {
                localStorage.setItem('isAuthenticated', 'true');
            }

        } catch (error) {
            console.error('Error during sign-in:', error);
        }
    }

    const signOut = () => {
        localStorage.removeItem('isAuthenticated')
    }

    const isLogged = () => localStorage.getItem('isAuthenticated')

    return { signIn, signOut, isLogged }
}

export type AuthContext = ReturnType<typeof useAuth>