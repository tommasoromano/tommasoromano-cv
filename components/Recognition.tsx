import { TextLink } from './Link'

export const Recognition = ({
  title,
  link,
  tag,
  when,
  children,
  images,
}: {
  title: string
  link: string
  tag: string
  when: string
  children: React.ReactNode
  images: { descr: string; src: string }[]
}) => {
  return (
    <div className="flex w-full flex-col text-sm">
      <div className="font-bold">
        {title}
        <TextLink href={link}>🔗</TextLink>
      </div>
      <div>
        {tag} • {when}
      </div>
      <div className="mt-2">{children}</div>
      {images.length > 0 && (
        <div className="relative max-w-full overflow-hidden">
          <div className="relative overflow-auto pt-2">
            <div className="flex flex-nowrap space-x-2">
              {images.map((image, i) => (
                <div
                  key={i}
                  className="aspect-[16/9] h-32 rounded-md bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${image.src})`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export const recognitionUsc = (
  <Recognition
    title="University Startup Challenge 2023 Finalist"
    link="https://www.linkedin.com/posts/tommaso-romano-developer_startup-innovation-energy-activity-7050766312649682945-Dj1B?utm_source=share&utm_medium=member_desktop"
    tag="Startup Hackathon"
    when="24-31 March 2023"
    images={[
      {
        descr: 'University Startup Challenge 2023 Finalist',
        src: '/static/images/me/usc2023.jpeg',
      },
    ]}
  >
    {/* My team and I have been selected as finalist in the University Startup Challenge 2023: focused
    on energy and climate and organized by Politecnico di Milano and Bocconi, we had to create a
    startup, prototype and pitch deck in 7 days. Attended several workshops and talks, been selected
    as finalist and pitched in front of a jury of investors and experts, as well as a crowded
    auditorium of students and entrepreneurs */}
    Organized by Politecnico di Milano and Bocconi, it consists in pitching to investors a startup
    idea focused on energy and climate, after a week of workshops and talks.
  </Recognition>
)
