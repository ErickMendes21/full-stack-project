import { Link } from "react-router-dom"
import './resetPassword.scss'

export default function ResetPassword() {
    return (
        <div className='mainCenterReset'>
            <div className='borderReset'>
                <div className='titleReset'>
                    <h1 className='mainTitleReset'>Reset your password</h1>
                </div>
                <div className='formReset'>
                    <form>
                        <div className='firstInputReset'>
                            <p className='paragraphEmailReset'>E-mail</p>
                        </div>
                            <input 
                                className='inputReset' 
                                type="text" 
                                placeholder="your@email.com"
                            />
                        <div className='buttonReset'>
                            <button 
                                className='reset'
                                type="submit"
                            >
                                Send password reset email
                            </button>
                        </div>
                        <div className='singUpReset'>
                            <p className='accountButtonReset'>Back to login</p>
                            <p className='singUpButtonReset'><Link to="/signin">Sign In</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}