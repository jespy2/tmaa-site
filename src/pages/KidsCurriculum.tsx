import { kidsLinks } from "../siteData/kidsCurriculum";

type LinkItem = { label: string; url?: string; note?: string };

function LinkList({
  title,
  items,
}: {
  title?: string;
  items: LinkItem[];
}) {
  return (
    <section className="mt-8">
      {title ? <h3 className="text-xl font-semibold">{title}</h3> : null}
      <ul className="mt-3 space-y-2">
        {items.map((x) => (
          <li key={`${x.label}-${x.url ?? "nolink"}`} className="text-sm">
            {x.url ? (
              <a className="underline" href={x.url} target="_blank" rel="noreferrer">
                {x.label}
              </a>
            ) : (
              <span className="font-medium">{x.label}</span>
            )}
            {x.note ? <span className="note"> — {x.note}</span> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function KidsCurriculum() {
  return (
    <article className="prose">
      <h1 style={{ paddingTop: "2rem", textAlign: 'center' }}>Pyon Moo Do Kids Videos</h1>
      <hr style={{ width: "20rem", marginTop: "1rem", marginBottom: "1rem" }} />

      <p>
        Here is a collection of demonstration and instructional videos for former students and staff.
      </p>

      <section className="card">
        <h2 className="text-xl font-semibold">Videos For Parents</h2>
        <LinkList items={kidsLinks.videosForParents} />
      </section>

      <section className="card">
        <h2 className="text-xl font-semibold">Belt Tests</h2>
        <LinkList items={kidsLinks.beltTests} />
      </section>

      <h2 style={{ paddingTop: "2rem" }}>Pyon Moo Do Kids Curriculum</h2>
      <p className="text-sm text-gray-700">
        We didn’t get everything filmed before closing, so there are some missing elements below.
      </p>
      <p className="text-sm text-gray-700">
        For other material outside of the standard curriculum check out our archive of extra-curricular material
        on the Pyon Moo Do adult curriculum page.
      </p>

      <section className="card">
        <h2 className="text-xl font-semibold">Beginner Program</h2>
        <p className="text-sm text-gray-700">
          This is where kids learned the fundamentals. Students would typically spend 6–18 months at this level
          learning not only the fundamentals of martial arts movement and technique, but also the culture of the
          Dojang and how to learn in that environment.
        </p>

        <LinkList title="White Belt" items={kidsLinks.beginnerProgram.whiteBelt} />
      </section>

      <section className="card">
        <h2 className="text-xl font-semibold">Intermediate Belt Curriculum</h2>
        <p className="text-sm text-gray-700">
          The Intermediate Program is where kids began learning martial arts.
        </p>

        <LinkList title="Section One" items={kidsLinks.intermediateBeltCurriculum.sectionOne} />
        <LinkList title="Section Two" items={kidsLinks.intermediateBeltCurriculum.sectionTwo} />
        <LinkList title="Section Three" items={kidsLinks.intermediateBeltCurriculum.sectionThree} />
      </section>

      <section className="card">
        <h2 className="text-xl font-semibold">Blue Belts</h2>
        <p className="text-sm text-gray-700">
          Blue Belt was a “seasoning” period before kids moved into the advanced program. Kids learned some more
          advanced techniques, but were also expected to review and polish material from previous belts.
        </p>

        <LinkList title="New Material" items={kidsLinks.blueBelts.newMaterial} />
        <LinkList title="Review" items={kidsLinks.blueBelts.review} />
      </section>

      <section className="card">
        <h2 className="text-xl font-semibold">Advanced Belt Curriculum</h2>
        <p className="text-sm text-gray-700">
          The Advanced Program was where kids refined their martial arts skills and began preparing for Junior
          Black Belt testing.
        </p>

        <LinkList title="Section One" items={kidsLinks.advancedBeltCurriculum.sectionOne} />
        <LinkList title="Section Two" items={kidsLinks.advancedBeltCurriculum.sectionTwo} />
        <LinkList title="Section Three" items={kidsLinks.advancedBeltCurriculum.sectionThree} />
      </section>

      <section className="card">
        <h2 className="text-xl font-semibold">Half Black Belts</h2>
        <p className="text-sm text-gray-700">
          Half Black Belt was the final stage of the Pyon Moo Do Kids curriculum. In addition to new material,
          review of previous curriculum and general polishing and refinement, Half Black Belts worked on the
          physical conditioning and mental discipline required to perform well on a Junior Black Belt test.
        </p>

        <LinkList title="New Material" items={kidsLinks.halfBlackBelts.newMaterial} />
        <LinkList title="Review" items={kidsLinks.halfBlackBelts.review} />
      </section>
    </article>
  );
}
