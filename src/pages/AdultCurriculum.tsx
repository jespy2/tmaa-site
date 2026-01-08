import { adultArchiveLinks, adultLinks } from "../siteData/adultCurriculum";

function LinkList({
	title,
	items,
}: {
	title?: string;
	items: { label: string; url?: string; note?: string }[];
}) {
	return (
		<section className='mt-8'>
			{title ? <h3 className='text-xl font-semibold'>{title}</h3> : <></>}
			<ul className='mt-3 space-y-2'>
				{items.map((x) => (
					<li key={x.label} className='text-sm'>
						{x.url ? (
							<a
								className='underline'
								href={x.url}
								target='_blank'
								rel='noreferrer'
							>
								{x.label}
							</a>
						) : (
							<span className='font-medium'>{x.label}</span>
						)}
					</li>
				))}
			</ul>
		</section>
	);
}

export function AdultCurriculum() {
	return (
		<article className='prose'>
			<h1 style={{paddingTop: '2rem', textAlign: 'center'}}>Pyon Moo Do Curriculum Videos</h1>
      <hr style={{width: '20rem', marginTop: '1rem', marginBottom: '1rem'}} />
			<p>
				Here is a collection of demonstration and instructional videos for
				former students and staff.
			</p>

			<LinkList items={adultLinks.intro} />

			<h2 style={{paddingTop: '2rem'}}>Pyon Moo Do Adult Curriculum</h2>
			<p className='text-sm text-gray-700'>
				We didn’t get everything filmed before closing, so there are some
				missing elements.
			</p>
			<section className='card'>
				<h2 className='text-xl font-semibold'>White Belt </h2>
				<p className='text-sm text-gray-700'>
					White Belt is a self-contained curriculum that prepared students for
					entering the rotating curriculum taught at the color belt level. Each
					element of the curriculum below is design to support your
					understanding of techniques, and to condition your body, for more
					advanced training.
				</p>

				<LinkList title='Form' items={adultLinks.white_belt.form} />
				<LinkList
					title='Basic Striking'
					items={adultLinks.white_belt.basic_striking}
				/>
				<LinkList
					title='Tactile Skills'
					items={adultLinks.white_belt.tactile_skills}
				/>
				<LinkList
					title='Self Defense'
					items={adultLinks.white_belt.self_defense}
				/>
			</section>
			<section className='card'>
				<h2 className='text-xl font-semibold'>Color Belt Curriculum</h2>
				<p className='text-sm text-gray-700'>
					For color belts, self-defense and tactile skills were taught as a
					separate curriculum from the belt ranks. While specific form was
					taught to specific belt levels, this other material was broken into
					sections that all color belts worked on at the same time, regardless
					of rank. Belt tests would cover the curriculum section that was
					currently being taught.
				</p>
				<LinkList
					title='Yellow Belt Forms'
					items={adultLinks.colorBeltForms.yellow}
				/>
				<LinkList
					title='Orange Belt Forms'
					items={adultLinks.colorBeltForms.orange}
				/>
				<LinkList
					title='Green Belt Forms'
					items={adultLinks.colorBeltForms.green}
				/>
				<LinkList
					title='Blue Belt Forms'
					items={adultLinks.colorBeltForms.blue}
				/>
				<LinkList
					title='Purple Belt Forms'
					items={adultLinks.colorBeltForms.purple}
				/>
				<LinkList
					title='Red Belt Forms'
					items={adultLinks.colorBeltForms.red}
				/>
				<LinkList
					title='Brown Belt Forms'
					items={adultLinks.colorBeltForms.brown}
				/>
				<h3>Color Belt Self-Defense and Tactile Drill Section</h3>

				<LinkList
					title='Section 1 - Boxing'
					items={adultLinks.sections.boxing}
				/>
				<LinkList
					title='Section 2 - Hubut & Joint Locks'
					items={adultLinks.sections.hubut_joint_locks}
				/>
				<LinkList
					title='Section 3 - Knife Defense'
					items={adultLinks.sections.knife_defense}
				/>
				<LinkList
					title='Section 4 - Self Defense'
					items={adultLinks.sections.self_defense}
				/>
				<LinkList
					title='Section 5 - Standing Grappling'
					items={adultLinks.sections.standing_grappling}
				/>
				<LinkList
					title='Section 6 - Ground Grappling'
					items={adultLinks.sections.ground_grappling}
				/>
				<LinkList title='Section 7 - Kali' items={adultLinks.sections.kali} />
			</section>
			<section className='card'>
				<h2 className='text-xl font-semibold'>Pum Dan Curriculum</h2>
				<p className='text-sm text-gray-700'>
					Pum Dan was the final stage before Black Belt testing. In addition to
					review of all previous curriculum, Pum Dan had its own material.
				</p>
				<LinkList title='Form' items={adultLinks.pumDan.form} />
				<LinkList title='Form' items={adultLinks.pumDan.tactile_skills} />
				<LinkList title='Form' items={adultLinks.pumDan.self_defense} />
			</section>
			<section className='card'>
				<h2 className='text-xl font-semibold'>
					Archive of Extra-Curricular Material
				</h2>
				<p className='text-sm text-gray-700'>
					In addition to the core curriculum, there are a ton of non-curricular
					open-hand and weapons forms, as well as technique sets. This section
					is dedicated to documenting these elements of Pyon Moo Do.
				</p>

				<LinkList
					title='Hwarangdo (Classical Versions)'
					items={adultArchiveLinks.hwarangdo_classic}
				/>
				<LinkList
					title='Tukong Moosul'
					items={adultArchiveLinks.tukongMoosul}
				/>
				<LinkList
					title='Mo Mien Kuen / Tensaijitsu'
					items={adultArchiveLinks.moMinKuen}
				/>
				<h3 className='text-xl font-semibold'>Weapons</h3>
				<LinkList title='Sword' items={adultArchiveLinks.weaponForms.sword} />
				<LinkList
					title='Nunchaku'
					items={adultArchiveLinks.weaponForms.nunchaku}
				/>
				<LinkList title='Staff' items={adultArchiveLinks.weaponForms.staff} />
				<LinkList
					title='Miscellaneous'
					items={adultArchiveLinks.weaponForms.miscellaneous}
				/>
				<h3 className='text-xl font-semibold'>Neigong Forms</h3>
				<LinkList
					title='Ipsun (Korean Taiji)'
					items={adultArchiveLinks.neigong.ipsun}
				/>
				<LinkList
					title='Sheng Zhen Wuji Yuan Gong'
					items={adultArchiveLinks.neigong.sheng_zhen}
				/>
			</section>
		</article>
	);
}
