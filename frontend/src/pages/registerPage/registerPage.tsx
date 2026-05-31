import { useState } from "react"
import { Link } from "react-router-dom"
import { IoEye } from "react-icons/io5"
import { IoEyeOff } from "react-icons/io5"
// import { FcGoogle } from "react-icons/fc"
import './registerPage.scss'

export default function RegisterPage() {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const [viewPassword, setViewPassword] = useState<boolean>(false)
    const [viewRepeatPassword, setViewRepeatPassword] = useState<boolean>(false)

    async function handleSignup(event: React.FormEvent) {
        event.preventDefault()

        if (password !== confirmPassword) {
            alert('Passwords do not match')
            return
        }

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })

            const data = await response.json()

            console.log(data)

            if (response.ok) {
                setEmail('')
                setPassword('')
                setConfirmPassword('')
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='mainCenterRegister'>
            <div className='borderRegister'>
                <div className='titleRegister'>
                    <h1 className='mainTitleRegister'>Welcome</h1>
                    <p className='paragraphRegister'>Sing up to start your sonic journey</p>
                </div>
                <div className='formRegister'>
                    <form onSubmit={handleSignup}>
                        <div className='firstInputRegister'>
                            <p className='paragraphEmailRegister'>E-mail</p>
                        </div>
                            <input
                                className='inputRegister'
                                type="text" 
                                placeholder="your@email.com"
                                value={email}
                                onChange={(e:React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                            />
                        <div className='secondInputRegister'>
                            <p className='paragraphPasswordRegister'>Password</p>
                        </div>
                            <div className='passwordContainerRegister'>
                                <input 
                                    className='inputRegister' 
                                    type={viewPassword ? "text" : "password"}
                                    placeholder=""
                                    value={password}
                                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} 
                                />
                                {!viewPassword && (
                                    <IoEye 
                                        className='eyeIconRegister'
                                        onClick={() => {setViewPassword(true)}}
                                    />
                                )}
                                {viewPassword && (
                                    <IoEyeOff 
                                        className='eyeIconRegister'
                                        onClick={() => {setViewPassword(false)}}
                                    />
                                )}
                            </div>
                            <p className='paragraphRePasswordRegister'>Repeat Password</p>
                            <div className='passwordContainerRegister'>
                                <input 
                                    className='inputRegister' 
                                    type={viewRepeatPassword ? "text" : "password"}
                                    placeholder=""
                                    value={confirmPassword}
                                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)} 
                                />
                                {!viewRepeatPassword && (
                                    <IoEye 
                                        className='eyeIconRegister'
                                        onClick={() => {setViewRepeatPassword(true)}}
                                    />
                                )}
                                {viewRepeatPassword && (
                                    <IoEyeOff 
                                        className='eyeIconRegister'
                                        onClick={() => {setViewRepeatPassword(false)}}
                                    />
                                )}
                            </div>
                        <div className='buttonRegister'>
                            <button
                                className='register'
                                type="submit"
                                onClick={() => setLoading(true)}
                            >
                                {loading ? 'Loading...' : 'Sign Up'}
                            </button>
                        </div>
                        <div className='dividerRegister'>
                            <span>OR</span>
                        </div>
                        {/* <div className='googleRegister'>
                            <FcGoogle size={30} />
                            <p className='googleParagraphRegister'>Sign Up with Google</p>
                        </div> */}
                        <div className='singUpRegister'>
                            <p className='accountButtonRegister'>Already have an account?</p>
                            <p className='singUpButtonRegister'><Link to="/signin">Sign In</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}