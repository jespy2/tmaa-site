import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";
import logo from "../images/Memorial-banner-e1668284374920.png";

export function Layout() {
	return (
		<div>
			<header className='border-b'>
				<NavLink to='/'>
					<img className='header-logo' src={logo} alt='tmaa logo' />
				</NavLink>
			</header>

			<main className='mx-auto max-w-4xl px-4 py-10'>
				<Outlet />
			</main>

			<footer className='border-t'>
				<blockquote>“When I focus, I can do anything!”</blockquote>
				<div className='footer-videos-container'>
					<iframe
						title='Welcome to Traditional Martial Arts Academy'
						className='footer-videos'
						src='https://www.youtube.com/embed/iok0gOERC4Q?feature=oembed'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
					></iframe>
					<iframe
						title='Introduction to Pyon Moo Do'
						className='footer-videos'
						src='https://www.youtube.com/embed/wBTTQZ4yUEI?feature=oembed'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
					></iframe>
				</div>
				<div className='copyright'>
					<p>© {new Date().getFullYear()} Traditional Martial Arts Academy</p>
					<p>
						This site is a memorial archive of the academy and its curriculum
						resources.
					</p>
				</div>
			</footer>
		</div>
	);
}
