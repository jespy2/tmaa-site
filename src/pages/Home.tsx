import { NavLink } from "react-router-dom";
import '../App.css';
import '../components/Layout.css'

export function Home() {
	return (
		<article className='home-copy prose'>
			<h2 style={{paddingTop: '1rem'}}>THANK YOU, SOUTH AUSTIN, FOR 17 AMAZING YEARS!</h2>
      <hr style={{width: '20rem', marginTop: '1rem', marginBottom: '1rem'}} />
			<p>
				Over the years, we taught South Austin students of all ages with a focus
				on solid martial arts instruction and teaching essential life skills. We
				first opened in April of 2005 in the Bee Caves area, moved to Athena
				Montessori Academy and finally our home in the Brodie Oaks shopping
				center at South Lamar and Ben White. Over the years, we taught hundreds
				of children and adults in our facilities along with many thousands
				through seminars and special events in area schools.
			</p>

			<p>
				We are so proud of the effort shown by our students in their training,
				and the support they received from their families. Our students embodied
				our spirit of warriorship with honor, humanity and service to others.
			</p>

			<p>
				And though we closed our doors at the end of June 2022 with great
				sadness, we were, in the end, overwhelmed with gratitude that so many
				were willing to share such an important part of their lives with us and
				to share our vision of making the world a better place through
				introspection, courage and community.
			</p>

			<p>…And of course, martial arts training!</p>

			<h2 style={{paddingTop: '1rem'}}>Our Curriculum</h2>
			<p>
				Follow these links to explore our curriculum. Where possible, video
				references are included.
			</p>

			<div className="nav-menu">
				<NavLink to='/pyon-moo-do-curriculum-videos' className='nav-link'>
					Adult Curriculum
				</NavLink>
				<NavLink to='/pyon-moo-do-kids-videos' className='nav-link'>
					Kids Curriculum
				</NavLink>
			</div>
		</article>
	);
}
