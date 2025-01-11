'use client'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { login, loginWithGoogle } from '@/lib/appwrite'; 
import HomeLayout from '@/components/layouts/HomeLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

export default function Login() {


    const handleLogin = async (email: string, password: string) => {
        try {
            const session = await login(email, password);
            console.log(session);
        } catch (error) {
            console.log(error);
        }
    };


    const handleLoginWithGoogle = async () => {
        try {
            const session = await loginWithGoogle();
            console.log(session);
        } catch (error) {
            throw error;
        }
    };

    return (
        <HomeLayout>
        <div>
            <div className='flex flex-col items-center justify-center h-screen'>
                <h1 className='text-2xl font-bold mb-6'>Login - Ecommerce</h1>
                <form 
                    className='flex flex-col gap-4 w-96'
                onSubmit={(e) => {
                    e.preventDefault();

                    handleLogin(
                        e.currentTarget.email.value,
                        e.currentTarget.password.value
                    );

                }}>
                    <Input  type="email" name="email" placeholder="Email" />
                    <Input type="password" name="password" placeholder="Password" />
                    <Button variant={'secondary'} type="submit">Login</Button>
                    <p className='text-center'>or</p>
                    <Button type='button' variant={'secondary'} onClick={handleLoginWithGoogle} className='flex items-center justify-center gap-2'>
                        <FontAwesomeIcon icon={faGoogle} />
                        <span>
                            Login with Google
                        </span>
                    </Button>
                </form>
            </div>
        </div>
        </HomeLayout>
    );
}