import logo from "../../assets/hs-logo.svg";

export function CustomFooter(){
    return (
        <div className="w-full  fixed bottom-0 text-white">
            <footer className="bg-teal-300 rounded-base shadow-xs border border-default m-0">
                <div className="w-full max-w-screen-xl mx-auto p-1 md:py-2">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src={logo} className="h-15" alt="footer-logo" />
                        </a>
                        <ul className="flex flex-wrap items-center text-sm font-medium text-body mr-10">
                            <li>
                                <a href="/" className="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <hr className="my-2 border-default sm:mx-auto lg:my-2" />
                        <span className="block text-sm text-body sm:text-center">© 2026 <a href="7" className="hover:underline">Houston Salgado™</a>. All Rights Reserved.</span>
                    </div>
                </div>
            </footer>
        </div>
    )
}