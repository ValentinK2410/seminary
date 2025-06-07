import { PrimaryButton } from "../../../componentLibrary/PrimaryButton"

export const SignIn = () => {
    return (
        <div className="py-2 flex gap-2 items-center">
            <div className="w-[240px]">
                <input
                    type="email"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your email"
                />
            </div>

            <div className="max-w-[120px]">
                <input
                    type="password"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="password"
                />
            </div>

            <PrimaryButton className="h-10 py-2 px-4 w-fit">
                Login
            </PrimaryButton>
        </div>
    )
}
