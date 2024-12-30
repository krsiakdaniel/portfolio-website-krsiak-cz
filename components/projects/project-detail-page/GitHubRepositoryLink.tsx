import ListItem from '@/components/shared/ListItem'

type GitHubRepositoryLinkProps = {
  link: string
}

const GitHubRepositoryLink = ({ link }: GitHubRepositoryLinkProps): JSX.Element => {
  return (
    <ListItem>
      <span className="leading-tight">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-violet-600 underline hover:no-underline"
        >
          GitHub repository →
        </a>
      </span>
    </ListItem>
  )
}

export default GitHubRepositoryLink
