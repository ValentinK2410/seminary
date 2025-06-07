import { PrimaryButton } from "../../../componentLibrary/PrimaryButton";

export const SignIn = () => {
    return (
        <div className="absolute px-2 w-full ux:w-fit top-14 right-0 sm:top-0 py-2 flex flex-col gap-4 sm:relative sm:flex-row sm:gap-1 sm:items-center">
            <div className="w-full ux:w-[200px] ux:mx-2">
                <input
                    type="email"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your email"
                />
            </div>

            <div className="w-full ux:w-[200px] ux:mx-2">
                <input
                    type="password"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="password"
                />
            </div>

            <div className="ux:mx-2 flex sm:self-start">
                <PrimaryButton className="flex-grow py-3 sm:py-1.5 px-10 sm:px-6">
                    <p className="m-auto">Login</p>
                </PrimaryButton>
            </div>
        </div>
    );
};
