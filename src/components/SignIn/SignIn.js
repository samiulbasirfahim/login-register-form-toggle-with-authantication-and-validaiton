import React, { useState } from "react"
import app from "../../firebase.init"
import {getAuth} from 'firebase/auth'

const auth =  getAuth(app)


const SignIn = ({signIn: [setPassword, setEmail] }) => {

	return (
		<div>
			<div className="mb-8">
				<p className="font-bold text-xl font-mono text-center">Input Email</p>
				<input type="email" name="" id="" placeholder="Email" className="border rounded-none h-[60px]  w-[260px]"/>
			</div>
			<div>
				<p className="font-bold text-xl font-mono text-center">Input Password</p>
				<input type="password" name="" id="" placeholder="Password" className="border rounded-none h-[60px]  w-[260px]" />
			</div>
		</div>
	)
}

export default SignIn
