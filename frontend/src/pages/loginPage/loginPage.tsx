import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { IoEye } from "react-icons/io5"
import { IoEyeOff } from "react-icons/io5"
// import { FcGoogle } from "react-icons/fc"
import './loginPage.scss'

export default function LoginPage() {

    const navigate = useNavigate()

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [viewPassword, setViewPassword] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        try {

            const response = await fetch(`${import.meta.env.VITE_API_URL}/signin`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email,
                        password
                    })
                }
            )

            const data = await response.json()

            if (!response.ok) {
                alert(data.message)
                return
            }

            localStorage.setItem('token', data.token)

            // alert('Login successful')

            navigate('/home')
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='mainCenterLogin'>
            <div className='borderLogin'>
                <div className='titleLogin'>
                    <h1 className='mainTitleLogin'>Welcome Back</h1>
                    <p className='paragraphLogin'>Log in to resume your sonic journey</p>
                </div>
                <div className='formLogin'>
                    <form onSubmit={handleLogin}>
                        <div className='firstInputLogin'>
                            <p className='paragraphEmailLogin'>E-mail</p>
                        </div>
                            <input 
                                className='inputLogin' 
                                type="text" 
                                placeholder="your@email.com"
                                value={email}
                                onChange={(e:React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                            />
                        <div className='secondInputLogin'>
                            <p className='paragraphPasswordLogin'>Password</p>
                            {/* <p className='paragraphForgotLogin'><Link to='/reset_password'>Forgot password?</Link></p> */}
                        </div>
                        <div className='passwordContainerInput'>
                            <input 
                                className='inputLogin'
                                type={viewPassword ? "text" : "password"}
                                value={password}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                            />
                            {!viewPassword && (
                                <IoEye 
                                    className='eyeIconLogin'
                                    onClick={() => {setViewPassword(true)}}
                                />
                            )}
                            {viewPassword && (
                                <IoEyeOff 
                                    className='eyeIconLogin'
                                    onClick={() => {setViewPassword(false)}}
                                />
                            )}
                        </div>
                        <div className='buttonLogin'>
                            <button 
                                className='login'
                                type="submit"
                                onClick={() => setLoading(true)}
                            >
                                {loading ? 'Loading...' : 'Login'}
                            </button>
                        </div>
                        <div className='dividerLogin'>
                            <span>OR</span>
                        </div>
                        {/* <div className='googleLogin'>
                            <FcGoogle size={30} />
                            <p className='googleParagraphLogin'>Continue with Google</p>
                        </div> */}
                        <div className='singUpLogin'>
                            <p className='accountButtonLogin'>Don't have an account?</p>
                            <p className='singUpButtonLogin'><Link to="/signup">Sign Up</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

