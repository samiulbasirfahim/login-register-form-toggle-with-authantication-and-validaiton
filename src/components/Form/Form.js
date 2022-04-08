import React, { useEffect, useState } from "react"
import { NavLink, Outlet, useLocation } from "react-router-dom"

const Form = () => {
	const [isRegister, setRegister] = useState(false)
	const [email, setEmail] = useState("")
	const [name, setName] = useState("")
	const [password, setPassword] = useState("")
	const [rePassword, setRePassword] = useState("")
	const [dateOfBirth, setDateOfBirth] = useState("")
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log("first")
	}
	const { pathname } = useLocation()
	console.log(pathname)
	useEffect(() => {
		if (pathname === "/sign-in") {
			setRegister(true)
		} else {
			setRegister(false)
		}
		console.log(isRegister)
	}, [pathname])
	return (
		<div className="flex flex-col justify-center items-center">
			<div className="m-4 ">
				<NavLink
					className="mx-4 font-mono font-semibold rounded-md py-2 px-5"
					style={({ isActive }) => {
						return isActive
							? {
									backgroundColor: "green",
							  }
							: {}
					}}
					to="/sign-up"
				>
					Sign up
				</NavLink>
				<NavLink
					className="mx-4 font-mono font-semibold rounded-md py-2 px-5"
					style={({ isActive }) => {
						return isActive
							? {
									backgroundColor: "green",
							  }
							: {}
					}}
					to="/sign-in"
				>
					Sign Up
				</NavLink>
			</div>
			<form
				onSubmit={handleSubmit}
				className="border-2 border-purple-50 bg-gray-100 p-16 rounded-xl flex flex-col items-center"
			>
				<p className="font-mono font-bold my-4 text-2xl mb-20">
					Please {isRegister ? "Log in" : "Register"}
				</p>
				<Outlet
					signIn={[setPassword, setEmail]}
					signUp={[
						setDateOfBirth,
						setEmail,
						setPassword,
						setRePassword,
						setName,
					]}
				/>
				<input
					type="submit"
					className="border font-mono font-bold my-4 text-white bg-gray-500 py-2 px-6 rounded-md cursor-pointer"
					value={isRegister ? "Log In" : "Register"}
				/>
			</form>
		</div>
	)
}

export default Form
