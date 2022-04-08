import React from "react"

const SignUp = () => {
	return (
		<div>
			<div className="mb-8">
				<p className="font-bold text-xl font-mono text-center">
					Input Name
				</p>
				<input
					type="text "
					name=""
					id=""
					placeholder="Name"
					className="border rounded-none h-[60px]  w-[260px]"
				/>
			</div>
			<div className="mb-8">
				<p className="font-bold text-xl font-mono text-center">
					Date Of Birth
				</p>
				<input
					type="date"
					name=""
					id=""
					placeholder=""
					className="border rounded-none h-[60px]  w-[260px]"
				/>
			</div>

			<div className="mb-8">
				<p className="font-bold text-xl font-mono text-center">
					Input Email
				</p>
				<input
					type="email"
					name=""
					id=""
					placeholder="Email"
					className="border rounded-none h-[60px]  w-[260px]"
				/>
			</div>
			<div>
				<p className="font-bold text-xl font-mono text-center">
					Input Password
				</p>
				<input
					type="password"
					name=""
					id=""
					placeholder="Password"
					className="border rounded-none h-[60px]  w-[260px]"
				/>
			</div>
			<div>
				<p className="font-bold text-xl font-mono text-center">
					Confirm Password
				</p>
				<input
					type="password"
					name=""
					id=""
					placeholder="Password"
					className="border rounded-none h-[60px]  w-[260px]"
				/>
			</div>
		</div>
	)
}

export default SignUp
