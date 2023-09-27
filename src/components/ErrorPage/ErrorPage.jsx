import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="mt-40 space-y-6 items-center justify-center flex flex-col">
            <h1 className="text-red-600  font-semibold text-3xl">404 Not Found</h1>
            <h2>This page cannot be displayed!</h2>
            <Link to='/' className="text-red-500">Go to Home Page</Link>
        </div>
    );
};

export default ErrorPage;