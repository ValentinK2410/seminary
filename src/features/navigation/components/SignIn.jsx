import { PrimaryButton } from "../../../componentLibrary/PrimaryButton";

export const SignIn = () => {
    return (
        <div className="w-full xs:w-fit py-2 flex flex-col gap-2 sm:relative sm:flex-row sm:gap-3 sm:items-center">
            <div className="w-full xs:w-[200px]">
                <input
                    type="email"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your email"
                />
            </div>

            <div className="w-full xs:w-[200px]">
                <input
                    type="password"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="password"
                />
            </div>

            <div className="w-full flex sm:self-start sm:w-fit">
                <PrimaryButton className="flex-grow py-3 sm:py-1.5 px-10 sm:px-6">
                    <p className="m-auto">Login</p>
                </PrimaryButton>
            </div>
        </div>
    );
};
