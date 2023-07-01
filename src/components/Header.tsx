export default function Header() {
    return (
        <>
            <header>
                <div className="row">
                    <div className="top-bar">
                        <a className="menu-toggle" href="#"><span>Menu</span></a>
                        <div className="logo">
                            <a href="index.html"><img src="./logo.webp" alt="Matt VerLee" aria-label="View main menu"></img></a>
                        </div>
                        <nav id="main-nav-wrap">
                            <ul className="main-navigation">
                                <li className="current"><a href="#intro" title="">Home</a></li>
                                <li><a href="#about" title="">About</a></li>
                                <li><a href="#resume" title="">Resume</a></li>
                                <li><a href="#portfolio" title="">Projects</a></li>
                                <li><a href="#contact" title="">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header> 
        </>
    )
}