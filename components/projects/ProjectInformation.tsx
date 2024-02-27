import List from '@/components/shared/List'
import ListItem from '@/components/shared/ListItem'
import { LinkItem } from '@/utils/types'

type Props = {
  description: string
  mySkills: string
  customers?: string | undefined
  links: LinkItem[]
  linkGitHub?: string
}

const ProjectInformation = ({ description, mySkills, customers, links, linkGitHub }: Props) => {
  return (
    <>
      <div className="flex flex-col mt-8">
        <p className="text-body-md font-normal text-neutral-700">{description}</p>
      </div>

      <div className="mt-8">
        <h3 className="pb-2 font-bold">Information:</h3>
        <List>
          <ListItem>
            My skills: <span className="text-primary-500">{mySkills}</span>
          </ListItem>
          {customers && (
            <ListItem>
              Company customers: <span className="text-neutral-500">{customers}</span>
            </ListItem>
          )}
        </List>
      </div>

      <div className="mt-8">
        <h3 className="pb-2 font-bold">Links:</h3>
        <List>
          {links &&
            links.map((link, index) => (
              <div key={index}>
                <ListItem>
                  <span className="leading-tight">
                    <a href={link.url} target="_blank" className="underline hover:no-underline text-primary-500">
                      {link.urlText}
                    </a>
                  </span>
                </ListItem>
              </div>
            ))}

          {linkGitHub && (
            <ListItem>
              <span className="leading-tight">
                <a href={linkGitHub} target="_blank" className="underline hover:no-underline text-primary-500">
                  GitHub repository →
                </a>
              </span>
            </ListItem>
          )}
        </List>
      </div>
    </>
  )
}

export default ProjectInformation
