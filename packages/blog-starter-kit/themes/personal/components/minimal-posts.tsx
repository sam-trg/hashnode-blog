import { PostFragment } from '../generated/graphql';
import { MinimalPostPreview } from './minimal-post-preview';

type Props = {
	posts: PostFragment[];
	context: 'home' | 'series' | 'tag';
};

export const MinimalPosts = ({ posts }: Props) => {
	return (// this is post details element on home page (title and date)
		<section className="flex w-full flex-col items-stretch gap-10 font-mono text-white lg:max-w-lg"> 
			{posts.map((post) => (
				<MinimalPostPreview
					key={post.id}
					title={post.title}
					date={post.publishedAt}
					author={{
						name: post.author.name,
					}}
					slug={post.slug}
					commentCount={post.comments?.totalDocuments}
				/>
			))}
		</section>
	);
};
