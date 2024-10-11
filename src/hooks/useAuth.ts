import { useMutation } from "@tanstack/react-query";

export const useAuth = () => {

    // const signInMutation = useMutation(
    //     async ({ email, password }: { email: string; password: string }) => {
    //         if (!email || !password) {
    //             throw new Error('Email or password is missing');
    //         }

    //         const response = await fetch('http://127.0.0.1:8090/api/collections/users/auth-with-password', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ identity: email, password }), // Use 'identity' for email
    //         });

    //         const data = await response.json();

    //         if (!response.ok) {
    //             throw new Error(data.message || 'Failed to authenticate');
    //         }

    //         return data;
    //     },
    //     {
    //         onSuccess: (data) => {
    //             if (data.token) {
    //                 localStorage.setItem('isAuthenticated', 'true');
    //             }
    //         },
    //         onError: (error: any) => {
    //             console.error('Error during sign-in:', error.message || error);
    //         },
    //     }
    // );

    const signIn = async (email: string, password: string): Promise<boolean | string> => {
        if (!email || !password) {
            console.error('Email or password is missing');
            return false;
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
                return data.message;
            }

            if (data.token) {
                localStorage.setItem('isAuthenticated', 'true');
                return true
            }

        } catch (error) {
            console.error('Error during sign-in:', error);
            return error as string
        }

        return false
    }

    const signOut = () => {
        localStorage.removeItem('isAuthenticated')
    }

    const isLogged = () => Boolean(localStorage.getItem('isAuthenticated'))

    return { signIn, signOut, isLogged }
}


export type AuthContext = ReturnType<typeof useAuth>